'use client';

import * as React from 'react';
import { I18nContext, dict } from './i18n-core.js';

export function I18nProvider({ children }) {
    const [lang, setLang] = React.useState('zh');
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        // 必须在客户端挂载后再读取本地语言偏好；SSR 阶段不可访问 localStorage。
        /* eslint-disable react-hooks/set-state-in-effect */
        setMounted(true);
        const saved = localStorage.getItem('lang');
        if (saved) {
            setLang(saved);
        }
        /* eslint-enable react-hooks/set-state-in-effect */
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

    return (
        <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}
