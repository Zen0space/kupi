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
2. Verify the app runs without errors (`pnpm dev`)
3. Write a clear PR title using the commit message format
4. Describe what changes you made and why in the PR body
5. Link any related issues
6. Request a review

## Project Structure

```
kupi/
├── packages/
│   ├── frontend/      # @kupi/frontend — React + Vite
│   ├── backend/       # @kupi/backend  — Express API
│   └── db/            # @kupi/db       — Prisma + PostgreSQL
├── docs/              # Documentation
└── docker-compose.yml # Local infrastructure
```

### Where to make changes

- **UI components and pages** — `packages/frontend/src/`
- **API routes and middleware** — `packages/backend/src/`
- **Database schema and models** — `packages/db/prisma/schema.prisma`
- **Shared database client** — `packages/db/src/`

## Database Changes

When modifying the Prisma schema:

1. Edit `packages/db/prisma/schema.prisma`
2. Create a migration: `pnpm db:migrate`
3. Regenerate the client: `pnpm db:generate`
4. Commit both the schema and migration files

Never edit generated files in `packages/db/src/generated/`.

## Adding Dependencies

Use pnpm workspace filters to add dependencies to the correct package:

```bash
# Add to frontend
pnpm --filter @kupi/frontend add <package>

# Add to backend
pnpm --filter @kupi/backend add <package>

# Add to db
pnpm --filter @kupi/db add <package>

# Add dev dependency
pnpm --filter @kupi/backend add -D <package>
```

Do not install dependencies at the root level unless they are shared tooling.

## Questions?

Open an issue on the repository if you have questions or need clarification.
