import axios from 'axios';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const ASANA_CLIENT_ID = process.env.ASANA_CLIENT_ID;
const ASANA_CLIENT_SECRET = process.env.ASANA_CLIENT_SECRET;
const ASANA_REDIRECT_URI = process.env.ASANA_REDIRECT_URI;

export const getAsanaAuthUrl = (userId: string) => {
  if (!ASANA_CLIENT_ID || !ASANA_REDIRECT_URI) {
    throw new Error('Configuration Asana manquante');
  }
  const authUrl = `https://app.asana.com/-/oauth_authorize?client_id=${ASANA_CLIENT_ID}&redirect_uri=${encodeURIComponent(ASANA_REDIRECT_URI)}&response_type=code&state=${userId}`;
  return authUrl;
};

export const exchangeAsanaCode = async (code: string, userId: string) => {
  if (!ASANA_CLIENT_ID || !ASANA_CLIENT_SECRET || !ASANA_REDIRECT_URI) {
    throw new Error('Configuration Asana manquante');
  }

  try {
    const response = await axios.post('https://app.asana.com/-/oauth_token', {
      grant_type: 'authorization_code',
      client_id: ASANA_CLIENT_ID,
      client_secret: ASANA_CLIENT_SECRET,
      redirect_uri: ASANA_REDIRECT_URI,
      code,
    });

    const { access_token, refresh_token, expires_in } = response.data;
    const expiresAt = new Date(Date.now() + expires_in * 1000);

    await prisma.user.update({
      where: { id: userId },
      data: {
        asanaToken: access_token,
        asanaRefreshToken: refresh_token,
        asanaTokenExpiresAt: expiresAt,
      },
    });

    return access_token;
  } catch (error: any) {
    console.error(`Erreur lors de l'échange du code Asana pour userId ${userId}:`, error.response?.data || error.message);
    throw new Error(`Erreur lors de l'échange du code : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};

export const refreshAsanaToken = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { asanaRefreshToken: true },
  });

  if (!user || !user.asanaRefreshToken) {
    throw new Error('Aucun refresh_token trouvé pour cet utilisateur');
  }

  try {
    const response = await axios.post('https://app.asana.com/-/oauth_token', {
      grant_type: 'refresh_token',
      client_id: ASANA_CLIENT_ID,
      client_secret: ASANA_CLIENT_SECRET,
      refresh_token: user.asanaRefreshToken,
    });

    const { access_token, refresh_token, expires_in } = response.data;
    const expiresAt = new Date(Date.now() + expires_in * 1000);

    await prisma.user.update({
      where: { id: userId },
      data: {
        asanaToken: access_token,
        asanaRefreshToken: refresh_token || user.asanaRefreshToken, // Conserver l'ancien refresh_token si non fourni
        asanaTokenExpiresAt: expiresAt,
      },
    });

    return access_token;
  } catch (error: any) {
    console.error(`Erreur lors du renouvellement du token Asana pour userId ${userId}:`, error.response?.data || error.message);
    throw new Error(`Erreur lors du renouvellement du token : ${error.response?.data?.errors?.[0]?.message || error.message}`);
  }
};