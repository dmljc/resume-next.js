import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { I18nProvider } from "../lib/i18n";
import "../index.css";

// 使用 next/font 优化字体加载，避免 FOUT/FOIT 闪烁
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata = {
    // title: 搜索结果标题，建议 25-30 字符，突出核心身份和差异化优势
    title: {
        default: "张芳朝 | 9年资深前端开发工程师 - 三维可视化专家",
        template: "%s | 张芳朝"
    },
    // description: 搜索结果摘要，建议 80-120 字符，包含核心技能和价值主张
    description: "专注三维可视化、性能优化、系统重构、中后台系统架构。",
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
        title: "张芳朝 | 9年资深前端开发工程师",
        description: "专注三维可视化、性能优化、中后台系统架构，主导多个核心项目落地。",
        url: "https://zhangfc.cn",
        siteName: "张芳朝个人简历",
        locale: "zh_CN",
        type: "website",
        images: [
            {
                url: "https://zhangfc.cn/resume.webp",
                width: 400,
                height: 400,
                alt: "张芳朝 - 前端开发工程师头像",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "张芳朝 | 9年资深前端开发工程师",
        description: "专注三维可视化、性能优化、中后台系统架构，主导多个核心项目落地。",
        images: ["https://zhangfc.cn/resume.webp"],
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
        <html lang="zh-CN" data-scroll-behavior="smooth" className={inter.variable}>
            <head>
                <meta name="baidu-site-verification" content="codeva-IbHDbJAeqx" />
            </head>
            <body className={`${inter.className} antialiased`}>
                <I18nProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
