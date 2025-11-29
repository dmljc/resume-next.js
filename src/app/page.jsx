import Hero from "../components/sections/Hero";
import CoreSkills from "../components/sections/CoreSkills";
import WorkTimeline from "../components/sections/WorkTimeline";
import Education from "../components/sections/Education";
import ContactGrid from "../components/sections/ContactGrid";
import ScrollTopButton from "../components/ScrollTopButton";
import SectionNav from "../components/SectionNav";

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
