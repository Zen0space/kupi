# Contributing to Kupi

Thank you for your interest in contributing to Kupi. This guide will help you get started.

## Code of Conduct

Be respectful, constructive, and professional in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Follow the [Setup Guide](SETUP.md) to configure your development environment
4. Create a feature branch from `dev`

## Branch Strategy

| Branch   | Purpose                              |
| -------- | ------------------------------------ |
| `main`   | Production-ready code                |
| `dev`    | Active development and integration   |
| `feat/*` | New features                         |
| `fix/*`  | Bug fixes                            |
| `docs/*` | Documentation changes                |

Always branch off `dev` and submit pull requests back to `dev`.

```bash
git checkout dev
git pull origin dev
git checkout -b feat/your-feature-name
```

## Development Workflow

After running `pnpm install` and setting up the database (see [Setup Guide](SETUP.md)), start the dev servers in separate terminals:

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

This gives you clear, isolated logs for each service and makes it easier to restart one without affecting the other.

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>: <short description>

<optional body>
```

### Types

| Type       | Description                                  |
| ---------- | -------------------------------------------- |
| `feat`     | New feature                                  |
| `fix`      | Bug fix                                      |
| `docs`     | Documentation only                           |
| `style`    | Formatting, no code change                   |
| `refactor` | Code change that neither fixes nor adds      |
| `test`     | Adding or updating tests                     |
| `chore`    | Build process, tooling, or dependency updates |

### Examples

```
feat: add user authentication endpoint
fix: resolve database connection timeout on startup
docs: update setup instructions for Windows
chore: upgrade Prisma to v7.7
```

## Pull Request Process

1. Ensure your branch is up to date with `dev`
2. Start both services and verify the app runs without errors
3. Write a clear PR title using the commit message format
4. Describe what changes you made and why in the PR body
5. Link any related issues
6. Request a review

## Project Structure

```
kupi/
├── packages/
│   ├── frontend/      # @kupi/frontend — Next.js 15 + tRPC client
│   │   └── src/
│   │       ├── app/   # Pages, layouts, and route groups
│   │       └── trpc/  # tRPC client, providers, query client
│   ├── backend/       # @kupi/backend  — Express + tRPC server
│   │   └── src/
│   │       ├── index.ts
│   │       └── trpc/  # Router, procedures, context
│   └── db/            # @kupi/db       — Prisma + PostgreSQL
├── docs/              # Documentation
└── docker-compose.yml # Local infrastructure
```

### Where to make changes

- **UI components and pages** — `packages/frontend/src/app/`
- **tRPC client wiring** — `packages/frontend/src/trpc/`
- **API procedures (tRPC)** — `packages/backend/src/trpc/routers/`
- **tRPC context and middleware** — `packages/backend/src/trpc/init.ts`
- **Express server and middleware** — `packages/backend/src/index.ts`
- **Database schema and models** — `packages/db/prisma/schema.prisma`
- **Shared database client** — `packages/db/src/`

## Adding a tRPC Procedure

1. Create or edit a router file in `packages/backend/src/trpc/routers/`
2. Merge it into the root `appRouter` in `_app.ts`
3. The frontend picks up the new type automatically — use `useTRPC()` to call it

```ts
// packages/backend/src/trpc/routers/_app.ts
import { router, publicProcedure } from "../init";
import { z } from "zod";

export const appRouter = router({
  // existing procedures...
  myNewProcedure: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      // ctx.prisma is available here
      return { id: input.id };
    }),
});
```

## Database Changes

When modifying the Prisma schema:

1. Edit `packages/db/prisma/schema.prisma`
2. Create a migration: `pnpm db:migrate`
3. Regenerate the client: `pnpm db:generate`
4. Commit both the schema and migration files

Never edit generated files in `packages/db/src/generated/`.

## Adding Dependencies

Use pnpm workspace filters or `cd` into the package directly:

```bash
# Using filter from root
pnpm --filter @kupi/frontend add <package>
pnpm --filter @kupi/backend add <package>
pnpm --filter @kupi/backend add -D <package>

# Or cd into the package
cd packages/frontend && pnpm add <package>
cd packages/backend && pnpm add -D <package>
```

Do not install dependencies at the root level unless they are shared tooling.

## Questions?

Open an issue on the repository if you have questions or need clarification.
