# Type & Lint Check Skill

This skill provides instructions for running TypeScript type checking and ESLint linting that matches the CI pipeline.

## Overview

The project uses pnpm workspaces with separate CI checks for frontend and backend packages. Always run these checks before committing to ensure CI will pass.

## Prerequisites

Before running type/lint checks, ensure:

1. Dependencies are installed: `pnpm install`
2. Prisma client is generated: `pnpm db:generate`

## Commands

### Frontend (@kupi/frontend)

```bash
# TypeScript type check
pnpm --filter @kupi/frontend typecheck

# ESLint
pnpm --filter @kupi/frontend lint
```

### Backend (@kupi/backend)

```bash
# TypeScript type check
pnpm --filter @kupi/backend typecheck

# ESLint
pnpm --filter @kupi/backend lint
```

### All Packages

```bash
# Run typecheck on all packages
pnpm --filter "@kupi/*" typecheck

# Run lint on all packages
pnpm --filter "@kupi/*" lint
```

## CI Pipeline Reference

### Frontend CI (.github/workflows/ci-frontend.yml)

Triggers on changes to:
- `packages/frontend/**`
- `packages/backend/**` (frontend imports backend types)

Steps:
1. `pnpm install --frozen-lockfile`
2. `pnpm db:generate`
3. `pnpm --filter @kupi/frontend typecheck`
4. `pnpm --filter @kupi/frontend lint`

### Backend CI (.github/workflows/ci-backend.yml)

Triggers on changes to:
- `packages/backend/**`
- `packages/db/**`

Steps:
1. `pnpm install --frozen-lockfile`
2. `pnpm db:generate`
3. `pnpm --filter @kupi/backend typecheck`
4. `pnpm --filter @kupi/backend lint`

## Common Issues

### JSX in .ts files

If you see errors like:
```
error TS1005: '>' expected
error TS1161: Unterminated regular expression literal
```

The file contains JSX but has a `.ts` extension. Rename to `.tsx`:
```bash
mv file.ts file.tsx
```

### Missing Prisma Client

If you see errors about missing `@kupi/db` types:
```bash
pnpm db:generate
```

### Import Path Issues

This project uses path aliases:
- `@/` maps to `src/` in frontend
- `@kupi/backend` is a workspace package
- `@kupi/db` is a workspace package
- `@kupi/redis` is a workspace package

## Workflow

When making changes:

1. **Before committing**, run the appropriate checks:
   ```bash
   # If you changed frontend code
   pnpm --filter @kupi/frontend typecheck
   pnpm --filter @kupi/frontend lint
   
   # If you changed backend code
   pnpm --filter @kupi/backend typecheck
   pnpm --filter @kupi/backend lint
   ```

2. **Fix any errors** before committing

3. **Commit** with a descriptive message

## Package Scripts

Each package has these scripts in `package.json`:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "lint": "eslint src/"
  }
}
```
