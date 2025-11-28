import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { I18nProvider } from "../lib/i18n";
import "../index.css";

export const metadata = {
    title: {
        default: "Zhang Fangchao - Frontend Developer Resume",
        template: "%s | Zhang Fangchao"
    },
    description: "Professional resume of Zhang Fangchao, a Frontend Developer with 9 years of experience specializing in React, Vue, and performance optimization.",
    keywords: [
        "张芳朝",
        "Zhang Fangchao",
        "前端开发",
        "Frontend Developer",
        "全栈开发",
        "Full Stack Developer",
        "React",
        "Vue",
        "Three.js",
        "Nest.js",
        "TypeScript",
        "JavaScript",
        "微信小程序",
        "WeChat Mini Program",
        "三维可视化",
        "3D Visualization",
        "性能优化",
        "Performance Optimization",
        "团队管理",
        "Team Leadership",
        "中后台系统",
        "Admin System",
        "Webpack",
        "Vite",
        "Rollup",
        "Node.js",
        "MySQL",
        "Nginx",
        "9年经验",
        "9 Years Experience",
        "个人简历",
        "Resume"
    ],
    authors: [{ name: "Zhang Fangchao", url: "https://zhangfc.cn" }],
    creator: "Zhang Fangchao",
    openGraph: {
        title: "Zhang Fangchao - Frontend Developer Resume",
        description: "Professional resume of Zhang Fangchao, a Frontend Developer with 9 years of experience.",
        url: "https://zhangfc.cn",
        siteName: "Zhang Fangchao Resume",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zhang Fangchao - Frontend Developer Resume",
        description: "Professional resume of Zhang Fangchao, a Frontend Developer with 9 years of experience.",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
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
