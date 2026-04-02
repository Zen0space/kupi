# Kupi

A full-stack TypeScript monorepo built with Next.js, Express, tRPC, and Prisma.

## Tech Stack

| Layer    | Package           | Technology                                        |
| -------- | ----------------- | ------------------------------------------------- |
| Frontend | `@kupi/frontend`  | Next.js 15, React 19, Tailwind CSS 4, TypeScript  |
| Backend  | `@kupi/backend`   | Express 4, tRPC v11, Zod, TypeScript              |
| Database | `@kupi/db`        | Prisma 7, PostgreSQL                              |
| Infra    | root              | Docker Compose, pnpm workspaces                   |

## Architecture

```
Next.js (port 3000) ──tRPC client──▶ Express + tRPC (port 3001) ──Prisma──▶ PostgreSQL (port 5432)
```

The frontend communicates with the backend via tRPC, providing end-to-end type safety from database to UI with zero code generation on the client.

## Project Structure

```
kupi/
├── packages/
│   ├── frontend/          # Next.js App Router (port 3000)
│   │   └── src/
│   │       ├── app/       # Pages and layouts
│   │       └── trpc/      # tRPC client and providers
│   ├── backend/           # Express + tRPC server (port 3001)
│   │   └── src/
│   │       ├── index.ts   # Express server entry
│   │       └── trpc/      # tRPC router and procedures
│   └── db/                # Prisma schema and database client
├── docs/                  # Documentation
├── docker-compose.yml     # Local PostgreSQL 16
├── pnpm-workspace.yaml    # Workspace configuration
└── package.json           # Root scripts
```

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 9
- [Docker](https://www.docker.com/) (for PostgreSQL)

### Setup

```bash
# Clone the repo
git clone https://github.com/Zen0space/kupi.git
cd kupi

# Install dependencies
pnpm install

# Copy environment variables for each package
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
cp packages/db/.env.example packages/db/.env

# Start PostgreSQL
docker compose up -d

# Generate Prisma client
pnpm db:generate

# Run database migrations
pnpm db:migrate
```

### Running Development Servers

The recommended way is to run each service in its own terminal:

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

The frontend will be at `http://localhost:3000` and the backend API at `http://localhost:3001`.

## Available Scripts

Run from the project root:

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start all packages in parallel       |
| `pnpm build`         | Build the frontend                   |
| `pnpm db:generate`   | Generate Prisma client               |
| `pnpm db:migrate`    | Run database migrations              |
| `pnpm db:push`       | Push schema changes to database      |
| `pnpm db:studio`     | Open Prisma Studio                   |

Run from within each package:

| Command                             | Description            |
| ----------------------------------- | ---------------------- |
| `cd packages/backend && pnpm dev`   | Start backend only     |
| `cd packages/frontend && pnpm dev`  | Start frontend only    |

## Documentation

- [Setup Guide](docs/SETUP.md) — detailed development environment setup
- [Contributing](docs/CONTRIBUTING.md) — guidelines for contributing to the project

## License

[MIT](LICENSE) — Copyright (c) 2026 Khairul Anuar
