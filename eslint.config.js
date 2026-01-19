// import prettier from "eslint-config-prettier";
// import pluginPrettier from "eslint-plugin-prettier";

// export default [
//   // Ignore node_modules & dist (প্রয়োজন মতো)
//   {
//     ignores: ["node_modules/**", "dist/**"],
//   },

//   // Prettier plugin
//   {
//     plugins: {
//       prettier: pluginPrettier,
//     },
//     rules: {
//       "prettier/prettier": "error",
//       "no-unused-vars": "warn",
//       "no-console": "off",
//     },
//   },

//   // Prettier recommended config
//   prettier,
// ];


import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  // Ignore node_modules & dist
  {
    ignores: ["node_modules/**", "dist/**"],
  },

  // TypeScript files
  {
    files: ["*.ts", "*.tsx"],
    parser: "@typescript-eslint/parser",
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  // Prettier recommended config
  prettier,
];
