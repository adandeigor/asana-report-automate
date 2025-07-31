import { Router, Request, Response } from 'express';
import { createUserSchema, loginUserSchema } from '../validations/userValidations';
import { registerUser, loginUser } from '../services/authService';
import { getAsanaAuthUrl, exchangeAsanaCode } from '../services/asanaAuthService';
import { createAsanaTask, getAsanaTask, updateAsanaTask, deleteAsanaTask, getWorkspaces, getProjects, validateWorkspace, validateProject } from '../services/asanaService';
import { fetchCompletedTasksInTimeframe, fetchAllCompletedTasks, fetchAllTasks } from '../services/asanaJobServices';
import { z } from 'zod';
import { verifyToken } from '../middlewares/authMiddleware';
import prisma from '../lib/prismaInit';

const router = Router();
interface DailyReport {
  id: string;
  date: Date;
  workspaceGid: string;
  projectGid: string;
  tasks: string[];
}
// Schéma Zod pour valider les requêtes de création de tâche
const createTaskInputSchema = z.object({
  name: z.string().min(1, { message: 'Le nom de la tâche est requis' }),
  workspaceGid: z.string().optional(),
  projectGid: z.string().optional(),
});

// Schéma Zod pour valider les requêtes de mise à jour de tâche
const updateTaskInputSchema = z.object({
  taskGid: z.string().min(1, { message: 'GID de la tâche requis' }),
  name: z.string().min(1, { message: 'Le nom de la tâche est requis' }).optional(),
});

// Schéma Zod pour valider les paramètres de synchronisation
const syncTasksSchema = z.object({
  workspaceGid: z.string().optional(),
  projectGid: z.string().optional(),
});

// Inscription
router.post('/register', async (req: Request, res: Response) => {
  try {
    const validatedData = createUserSchema.parse(req.body);
    const user = await registerUser(validatedData);
    res.status(201).json({
      message: 'Utilisateur créé',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de l\'inscription' });
  }
});

// Connexion
router.post('/login', async (req: Request, res: Response) => {
  try {
    const validatedData = loginUserSchema.parse(req.body);
    const { user, token } = await loginUser(validatedData);
    res.json({
      message: 'Connexion réussie',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  } catch (error: any) {
    res.status(401).json({ error: error.message || 'Erreur lors de la connexion' });
  }
});

// Obtenir l'URL d'autorisation Asana
router.get('/asana/auth', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const authUrl = getAsanaAuthUrl(userId);
    res.json({ authUrl });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la génération de l\'URL Asana' });
  }
});

// Callback OAuth Asana
router.get('/asana/callback', async (req: Request, res: Response) => {
  try {
    const { code, state: userId } = req.query;
    if (!code || !userId) {
      return res.status(400).json({ error: 'Code ou userId manquant' });
    }
    const accessToken = await exchangeAsanaCode(code as string, userId as string);
    res.redirect('/?success=true'); // Rediriger vers le frontend
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors du callback Asana' });
  }
});

// Lister les workspaces
router.get('/workspaces', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const workspaces = await getWorkspaces(userId);
    res.json({ message: 'Workspaces récupérés', workspaces });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la récupération des workspaces' });
  }
});

// Lister les projets dans un workspace
router.get('/projects/:workspaceGid', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { workspaceGid } = req.params;
    if (!(await validateWorkspace(userId, workspaceGid))) {
      return res.status(400).json({ error: 'WorkspaceGid non valide' });
    }
    const projects = await getProjects(userId, workspaceGid);
    res.json({ message: 'Projets récupérés', projects });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la récupération des projets' });
  }
});

// Créer une tâche Asana
router.post('/tasks', verifyToken, async (req: Request, res: Response) => {
  try {
    const validatedData = createTaskInputSchema.parse(req.body);
    const userId = (req as any).user.userId;
    const task = await createAsanaTask({ ...validatedData, userId });
    res.status(201).json({ message: 'Tâche créée', task });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la création de la tâche' });
  }
});

