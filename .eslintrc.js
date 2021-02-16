module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  overrides: [
    // Getting a "startToken" error. Leaving out for now.
    // {
    //   files: ['*.tsx', '*.ts', '*.js'],
    //   processor: '@graphql-eslint/graphql',
    // },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'eol-last': 'off',
        'prettier/prettier': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'sort-keys': ['warn', 'asc'],
  },
};
