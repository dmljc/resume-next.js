import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    // 避免 Turbopack 将仓库根误判为上一级目录（会导致 @import 'tailwindcss' 在错误上下文中解析失败）
    turbopack: {
        root: __dirname,
        resolveAlias: {
            tailwindcss: path.join(__dirname, 'node_modules/tailwindcss'),
        },
    },
    webpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            tailwindcss: path.join(__dirname, 'node_modules/tailwindcss'),
        };
        return config;
    },
};

export default nextConfig;
