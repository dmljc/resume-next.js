'use client';

import * as React from 'react';
import { I18nContext, dict } from './i18n-core.js';

export function I18nProvider({ children }) {
    const [lang, setLang] = React.useState('zh');
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('lang');
        if (saved) {
            setLang(saved);
        }
    }, []);

    React.useEffect(() => {
        if (mounted) {
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        }
    }, [lang, mounted]);

    const t = React.useCallback(
        key => {
            const entry = dict[key];
            if (!entry) return key;
            return entry[lang] ?? entry.zh;
        },
        [lang]
    );

    const toggleLang = React.useCallback(() => {
        const nextLang = lang === 'zh' ? 'en' : 'zh';
        setLang(nextLang);
    }, [lang]);

    if (!mounted) {
        return (
            <I18nContext.Provider value={{ lang: 'zh', setLang, toggleLang, t }}>
                <div style={{ visibility: 'hidden' }}>{children}</div>
            </I18nContext.Provider>
        );
    }

    return (
        <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}
