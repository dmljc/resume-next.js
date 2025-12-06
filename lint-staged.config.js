/** @type {import('lint-staged').Config} */
const config = {
    // JS/JSX 文件：ESLint + Prettier
    '*.{js,jsx,mjs,cjs}': ['eslint --fix', 'prettier --write'],

    // CSS 文件：Stylelint + Prettier
    '*.css': ['stylelint --fix', 'prettier --write'],

    // JSON/MD 文件：Prettier
    '*.{json,md}': ['prettier --write'],
};

export default config;
