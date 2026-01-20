// // import js from "@eslint/js";
// // import globals from "globals";
// // import tseslint from "typescript-eslint";
// // import { defineConfig } from "eslint/config";

// // export default defineConfig([
// //   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
// //    rules: {
// //       // ❌ var ব্যবহার করলে error
// //       "no-var": "error",

// //       // ⚠️ unused variable error
// //       "@typescript-eslint/no-unused-vars": "error",

// //       // console.log allow
// //       "no-console": "off",
// //     },
// //   tseslint.configs.recommended,
// // ]);
// import js from '@eslint/js';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import { defineConfig } from 'eslint/config';

// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
//     plugins: { js },
//     extends: ['js/recommended'],
//     languageOptions: {
//       globals: globals.node,
//     },
//     rules: {
//       // ❌ var ব্যবহার করলে error
//       'no-var': 'error',

//       // ⚠️ unused variable error
//       '@typescript-eslint/no-unused-vars': 'error',

//       // console.log allow
//       'no-console': 'warn',

//       'prefer-const': 'error',
//       'no-undef': 'error',
//     },
//   },

//   // TypeScript recommended rules
//   ...tseslint.configs.recommended,
// ]);


import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      prettier,
    },
    extends: [
      "js/recommended",
      ...tseslint.configs.recommended,
      prettierConfig, // ⛔ ESLint formatting rule বন্ধ
    ],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      // ESLint rules
      "no-var": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": "off",

      // 🔥 Prettier error ESLint এ দেখাবে
      "prettier/prettier": "error",
    },
  },
]);
