"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const asanaJobServices_1 = require("./services/asanaJobServices");
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || '*', // Utilise une variable d'environnement pour l'origine du frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version', 'Authorization'],
    credentials: true, // Si tu utilises des credentials
}));
app.use(express_1.default.json());
// Routes
app.use('/api', userRoutes_1.default);
// Route de test
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur mon API avec Express, TypeScript, Zod, JWT et Prisma !' });
});
// Lancer le job quotidien
(0, asanaJobServices_1.scheduleDailyTaskJob)();
exports.default = app;
