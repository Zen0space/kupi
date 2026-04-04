# Kupi

A full-stack TypeScript monorepo built with Next.js, Express, tRPC, Prisma, and Logto authentication.

## Tech Stack

| Layer    | Package           | Technology                                              |
| -------- | ----------------- | ------------------------------------------------------- |
| Frontend | `@kupi/frontend`  | Next.js 15, React 19, Tailwind CSS 4, Jotai, TypeScript |
| Backend  | `@kupi/backend`   | Express 4, tRPC v11, Zod, TypeScript                    |
| Database | `@kupi/db`        | Prisma 7, PostgreSQL 16                                 |
| Cache    | `@kupi/redis`     | Redis 7, ioredis                                        |
| Auth     | Logto             | Self-hosted OIDC provider                               |
| Infra    | root              | Docker Compose, pnpm workspaces                         |

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Docker Compose                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  PostgreSQL (5432)  │  Redis (6379)  │  Logto (3001/3002)                   │
└─────────────────────────────────────────────────────────────────────────────┘
                              ▲
                              │
┌─────────────────────────────┴───────────────────────────────────────────────┐
│  Next.js (3000)  ──tRPC──▶  Express (4000)  ──Prisma──▶  PostgreSQL         │
│       │                          │                                           │
│       └──────── Logto OIDC ──────┘                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

The frontend communicates with the backend via tRPC, providing end-to-end type safety from database to UI. Authentication is handled by Logto via OIDC, with JWT verification on the backend.

## Project Structure

```
kupi/
├── packages/
│   ├── frontend/          # Next.js App Router (port 3000)
│   │   └── src/
│   │       ├── app/       # Pages and layouts
│   │       ├── store/     # Jotai atoms (UI, user state)
│   │       └── trpc/      # tRPC client and providers
│   ├── backend/           # Express + tRPC server (port 4000)
│   │   └── src/
│   │       ├── index.ts   # Express server entry
│   │       └── trpc/      # tRPC router and procedures
│   ├── db/                # Prisma schema and database client
│   └── redis/             # Redis client factory
├── docs/                  # Documentation
├── docker-compose.yml     # PostgreSQL, Redis, Logto
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
cp packages/redis/.env.example packages/redis/.env

# Start PostgreSQL, Redis, and Logto
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

The frontend will be at `http://localhost:3000` and the backend API at `http://localhost:4000`. Logto admin console is at `http://localhost:3002`.

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

## State Management

The frontend uses [Jotai](https://jotai.org/) for state management with `jotai-tanstack-query` for server state integration.

```
packages/frontend/src/store/
├── index.tsx          # JotaiProvider with QueryClient
└── atoms/
    ├── index.ts       # Barrel exports
    ├── ui.ts          # UI state (sidebar, theme, modals, toasts)
    └── user.ts        # User sync state with sessionStorage persistence
```

Key patterns:
- UI state is managed with simple atoms
- Server state uses `jotai-tanstack-query` for tRPC integration
- User state persists to `sessionStorage` for navigation resilience

## Documentation

- [Setup Guide](docs/SETUP.md) — detailed development environment setup
- [Contributing](docs/CONTRIBUTING.md) — guidelines for contributing to the project

## License

[MIT](LICENSE) — Copyright (c) 2026 Khairul Anuar
