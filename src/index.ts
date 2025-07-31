import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
import { scheduleDailyTaskJob } from './services/asanaJobServices';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*', // Utilise une variable d'environnement pour l'origine du frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version', 'Authorization'],
    credentials: true, // Si tu utilises des credentials
  })
);


app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Route de test
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bienvenue sur mon API avec Express, TypeScript, Zod, JWT et Prisma !' });
});

// Lancer le job quotidien
scheduleDailyTaskJob();


export default app;