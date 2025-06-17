// .eslint.config.mjs
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import globals from "globals";

export default [
    {
        files: ["**/*.{ts,tsx}"],
        ignores: ["node_modules", "dist", "coverage", ".cache", "*.config.*"],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.eslint.json",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react: eslintPluginReact,
            "@typescript-eslint": eslintPluginTs,
        },
        rules: {
            // Base
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/consistent-type-imports": "warn",

            // React
            "react/react-in-jsx-scope": "off", // Not needed with automatic JSX
            "react/jsx-uses-react": "off",
            "react/jsx-boolean-value": "warn",
            "react/self-closing-comp": "warn",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
