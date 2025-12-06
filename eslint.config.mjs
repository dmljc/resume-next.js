import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

import globals from 'globals';

export default [
    // 全局忽略配置（必须单独放在最前面）
    {
        ignores: ['.next/**', 'node_modules/**', 'dist/**', 'out/**', 'build/**'],
    },
    // 基础推荐配置
    js.configs.recommended,
    // Prettier 配置（禁用与 Prettier 冲突的规则）
    prettierConfig,
    // Next.js 项目配置（src 目录下的 JS/JSX）
    {
        files: ['src/**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@next/next': nextPlugin,
            react: reactPlugin,
            'react-hooks': hooksPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...hooksPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            // React 相关
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            // Prettier 集成（可自动修复）
            'prettier/prettier': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