// Récupérer et synchroniser toutes les tâches Asana de l'utilisateur
router.get('/tasks', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { workspaceGid, projectGid } = req.query;
    const validatedQuery = syncTasksSchema.parse({ workspaceGid, projectGid });

    // Valider workspaceGid et projectGid si fournis
    if (validatedQuery.workspaceGid && !(await validateWorkspace(userId, validatedQuery.workspaceGid))) {
      return res.status(400).json({ error: 'WorkspaceGid non valide' });
    }
    if (validatedQuery.projectGid && !(await validateProject(userId, validatedQuery.projectGid))) {
      return res.status(400).json({ error: 'ProjectGid non valide' });
    }

    // Synchroniser les tâches depuis Asana
    await fetchAllTasks(userId, validatedQuery.workspaceGid, validatedQuery.projectGid);
    // Récupérer les tâches depuis la base de données
    const tasks = await prisma.asanaTask.findMany({
      where: { userId },
      select: {
        taskGid: true,
        name: true,
        completedAt: true,
      },
    });
    res.json({ message: 'Tâches synchronisées et récupérées', tasks });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la synchronisation et récupération des tâches' });
  }
});

// Lire une tâche Asana
router.get('/tasks/:taskGid', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const task = await getAsanaTask(req.params.taskGid, userId);
    res.json({ message: 'Tâche récupérée', task });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la récupération de la tâche' });
  }
});

// Mettre à jour une tâche Asana
router.put('/tasks/:taskGid', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const validatedData = updateTaskInputSchema.parse({ taskGid: req.params.taskGid, ...req.body });
    const task = await updateAsanaTask({ ...validatedData, userId });
    res.json({ message: 'Tâche mise à jour', task });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la mise à jour de la tâche' });
  }
});

// Supprimer une tâche Asana
router.delete('/tasks/:taskGid', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const result = await deleteAsanaTask(req.params.taskGid, userId);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la suppression de la tâche' });
  }
});

// Récupérer les tâches complétées pour l'utilisateur
router.get('/completed-tasks', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const tasks = await prisma.asanaTask.findMany({
      where: {
        userId,
        completedAt: { not: null },
      },
      select: {
        taskGid: true,
        name: true,
        completedAt: true,
      },
    });
    res.json({ message: 'Tâches complétées récupérées', tasks });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la récupération des tâches complétées' });
  }
});

// Synchroniser les tâches complétées dans la fenêtre 08h00-17h00
router.post('/sync-completed-tasks-in-timeframe', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { workspaceGid, projectGid } = req.body;
    const validatedData = syncTasksSchema.parse({ workspaceGid, projectGid });

    // Valider workspaceGid et projectGid si fournis
    if (validatedData.workspaceGid && !(await validateWorkspace(userId, validatedData.workspaceGid))) {
      return res.status(400).json({ error: 'WorkspaceGid non valide' });
    }
    if (validatedData.projectGid && !(await validateProject(userId, validatedData.projectGid))) {
      return res.status(400).json({ error: 'ProjectGid non valide' });
    }

    const tasks = await fetchCompletedTasksInTimeframe(userId, validatedData.workspaceGid, validatedData.projectGid);
    res.json({ message: 'Tâches complétées (08h00-17h00) synchronisées', tasks });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la synchronisation des tâches complétées (08h00-17h00)' });
  }
});

// Synchroniser toutes les tâches complétées
router.post('/sync-all-completed-tasks', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { workspaceGid, projectGid } = req.body;
    const validatedData = syncTasksSchema.parse({ workspaceGid, projectGid });

    // Valider workspaceGid et projectGid si fournis
    if (validatedData.workspaceGid && !(await validateWorkspace(userId, validatedData.workspaceGid))) {
      return res.status(400).json({ error: 'WorkspaceGid non valide' });
    }
    if (validatedData.projectGid && !(await validateProject(userId, validatedData.projectGid))) {
      return res.status(400).json({ error: 'ProjectGid non valide' });
    }

    const tasks = await fetchAllCompletedTasks(userId, validatedData.workspaceGid, validatedData.projectGid);
    res.json({ message: 'Toutes les tâches complétées synchronisées', tasks });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la synchronisation de toutes les tâches complétées' });
  }
});

