---
'@nextnode/standards': minor
---

Add Prettier core config without plugins for TypeScript libraries

- New `@nextnode/standards/prettier/core` export with zero plugins
- Layered architecture: core (no plugins) -> base (Tailwind) -> astro (Tailwind + Astro)
- Libraries without Tailwind can now use the core config without extra dependencies
