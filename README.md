# Kupi

A full-stack TypeScript monorepo built with React, Express, and Prisma.

## Tech Stack

| Layer    | Package           | Technology                     |
| -------- | ----------------- | ------------------------------ |
| Frontend | `@kupi/frontend`  | React 19, Vite 6, TypeScript   |
| Backend  | `@kupi/backend`   | Express 4, TypeScript           |
| Database | `@kupi/db`        | Prisma 7, PostgreSQL            |
| Infra    | root              | Docker Compose, pnpm workspaces |

## Project Structure

```
kupi/
├── packages/
│   ├── frontend/          # React SPA (port 3000)
│   ├── backend/           # Express API server (port 3001)
│   └── db/                # Prisma schema & database client
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

# Copy environment variables
cp .env.example .env

# Start PostgreSQL
docker compose up -d

# Generate Prisma client
pnpm db:generate

# Run database migrations
pnpm db:migrate

# Start all services
pnpm dev
```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:3001`.

## Available Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start all packages in parallel       |
| `pnpm dev:frontend`  | Start frontend only                  |
| `pnpm dev:backend`   | Start backend only                   |
| `pnpm db:generate`   | Generate Prisma client               |
| `pnpm db:migrate`    | Run database migrations              |
| `pnpm db:push`       | Push schema changes to database      |
| `pnpm db:studio`     | Open Prisma Studio                   |

## Documentation

- [Setup Guide](docs/SETUP.md) — detailed development environment setup
- [Contributing](docs/CONTRIBUTING.md) — guidelines for contributing to the project

## License

[MIT](LICENSE) — Copyright (c) 2026 Khairul Anuar
