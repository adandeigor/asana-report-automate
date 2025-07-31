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
exports.deleteAsanaTask = exports.updateAsanaTask = exports.getAsanaTask = exports.createAsanaTask = exports.getProjects = exports.getWorkspaces = exports.validateProject = exports.validateWorkspace = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const asanaAuthService_1 = require("./asanaAuthService");
const zod_1 = __importDefault(require("zod"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const ASANA_BASE_URL = 'https://app.asana.com/api/1.0';
const ASANA_WORKSPACE_GID = process.env.ASANA_WORKSPACE_GID || '1210917388726319';
const updateTaskSchema = zod_1.default.object({
    taskGid: zod_1.default.string().min(1, { message: 'GID de la tâche requis' }),
    name: zod_1.default.string().min(1, { message: 'Le nom de la tâche est requis' }).optional(),
    userId: zod_1.default.string().uuid({ message: 'ID utilisateur invalide' }),
});
const createAsanaApi = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: { id: userId },
        select: { asanaToken: true, asanaTokenExpiresAt: true },
    });
    if (!user || !user.asanaToken) {
        throw new Error('Aucun token Asana trouvé pour cet utilisateur');
    }
    // Vérifier si le token est expiré
    const now = new Date();
    if (user.asanaTokenExpiresAt && user.asanaTokenExpiresAt < now) {
        const newToken = yield (0, asanaAuthService_1.refreshAsanaToken)(userId);
        return axios_1.default.create({
            baseURL: ASANA_BASE_URL,
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${newToken}`,
                'Content-Type': 'application/json',
            },
        });
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
// Valider l'existence d'un workspace
const validateWorkspace = (userId, workspaceGid) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const asanaApi = yield createAsanaApi(userId);
    try {
        yield asanaApi.get(`/workspaces/${workspaceGid}`);
        return true;
    }
    catch (error) {
        console.error(`Workspace ${workspaceGid} non valide pour userId ${userId}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        return false;
    }
});
exports.validateWorkspace = validateWorkspace;
// Valider l'existence d'un projet
const validateProject = (userId, projectGid) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const asanaApi = yield createAsanaApi(userId);
    try {
        yield asanaApi.get(`/projects/${projectGid}`);
        return true;
    }
    catch (error) {
        console.error(`Projet ${projectGid} non valide pour userId ${userId}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        return false;
    }
});
exports.validateProject = validateProject;
// Lister les workspaces disponibles
const getWorkspaces = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const asanaApi = yield createAsanaApi(userId);
    try {
        const response = yield asanaApi.get('/workspaces?opt_fields=gid,name');
        return response.data.data;
    }
    catch (error) {
        console.error(`Erreur lors de la récupération des workspaces pour userId ${userId}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw new Error(`Erreur lors de la récupération des workspaces : ${((_e = (_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.message) || error.message}`);
    }
});
exports.getWorkspaces = getWorkspaces;
// Lister les projets dans un workspace
const getProjects = (userId, workspaceGid) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const asanaApi = yield createAsanaApi(userId);
    try {
        const response = yield asanaApi.get(`/projects?workspace=${workspaceGid}&opt_fields=gid,name`);
        return response.data.data;
    }
    catch (error) {
        console.error(`Erreur lors de la récupération des projets pour workspace ${workspaceGid}, userId ${userId}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw new Error(`Erreur lors de la récupération des projets : ${((_e = (_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.message) || error.message}`);
    }
});
exports.getProjects = getProjects;
// Créer une tâche Asana
const createAsanaTask = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, userId, workspaceGid, projectGid }) {
    var _b, _c, _d, _e, _f;
    const asanaApi = yield createAsanaApi(userId);
    const effectiveWorkspaceGid = workspaceGid || ASANA_WORKSPACE_GID;
    // Valider workspaceGid et projectGid si fournis
    if (workspaceGid && !(yield (0, exports.validateWorkspace)(userId, workspaceGid))) {
        throw new Error('WorkspaceGid non valide');
    }
    if (projectGid && !(yield (0, exports.validateProject)(userId, projectGid))) {
        throw new Error('ProjectGid non valide');
    }
    try {
        const response = yield asanaApi.post('/tasks', {
            data: {
                name,
                workspace: effectiveWorkspaceGid,
                projects: projectGid ? [projectGid] : [],
                assignee: 'me',
            },
        });
        const task = response.data.data;
        yield prisma.asanaTask.create({
            data: {
                taskGid: task.gid,
                userId,
                name: task.name,
                completedAt: task.completed_at ? new Date(task.completed_at) : null,
            },
        });
        return task;
    }
    catch (error) {
        console.error(`Erreur lors de la création de la tâche pour userId ${userId}:`, ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message);
        throw new Error(`Erreur lors de la création de la tâche : ${((_f = (_e = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.message) || error.message}`);
    }
});
exports.createAsanaTask = createAsanaTask;
const getAsanaTask = (taskGid, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    const asanaApi = yield createAsanaApi(userId);
    try {
        const response = yield asanaApi.get(`/tasks/${taskGid}?opt_fields=gid,name,completed_at,assignee`);
        return response.data.data;
    }
    catch (error) {
        console.error(`Erreur lors de la récupération de la tâche ${taskGid} pour userId ${userId}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        if (((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) === 404 || ((_c = error.response) === null || _c === void 0 ? void 0 : _c.status) === 403) {
            throw new Error('Tâche non trouvée ou non autorisée');
        }
        throw new Error(`Erreur lors de la récupération de la tâche : ${((_g = (_f = (_e = (_d = error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.message) || error.message}`);
    }
});
exports.getAsanaTask = getAsanaTask;
// Mettre à jour une tâche Asana
const updateAsanaTask = (input) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const validatedInput = updateTaskSchema.parse(input);
    const asanaApi = yield createAsanaApi(validatedInput.userId);
    // Vérifier que la tâche appartient à l'utilisateur
    const taskInDb = yield prisma.asanaTask.findUnique({
        where: { taskGid: validatedInput.taskGid },
        select: { userId: true },
    });
    if (!taskInDb || taskInDb.userId !== validatedInput.userId) {
        throw new Error('Tâche non trouvée ou non autorisée');
    }
    try {
        const response = yield asanaApi.put(`/tasks/${validatedInput.taskGid}`, {
            data: {
                name: validatedInput.name,
            },
        });
        const task = response.data.data;
        // Mettre à jour la tâche dans la base de données
        yield prisma.asanaTask.update({
            where: { taskGid: validatedInput.taskGid },
            data: { name: task.name },
        });
        return task;
    }
    catch (error) {
        throw new Error(`Erreur lors de la mise à jour de la tâche : ${((_d = (_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.message) || error.message}`);
    }
});
exports.updateAsanaTask = updateAsanaTask;
// Supprimer une tâche Asana
const deleteAsanaTask = (taskGid, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const asanaApi = yield createAsanaApi(userId);
    // Vérifier que la tâche appartient à l'utilisateur
    const taskInDb = yield prisma.asanaTask.findUnique({
        where: { taskGid },
        select: { userId: true },
    });
    if (!taskInDb || taskInDb.userId !== userId) {
        throw new Error('Tâche non trouvée ou non autorisée');
    }
    try {
        yield asanaApi.delete(`/tasks/${taskGid}`);
        // Supprimer la tâche de la base de données
        yield prisma.asanaTask.delete({
            where: { taskGid },
        });
        return { message: 'Tâche supprimée avec succès' };
    }
    catch (error) {
        throw new Error(`Erreur lors de la suppression de la tâche : ${((_d = (_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.message) || error.message}`);
    }
});
exports.deleteAsanaTask = deleteAsanaTask;
