---
"@nextnode/standards": major
---

Initial release of @nextnode/standards - unified configuration package for NextNode projects

🎉 **Première version du package @nextnode/standards**

## Fonctionnalités

### Configuration Biome

- Configuration complète avec règles NextNode strictes
- Formatter activé par défaut
- Support TypeScript/JavaScript/React

### Configuration Prettier

- Configuration de base avec plugin Tailwind CSS inclus
- Configuration Astro qui hérite de la base (DRY)
- Modules JavaScript avec inheritance native

### Configuration Commitlint

- Règles conventional commits
- Validation stricte des messages

## Exports disponibles

- `@nextnode/standards/biome` → Configuration Biome complète
- `@nextnode/standards/prettier` → Config Prettier + Tailwind
- `@nextnode/standards/prettier/astro` → Hérite base + plugin Astro
- `@nextnode/standards/commitlint` → Config Commitlint conventional

## Utilisation

```json
// biome.json
{ "extends": ["@nextnode/standards/biome"] }

// package.json pour prettier
{ "prettier": "@nextnode/standards/prettier" }

// package.json pour prettier astro
{ "prettier": "@nextnode/standards/prettier/astro" }
```

Ce package centralise toutes les configurations de qualité de code NextNode pour une maintenance simplifiée et une cohérence garantie.
