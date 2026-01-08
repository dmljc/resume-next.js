'use client';

import * as React from 'react';
import { Sparkles, Briefcase, GraduationCap, Mail } from 'lucide-react';

export default function SectionNav() {
    const [activeSection, setActiveSection] = React.useState(null);

    React.useEffect(() => {
        const sections = ['skills', 'experience', 'education', 'contact'];
        // 使用 IntersectionObserver 避免滚动时频繁 getBoundingClientRect() 触发布局计算（forced reflow）
        const ratios = new Map();
        const thresholds = Array.from({ length: 21 }, (_, i) => i / 20); // 0..1
        const observer = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    const id = entry.target?.id;
                    if (!id) continue;
                    ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
                }
                // 选取“中心带”里交叉比例最高的 section
                let bestId = null;
                let bestRatio = 0;
                for (const id of sections) {
                    const r = ratios.get(id) ?? 0;
                    if (r > bestRatio) {
                        bestRatio = r;
                        bestId = id;
                    }
                }
                setActiveSection(prev => (bestId && bestId !== prev ? bestId : prev));
            },
            {
                // 视口上下各裁掉 35%，仅保留中间 30% 作为“激活带”
                root: null,
                rootMargin: '-35% 0px -35% 0px',
                threshold: thresholds,
            }
        );

        // 观察各 section
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }

        // 初始兜底：如果 observer 尚未触发，默认选中第一个
        setActiveSection(prev => prev ?? sections[0]);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-40">
            {[
                { id: 'skills', label: '核心技能' },
                { id: 'experience', label: '工作经历' },
                { id: 'education', label: '教育背景' },
                { id: 'contact', label: '联系方式' },
            ].map(item => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer ${
                        activeSection === item.id
                            ? 'bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] text-white hover:opacity-90 hover:scale-105'
                            : 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-muted hover:scale-105'
                    }`}
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById(item.id);
                        if (!el) return;
                        setActiveSection(item.id);
                        try {
                            const hash = `#${item.id}`;
                            if (location.hash !== hash) history.replaceState(null, '', hash);
                        } catch (err) {
                            void err;
                        }
                        const reduceMotion =
                            window.matchMedia &&
                            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                        el.scrollIntoView({
                            behavior: reduceMotion ? 'auto' : 'smooth',
                            block: 'start',
                        });
                    }}
                >
                    <span className="sr-only">{item.label}</span>
                    {item.id === 'skills' && (
                        <Sparkles size={20} strokeWidth={2} className="shrink-0" />
                    )}
                    {item.id === 'experience' && (
                        <Briefcase size={20} strokeWidth={2} className="shrink-0" />
                    )}
                    {item.id === 'education' && (
                        <GraduationCap size={20} strokeWidth={2} className="shrink-0" />
                    )}
                    {item.id === 'contact' && (
                        <Mail size={20} strokeWidth={2} className="shrink-0" />
                    )}
                </a>
            ))}
        </div>
    );
}
