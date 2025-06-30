import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: '19.1.0',
      },
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "avoid",
        endOfLine: "lf"
      }
    ],
    "react/react-in-jsx-scope": "off",
    },
  },
  prettierConfig,
]);
