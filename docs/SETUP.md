# Setup Guide

Step-by-step instructions to set up the Kupi development environment.

## Prerequisites

Ensure the following are installed on your machine:

| Tool       | Version | Install                                        |
| ---------- | ------- | ---------------------------------------------- |
| Node.js    | >= 18   | [nodejs.org](https://nodejs.org/)              |
| pnpm       | >= 9    | `npm install -g pnpm`                          |
| Docker     | latest  | [docker.com](https://www.docker.com/)          |
| Git        | latest  | [git-scm.com](https://git-scm.com/)           |

Verify your installations:

```bash
node -v
pnpm -v
docker -v
git -v
```

## 1. Clone the Repository

```bash
git clone https://github.com/Zen0space/kupi.git
cd kupi
```

If you're contributing, fork the repo first and clone your fork instead.

## 2. Install Dependencies

```bash
pnpm install
```

This installs dependencies for all workspace packages (`frontend`, `backend`, `db`).

## 3. Environment Variables

Each package has its own `.env` file. Copy the examples:

```bash
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
cp packages/db/.env.example packages/db/.env
```

### What each `.env` contains

**`packages/backend/.env`** — used by the Express server at runtime:
```
DATABASE_URL=postgres://kupi:kupi@localhost:5432/kupi
PORT=4000
```

**`packages/frontend/.env`** — used by Next.js (`NEXT_PUBLIC_` vars are exposed to the browser):
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
```

**`packages/db/.env`** — used by Prisma CLI for migrations and code generation:
```
DATABASE_URL=postgres://kupi:kupi@localhost:5432/kupi
```

The defaults match the Docker Compose configuration. No changes needed for local development.

## 4. Start PostgreSQL

Start the database using Docker Compose:

```bash
docker compose up -d
```

This runs PostgreSQL 16 (Alpine) on port `5432` with:

| Setting  | Value |
| -------- | ----- |
| User     | kupi  |
| Password | kupi  |
| Database | kupi  |

### Verify the database is running

```bash
docker compose ps
```

You should see the `postgres` service with status `Up`.

### Stop the database

```bash
docker compose down
```

To also remove the stored data:

```bash
docker compose down -v
```

## 5. Set Up the Database

Generate the Prisma client:

```bash
pnpm db:generate
```

Run migrations (creates tables in the database):

```bash
pnpm db:migrate
```

Alternatively, push the schema directly without creating a migration file:

```bash
pnpm db:push
```

## 6. Start Development Servers

The recommended approach is to run each service in its own terminal for clear, isolated logs:

**Terminal 1 — Backend:**
```bash
cd packages/backend
pnpm dev
```

**Terminal 2 — Frontend:**
```bash
cd packages/frontend
pnpm dev
```

This makes it easy to see logs from each service separately and restart one without affecting the other.

> **Alternative:** You can also run both in parallel from the root with `pnpm dev`, but the logs will be interleaved.

### Service URLs

| Service       | URL                               |
| ------------- | --------------------------------- |
| Frontend      | http://localhost:3000              |
| Backend API   | http://localhost:4000              |
| tRPC endpoint | http://localhost:4000/trpc         |
| Health Check  | http://localhost:4000/health       |
| Prisma Studio | Run `pnpm db:studio`              |

## 7. Prisma Studio

To visually browse and edit your database:

```bash
pnpm db:studio
```

This opens a web UI for managing database records.

## Common Issues

### Port already in use

If port 3000, 3001, or 5432 is already in use:

```bash
# Find the process using the port
lsof -i :<port>

# Kill it
kill -9 <PID>
```

### Docker container won't start

```bash
# Check logs
docker compose logs postgres

# Restart from scratch
docker compose down -v
docker compose up -d
```

### Prisma client not found

If you see import errors related to `@prisma/client`:

```bash
pnpm db:generate
```

This regenerates the Prisma client in `packages/db/src/generated/`.

### Database connection refused

Ensure PostgreSQL is running:

```bash
docker compose ps
```

Verify `DATABASE_URL` in `packages/backend/.env` and `packages/db/.env` matches the Docker Compose credentials.

### tRPC connection errors in the frontend

Make sure the backend is running before the frontend tries to fetch data. Verify `NEXT_PUBLIC_BACKEND_URL` in `packages/frontend/.env` points to the correct backend URL (`http://localhost:3001`).

### Fresh start

To completely reset your local environment:

```bash
# Remove all node_modules
pnpm store prune
rm -rf node_modules packages/*/node_modules

# Remove database volume
docker compose down -v

# Remove Next.js cache
rm -rf packages/frontend/.next

# Reinstall and set up
pnpm install
docker compose up -d
pnpm db:generate
pnpm db:migrate
```

Then start the dev servers in separate terminals:

```bash
# Terminal 1
cd packages/backend && pnpm dev

# Terminal 2
cd packages/frontend && pnpm dev
```
