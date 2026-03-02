/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'zhangfc-resume.oss-cn-hangzhou.aliyuncs.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