// Déclencher le job quotidien manuellement
router.post('/trigger-daily-job', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { workspaceGid, projectGid } = req.body;
    const validatedData = syncTasksSchema.parse({ workspaceGid, projectGid });

    // Valider workspaceGid et projectGid si fournis
    if (validatedData.workspaceGid && !(await validateWorkspace(userId, validatedData.workspaceGid))) {
      return res.status(400).json({ error: 'WorkspaceGid non valide' });
    }
    if (validatedData.projectGid && !(await validateProject(userId, validatedData.projectGid))) {
      return res.status(400).json({ error: 'ProjectGid non valide' });
    }

    const tasks = await fetchCompletedTasksInTimeframe(userId, validatedData.workspaceGid, validatedData.projectGid);
    res.json({ message: 'Job quotidien déclenché manuellement, tâches complétées (08h00-17h00) synchronisées', tasks });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors du déclenchement du job quotidien' });
  }
});

router.get('/daily-reports', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { startDate, endDate, workspaceGid, projectGid } = req.query;
    const filters: any = { userId };
    if (workspaceGid) filters.workspaceGid = workspaceGid;
    if (projectGid) filters.projectGid = projectGid;
    if (startDate && endDate) {
      filters.date = {
        gte: new Date(startDate as string),
        lte: new Date(endDate as string),
      };
    }

    const reports = await prisma.dailyReport.findMany({
      where: filters,
      select: { id: true, date: true, workspaceGid: true, projectGid: true, tasks: true },
    });
    res.json({ message: 'Rapports journaliers récupérés', reports });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la récupération des rapports' });
  }
});

router.get('/weekly-reports', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { startDate, endDate, workspaceGid, projectGid } = req.query;
    const filters: any = { userId };
    if (workspaceGid) filters.workspaceGid = workspaceGid;
    if (projectGid) filters.projectGid = projectGid;
    if (startDate && endDate) {
      filters.weekStart = { gte: new Date(startDate as string) };
      filters.weekEnd = { lte: new Date(endDate as string) };
    }

    const reports = await prisma.weeklyReport.findMany({
      where: filters,
      select: { id: true, weekStart: true, weekEnd: true, workspaceGid: true, projectGid: true, dailyReports: true },
    });
    res.json({ message: 'Rapports hebdomadaires récupérés', reports });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Erreur lors de la récupération des rapports hebdomadaires' });
  }
});

router.get('/stats', verifyToken, async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  const { startDate, endDate, workspaceGid, projectGid } = req.query;
  const filters: any = { userId };
  if (workspaceGid) filters.workspaceGid = workspaceGid;
  if (projectGid) filters.projectGid = projectGid;
  if (startDate && endDate) {
    filters.date = { gte: new Date(startDate as string), lte: new Date(endDate as string) };
  }

  const prismaReports = await prisma.dailyReport.findMany({ where: filters });
  const reports: DailyReport[] = prismaReports.map((r: any) => ({
    id: String(r.id),
    date: r.date,
    workspaceGid: r.workspaceGid ?? '',
    projectGid: r.projectGid ?? '',
    tasks: Array.isArray(r.tasks) ? r.tasks : [],
  }));
  const stats = {
    totalTasks: reports.reduce((sum: number, r: any) => sum + (Array.isArray(r.tasks) ? r.tasks.length : 0), 0),
    byDay: reports.map(r => ({
      date: r.date,
      taskCount: Array.isArray(r.tasks) ? r.tasks.length : 0,
    })),
  };
  res.json({ message: 'Statistiques récupérées', stats });
});

export default router;