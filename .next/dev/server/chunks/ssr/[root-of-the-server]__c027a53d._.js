module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/projects/resume-next/src/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "isMobileDevice",
    ()=>isMobileDevice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function isMobileDevice() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    // 打印或打印预览期间，避免误判为移动端导致路由重定向
    // 在 Chrome/Edge/Safari 中打开系统打印对话框时，视口尺寸可能被修改，
    // (max-width: 768px) 会临时匹配；这里显式忽略 print 媒体状态。
    const isPrinting = undefined;
    const ua = undefined;
    const isUA = undefined;
    const isCoarse = undefined;
    const isSmall = undefined;
}
}),
"[project]/projects/resume-next/src/components/ui/button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ asChild = false, className, variant = "default", size = "md", children, ...props }, ref)=>{
    const variants = {
        default: "bg-primary text-primary-foreground hover:opacity-90 hover:scale-105",
        outline: "border border-border hover:bg-muted hover:scale-105",
        ghost: "hover:bg-muted hover:scale-105",
        gradient: "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] via-[hsl(var(--grad-to))] to-[hsl(var(--grad-alt))] hover:opacity-90 hover:scale-105"
    };
    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg"
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed", variants[variant], sizes[size], className);
    if (asChild && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(children.props?.className, classes),
            ...props
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/resume-next/src/components/ui/button.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/projects/resume-next/src/lib/i18n-core.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nContext",
    ()=>I18nContext,
    "dict",
    ()=>dict,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const dict = {
    "brand.name": {
        zh: "张芳朝",
        en: "Zhang Fangchao"
    },
    "site.title": {
        zh: "张芳朝 — 前端开发",
        en: "ZhangFangChao — Frontend Developer"
    },
    "nav.home": {
        zh: "主页",
        en: "Home"
    },
    "nav.skills": {
        zh: "核心技能",
        en: "Core Skills"
    },
    "nav.experience": {
        zh: "工作经历",
        en: "Experience"
    },
    "nav.education": {
        zh: "教育背景",
        en: "Education"
    },
    "nav.contact": {
        zh: "联系方式",
        en: "Contact"
    },
    "nav.resume": {
        zh: "在线简历",
        en: "Online Resume"
    },
    "nav.aboutSite": {
        zh: "关于站点",
        en: "About Site"
    },
    "nav.toggleTheme": {
        zh: "切换主题",
        en: "Toggle Theme"
    },
    "nav.toggleLang": {
        zh: "切换语言",
        en: "Toggle Language"
    },
    // Resume filename for PDF export
    "resume.filename": {
        zh: "张芳朝-全栈偏前端-9年工作经验.pdf",
        en: "Zhang-Fangchao-Full-Stack-Frontend-leaning-9-Years-Experience.pdf"
    },
    // Resume page common actions
    "resume.download": {
        zh: "下载简历",
        en: "Download Resume"
    },
    "resume.print": {
        zh: "打印简历",
        en: "Print Resume"
    },
    "resume.pcOnly": {
        zh: "请在 PC 端查看在线简历",
        en: "Please view the online resume on a PC"
    },
    // Common profile subtitle shown on both pages
    "profile.subtitle": {
        zh: "前端开发 | 9年经验",
        en: "Frontend Developer | 9 Years Experience"
    },
    // Experience section
    // Shared advantage section (used in hero and resume page)
    "advantages.title": {
        zh: "个人优势",
        en: "Personal Strengths"
    },
    "advantages.label.experience": {
        zh: "【专业经验】",
        en: "[Professional Experience]"
    },
    "advantages.label.stack": {
        zh: "【技术体系】",
        en: "[Tech Stack]"
    },
    "advantages.label.focus": {
        zh: "【特色领域】",
        en: "[Specialized Areas]"
    },
    "advantages.label.highlights": {
        zh: "【项目亮点】",
        en: "[Project Highlights]"
    },
    "advantages.value.experience": {
        zh: "9 年前端开发 + 4 年团队管理",
        en: "9 years in frontend development + 4 years in team leadership"
    },
    "advantages.value.stack": {
        zh: "React、Vue、Three.js、Nest.js、TypeScript、Vite、Rollup",
        en: "React, Vue, Three.js, Nest.js, TypeScript, Vite, Rollup"
    },
    "advantages.value.focus": {
        zh: "三维可视化、中后台重构、性能优化",
        en: "3D visualization, admin‑system refactoring, performance optimization"
    },
    "advantages.value.highlights": {
        zh: "主导多个核心项目落地，提升业务效率与用户体验",
        en: "Led multiple core projects; improved business efficiency and user experience"
    },
    "hero.greeting": {
        zh: "你好，我是",
        en: "Hi, I’m"
    },
    "hero.learn": {
        zh: "了解更多",
        en: "Learn More"
    },
    "hero.contact": {
        zh: "联系我",
        en: "Contact Me"
    },
    "hero.desc": {
        zh: "【专业经验】：9 年前端开发 + 4 年团队管理\n【技术体系】：React、Vue、Three.js、Nest.js、TypeScript、Vite、Rollup\n【特色领域】：三维可视化、中后台重构、性能优化\n【结果导向】：主导多个核心项目落地，提升业务效率与用户体验",
        en: "Professional Experience: 9 years in frontend · 4 years in team leadership\nTech Stack: React, Vue, Three.js, Nest.js, TypeScript, Vite, Rollup\nFocus Areas: 3D visualization, admin‑system refactoring, performance optimization\nOutcome‑Driven: Led multiple core projects; improved business efficiency and user experience"
    },
    "skills.title": {
        zh: "核心技能",
        en: "Core Skills"
    },
    "skills.subtitle": {
        zh: "深厚的技术积累和全栈开发经验",
        en: "Strong technical background and full‑stack experience"
    },
    // Skills section subtitle
    // Shared skill category labels and descriptions
    "skills.frontend": {
        zh: "前端技术",
        en: "Frontend"
    },
    "skills.backend": {
        zh: "后端技术",
        en: "Backend"
    },
    "skills.management": {
        zh: "团队管理",
        en: "Team Leadership"
    },
    "skills.frontend.desc": {
        zh: "熟练掌握 React、Vue、Three.js、ES6+、TypeScript、微信小程序、AI 辅助编程 等。",
        en: "Expert: React, Vue 3, TypeScript, Three.js, ES6+; Proficient: WeChat Mini Programs, Webpack, Vite, Rollup; Familiar: Git, frontend performance optimization, cross‑platform adaptation."
    },
    "skills.backend.desc": {
        zh: "掌握 Nest.js、Node.js、Nginx、MySQL；具备服务端开发、数据存储设计、接口设计能力。",
        en: "Proficient: Nest.js, Node.js, Nginx, MySQL; Familiar: server‑side development, data storage design, API design."
    },
    "skills.management.desc": {
        zh: "技术规划、团队建设、项目管理、技术规范制定、内部培训赋能。",
        en: "Tech strategy, team building, project management, technical standards, internal training & enablement."
    },
    "education.title": {
        zh: "教育背景",
        en: "Education"
    },
    "education.subtitle": {
        zh: "我的学历与专业背景",
        en: "My education and academic background"
    },
    "contact.title": {
        zh: "联系方式",
        en: "Contact"
    },
    "contact.subtitle": {
        zh: "通过以下方式与我取得联系，期待与您交流",
        en: "Get in touch via these methods; I look forward to connecting."
    },
    // Shared contact labels
    "contact.phone": {
        zh: "电话",
        en: "Phone"
    },
    "contact.email": {
        zh: "邮箱",
        en: "Email"
    },
    "contact.wechat": {
        zh: "微信号",
        en: "WeChat"
    },
    "contact.website": {
        zh: "个人网站",
        en: "Website"
    },
    // Contact actions & messages
    "contact.copy.phone": {
        zh: "复制电话",
        en: "Copy Phone"
    },
    "contact.copy.email": {
        zh: "复制邮箱",
        en: "Copy Email"
    },
    "contact.copy.wechat": {
        zh: "复制微信号",
        en: "Copy WeChat"
    },
    "contact.copy.fail": {
        zh: "复制失败，请重试",
        en: "Copy failed, please try again"
    },
    "contact.copy.suffix": {
        zh: "成功",
        en: " successfully"
    },
    // About Site page
    "about.intro": {
        zh: "这是一个由 Trae 国际版 AI 编辑器开发、基于 React 的在线个人简历项目，托管于 zhangfc.cn 域名下（其中，“zhang”为作者姓氏的汉语拼音，“fc”为作者名字的拼音首字母）。",
        en: "This is an online resume project built with the Trae AI Editor (International Edition), implemented with React, and hosted at zhangfc.cn (\"zhang\" is the surname in pinyin; \"fc\" are the initials of the given name)."
    },
    "about.features.title": {
        zh: "项目功能",
        en: "Features"
    },
    "about.features.label.pages": {
        zh: "页面构成：",
        en: "Pages:"
    },
    "about.features.value.pages": {
        zh: "包含主页、在线简历、关于站点等。",
        en: "Includes Home, Online Resume, and About Site."
    },
    "about.features.label.experience": {
        zh: "交互体验：",
        en: "User Experience:"
    },
    "about.features.value.experience": {
        zh: "支持中英文双语切换与亮色/暗色主题切换。",
        en: "Supports bilingual (Chinese/English) and light/dark theme switching."
    },
    "about.features.label.resume": {
        zh: "简历操作：",
        en: "Resume Actions:"
    },
    "about.features.value.resume": {
        zh: "在线简历支持直接打印或导出为 PDF。",
        en: "The online resume supports printing and exporting to PDF."
    },
    "about.tech.title": {
        zh: "技术实现",
        en: "Implementation"
    },
    "about.tech.item.react": {
        zh: "前端基于 React + React Router 构建，使用 Vite 打包。",
        en: "Built with React + React Router; bundled with Vite."
    },
    "about.tech.item.tailwind": {
        zh: "采用 Tailwind CSS 实现响应式布局，兼容移动端与桌面端。",
        en: "Responsive layout via Tailwind CSS, compatible with mobile and desktop."
    },
    "about.tech.item.i18n": {
        zh: "集成 i18next 实现国际化，使用浏览器原生打印功能实现 PDF 导出。",
        en: "Internationalization via i18next; PDF export via browser native print."
    },
    "about.ops.title": {
        zh: "部署与运维",
        en: "Deployment & Ops"
    },
    "about.ops.item.oss": {
        zh: "项目部署于阿里云 OSS 静态存储。",
        en: "Deployed to Alibaba Cloud OSS static storage."
    },
    "about.ops.item.ecs": {
        zh: "为完成域名 zhangfc.cn 的备案，使用阿里云 ECS 服务器获取备案服务号。",
        en: "Used Alibaba Cloud ECS to obtain the ICP filing service code for the domain zhangfc.cn."
    },
    "about.ops.item.sslcdn": {
        zh: "通过配置 SSL 证书实现 HTTPS 访问，并启用 CDN 服务以提升访问性能。",
        en: "Configured an SSL certificate for HTTPS and enabled CDN to improve performance."
    },
    "experience.title": {
        zh: "工作经历",
        en: "Experience"
    },
    "experience.subtitle": {
        zh: "我的职业发展历程",
        en: "My career journey"
    }
};
const I18nContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    lang: "zh",
    setLang: ()=>{},
    toggleLang: ()=>{},
    t: (k)=>dict[k]?.zh ?? k
});
const useI18n = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](I18nContext);
}),
"[project]/projects/resume-next/src/components/navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/src/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/lucide-react@0.555.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$i18n$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/src/lib/i18n-core.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// 简化后的导航项（标签使用 i18n 字典）
const navItems = [
    {
        id: "home",
        path: "/"
    },
    {
        id: "resume",
        path: "/resume"
    },
    {
        id: "aboutSite",
        path: "/about"
    }
];
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isDark, setIsDark] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // 打印时不渲染导航（确保打印预览中无 DOM）
    const [isPrinting, setIsPrinting] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const { t, toggleLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$i18n$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    // 根据当前路径判断激活状态
    const isActive = (path)=>{
        if (path === "/") {
            return pathname === "/";
        }
        return pathname === path;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (saved === "dark" || !saved && prefersDark) {
            setIsDark(true);
        }
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const root = document.documentElement;
        if (isDark) root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", isDark ? "#0b1220" : "#ffffff");
    }, [
        isDark
    ]);
    // 监听打印事件与媒体查询，打印时不渲染导航
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia && window.matchMedia('print');
        const onChange = (e)=>setIsPrinting(e.matches);
        const onBefore = ()=>setIsPrinting(true);
        const onAfter = ()=>setIsPrinting(false);
        if (mql) {
            if (mql.addEventListener) mql.addEventListener('change', onChange);
            else if (mql.addListener) mql.addListener(onChange);
        }
        window.addEventListener('beforeprint', onBefore);
        window.addEventListener('afterprint', onAfter);
        return ()=>{
            if (mql) {
                if (mql.removeEventListener) mql.removeEventListener('change', onChange);
                else if (mql.removeListener) mql.removeListener(onChange);
            }
            window.removeEventListener('beforeprint', onBefore);
            window.removeEventListener('afterprint', onAfter);
        };
    }, []);
    const toggleTheme = ()=>setIsDark((v)=>!v);
    const linkClass = (path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-colors duration-200 text-[15px] font-medium rounded-full px-3 py-1 text-center cursor-pointer", isActive(path) ? "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] shadow-sm hover:opacity-90" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800");
    // 打印预览期间不渲染导航 DOM
    if (isPrinting) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 print-hidden"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "font-semibold gradient-brand text-lg tracking-wide transition-opacity duration-200 hover:opacity-80 cursor-pointer",
                    children: t("brand.name")
                }, void 0, false, {
                    fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex items-center gap-3 ml-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            "aria-label": t("nav.toggleLang"),
                            onClick: toggleLang,
                            className: "rounded-full w-9 h-9 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted hover:scale-105 dark:text-gray-300 dark:hover:text-gray-100 shadow-sm transition-all duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                size: 22,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            "aria-label": t("nav.toggleTheme"),
                            onClick: toggleTheme,
                            className: "rounded-full w-9 h-9 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted hover:scale-105 dark:text-gray-300 dark:hover:text-gray-100 shadow-sm transition-all duration-200",
                            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                size: 22,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                                lineNumber: 117,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                size: 22,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                                lineNumber: 117,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-6 ml-auto",
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: linkClass(item.path),
                                "aria-current": isActive(item.path) ? "page" : undefined,
                                children: t(`nav.${item.id}`)
                            }, item.id, false, {
                                fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            "aria-label": t("nav.toggleLang"),
                            onClick: toggleLang,
                            className: "rounded-full w-8 h-8 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted hover:scale-105 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                size: 22,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            "aria-label": t("nav.toggleTheme"),
                            onClick: toggleTheme,
                            className: "rounded-full w-8 h-8 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted hover:scale-105 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-200",
                            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                size: 22,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                                lineNumber: 151,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$555$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                size: 22,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                                lineNumber: 151,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projects/resume-next/src/components/navbar.jsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
"[project]/projects/resume-next/src/lib/i18n.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$i18n$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/resume-next/src/lib/i18n-core.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function I18nProvider({ children }) {
    const [lang, setLang] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("zh");
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setMounted(true);
        const saved = localStorage.getItem("lang");
        if (saved) {
            setLang(saved);
        }
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (mounted) {
            localStorage.setItem("lang", lang);
            document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        }
    }, [
        lang,
        mounted
    ]);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((key)=>{
        const entry = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$i18n$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dict"][key];
        if (!entry) return key;
        return entry[lang] ?? entry.zh;
    }, [
        lang
    ]);
    const toggleLang = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const nextLang = lang === "zh" ? "en" : "zh";
        setLang(nextLang);
    }, [
        lang
    ]);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$i18n$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nContext"].Provider, {
            value: {
                lang: "zh",
                setLang,
                toggleLang,
                t
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    visibility: 'hidden'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/projects/resume-next/src/lib/i18n.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projects/resume-next/src/lib/i18n.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$resume$2d$next$2f$src$2f$lib$2f$i18n$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nContext"].Provider, {
        value: {
            lang,
            setLang,
            toggleLang,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/projects/resume-next/src/lib/i18n.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c027a53d._.js.map