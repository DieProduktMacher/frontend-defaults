# Shared stylelint config [![npm](https://img.shields.io/npm/v/@dieproduktmacher/stylelint-config.svg)](https://www.npmjs.com/package/@dieproduktmacher/stylelint-config)

> Reusable Stylelint config

## What's in?

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) as underlaying ruleset
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) to disable rules that might conflict with Prettier (because we assume that Prettier is in use)
- Additional rules to support [TailwindCSS Functions & Directives](https://tailwindcss.com/docs/functions-and-directives) (because we assume that TailwindCSS is in use and it dosn't hurt if not)

## Usage

`yarn add -D stylelint @dieproduktmacher/stylelint-config`

**stylelint.config.js**

```js
module.exports = require('@dieproduktmacher/stylelint-config');
```

**.stylelintignore**

```
node_modules/
```

**package.json**

```json
{
  "scripts": {
    "lint:css": "stylelint src/**/*.*ss"
  }
}
```

## License

[MIT License](./LICENSE)
