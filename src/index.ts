import express, { Request, Response } from 'express';
import prisma from './lib/prismaInit'; // Importe le singleton
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
import { scheduleDailyTaskJob } from './services/asanaJobServices';

dotenv.config();

const app = express();

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

app.get('/api/run-task', async (req: Request, res: Response) => {
  try {
    await scheduleDailyTaskJob();
    res.json({ message: 'Tâche exécutée avec succès' });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'exécution de la tâche" });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bienvenue sur mon API avec Express, TypeScript, Zod, JWT et Prisma !' });
});


console.log('Application Express chargée');

// Lancer le serveur local uniquement en développement
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Serveur local démarré sur http://localhost:${port}`);
  });
}

export default app;