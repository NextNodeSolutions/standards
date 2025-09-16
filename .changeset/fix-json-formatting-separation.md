---
'@nextnode/standards': patch
---

Separate Biome and Prettier responsibilities for JSON formatting

- Disable JSON formatting in Biome to prevent conflicts with Prettier
- Configure Prettier to handle JSON files with proper tab indentation (4 spaces)
- Maintain tsconfig.json comment support through Biome parser
- Update commitlint dependencies to v19

This resolves formatting conflicts between the two tools while maintaining the desired tab-based indentation for JSON files.
