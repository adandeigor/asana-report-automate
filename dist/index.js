"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const asanaJobServices_1 = require("./services/asanaJobServices");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version', 'Authorization'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use('/api', userRoutes_1.default);
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur mon API avec Express, TypeScript, Zod, JWT et Prisma !' });
});
(0, asanaJobServices_1.scheduleDailyTaskJob)();
console.log('Application Express chargée');
// Lancer le serveur local uniquement en développement
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Serveur local démarré sur http://localhost:${port}`);
    });
}
exports.default = app;
