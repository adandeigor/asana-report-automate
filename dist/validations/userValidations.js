"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Email invalide' }),
    name: zod_1.z.string().min(1, { message: 'Le nom est requis' }).optional(),
    password: zod_1.z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),
});
exports.loginUserSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Email invalide' }),
    password: zod_1.z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),
});
