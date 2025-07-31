import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  name: z.string().min(1, { message: 'Le nom est requis' }).optional(),
  password: z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),
});

export const loginUserSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  password: z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginUserInput = z.infer<typeof loginUserSchema>;
