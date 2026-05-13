import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { I18nProvider } from '../lib/i18n';
import '../index.css';

const SITE_URL = 'https://zhangfc.cn';
const COVER_IMAGE_URL = `${SITE_URL}/baidu-cover.jpg`;
const COVER_IMAGE_ALT = '张芳朝 - 全栈开发工程师 | 三维可视化与工程化实践';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    // title: 25-60 字符，核心关键词前置
    title: {
        default: '张芳朝 | 全栈开发工程师 | 三维可视化与工程化实践',
        template: '%s | 张芳朝',
    },
    // description: 80-160 字符，包含关键词 + 差异化优势 + 行动号召
    description:
        '张芳朝，10年软件开发（全栈）经验，包含4年团队管理。专注 Three.js 三维可视化、性能优化、系统重构、SSR 服务端渲染与工程化建设。',
    keywords:
        '张芳朝,张芳朝简历,全栈开发工程师,技术负责人,三维可视化,性能优化,工程化,React,Next.js',
    authors: [{ name: '张芳朝', url: SITE_URL }],
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
        canonical: SITE_URL,
    },
    openGraph: {
        title: '张芳朝 | 10年全栈开发工程师',
        description: '专注三维可视化、性能优化、系统重构与工程化建设，具备团队管理和项目交付经验。',
        url: SITE_URL,
        siteName: '张芳朝个人官网',
        locale: 'zh_CN',
        type: 'website',
        images: [
            {
                url: COVER_IMAGE_URL,
                width: 1200,
                height: 744,
                alt: COVER_IMAGE_ALT,
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '张芳朝 | 10年全栈开发工程师',
        description: '专注三维可视化、性能优化、系统重构与工程化建设，具备团队管理和项目交付经验。',
        images: [
            {
                url: COVER_IMAGE_URL,
                width: 1200,
                height: 744,
                alt: COVER_IMAGE_ALT,
            },
        ],
    },
    verification: {
        baidu: 'codeva-fHq7JvMXY2',
        google: '8Bzow2MWMxvOanjHF3mdlcSYqqU5CCi_e6Rawbr1n2k',
    },
};

function SeoCover() {
    const coverStyle = {
        border: 0,
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        margin: 0,
        overflow: 'hidden',
        padding: 0,
        pointerEvents: 'none',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: 1,
    };

    return (
        <figure
            style={coverStyle}
            itemScope
            itemType="https://schema.org/ImageObject"
            aria-hidden="true"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/baidu-cover.jpg"
                alt={COVER_IMAGE_ALT}
                width="1200"
                height="744"
                loading="eager"
                decoding="sync"
                itemProp="contentUrl"
                style={coverStyle}
            />
            <meta itemProp="url" content={COVER_IMAGE_URL} />
            <meta itemProp="width" content="1200" />
            <meta itemProp="height" content="744" />
            <figcaption itemProp="caption" style={coverStyle}>
                张芳朝个人官网首页封面图
            </figcaption>
        </figure>
    );
}

export default function RootLayout({ children }) {
    const today = new Date().toISOString().split('T')[0];
    const coverImage = {
        '@type': 'ImageObject',
        url: COVER_IMAGE_URL,
        width: 1200,
        height: 744,
        caption: '张芳朝个人官网首页封面图',
    };
    const profileImage = {
        '@type': 'ImageObject',
        url: `${SITE_URL}/resume.jpg`,
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
            url: SITE_URL,
            image: profileImage,
            sameAs: ['https://github.com/zhangfc', SITE_URL],
            description:
                '10年软件开发（全栈）经验，包含4年团队管理，专注三维可视化、性能优化、系统重构与工程化建设。',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: '张芳朝个人官网',
            url: SITE_URL,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '张芳朝 | 全栈开发工程师 | 三维可视化与工程化实践',
            url: SITE_URL,
            primaryImageOfPage: coverImage,
            thumbnailUrl: COVER_IMAGE_URL,
            image: [coverImage, profileImage],
            about: {
                '@type': 'Person',
                name: '张芳朝',
                url: SITE_URL,
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
                    item: `${SITE_URL}/`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: '在线简历',
                    item: `${SITE_URL}/resume`,
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
                <meta name="robots" content="index,follow,max-image-preview:large" />
                <meta name="baiduspider" content="index,follow,max-image-preview:large" />
                {/* 辅助百度等搜索引擎出图：图片同时已在 body 中真实渲染。 */}
                <meta name="image" content={COVER_IMAGE_URL} />
                <link rel="image_src" href={COVER_IMAGE_URL} />
                <meta name="thumbnail" content={COVER_IMAGE_URL} />
                <meta itemProp="image" content={COVER_IMAGE_URL} />
                <meta property="og:image:secure_url" content={COVER_IMAGE_URL} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="744" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:alt" content={COVER_IMAGE_ALT} />
                <meta property="og:updated_time" content={today} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans antialiased">
                <SeoCover />
                <I18nProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
