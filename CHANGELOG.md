# @nextnode/standards

## 2.2.1

### Patch Changes

- [#25](https://github.com/NextNodeSolutions/standards/pull/25) [`1fff827`](https://github.com/NextNodeSolutions/standards/commit/1fff827c786772f8d1724c3bd5d9956cf26540aa) Thanks [@walid-mos](https://github.com/walid-mos)! - Update peer dependencies to support latest major versions:
    - vite: ^5.0.0 || ^6.0.0 || ^7.0.0 (adds Vite 6 and 7 support)
    - vitest: ^3.0.0 || ^4.0.0 (adds Vitest 4 support)

## 2.2.0

### Minor Changes

- [#23](https://github.com/NextNodeSolutions/standards/pull/23) [`a6cbcb1`](https://github.com/NextNodeSolutions/standards/commit/a6cbcb147c26b5cce6c05e0ea8d29667b1a8640c) Thanks [@walid-mos](https://github.com/walid-mos)! - Add Prettier core config without plugins for TypeScript libraries
    - New `@nextnode/standards/prettier/core` export with zero plugins
    - Layered architecture: core (no plugins) -> base (Tailwind) -> astro (Tailwind + Astro)
    - Libraries without Tailwind can now use the core config without extra dependencies

## 2.1.3

### Patch Changes

- [#21](https://github.com/NextNodeSolutions/standards/pull/21) [`536be05`](https://github.com/NextNodeSolutions/standards/commit/536be050735ab3b3142d99841e82fea3f01d22ac) Thanks [@walid-mos](https://github.com/walid-mos)! - Improve Vitest configurations and fix backend/frontend defaults

- [#21](https://github.com/NextNodeSolutions/standards/pull/21) [`536be05`](https://github.com/NextNodeSolutions/standards/commit/536be050735ab3b3142d99841e82fea3f01d22ac) Thanks [@walid-mos](https://github.com/walid-mos)! - Update standards documentation and configurations

## 2.1.2

### Patch Changes

- [#19](https://github.com/NextNodeSolutions/standards/pull/19) [`1fa249d`](https://github.com/NextNodeSolutions/standards/commit/1fa249d387a13604b66f33ea90a04f251a30f692) Thanks [@walid-mos](https://github.com/walid-mos)! - Update standards documentation and configurations

## 2.1.1

### Patch Changes

- [#17](https://github.com/NextNodeSolutions/standards/pull/17) [`5b461fa`](https://github.com/NextNodeSolutions/standards/commit/5b461fa175a629d4aee92edc114dec963ce5ab44) Thanks [@walid-mos](https://github.com/walid-mos)! - Add Vitest type definitions for backend and frontend testing
    - Add vitest.backend.d.ts with Node.js specific test types for server-side testing
    - Add vitest.frontend.d.ts with DOM/browser specific test types for client-side testing
    - Enhanced testing capabilities with environment-specific type support

## 2.1.0

### Minor Changes

- [#15](https://github.com/NextNodeSolutions/standards/pull/15) [`f7ae89e`](https://github.com/NextNodeSolutions/standards/commit/f7ae89e8eeef37dbd3e49a74b864893fc35cd229) Thanks [@walid-mos](https://github.com/walid-mos)! - Add shared TypeScript and Vitest configurations
    - Add TypeScript configurations for Astro, Library, and Next.js projects
    - Add Vitest configurations for frontend (jsdom) and backend (node) environments
    - Export new configurations with proper peer dependencies for vite, vitest, and vite-tsconfig-paths
    - Frontend config includes mock cleanup and jsdom environment setup
    - Backend config uses Node environment with comprehensive coverage settings
    - All configurations follow NextNode strict typing standards and modern best practices

## 2.0.5

### Patch Changes

- [#13](https://github.com/NextNodeSolutions/standards/pull/13) [`5bf37ad`](https://github.com/NextNodeSolutions/standards/commit/5bf37adb7dd8ec8eba381f27b306ab47a3e65d67) Thanks [@walid-mos](https://github.com/walid-mos)! - Improve Biome import organization with separated type imports
    - Add Astro import support alongside React and Next
    - Separate type imports from value imports for better organization
    - Group React/Next/Astro/Node values together at top
    - Place all type imports (including React/Next/Astro) at bottom
    - Add proper blank line separators between import groups

    This change improves code readability by clearly separating value imports from type imports while keeping framework imports grouped at the top.

## 2.0.4

### Patch Changes

- [#10](https://github.com/NextNodeSolutions/standards/pull/10) [`06853f6`](https://github.com/NextNodeSolutions/standards/commit/06853f66e6f4d673494040169e2e14ba8136b275) Thanks [@walid-mos](https://github.com/walid-mos)! - fix: convert commitlint configuration from JSON to JavaScript

    Convert commitlint configuration from JSON format to JavaScript format to resolve compatibility issues. The configuration now exports a proper JavaScript module that can be imported correctly by commitlint.

    This fixes issues where the JSON configuration was not being properly loaded by commitlint tools.

## 2.0.3

### Patch Changes

- [#8](https://github.com/NextNodeSolutions/standards/pull/8) [`03ef639`](https://github.com/NextNodeSolutions/standards/commit/03ef63940d1172383727086b9d19bb98ca8450e5) Thanks [@walid-mos](https://github.com/walid-mos)! - Separate Biome and Prettier responsibilities for JSON formatting
    - Disable JSON formatting in Biome to prevent conflicts with Prettier
    - Configure Prettier to handle JSON files with proper tab indentation (4 spaces)
    - Maintain tsconfig.json comment support through Biome parser
    - Update commitlint dependencies to v19

    This resolves formatting conflicts between the two tools while maintaining the desired tab-based indentation for JSON files.

## 2.0.2

### Patch Changes

- [#6](https://github.com/NextNodeSolutions/standards/pull/6) [`89072e4`](https://github.com/NextNodeSolutions/standards/commit/89072e41a044a2aeb0225533f854079d746f3e20) Thanks [@walid-mos](https://github.com/walid-mos)! - Fix Biome JSON parser to allow comments in tsconfig.json files

    Add override configuration in Biome to allow comments specifically for tsconfig\*.json files while maintaining strict JSON parsing for all other JSON files. This resolves parsing errors with TypeScript configuration files that use comments.

## 2.0.1

### Patch Changes

- [#4](https://github.com/NextNodeSolutions/standards/pull/4) [`bfe20c2`](https://github.com/NextNodeSolutions/standards/commit/bfe20c2927e2b9aa7f92ccaa4e07d92e7763bd90) Thanks [@walid-mos](https://github.com/walid-mos)! - Configure Biome for JSON formatting with tab indentation
    - Add JSON and JSONC files to Biome includes
    - Disable general formatter (handled by Prettier)
    - Enable JSON-specific formatter with tab indentation (width 4)
    - Configure strict JSON parsing without comments or trailing commas

## 2.0.0

### Major Changes

- [#1](https://github.com/NextNodeSolutions/standards/pull/1) [`a6ad82a`](https://github.com/NextNodeSolutions/standards/commit/a6ad82abbae3e92a7aa6ffdc49c2a8b3d24bc84c) Thanks [@walid-mos](https://github.com/walid-mos)! - Initial release of @nextnode/standards - unified configuration package for NextNode projects

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
