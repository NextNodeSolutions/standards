---
'@nextnode/standards': patch
---

Improve Biome import organization with separated type imports

- Add Astro import support alongside React and Next
- Separate type imports from value imports for better organization
- Group React/Next/Astro/Node values together at top
- Place all type imports (including React/Next/Astro) at bottom
- Add proper blank line separators between import groups

This change improves code readability by clearly separating value imports from type imports while keeping framework imports grouped at the top.
