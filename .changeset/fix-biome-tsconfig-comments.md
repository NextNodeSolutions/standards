---
'@nextnode/standards': patch
---

Fix Biome JSON parser to allow comments in tsconfig.json files

Add override configuration in Biome to allow comments specifically for tsconfig\*.json files while maintaining strict JSON parsing for all other JSON files. This resolves parsing errors with TypeScript configuration files that use comments.
