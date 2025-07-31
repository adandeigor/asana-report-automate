# Documentation de l'API de Gestion des Tâches Asana

## Introduction

Cette API permet la gestion des utilisateurs, l'authentification OAuth avec Asana, la manipulation des tâches Asana (CRUD), la synchronisation des tâches complétées, ainsi que la génération et la récupération de rapports journaliers et hebdomadaires.

> Technologies : Express, TypeScript, Prisma, Zod, JWT. Tâches synchronisées automatiquement à 17h00 WAT.

## Base URL

```
http://localhost:3000/api
```

## Authentification

* **JWT** dans l'en-tête `Authorization`: `Bearer <token>` (obtenu via `POST /login`).
* **OAuth 2.0** Asana : `GET /asana/auth` et `GET /asana/callback`.

## Prérequis

* Node.js et npm installés.
* PostgreSQL configuré avec Prisma.
* Variables d'environnement `.env` :

```env
PORT=3000
ASANA_CLIENT_ID=...
ASANA_CLIENT_SECRET=...
ASANA_REDIRECT_URI=...
ASANA_WORKSPACE_GID=...
JWT_SECRET=...
```

## Installation

```bash
git clone <repo>
cd <repo>
npm install
npx prisma migrate dev
npm run dev
```

---

## Endpoints

### 1. Authentification

#### `POST /register`

Créer un nouvel utilisateur.

**Body :**

```json
{
  "email": "string",
  "name": "string",
  "password": "string"
}
```

**Réponse :** `201 Created`

```json
{
  "message": "Utilisateur créé",
  "user": { "id": "string", "email": "string", "name": "string" }
}
```

**Exemple :**

```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","password":"password123"}'
```

---

#### `POST /login`

Connexion utilisateur et retour d'un token JWT.

**Body :**

```json
{
  "email": "string",
  "password": "string"
}
```

**Réponse :** `200 OK`

```json
{
  "message": "Connexion réussie",
  "user": { "id": "string", "email": "string", "name": "string" },
  "token": "string"
}
```

**Exemple :**

```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

---

### 2. OAuth Asana

#### `GET /asana/auth`

Générer une URL d'autorisation Asana.

**Réponse :**

```json
{ "authUrl": "string" }
```

#### `GET /asana/callback`

Callback OAuth : échange du `code` contre un token d'accès.

**Query params :** `code`, `state`
**Réponse :** `302 Redirect /?success=true`

---

### 3. Workspaces et Projets

#### `GET /workspaces`

Liste des workspaces Asana.

#### `GET /projects/:workspaceGid`

Liste des projets d'un workspace donné.

---

### 4. Tâches Asana

#### `POST /tasks`

Créer une tâche.

```json
{
  "name": "string",
  "workspaceGid": "string",
  "projectGid": "string"
}
```

#### `GET /tasks`

Synchroniser et lister les tâches Asana.

#### `GET /tasks/:taskGid`

Détails d'une tâche.

#### `PUT /tasks/:taskGid`

Mettre à jour une tâche.

#### `DELETE /tasks/:taskGid`

Supprimer une tâche.

#### `GET /completed-tasks`

Lister les tâches complétées stockées.

---

### 5. Synchronisation des Tâches

#### `POST /sync-completed-tasks-in-timeframe`

Synchroniser les tâches complétées entre 08h00 et 17h00 (WAT).

#### `POST /sync-all-completed-tasks`

Synchroniser toutes les tâches complétées.

#### `POST /trigger-daily-job`

Déclenche manuellement le job quotidien.

---

### 6. Rapports

#### `GET /daily-reports`

Rapports journaliers.

#### `GET /weekly-reports`

Rapports hebdomadaires.

#### `GET /stats`

Statistiques sur les tâches complétées.

---

## Job planifié

* À 17h00 WAT chaque jour (cron).
* Tâches complétées 08h00-17h00 synchronisées pour chaque utilisateur.
* Stockage : `AsanaTask`, `DailyReport`, `WeeklyReport`.

---

## Codes d'erreur courants

* `400 Bad Request` : Données invalides ou erreurs Asana.
* `401 Unauthorized` : Token manquant/invalide.
* `404 Not Found` : Ressource introuvable.
* `500 Internal Server Error` : Erreur serveur.

---

## Exemple de flux d'utilisation

```bash
# Inscription
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","password":"password123"}'

# Connexion
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Auth Asana
curl -X GET http://localhost:3000/api/asana/auth \
  -H "Authorization: Bearer <jwt_token>"

# Récupérer workspaces
curl -X GET http://localhost:3000/api/workspaces \
  -H "Authorization: Bearer <jwt_token>"

# Créer une tâche
curl -X POST http://localhost:3000/api/tasks \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Task","workspaceGid":"1210917388726319","projectGid":"123456789"}'
```

---

## Notes

* **Validation** : Zod pour vérification des données.
* **Cache** : TTL 1h pour `/workspaces` et `/projects/:workspaceGid`.
* **Synchronisation** : Tâches -> `AsanaTask`, Rapports -> `DailyReport`, `WeeklyReport`.
* **Limites Asana** : 150 requêtes/minute (plan gratuit).
* **Fuseau horaire** : `Africa/Lagos (WAT)`.

---

**Contact** : Pour toute question ou amélioration, contactez l'équipe de développement.
