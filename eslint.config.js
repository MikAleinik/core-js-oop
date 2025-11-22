import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: { prettier: prettierPlugin },
    rules: { ...js.configs.recommended.rules, 'prettier/prettier': 'error' },
  },
];
