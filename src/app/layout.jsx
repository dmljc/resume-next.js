import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { I18nProvider } from '../lib/i18n';
import '../index.css';

export const metadata = {
    // title: 25-60 字符，核心关键词前置
    title: {
        default: '张芳朝(芳朝) - 全栈开发工程师 - 三维可视化 - 性能优化',
        template: '%s | 张芳朝',
    },
    // description: 80-160 字符，包含关键词 + 差异化优势 + 行动号召
    description:
        '张芳朝，又名芳朝，全栈开发工程师。专注三维可视化、性能优化、系统重构、SSR服务端渲染与SEO优化。',
    authors: [{ name: '张芳朝', url: 'https://zhangfc.cn' }],
    creator: '张芳朝',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: 'https://zhangfc.cn',
    },
    openGraph: {
        title: '张芳朝 | 9年资深前端开发工程师',
        description: '专注三维可视化、性能优化、中后台系统架构，主导多个核心项目落地。',
        url: 'https://zhangfc.cn',
        siteName: '张芳朝个人简历',
        locale: 'zh_CN',
        type: 'website',
        images: [
            {
                // 百度出图推荐尺寸：宽度 ≥ 800px
                url: 'https://zhangfc.cn/baidu-cover.jpg',
                width: 1200,
                height: 744,
                alt: '张芳朝 - 全栈开发工程师',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '张芳朝 | 9年资深前端开发工程师',
        description: '专注三维可视化、性能优化、中后台系统架构，主导多个核心项目落地。',
        images: ['https://zhangfc.cn/baidu-cover.jpg'],
    },
    verification: {
        baidu: 'codeva-fHq7JvMXY2',
        google: '8Bzow2MWMxvOanjHF3mdlcSYqqU5CCi_e6Rawbr1n2k',
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: '张芳朝',
        jobTitle: '全栈开发工程师',
        url: 'https://zhangfc.cn',
        image: 'https://zhangfc.cn/baidu-cover.jpg',
        sameAs: ['https://zhangfc.cn'],
        description: '9年前端开发经验，专注三维可视化、性能优化、系统重构。',
    };

    return (
        <html lang="zh-CN" data-scroll-behavior="smooth">
            <head>
                <meta name="baidu-site-verification" content="codeva-fHq7JvMXY2" />
                {/* 百度搜索出图优化：显式指定首选图片 */}
                <meta name="image" content="https://zhangfc.cn/baidu-cover.jpg" />
                <link rel="image_src" href="https://zhangfc.cn/baidu-cover.jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans antialiased">
                <I18nProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
