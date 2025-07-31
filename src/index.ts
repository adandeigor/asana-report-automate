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
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bienvenue sur mon API avec Express, TypeScript, Zod, JWT et Prisma !' });
});

// Log pour confirmer que l'app est chargée
console.log('Application Express chargée');

// Commente temporairement pour éviter les crashs sur Vercel
// scheduleDailyTaskJob();

// Lancer le serveur local uniquement en développement
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Serveur local démarré sur http://localhost:${port}`);
  });
}

export default app;