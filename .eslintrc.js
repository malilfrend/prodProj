module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        printWidth: 80,
        trailingComma: 'es5',
        proseWrap: 'never',
        tsxSingleQuote: false,
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
