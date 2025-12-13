# @nextnode/standards

Standards de développement NextNode : configurations unifiées pour le formatting, linting et style de code.

## Description

Ce package centralise toutes les configurations de qualité de code utilisées dans l'écosystème NextNode, permettant une maintenance centralisée et une cohérence garantie entre tous les projets.

## Installation

```bash
pnpm add -D @nextnode/standards
```

## Utilisation

### Biome (projets TypeScript)

Pour les projets TypeScript utilisant Biome comme linter, créez un fichier `biome.json` :

```json
{
	"extends": ["@nextnode/standards/biome"]
}
```

**Projets concernés** : logger, config-manager, http-client, functions-client, project-templates, validation, eslint-plugin

### Prettier Core (libraries)

Pour les libraries TypeScript sans Tailwind, ajoutez dans votre `package.json` :

```json
{
	"prettier": "@nextnode/standards/prettier/core"
}
```

**Projets concernés** : logger, config-manager, http-client, functions-client, validation

### Prettier Base (web apps)

Pour les projets web utilisant Tailwind CSS, ajoutez dans votre `package.json` :

```json
{
	"prettier": "@nextnode/standards/prettier"
}
```

**Projets concernés** : applications Next.js, React apps avec Tailwind

### Prettier Astro

Pour les projets Astro avec Tailwind, ajoutez dans votre `package.json` :

```json
{
	"prettier": "@nextnode/standards/prettier/astro"
}
```

**Projets concernés** : nextnode-front, yasmine

### Commitlint

Pour la validation des messages de commit, créez un fichier `commitlint.config.js` :

```javascript
export default {
	extends: ['@nextnode/standards/commitlint'],
}
```

## Scripts recommandés

Ajoutez ces scripts dans votre `package.json` :

```json
{
	"scripts": {
		"lint": "biome lint --write",
		"format": "prettier --write .",
		"check": "biome check --write && prettier --check ."
	}
}
```

## Configuration de référence

### Biome

La configuration Biome inclut :

- **Linter strict** avec règles NextNode
- **Import organization** avec groupes personnalisés
- **TypeScript support** complet
- **React/JSX** optimisations
- **Overrides** pour fichiers de config et tests

### Prettier

Architecture en couches :

```
core.js (no plugins)
    ↓ extends
base.js (+ Tailwind)
    ↓ extends
astro.js (+ Astro)
```

**Core** (libraries) :

- Tabs (4 espaces)
- Single quotes
- No semicolons
- Trailing commas
- Aucun plugin (zéro dépendances)

**Base** (web apps) :

- Extends core
- Plugin `prettier-plugin-tailwindcss`

**Astro** :

- Extends core
- Plugin `prettier-plugin-astro`
- Plugin `prettier-plugin-tailwindcss`
- Overrides pour fichiers `.astro`

### Commitlint

Configuration basée sur les conventions commitlint avec :

- Types standardisés (feat, fix, docs, etc.)
- Limites de longueur
- Formatage strict des messages

## Migration des projets existants

### Projets TypeScript avec Biome

1. Installer le package : `pnpm add -D @nextnode/standards`
2. Remplacer `biome.json` par : `{ "extends": ["@nextnode/standards/biome"] }`
3. Supprimer l'ancien fichier de configuration

### Projets Astro avec Prettier

1. Installer le package : `pnpm add -D @nextnode/standards`
2. Remplacer `.prettierrc` par l'entrée `package.json`
3. Supprimer l'ancien fichier `.prettierrc`

## Avantages

✅ **Standards unifiés** - Toutes les configurations au même endroit  
✅ **Maintenance centralisée** - Une seule source de vérité  
✅ **Migration simple** - Extension en une ligne  
✅ **Évolutivité** - Facile d'ajouter de nouvelles configurations  
✅ **Cohérence garantie** - Impossible de dévier des standards

## Compatibilité

- **Node.js** : >=24.0.0
- **pnpm** : 10.11.0+
- **Biome** : ^2.0.0
- **Prettier** : ^3.0.0
- **Commitlint** : ^18.0.0

## Licence

MIT - NextNode Solutions
