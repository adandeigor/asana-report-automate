import axios, { AxiosInstance } from 'axios';
import cron from 'node-cron';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const ASANA_BASE_URL = 'https://app.asana.com/api/1.0';
const ASANA_WORKSPACE_GID = process.env.ASANA_WORKSPACE_GID || '1210917388726319';

interface Task {
  gid: string;
  name: string;
  completed_at: string | null;
  assignee?: { gid: string };
}
const createAsanaApi = async (userId: string): Promise<AxiosInstance> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { asanaToken: true },
  });
  if (!user || !user.asanaToken) {
    throw new Error('Aucun token Asana trouvé pour cet utilisateur');
  }
  return axios.create({
    baseURL: ASANA_BASE_URL,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${user.asanaToken}`,
      'Content-Type': 'application/json',
    },
  });
};

// Récupérer les tâches complétées dans la fenêtre horaire 08h00-17h00
export const fetchCompletedTasksInTimeframe = async (userId: string, workspaceGid?: string, projectGid?: string) => {
  const asanaApi = await createAsanaApi(userId);
  const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;
  const today = new Date();
  const startTime = new Date(today);
  startTime.setHours(8, 0, 0, 0);
  const endTime = new Date(today);
  endTime.setHours(17, 0, 0, 0);

  try {
    let tasks: Task [] = [];
    let nextPage: string | null = null;
    const baseQuery = projectGid
      ? `/tasks?project=${projectGid}&completed_since=${startTime.toISOString()}`
      : `/tasks?workspace=${effectiveWorkspaceGid}&assignee=me&completed_since=${startTime.toISOString()}`;

    do {
      const response:any = await asanaApi.get(
        nextPage || `${baseQuery}&opt_fields=gid,name,completed_at,assignee`,
      );
      tasks = tasks.concat(
        response.data.data.filter((task: any) => {
          const completedAt = task.completed_at ? new Date(task.completed_at) : null;
          return completedAt && completedAt >= startTime && completedAt <= endTime && (!projectGid || task.assignee?.gid);
        }),
      );
      nextPage = response.data.next_page?.uri || null;
    } while (nextPage);

    console.log(`Tâches complétées (08h00-17h00) trouvées pour userId ${userId}: ${tasks.length}`);

    // Synchroniser les tâches dans AsanaTask
    for (const task of tasks) {
      await prisma.asanaTask.upsert({
        where: { taskGid: task.gid },
        update: { name: task.name, completedAt: task.completed_at ? new Date(task.completed_at) : null },
        create: { taskGid: task.gid, userId, name: task.name, completedAt: task.completed_at ? new Date(task.completed_at) : null },
      });
    }

    // Créer un rapport journalier
    await prisma.dailyReport.create({
      data: {
        userId,
        date: startTime,
        workspaceGid: effectiveWorkspaceGid,
        projectGid,
        tasks: tasks.map((task: Task) => ({
          taskGid: task.gid,
          name: task.name,
          completedAt: task.completed_at,
        })),
      },
    });
    console.log(`Rapport journalier créé pour userId ${userId}, date ${startTime.toISOString()}`);

    return tasks;
  } catch (error: any) {
    console.error(`Erreur lors de la synchronisation pour userId ${userId}:`, error.message);
    throw new Error(`Erreur lors de la synchronisation : ${error.message}`);
  }
};
// Récupérer toutes les tâches complétées, sans restriction de délai
export const fetchAllCompletedTasks = async (userId: string, workspaceGid?: string, projectGid?: string) => {
  const asanaApi = await createAsanaApi(userId);
  const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;

  try {
    let tasks: Task[] = [];
    let nextPage: string | null = null;
    const baseQuery = projectGid
      ? `/tasks?project=${projectGid}&completed_since=1970-01-01T00:00:00.000Z`
      : `/tasks?workspace=${effectiveWorkspaceGid}&assignee=me&completed_since=1970-01-01T00:00:00.000Z`;

    do {
      const response:any = await asanaApi.get(
        nextPage || `${baseQuery}&opt_fields=gid,name,completed_at,assignee`,
      );
      tasks = tasks.concat(response.data.data.filter((task: any) => task.completed_at && (!projectGid || task.assignee?.gid)));
      nextPage = response.data.next_page?.uri || null;
    } while (nextPage);

    console.log(`Tâches complétées (toutes) trouvées pour userId ${userId}, workspace ${effectiveWorkspaceGid}, project ${projectGid || 'none'}: ${tasks.length}`);

    for (const task of tasks) {
      try {
        await prisma.asanaTask.upsert({
          where: { taskGid: task.gid },
          update: {
            name: task.name,
            completedAt: task.completed_at ? new Date(task.completed_at) : null,
          },
          create: {
            taskGid: task.gid,
            userId,
            name: task.name,
            completedAt: task.completed_at ? new Date(task.completed_at) : null,
          },
        });
        console.log(`Tâche ${task.gid} synchronisée (toutes) pour userId ${userId}`);
      } catch (error: any) {
        console.error(`Erreur lors de la synchronisation de la tâche ${task.gid} (name: ${task.name}):`, error.message);
      }
    }

    return tasks;
  } catch (error: any) {
    console.error(`Erreur lors de la récupération des tâches (toutes) pour userId ${userId}:`, error.response?.data || error.message);
    throw new Error(`Erreur lors de la récupération des tâches : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};

// Récupérer toutes les tâches (complétées ou non) assignées à l'utilisateur
export const fetchAllTasks = async (userId: string, workspaceGid?: string, projectGid?: string) => {
  const asanaApi = await createAsanaApi(userId);
  const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;

  try {
    let tasks: Task[] = [];
    let nextPage: string | null = null;
    const baseQuery = projectGid
      ? `/tasks?project=${projectGid}`
      : `/tasks?workspace=${effectiveWorkspaceGid}&assignee=me`;

    do {
      const response:any = await asanaApi.get(
        nextPage || `${baseQuery}&opt_fields=gid,name,completed_at,assignee`,
      );
      tasks = tasks.concat(response.data.data.filter((task: any) => !projectGid || task.assignee?.gid));
      nextPage = response.data.next_page?.uri || null;
    } while (nextPage);

    console.log(`Tâches (toutes) trouvées pour userId ${userId}, workspace ${effectiveWorkspaceGid}, project ${projectGid || 'none'}: ${tasks.length}`);

    // Récupérer les taskGid existants dans la base pour cet utilisateur
    const existingTasks = await prisma.asanaTask.findMany({
      where: { userId },
      select: { taskGid: true },
    });
    const existingTaskGids = new Set(existingTasks.map(task => task.taskGid));

    // Supprimer les tâches de la base qui ne sont plus dans Asana
    const asanaTaskGids = new Set(tasks.map(task => task.gid));
    const tasksToDelete = existingTasks.filter(task => !asanaTaskGids.has(task.taskGid));
    if (tasksToDelete.length > 0) {
      await prisma.asanaTask.deleteMany({
        where: {
          userId,
          taskGid: { in: tasksToDelete.map(task => task.taskGid) },
        },
      });
      console.log(`Tâches supprimées pour userId ${userId}: ${tasksToDelete.length}`);
    }

    // Synchroniser les tâches récupérées
    for (const task of tasks) {
      try {
        await prisma.asanaTask.upsert({
          where: { taskGid: task.gid },
          update: {
            name: task.name,
            completedAt: task.completed_at ? new Date(task.completed_at) : null,
          },
          create: {
            taskGid: task.gid,
            userId,
            name: task.name,
            completedAt: task.completed_at ? new Date(task.completed_at) : null,
          },
        });
        console.log(`Tâche ${task.gid} synchronisée pour userId ${userId}`);
      } catch (error: any) {
        console.error(`Erreur lors de la synchronisation de la tâche ${task.gid} (name: ${task.name}):`, error.message);
      }
    }

    return tasks;
  } catch (error: any) {
    console.error(`Erreur lors de la récupération des tâches pour userId ${userId}:`, error.response?.data || error.message);
    throw new Error(`Erreur lors de la récupération des tâches : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};

// Job quotidien pour les tâches complétées dans les délais (08h00-17h00)
export const scheduleDailyTaskJob = () => {
  cron.schedule(
    '0 17 * * *',
    async () => {
      console.log('Exécution du job quotidien à 17h00...');
      const users = await prisma.user.findMany({
        where: { asanaToken: { not: null } },
        select: { id: true, asanaToken: true },
      });

      console.log(`Utilisateurs avec token Asana trouvés: ${users.length}`);

      for (const user of users) {
        try {
          const tasks = await fetchCompletedTasksInTimeframe(user.id, ASANA_WORKSPACE_GID);
          console.log(`Tâches complétées (08h00-17h00) synchronisées pour userId ${user.id}: ${tasks.length}`);
        } catch (error: any) {
          console.error(`Erreur pour userId ${user.id}:`, error.message);
        }
      }
    },
    {
      timezone: 'Africa/Lagos', // WAT
    }
  );
};

export const generateWeeklyReport = async (userId: string, workspaceGid?: string, projectGid?: string) => {
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay() + 1); // Lundi
  weekStart.setHours(0, 0, 0, 0);
  const weekEnd = new Date(today);
  weekEnd.setDate(today.getDate() - today.getDay() + 5); // Vendredi
  weekEnd.setHours(23, 59, 59, 999);

  const filters: any = { userId, date: { gte: weekStart, lte: weekEnd } };
  if (workspaceGid) filters.workspaceGid = workspaceGid;
  if (projectGid) filters.projectGid = projectGid;

  const dailyReports = await prisma.dailyReport.findMany({
    where: filters,
    select: { date: true, tasks: true },
  });

  await prisma.weeklyReport.create({
    data: {
      userId,
      weekStart,
      weekEnd,
      workspaceGid,
      projectGid,
      dailyReports: dailyReports.map((report: { date: Date; tasks: any }) => ({
        date: report.date,
        tasks: report.tasks,
      })),
    },
  });
  console.log(`Rapport hebdomadaire créé pour userId ${userId}, semaine du ${weekStart.toISOString()} au ${weekEnd.toISOString()}`);
};

export const scheduleWeeklyReportJob = () => {
  cron.schedule(
    '30 17 * * 5', // Chaque vendredi à 17h30
    async () => {
      console.log('Exécution du job hebdomadaire à 17h30...');
      const users = await prisma.user.findMany({
        where: { asanaToken: { not: null } },
        select: { id: true },
      });

      for (const user of users) {
        try {
          await generateWeeklyReport(user.id, ASANA_WORKSPACE_GID);
          console.log(`Rapport hebdomadaire généré pour userId ${user.id}`);
        } catch (error: any) {
          console.error(`Erreur pour userId ${user.id}:`, error.message);
        }
      }
    },
    { timezone: 'Africa/Lagos' }
  );
};

// Appeler les deux jobs dans l'initialisation
export const scheduleJobs = () => {
  scheduleDailyTaskJob();
  scheduleWeeklyReportJob();
};