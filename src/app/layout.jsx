import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { I18nProvider } from "../lib/i18n";
import "../index.css";

export const metadata = {
    title: {
        default: "张芳朝 - 前端开发工程师 | 9年经验 | React/Vue/Three.js",
        template: "%s | 张芳朝"
    },
    description: "张芳朝，资深前端开发工程师，9年前端开发经验，4年团队管理经验。精通React、Vue、Three.js、Next.js、TypeScript，擅长三维可视化、中后台系统重构、性能优化。主导多个核心项目落地，提升业务效率与用户体验。",
    keywords: [
        "张芳朝",
        "张芳朝简历",
        "前端开发工程师",
        "前端开发",
        "React开发",
        "Vue开发",
        "Three.js",
        "Next.js",
        "TypeScript",
        "三维可视化",
        "性能优化",
        "团队管理",
        "全栈开发",
        "9年经验",
        "Zhang Fangchao",
        "Frontend Developer",
        "Full Stack Developer"
    ],
    authors: [{ name: "张芳朝", url: "https://zhangfc.cn" }],
    creator: "张芳朝",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: "https://zhangfc.cn",
    },
    openGraph: {
        title: "张芳朝 - 前端开发工程师 | 9年经验",
        description: "张芳朝，资深前端开发工程师，9年前端开发经验。精通React、Vue、Three.js、Next.js，擅长三维可视化、性能优化。",
        url: "https://zhangfc.cn",
        siteName: "张芳朝个人简历",
        locale: "zh_CN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "张芳朝 - 前端开发工程师",
        description: "张芳朝，资深前端开发工程师，9年前端开发经验。精通React、Vue、Three.js、Next.js。",
    },
    verification: {
        baidu: "codeva-IbHDbJAeqx",
    },
    other: {
        "baidu-site-verification": "codeva-IbHDbJAeqx",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <head>
                <meta name="baidu-site-verification" content="codeva-IbHDbJAeqx" />
            </head>
            <body className="font-sans">
                <I18nProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
