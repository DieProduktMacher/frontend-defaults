module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.gql', '*.graphql'],
      options: {
        parser: 'graphql',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        printWidth: 60,
        useTabs: false,
        tabWidth: 2,
      },
    },
    {
      files: '*.mdx',
      options: {
        parser: 'mdx',
        printWidth: 60,
        useTabs: false,
        tabWidth: 2,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.stories.ts', '*.stories.tsx'],
      options: {
        parser: 'typescript',
        useTabs: false,
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        parser: 'yaml',
        useTabs: false,
      },
    },
  ],
};
