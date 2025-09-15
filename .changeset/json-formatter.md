---
'@nextnode/standards': patch
---

Configure Biome for JSON formatting with tab indentation

- Add JSON and JSONC files to Biome includes
- Disable general formatter (handled by Prettier)
- Enable JSON-specific formatter with tab indentation (width 4)
- Configure strict JSON parsing without comments or trailing commas
