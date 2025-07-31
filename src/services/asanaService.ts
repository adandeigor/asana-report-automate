import axios from 'axios';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { refreshAsanaToken } from './asanaAuthService';
import z from 'zod';

dotenv.config();

const prisma = new PrismaClient();
const ASANA_BASE_URL = 'https://app.asana.com/api/1.0';
const ASANA_WORKSPACE_GID = process.env.ASANA_WORKSPACE_GID || '1210917388726319';

const updateTaskSchema = z.object({
  taskGid: z.string().min(1, { message: 'GID de la tâche requis' }),
  name: z.string().min(1, { message: 'Le nom de la tâche est requis' }).optional(),
  userId: z.string().uuid({ message: 'ID utilisateur invalide' }),
});

const createAsanaApi = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { asanaToken: true, asanaTokenExpiresAt: true },
  });

  if (!user || !user.asanaToken) {
    throw new Error('Aucun token Asana trouvé pour cet utilisateur');
  }


  // Vérifier si le token est expiré
  const now = new Date();
  if (user.asanaTokenExpiresAt && user.asanaTokenExpiresAt < now) {
    const newToken = await refreshAsanaToken(userId);
    return axios.create({
      baseURL: ASANA_BASE_URL,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${newToken}`,
        'Content-Type': 'application/json',
      },
    });
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

// Valider l'existence d'un workspace
export const validateWorkspace = async (userId: string, workspaceGid: string) => {
  const asanaApi = await createAsanaApi(userId);
  try {
    await asanaApi.get(`/workspaces/${workspaceGid}`);
    return true;
  } catch (error: any) {
    console.error(`Workspace ${workspaceGid} non valide pour userId ${userId}:`, error.response?.data || error.message);
    return false;
  }
};

// Valider l'existence d'un projet
export const validateProject = async (userId: string, projectGid: string) => {
  const asanaApi = await createAsanaApi(userId);
  try {
    await asanaApi.get(`/projects/${projectGid}`);
    return true;
  } catch (error: any) {
    console.error(`Projet ${projectGid} non valide pour userId ${userId}:`, error.response?.data || error.message);
    return false;
  }
};

// Lister les workspaces disponibles
export const getWorkspaces = async (userId: string) => {
  const asanaApi = await createAsanaApi(userId);
  try {
    const response = await asanaApi.get('/workspaces?opt_fields=gid,name');
    return response.data.data;
  } catch (error: any) {
    console.error(`Erreur lors de la récupération des workspaces pour userId ${userId}:`, error.response?.data || error.message);
    throw new Error(`Erreur lors de la récupération des workspaces : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};

// Lister les projets dans un workspace
export const getProjects = async (userId: string, workspaceGid: string) => {
  const asanaApi = await createAsanaApi(userId);
  try {
    const response = await asanaApi.get(`/projects?workspace=${workspaceGid}&opt_fields=gid,name`);
    return response.data.data;
  } catch (error: any) {
    console.error(`Erreur lors de la récupération des projets pour workspace ${workspaceGid}, userId ${userId}:`, error.response?.data || error.message);
    throw new Error(`Erreur lors de la récupération des projets : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};

// Créer une tâche Asana
export const createAsanaTask = async ({ name, userId, workspaceGid, projectGid }: { name: string; userId: string; workspaceGid?: string; projectGid?: string }) => {
  const asanaApi = await createAsanaApi(userId);
  const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;

  // Valider workspaceGid et projectGid si fournis
  if (workspaceGid && !(await validateWorkspace(userId, workspaceGid))) {
    throw new Error('WorkspaceGid non valide');
  }
  if (projectGid && !(await validateProject(userId, projectGid))) {
    throw new Error('ProjectGid non valide');
  }

  try {
    const response = await asanaApi.post('/tasks', {
      data: {
        name,
        workspace: effectiveWorkspaceGid,
        projects: projectGid ? [projectGid] : [],
        assignee: 'me',
      },
    });

    const task = response.data.data;

    await prisma.asanaTask.create({
      data: {
        taskGid: task.gid,
        userId,
        name: task.name,
        completedAt: task.completed_at ? new Date(task.completed_at) : null,
      },
    });

    return task;
  } catch (error: any) {
    console.error(`Erreur lors de la création de la tâche pour userId ${userId}:`, error.response?.data || error.message);
    throw new Error(`Erreur lors de la création de la tâche : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};

export const getAsanaTask = async (taskGid: string, userId: string) => {
  const asanaApi = await createAsanaApi(userId);
  try {
    const response = await asanaApi.get(`/tasks/${taskGid}?opt_fields=gid,name,completed_at,assignee`);
    return response.data.data;
  } catch (error: any) {
    console.error(`Erreur lors de la récupération de la tâche ${taskGid} pour userId ${userId}:`, error.response?.data || error.message);
    if (error.response?.status === 404 || error.response?.status === 403) {
      throw new Error('Tâche non trouvée ou non autorisée');
    }
    throw new Error(`Erreur lors de la récupération de la tâche : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};


// Mettre à jour une tâche Asana
export const updateAsanaTask = async (input: { taskGid: string; name?: string; userId: string }) => {
  const validatedInput = updateTaskSchema.parse(input);
  const asanaApi = await createAsanaApi(validatedInput.userId);

  // Vérifier que la tâche appartient à l'utilisateur
  const taskInDb = await prisma.asanaTask.findUnique({
    where: { taskGid: validatedInput.taskGid },
    select: { userId: true },
  });
  if (!taskInDb || taskInDb.userId !== validatedInput.userId) {
    throw new Error('Tâche non trouvée ou non autorisée');
  }

  try {
    const response = await asanaApi.put(`/tasks/${validatedInput.taskGid}`, {
      data: {
        name: validatedInput.name,
      },
    });

    const task = response.data.data;

    // Mettre à jour la tâche dans la base de données
    await prisma.asanaTask.update({
      where: { taskGid: validatedInput.taskGid },
      data: { name: task.name },
    });

    return task;
  } catch (error: any) {
    throw new Error(`Erreur lors de la mise à jour de la tâche : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};

// Supprimer une tâche Asana
export const deleteAsanaTask = async (taskGid: string, userId: string) => {
  const asanaApi = await createAsanaApi(userId);

  // Vérifier que la tâche appartient à l'utilisateur
  const taskInDb = await prisma.asanaTask.findUnique({
    where: { taskGid },
    select: { userId: true },
  });
  if (!taskInDb || taskInDb.userId !== userId) {
    throw new Error('Tâche non trouvée ou non autorisée');
  }

  try {
    await asanaApi.delete(`/tasks/${taskGid}`);
    // Supprimer la tâche de la base de données
    await prisma.asanaTask.delete({
      where: { taskGid },
    });
    return { message: 'Tâche supprimée avec succès' };
  } catch (error: any) {
    throw new Error(`Erreur lors de la suppression de la tâche : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};