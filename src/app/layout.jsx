import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { I18nProvider } from '../lib/i18n';
import '../index.css';

export const metadata = {
    metadataBase: new URL('https://zhangfc.cn'),
    // title: 25-60 字符，核心关键词前置
    title: {
        default: '张芳朝 | 全栈开发工程师 | 专注three.js 三维可视化与性能优化',
        template: '%s | 张芳朝',
    },
    // description: 80-160 字符，包含关键词 + 差异化优势 + 行动号召
    description:
        '张芳朝，9年资深全栈开发工程师。专注 three.js 三维可视化、性能优化、系统重构、SSR服务端渲染。主导多个核心项目从0到1落地。',
    keywords: '张芳朝,张芳朝简历,全栈开发工程师,前端专家,三维可视化,性能优化,React,Next.js',
    authors: [{ name: '张芳朝', url: 'https://zhangfc.cn' }],
    creator: '张芳朝',
    robots: {
        index: true,
        follow: true,
        maxImagePreview: 'large',
        googleBot: {
            index: true,
            follow: true,
            maxImagePreview: 'large',
        },
        // 显式告知百度蜘蛛
        other: {
            baiduBot: 'index,follow',
        },
    },
    alternates: {
        canonical: 'https://zhangfc.cn',
    },
    openGraph: {
        title: '张芳朝 | 9年资深全栈开发工程师',
        description: '专注三维可视化、性能优化、系统重构，提供高质量的 web 技术解决方案。',
        url: 'https://zhangfc.cn',
        siteName: '张芳朝个人官网',
        locale: 'zh_CN',
        type: 'website',
        images: [
            {
                url: 'https://zhangfc.cn/baidu-cover.jpg',
                width: 1200,
                height: 744,
                alt: '张芳朝 - 全栈开发工程师',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '张芳朝 | 9年资深全栈开发工程师',
        description: '专注三维可视化、性能优化、系统重构，提供高质量的 web 技术解决方案。',
        images: [
            {
                url: 'https://zhangfc.cn/baidu-cover.jpg',
                width: 1200,
                height: 744,
                alt: '张芳朝 - 全栈开发工程师',
            },
        ],
    },
    verification: {
        baidu: 'codeva-fHq7JvMXY2',
        google: '8Bzow2MWMxvOanjHF3mdlcSYqqU5CCi_e6Rawbr1n2k',
    },
};

export default function RootLayout({ children }) {
    const today = new Date().toISOString().split('T')[0];
    const coverImage = {
        '@type': 'ImageObject',
        url: 'https://zhangfc.cn/baidu-cover.jpg',
        width: 1200,
        height: 744,
        caption: '张芳朝个人官网首页封面图',
    };
    const profileImage = {
        '@type': 'ImageObject',
        url: 'https://zhangfc.cn/resume.jpg',
        width: 400,
        height: 400,
        caption: '张芳朝个人头像',
    };
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: '张芳朝',
            jobTitle: '全栈开发工程师',
            url: 'https://zhangfc.cn',
            image: profileImage,
            sameAs: ['https://github.com/zhangfc', 'https://zhangfc.cn'],
            description: '9年前端开发经验，专注三维可视化、性能优化、系统重构。',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: '张芳朝个人官网',
            url: 'https://zhangfc.cn',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '张芳朝 | 全栈开发工程师 | 专注三维可视化与性能优化',
            url: 'https://zhangfc.cn',
            primaryImageOfPage: coverImage,
            thumbnailUrl: 'https://zhangfc.cn/baidu-cover.jpg',
            image: [coverImage, profileImage],
            about: {
                '@type': 'Person',
                name: '张芳朝',
                url: 'https://zhangfc.cn',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: '首页',
                    item: 'https://zhangfc.cn/',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: '在线简历',
                    item: 'https://zhangfc.cn/resume',
                },
            ],
        },
    ];

    return (
        <html lang="zh-CN" data-scroll-behavior="smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="baidu-site-verification" content="codeva-fHq7JvMXY2" />
                <meta name="mobile-agent" content="format=html5;url=https://zhangfc.cn/" />
                {/* 辅助百度等搜索引擎出图：图片同时已在 body 中真实渲染（见 SeoCover） */}
                <meta name="image" content="https://zhangfc.cn/baidu-cover.jpg" />
                <link rel="image_src" href="https://zhangfc.cn/baidu-cover.jpg" />
                <meta name="thumbnail" content="https://zhangfc.cn/baidu-cover.jpg" />
                <meta itemProp="image" content="https://zhangfc.cn/baidu-cover.jpg" />
                <meta property="og:image:secure_url" content="https://zhangfc.cn/baidu-cover.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="744" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta
                    property="og:image:alt"
                    content="张芳朝 - 全栈开发工程师 | 专注 three.js 三维可视化与性能优化"
                />
                <meta property="og:updated_time" content={today} />
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
