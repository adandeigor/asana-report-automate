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
exports.refreshAsanaToken = exports.exchangeAsanaCode = exports.getAsanaAuthUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const ASANA_CLIENT_ID = process.env.ASANA_CLIENT_ID;
const ASANA_CLIENT_SECRET = process.env.ASANA_CLIENT_SECRET;
const ASANA_REDIRECT_URI = process.env.ASANA_REDIRECT_URI;
const getAsanaAuthUrl = (userId) => {
    if (!ASANA_CLIENT_ID || !ASANA_REDIRECT_URI) {
        throw new Error('Configuration Asana manquante');
    }
    const authUrl = `https://app.asana.com/-/oauth_authorize?client_id=${ASANA_CLIENT_ID}&redirect_uri=${encodeURIComponent(ASANA_REDIRECT_URI)}&response_type=code&state=${userId}`;
    return authUrl;
};
exports.getAsanaAuthUrl = getAsanaAuthUrl;
const exchangeAsanaCode = (code, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    if (!ASANA_CLIENT_ID || !ASANA_CLIENT_SECRET || !ASANA_REDIRECT_URI) {
        throw new Error('Configuration Asana manquante');
    }
    try {
        const response = yield axios_1.default.post('https://app.asana.com/-/oauth_token', {
            grant_type: 'authorization_code',
            client_id: ASANA_CLIENT_ID,
            client_secret: ASANA_CLIENT_SECRET,
            redirect_uri: ASANA_REDIRECT_URI,
            code,
        });
        const { access_token, refresh_token, expires_in } = response.data;
        const expiresAt = new Date(Date.now() + expires_in * 1000);
        yield prisma.user.update({
            where: { id: userId },
            data: {
                asanaToken: access_token,
                asanaRefreshToken: refresh_token,
                asanaTokenExpiresAt: expiresAt,
            },
        });
        return access_token;
    }
    catch (error) {
        console.error(`Erreur lors de l'échange du code Asana pour userId ${userId}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw new Error(`Erreur lors de l'échange du code : ${((_e = (_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.message) || error.message}`);
    }
});
exports.exchangeAsanaCode = exchangeAsanaCode;
const refreshAsanaToken = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const user = yield prisma.user.findUnique({
        where: { id: userId },
        select: { asanaRefreshToken: true },
    });
    if (!user || !user.asanaRefreshToken) {
        throw new Error('Aucun refresh_token trouvé pour cet utilisateur');
    }
    try {
        const response = yield axios_1.default.post('https://app.asana.com/-/oauth_token', {
            grant_type: 'refresh_token',
            client_id: ASANA_CLIENT_ID,
            client_secret: ASANA_CLIENT_SECRET,
            refresh_token: user.asanaRefreshToken,
        });
        const { access_token, refresh_token, expires_in } = response.data;
        const expiresAt = new Date(Date.now() + expires_in * 1000);
        yield prisma.user.update({
            where: { id: userId },
            data: {
                asanaToken: access_token,
                asanaRefreshToken: refresh_token || user.asanaRefreshToken, // Conserver l'ancien refresh_token si non fourni
                asanaTokenExpiresAt: expiresAt,
            },
        });
        return access_token;
    }
    catch (error) {
        console.error(`Erreur lors du renouvellement du token Asana pour userId ${userId}:`, ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        throw new Error(`Erreur lors du renouvellement du token : ${((_e = (_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.message) || error.message}`);
    }
});
exports.refreshAsanaToken = refreshAsanaToken;
