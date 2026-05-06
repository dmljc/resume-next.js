'use client';

import Image from 'next/image';
import { Button } from '../ui/button.jsx';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../../lib/i18n-core.js';

export default function Hero() {
    const { t, lang } = useI18n();
    const desc = t('hero.desc');
    const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="hero-grid-overlay" />
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32 grid gap-8 sm:gap-10 lg:gap-12 items-center lg:grid-cols-[2fr_1fr]">
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="hero-reveal block">{t('hero.greeting')}</span>
                        <span className="hero-reveal hero-reveal-delay-1 gradient-text inline-block">
                            {t('brand.name')}
                        </span>
                        <span className="sr-only">
                            {' '}
                            - 全栈开发工程师 | 三维可视化 & 性能优化专家
                        </span>
                    </h1>
                    <div className="hero-reveal hero-reveal-delay-2 mt-5 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl lg:max-w-none">
                        {desc.split('\n').map((line, idx) => {
                            let m;
                            if (lang === 'zh') {
                                m = line.match(/^【([^】]+)】：\s*(.*)$/);
                                if (m) {
                                    return (
                                        <div key={idx} className="flex flex-wrap items-baseline">
                                            <span className="shrink-0 whitespace-nowrap">
                                                {'【' + m[1] + '】：'}
                                            </span>
                                            <span className="break-words min-w-0 flex-1">
                                                {m[2]}
                                            </span>
                                        </div>
                                    );
                                }
                            }
                            m = line.match(/^([^:]+):\s*(.*)$/);
                            if (m) {
                                return (
                                    <div key={idx} className="flex flex-wrap items-baseline">
                                        <span className="shrink-0 whitespace-nowrap">
                                            {m[1] + ':'}
                                        </span>
                                        <span className="break-words min-w-0 flex-1">{m[2]}</span>
                                    </div>
                                );
                            }
                            return (
                                <div key={idx} className="break-words">
                                    {line}
                                </div>
                            );
                        })}
                    </div>
                    <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                        <Button
                            variant="gradient"
                            className="group transform transition-transform duration-300 hover:scale-105"
                            onClick={() => scrollTo('skills')}
                        >
                            <span>{t('hero.learn')}</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                        <Button
                            variant="ghost"
                            className="group transform transition-transform duration-300 hover:scale-105 hover:!bg-transparent border border-dashed border-[hsl(var(--grad-to))]"
                            onClick={() => scrollTo('contact')}
                        >
                            {t('hero.contact')}
                        </Button>
                    </div>
                </div>
                <div className="hero-reveal hero-reveal-delay-2 flex justify-center lg:justify-end">
                    <div
                        id="hero-avatar"
                        className="hero-avatar-float hero-avatar-3d relative z-10 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 3xl:h-96 3xl:w-96"
                    >
                        <div className="hero-orbit rounded-full pointer-events-none" aria-hidden />
                        <div className="hero-avatar-inner absolute inset-[6px] rounded-full overflow-hidden shadow-[0_20px_50px_-12px_rgb(0_0_0/0.35)] ring-1 ring-white/40 dark:ring-white/10 border border-gray-100/80 dark:border-gray-700/80 bg-card">
                            <Image
                                src="/resume.jpg"
                                alt="张芳朝 - 前端开发工程师头像"
                                fill
                                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 240px, (max-width: 1280px) 288px, 320px"
                                className="object-cover object-center"
                                priority
                                fetchPriority="high"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* 底部分隔波浪 */}
            <div className="wave-divider" aria-hidden="true">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                    <path
                        d="M0,0 C300,80 600,0 1200,90 L1200,120 L0,120 Z"
                        fill="hsl(var(--background))"
                    />
                </svg>
            </div>
        </section>
    );
}
