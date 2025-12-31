import Hero from '../components/sections/Hero';
import CoreSkills from '../components/sections/CoreSkills';
import WorkTimeline from '../components/sections/WorkTimeline';
import Education from '../components/sections/Education';
import ContactGrid from '../components/sections/ContactGrid';
import ScrollTopButton from '../components/ScrollTopButton';
import SectionNav from '../components/SectionNav';

export const metadata = {
    title: '张芳朝(芳朝) - 全栈开发工程师 - 三维可视化 - 性能优化',
    description:
        '张芳朝，又名芳朝，9年资深前端/全栈开发经验。专注三维可视化、性能优化、系统重构。主导多个核心项目从0到1落地。',
    keywords: '张芳朝,芳朝,张芳朝简历,芳朝简历,全栈开发工程师,前端专家,三维可视化',
    alternates: {
        canonical: 'https://zhangfc.cn',
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
