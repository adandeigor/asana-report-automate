"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userValidations_1 = require("../validations/userValidations");
const authService_1 = require("../services/authService");
const asanaAuthService_1 = require("../services/asanaAuthService");
const asanaService_1 = require("../services/asanaService");
const asanaJobServices_1 = require("../services/asanaJobServices");
const zod_1 = require("zod");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const prismaInit_1 = __importDefault(require("../lib/prismaInit"));
const router = (0, express_1.Router)();
// Schéma Zod pour valider les requêtes de création de tâche
const createTaskInputSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: 'Le nom de la tâche est requis' }),
    workspaceGid: zod_1.z.string().optional(),
    projectGid: zod_1.z.string().optional(),
});
// Schéma Zod pour valider les requêtes de mise à jour de tâche
const updateTaskInputSchema = zod_1.z.object({
    taskGid: zod_1.z.string().min(1, { message: 'GID de la tâche requis' }),
    name: zod_1.z.string().min(1, { message: 'Le nom de la tâche est requis' }).optional(),
});
// Schéma Zod pour valider les paramètres de synchronisation
const syncTasksSchema = zod_1.z.object({
    workspaceGid: zod_1.z.string().optional(),
    projectGid: zod_1.z.string().optional(),
});
// Inscription
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = userValidations_1.createUserSchema.parse(req.body);
        const user = yield (0, authService_1.registerUser)(validatedData);
        res.status(201).json({
            message: 'Utilisateur créé',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de l\'inscription' });
    }
}));
// Connexion
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = userValidations_1.loginUserSchema.parse(req.body);
        const { user, token } = yield (0, authService_1.loginUser)(validatedData);
        res.json({
            message: 'Connexion réussie',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
            token,
        });
    }
    catch (error) {
        res.status(401).json({ error: error.message || 'Erreur lors de la connexion' });
    }
}));
// Obtenir l'URL d'autorisation Asana
router.get('/asana/auth', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const authUrl = (0, asanaAuthService_1.getAsanaAuthUrl)(userId);
        res.json({ authUrl });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la génération de l\'URL Asana' });
    }
}));
// Callback OAuth Asana
router.get('/asana/callback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, state: userId } = req.query;
        if (!code || !userId) {
            return res.status(400).json({ error: 'Code ou userId manquant' });
        }
        const accessToken = yield (0, asanaAuthService_1.exchangeAsanaCode)(code, userId);
        res.redirect('/?success=true'); // Rediriger vers le frontend
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors du callback Asana' });
    }
}));
// Lister les workspaces
router.get('/workspaces', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const workspaces = yield (0, asanaService_1.getWorkspaces)(userId);
        res.json({ message: 'Workspaces récupérés', workspaces });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la récupération des workspaces' });
    }
}));
// Lister les projets dans un workspace
router.get('/projects/:workspaceGid', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { workspaceGid } = req.params;
        if (!(yield (0, asanaService_1.validateWorkspace)(userId, workspaceGid))) {
            return res.status(400).json({ error: 'WorkspaceGid non valide' });
        }
        const projects = yield (0, asanaService_1.getProjects)(userId, workspaceGid);
        res.json({ message: 'Projets récupérés', projects });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la récupération des projets' });
    }
}));
// Créer une tâche Asana
router.post('/tasks', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = createTaskInputSchema.parse(req.body);
        const userId = req.user.userId;
        const task = yield (0, asanaService_1.createAsanaTask)(Object.assign(Object.assign({}, validatedData), { userId }));
        res.status(201).json({ message: 'Tâche créée', task });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la création de la tâche' });
    }
}));
// Récupérer et synchroniser toutes les tâches Asana de l'utilisateur
router.get('/tasks', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { workspaceGid, projectGid } = req.query;
        const validatedQuery = syncTasksSchema.parse({ workspaceGid, projectGid });
        // Valider workspaceGid et projectGid si fournis
        if (validatedQuery.workspaceGid && !(yield (0, asanaService_1.validateWorkspace)(userId, validatedQuery.workspaceGid))) {
            return res.status(400).json({ error: 'WorkspaceGid non valide' });
        }
        if (validatedQuery.projectGid && !(yield (0, asanaService_1.validateProject)(userId, validatedQuery.projectGid))) {
            return res.status(400).json({ error: 'ProjectGid non valide' });
        }
        // Synchroniser les tâches depuis Asana
        yield (0, asanaJobServices_1.fetchAllTasks)(userId, validatedQuery.workspaceGid, validatedQuery.projectGid);
        // Récupérer les tâches depuis la base de données
        const tasks = yield prismaInit_1.default.asanaTask.findMany({
            where: { userId },
            select: {
                taskGid: true,
                name: true,
                completedAt: true,
            },
        });
        res.json({ message: 'Tâches synchronisées et récupérées', tasks });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la synchronisation et récupération des tâches' });
    }
}));
// Lire une tâche Asana
router.get('/tasks/:taskGid', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const task = yield (0, asanaService_1.getAsanaTask)(req.params.taskGid, userId);
        res.json({ message: 'Tâche récupérée', task });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la récupération de la tâche' });
    }
}));
// Mettre à jour une tâche Asana
router.put('/tasks/:taskGid', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const validatedData = updateTaskInputSchema.parse(Object.assign({ taskGid: req.params.taskGid }, req.body));
        const task = yield (0, asanaService_1.updateAsanaTask)(Object.assign(Object.assign({}, validatedData), { userId }));
        res.json({ message: 'Tâche mise à jour', task });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la mise à jour de la tâche' });
    }
}));
// Supprimer une tâche Asana
router.delete('/tasks/:taskGid', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const result = yield (0, asanaService_1.deleteAsanaTask)(req.params.taskGid, userId);
        res.json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la suppression de la tâche' });
    }
}));
// Récupérer les tâches complétées pour l'utilisateur
router.get('/completed-tasks', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const tasks = yield prismaInit_1.default.asanaTask.findMany({
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
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la récupération des tâches complétées' });
    }
}));
// Synchroniser les tâches complétées dans la fenêtre 08h00-17h00
router.post('/sync-completed-tasks-in-timeframe', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { workspaceGid, projectGid } = req.body;
        const validatedData = syncTasksSchema.parse({ workspaceGid, projectGid });
        // Valider workspaceGid et projectGid si fournis
        if (validatedData.workspaceGid && !(yield (0, asanaService_1.validateWorkspace)(userId, validatedData.workspaceGid))) {
            return res.status(400).json({ error: 'WorkspaceGid non valide' });
        }
        if (validatedData.projectGid && !(yield (0, asanaService_1.validateProject)(userId, validatedData.projectGid))) {
            return res.status(400).json({ error: 'ProjectGid non valide' });
        }
        const tasks = yield (0, asanaJobServices_1.fetchCompletedTasksInTimeframe)(userId, validatedData.workspaceGid, validatedData.projectGid);
        res.json({ message: 'Tâches complétées (08h00-17h00) synchronisées', tasks });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la synchronisation des tâches complétées (08h00-17h00)' });
    }
}));
// Synchroniser toutes les tâches complétées
router.post('/sync-all-completed-tasks', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { workspaceGid, projectGid } = req.body;
        const validatedData = syncTasksSchema.parse({ workspaceGid, projectGid });
        // Valider workspaceGid et projectGid si fournis
        if (validatedData.workspaceGid && !(yield (0, asanaService_1.validateWorkspace)(userId, validatedData.workspaceGid))) {
            return res.status(400).json({ error: 'WorkspaceGid non valide' });
        }
        if (validatedData.projectGid && !(yield (0, asanaService_1.validateProject)(userId, validatedData.projectGid))) {
            return res.status(400).json({ error: 'ProjectGid non valide' });
        }
        const tasks = yield (0, asanaJobServices_1.fetchAllCompletedTasks)(userId, validatedData.workspaceGid, validatedData.projectGid);
        res.json({ message: 'Toutes les tâches complétées synchronisées', tasks });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la synchronisation de toutes les tâches complétées' });
    }
}));
// Déclencher le job quotidien manuellement
router.post('/trigger-daily-job', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { workspaceGid, projectGid } = req.body;
        const validatedData = syncTasksSchema.parse({ workspaceGid, projectGid });
        // Valider workspaceGid et projectGid si fournis
        if (validatedData.workspaceGid && !(yield (0, asanaService_1.validateWorkspace)(userId, validatedData.workspaceGid))) {
            return res.status(400).json({ error: 'WorkspaceGid non valide' });
        }
        if (validatedData.projectGid && !(yield (0, asanaService_1.validateProject)(userId, validatedData.projectGid))) {
            return res.status(400).json({ error: 'ProjectGid non valide' });
        }
        const tasks = yield (0, asanaJobServices_1.fetchCompletedTasksInTimeframe)(userId, validatedData.workspaceGid, validatedData.projectGid);
        res.json({ message: 'Job quotidien déclenché manuellement, tâches complétées (08h00-17h00) synchronisées', tasks });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors du déclenchement du job quotidien' });
    }
}));
router.get('/daily-reports', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { startDate, endDate, workspaceGid, projectGid } = req.query;
        const filters = { userId };
        if (workspaceGid)
            filters.workspaceGid = workspaceGid;
        if (projectGid)
            filters.projectGid = projectGid;
        if (startDate && endDate) {
            filters.date = {
                gte: new Date(startDate),
                lte: new Date(endDate),
            };
        }
        const reports = yield prismaInit_1.default.dailyReport.findMany({
            where: filters,
            select: { id: true, date: true, workspaceGid: true, projectGid: true, tasks: true },
        });
        res.json({ message: 'Rapports journaliers récupérés', reports });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la récupération des rapports' });
    }
}));
router.get('/weekly-reports', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { startDate, endDate, workspaceGid, projectGid } = req.query;
        const filters = { userId };
        if (workspaceGid)
            filters.workspaceGid = workspaceGid;
        if (projectGid)
            filters.projectGid = projectGid;
        if (startDate && endDate) {
            filters.weekStart = { gte: new Date(startDate) };
            filters.weekEnd = { lte: new Date(endDate) };
        }
        const reports = yield prismaInit_1.default.weeklyReport.findMany({
            where: filters,
            select: { id: true, weekStart: true, weekEnd: true, workspaceGid: true, projectGid: true, dailyReports: true },
        });
        res.json({ message: 'Rapports hebdomadaires récupérés', reports });
    }
    catch (error) {
        res.status(400).json({ error: error.message || 'Erreur lors de la récupération des rapports hebdomadaires' });
    }
}));
router.get('/stats', authMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.userId;
    const { startDate, endDate, workspaceGid, projectGid } = req.query;
    const filters = { userId };
    if (workspaceGid)
        filters.workspaceGid = workspaceGid;
    if (projectGid)
        filters.projectGid = projectGid;
    if (startDate && endDate) {
        filters.date = { gte: new Date(startDate), lte: new Date(endDate) };
    }
    const reports = yield prismaInit_1.default.dailyReport.findMany({ where: filters });
    const stats = {
        totalTasks: reports.reduce((sum, r) => sum + (Array.isArray(r.tasks) ? r.tasks.length : 0), 0),
        byDay: reports.map(r => ({
            date: r.date,
            taskCount: Array.isArray(r.tasks) ? r.tasks.length : 0,
        })),
    };
    res.json({ message: 'Statistiques récupérées', stats });
}));
exports.default = router;
