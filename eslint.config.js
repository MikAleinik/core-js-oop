import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    // rules: { 'no-console': 'error' },
  },
]);

// console.log(js);
// console.log(js.configs.recommended.rules);
