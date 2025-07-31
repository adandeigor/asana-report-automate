import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CreateUserInput, LoginUserInput } from '../validations/userValidations';

const prisma = new PrismaClient();

export const registerUser = async (input: CreateUserInput) => {
  const { email, name, password } = input;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  return user;
};

export const loginUser = async (input: LoginUserInput) => {
  const { email, password } = input;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Cet email n\'existe pas');
  }
  if ( !(await bcrypt.compare(password, user.password))) {
    throw new Error('Mot de passe incorrect');
  }
  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: '1d',
  });
  return { user, token };
};
