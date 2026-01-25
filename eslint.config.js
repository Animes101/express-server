import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      js,
    },
    extends: [
      'js/recommended',
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      // ESLint rules
      'no-var': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
]);
