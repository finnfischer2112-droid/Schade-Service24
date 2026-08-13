---
name: Orval codegen quirks
description: Non-obvious pitfalls when regenerating the OpenAPI client/zod schemas in this monorepo
---

- Orval detects the installed zod version by resolving `zod` from the package it runs in. `@workspace/api-spec` must keep `zod` in its devDependencies, otherwise orval assumes zod v4 and emits `zod.email()/zod.int()/zod.url()`, which breaks the typecheck against the workspace's zod 3.x.
  **Why:** hit this when adding new endpoints; codegen failed with TS2339 on the generated file.
- Component schema names must not collide with orval's operation-derived zod export names (e.g. a schema named `CreateClaimBody` with operationId `createClaim` produces a duplicate-export TS2308 in `lib/api-zod/src/index.ts`). Name components like `ClaimInput` instead, and parse responses with the operation-derived schema (e.g. `CreateClaimResponse`).
