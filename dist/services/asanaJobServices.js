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
exports.scheduleJobs = exports.scheduleWeeklyReportJob = exports.generateWeeklyReport = exports.scheduleDailyTaskJob = exports.fetchAllTasks = exports.fetchAllCompletedTasks = exports.fetchCompletedTasksInTimeframe = void 0;
const axios_1 = __importDefault(require("axios"));
const node_cron_1 = __importDefault(require("node-cron"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const ASANA_BASE_URL = 'https://app.asana.com/api/1.0';
const ASANA_WORKSPACE_GID = process.env.ASANA_WORKSPACE_GID || '1210917388726319';
const createAsanaApi = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: { id: userId },
        select: { asanaToken: true },
    });
    if (!user || !user.asanaToken) {
        throw new Error('Aucun token Asana trouvé pour cet utilisateur');
    }
    return axios_1.default.create({
        baseURL: ASANA_BASE_URL,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${user.asanaToken}`,
            'Content-Type': 'application/json',
        },
    });
});
// Récupérer les tâches complétées dans la fenêtre horaire 08h00-17h00
const fetchCompletedTasksInTimeframe = (userId, workspaceGid, projectGid) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const asanaApi = yield createAsanaApi(userId);
    const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;
    const today = new Date();
    const startTime = new Date(today);
    startTime.setHours(8, 0, 0, 0);
    const endTime = new Date(today);
    endTime.setHours(17, 0, 0, 0);
    try {
        let tasks = [];
        let nextPage = null;
        const baseQuery = projectGid
            ? `/tasks?project=${projectGid}&completed_since=${startTime.toISOString()}`
            : `/tasks?workspace=${effectiveWorkspaceGid}&assignee=me&completed_since=${startTime.toISOString()}`;
        do {
            const response = yield asanaApi.get(nextPage || `${baseQuery}&opt_fields=gid,name,completed_at,assignee`);
            tasks = tasks.concat(response.data.data.filter((task) => {
                var _a;
                const completedAt = task.completed_at ? new Date(task.completed_at) : null;
                return completedAt && completedAt >= startTime && completedAt <= endTime && (!projectGid || ((_a = task.assignee) === null || _a === void 0 ? void 0 : _a.gid));
            }));
            nextPage = ((_a = response.data.next_page) === null || _a === void 0 ? void 0 : _a.uri) || null;
        } while (nextPage);
        console.log(`Tâches complétées (08h00-17h00) trouvées pour userId ${userId}: ${tasks.length}`);
        // Synchroniser les tâches dans AsanaTask
        for (const task of tasks) {
            yield prisma.asanaTask.upsert({
                where: { taskGid: task.gid },
                update: { name: task.name, completedAt: task.completed_at ? new Date(task.completed_at) : null },
                create: { taskGid: task.gid, userId, name: task.name, completedAt: task.completed_at ? new Date(task.completed_at) : null },
            });
        }
        // Créer un rapport journalier
        yield prisma.dailyReport.create({
            data: {
                userId,
                date: startTime,
                workspaceGid: effectiveWorkspaceGid,
                projectGid,
                tasks: tasks.map(task => ({
                    taskGid: task.gid,
                    name: task.name,
                    completedAt: task.completed_at,
                })),
            },
        });
        console.log(`Rapport journalier créé pour userId ${userId}, date ${startTime.toISOString()}`);
        return tasks;
    }
    catch (error) {
        console.error(`Erreur lors de la synchronisation pour userId ${userId}:`, error.message);
        throw new Error(`Erreur lors de la synchronisation : ${error.message}`);
    }
});
exports.fetchCompletedTasksInTimeframe = fetchCompletedTasksInTimeframe;
// Récupérer toutes les tâches complétées, sans restriction de délai
const fetchAllCompletedTasks = (userId, workspaceGid, projectGid) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const asanaApi = yield createAsanaApi(userId);
    const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;
    try {
        let tasks = [];
        let nextPage = null;
        const baseQuery = projectGid
            ? `/tasks?project=${projectGid}&completed_since=1970-01-01T00:00:00.000Z`
            : `/tasks?workspace=${effectiveWorkspaceGid}&assignee=me&completed_since=1970-01-01T00:00:00.000Z`;
        do {
            const response = yield asanaApi.get(nextPage || `${baseQuery}&opt_fields=gid,name,completed_at,assignee`);
            tasks = tasks.concat(response.data.data.filter((task) => { var _a; return task.completed_at && (!projectGid || ((_a = task.assignee) === null || _a === void 0 ? void 0 : _a.gid)); }));
            nextPage = ((_a = response.data.next_page) === null || _a === void 0 ? void 0 : _a.uri) || null;
        } while (nextPage);
        console.log(`Tâches complétées (toutes) trouvées pour userId ${userId}, workspace ${effectiveWorkspaceGid}, project ${projectGid || 'none'}: ${tasks.length}`);
        for (const task of tasks) {
            try {
                yield prisma.asanaTask.upsert({
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
            }
            catch (error) {
                console.error(`Erreur lors de la synchronisation de la tâche ${task.gid} (name: ${task.name}):`, error.message);
            }
        }
        return tasks;
    }
    catch (error) {
        console.error(`Erreur lors de la récupération des tâches (toutes) pour userId ${userId}:`, ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message);
        throw new Error(`Erreur lors de la récupération des tâches : ${((_f = (_e = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.message) || error.message}`);
    }
});
exports.fetchAllCompletedTasks = fetchAllCompletedTasks;
// Récupérer toutes les tâches (complétées ou non) assignées à l'utilisateur
const fetchAllTasks = (userId, workspaceGid, projectGid) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const asanaApi = yield createAsanaApi(userId);
    const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;
    try {
        let tasks = [];
        let nextPage = null;
        const baseQuery = projectGid
            ? `/tasks?project=${projectGid}`
            : `/tasks?workspace=${effectiveWorkspaceGid}&assignee=me`;
        do {
            const response = yield asanaApi.get(nextPage || `${baseQuery}&opt_fields=gid,name,completed_at,assignee`);
            tasks = tasks.concat(response.data.data.filter((task) => { var _a; return !projectGid || ((_a = task.assignee) === null || _a === void 0 ? void 0 : _a.gid); }));
            nextPage = ((_a = response.data.next_page) === null || _a === void 0 ? void 0 : _a.uri) || null;
        } while (nextPage);
        console.log(`Tâches (toutes) trouvées pour userId ${userId}, workspace ${effectiveWorkspaceGid}, project ${projectGid || 'none'}: ${tasks.length}`);
        // Récupérer les taskGid existants dans la base pour cet utilisateur
        const existingTasks = yield prisma.asanaTask.findMany({
            where: { userId },
            select: { taskGid: true },
        });
        const existingTaskGids = new Set(existingTasks.map(task => task.taskGid));
        // Supprimer les tâches de la base qui ne sont plus dans Asana
        const asanaTaskGids = new Set(tasks.map(task => task.gid));
        const tasksToDelete = existingTasks.filter(task => !asanaTaskGids.has(task.taskGid));
        if (tasksToDelete.length > 0) {
            yield prisma.asanaTask.deleteMany({
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
                yield prisma.asanaTask.upsert({
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
            }
            catch (error) {
                console.error(`Erreur lors de la synchronisation de la tâche ${task.gid} (name: ${task.name}):`, error.message);
            }
        }
        return tasks;
    }
    catch (error) {
        console.error(`Erreur lors de la récupération des tâches pour userId ${userId}:`, ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message);
        throw new Error(`Erreur lors de la récupération des tâches : ${((_f = (_e = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.message) || error.message}`);
    }
});
exports.fetchAllTasks = fetchAllTasks;
// Job quotidien pour les tâches complétées dans les délais (08h00-17h00)
const scheduleDailyTaskJob = () => {
    node_cron_1.default.schedule('0 17 * * *', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Exécution du job quotidien à 17h00...');
        const users = yield prisma.user.findMany({
            where: { asanaToken: { not: null } },
            select: { id: true, asanaToken: true },
        });
        console.log(`Utilisateurs avec token Asana trouvés: ${users.length}`);
        for (const user of users) {
            try {
                const tasks = yield (0, exports.fetchCompletedTasksInTimeframe)(user.id, ASANA_WORKSPACE_GID);
                console.log(`Tâches complétées (08h00-17h00) synchronisées pour userId ${user.id}: ${tasks.length}`);
            }
            catch (error) {
                console.error(`Erreur pour userId ${user.id}:`, error.message);
            }
        }
    }), {
        timezone: 'Africa/Lagos', // WAT
    });
};
exports.scheduleDailyTaskJob = scheduleDailyTaskJob;
const generateWeeklyReport = (userId, workspaceGid, projectGid) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay() + 1); // Lundi
    weekStart.setHours(0, 0, 0, 0);
    const weekEnd = new Date(today);
    weekEnd.setDate(today.getDate() - today.getDay() + 5); // Vendredi
    weekEnd.setHours(23, 59, 59, 999);
    const filters = { userId, date: { gte: weekStart, lte: weekEnd } };
    if (workspaceGid)
        filters.workspaceGid = workspaceGid;
    if (projectGid)
        filters.projectGid = projectGid;
    const dailyReports = yield prisma.dailyReport.findMany({
        where: filters,
        select: { date: true, tasks: true },
    });
    yield prisma.weeklyReport.create({
        data: {
            userId,
            weekStart,
            weekEnd,
            workspaceGid,
            projectGid,
            dailyReports: dailyReports.map(report => ({
                date: report.date,
                tasks: report.tasks,
            })),
        },
    });
    console.log(`Rapport hebdomadaire créé pour userId ${userId}, semaine du ${weekStart.toISOString()} au ${weekEnd.toISOString()}`);
});
exports.generateWeeklyReport = generateWeeklyReport;
const scheduleWeeklyReportJob = () => {
    node_cron_1.default.schedule('30 17 * * 5', // Chaque vendredi à 17h30
    () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Exécution du job hebdomadaire à 17h30...');
        const users = yield prisma.user.findMany({
            where: { asanaToken: { not: null } },
            select: { id: true },
        });
        for (const user of users) {
            try {
                yield (0, exports.generateWeeklyReport)(user.id, ASANA_WORKSPACE_GID);
                console.log(`Rapport hebdomadaire généré pour userId ${user.id}`);
            }
            catch (error) {
                console.error(`Erreur pour userId ${user.id}:`, error.message);
            }
        }
    }), { timezone: 'Africa/Lagos' });
};
exports.scheduleWeeklyReportJob = scheduleWeeklyReportJob;
// Appeler les deux jobs dans l'initialisation
const scheduleJobs = () => {
    (0, exports.scheduleDailyTaskJob)();
    (0, exports.scheduleWeeklyReportJob)();
};
exports.scheduleJobs = scheduleJobs;
