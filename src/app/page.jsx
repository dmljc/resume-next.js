import Hero from '../components/sections/Hero';
import CoreSkills from '../components/sections/CoreSkills';
import WorkTimeline from '../components/sections/WorkTimeline';
import Education from '../components/sections/Education';
import ContactGrid from '../components/sections/ContactGrid';
import ScrollTopButton from '../components/ScrollTopButton';
import SectionNav from '../components/SectionNav';

export const metadata = {
    title: '张芳朝 | 全栈开发工程师 | 三维可视化与工程化实践',
    description:
        '张芳朝，10年软件开发（全栈）经验，包含4年团队管理。专注三维可视化、性能优化、系统重构与工程化建设。',
    keywords: '张芳朝,张芳朝简历,全栈开发工程师,技术负责人,三维可视化,性能优化,工程化',
    alternates: {
        canonical: 'https://zhangfc.cn',
    },
    openGraph: {
        images: [
            {
                url: 'https://zhangfc.cn/baidu-cover.jpg',
                width: 1200,
                height: 744,
                alt: '张芳朝 - 全栈开发工程师 | 三维可视化与工程化实践',
                type: 'image/jpeg',
            },
        ],
    },
};

export default function Home() {
    return (
        <div>
            <main className="relative pt-16">
                <div id="home">
                    <Hero />
                </div>
                <section id="skills">
                    <CoreSkills />
                </section>
                <section id="experience">
                    <WorkTimeline />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="contact">
                    <ContactGrid />
                </section>

                {/* 右侧模块导航 */}
                <SectionNav />
            </main>
            <ScrollTopButton />
        </div>
    );
}
