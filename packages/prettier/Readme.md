# Shared prettier config

## Usage

`yarn add -D @dieproduktmacher/prettier-config`

**.prettierrc.js**

```js
module.exports = require('@dieproduktmacher/prettier-config');
```

**.prettierignore**

```
# IDE
.vscode/

# Node
**/node_modules
**/package.json
**/package-lock.json
**/yarn.lock

# Build
**/build
**/dist
**/public
**/coverage
```

**package.json**

```json
  ...
  "scripts": {
    "prettier": "prettier --write \"**/*.*(gql|graphql|js|jsx|json|md|mdx|ts|tsx|yml|yaml)\"",
    ...
  },
  ...
```

## License

[MIT License](./LICENSE)
