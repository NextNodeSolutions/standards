---
'@nextnode/standards': patch
---

fix: convert commitlint configuration from JSON to JavaScript

Convert commitlint configuration from JSON format to JavaScript format to resolve compatibility issues. The configuration now exports a proper JavaScript module that can be imported correctly by commitlint.

This fixes issues where the JSON configuration was not being properly loaded by commitlint tools.
