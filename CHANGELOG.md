# @nextnode/standards

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
