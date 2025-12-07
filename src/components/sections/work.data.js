// Shared work experience data for i18n rendering
export const jobs = [
    {
        company: { zh: '个人品牌官网项目', en: 'Personal Brand Website Project' },
        role: { zh: '独立开发者', en: 'Independent Developer' },
        time: { zh: '2025.11 至今', en: 'Nov 2025 — Present' },
        points: {
            zh: [
                '独立完成个人品牌官网从 0 到 1 的设计、开发、部署全流程；',
                '基于 Next.js 16 + React 19 + Tailwind CSS 4 构建 SSR 服务端渲染应用，首屏加载 < 1s；',
                '配置阿里云 ECS + CDN + Nginx 反向代理，实现 HTTPS 安全访问与高可用；',
                '完成 SEO 全链路优化：sitemap.xml、robots.txt、JSON-LD 结构化数据、百度/Google 站长验证；',
                '实现中英文国际化（i18n）、响应式多端适配、PM2 进程守护，保障服务 7×24 稳定运行；',
            ],
            en: [
                'Independently completed full lifecycle of personal brand website: design, development, and deployment;',
                'Built SSR application using Next.js 16 + React 19 + Tailwind CSS 4, achieving < 1s first-screen load;',
                'Configured Alibaba Cloud ECS + CDN + Nginx reverse proxy for HTTPS secure access and high availability;',
                'Implemented full SEO optimization: sitemap.xml, robots.txt, JSON-LD structured data, Baidu/Google webmaster verification;',
                'Delivered i18n (Chinese/English), responsive multi-device support, and PM2 process management for 24/7 stable operation;',
            ],
        },
    },
    {
        company: { zh: '浙江图维科技股份有限公司', en: 'Zhejiang TuWei Technology Co., Ltd.' },
        role: { zh: '前端小组长', en: 'Frontend Team Lead' },
        time: { zh: '2023.04 至今', en: 'Apr 2023 — Present' },
        points: {
            zh: [
                '主导三维工井标注项目探索与落地，完成架构设计与需求分析；',
                '基于 Three.js、Vue3、TypeScript、Vite 技术栈构建三维可视化能力；',
                '优化三维模型渲染性能，模型加载速度提升 40%，复杂场景下交互更流畅；',
                '沉淀 3 套通用组件与 5 份技术文档，后续项目开发成本降低 50%；',
                '牵头三维技术方向能力建设，组织 6 场内部技术分享，培养 2 名核心开发人员；',
            ],
            en: [
                'Led exploration and delivery of the 3D well‑annotation project; completed architecture design and requirements analysis;',
                'Built 3D visualization capabilities using Three.js, Vue 3, TypeScript, and Vite;',
                'Optimized 3D model rendering; improved loading speed by 40% and enabled smooth interaction in complex scenes;',
                'Consolidated 3 reusable component sets and 5 technical documents, reducing subsequent project development costs by 50%;',
                'Drove team capability building for 3D tech; organized 6 internal tech talks and mentored 2 core developers;',
            ],
        },
    },
    {
        company: {
            zh: '云上会展有限公司【阿里子公司】',
            en: 'Cloud Expo Co., Ltd. [Alibaba Subsidiary]',
        },
        role: { zh: '项目 Leader', en: 'Project Leader' },
        time: { zh: '2021.07 至 2022.12', en: 'Jul 2021 — Dec 2022' },
        points: {
            zh: [
                '主导 4 人前端小组常态研发与协作管理，制定统一技术规范，协作效率提升 30%；',
                '基于 React、TypeScript、Webpack 技术栈，展会工作台首屏从 10s 压缩至 2.5s；',
                '优化后用户留存率提升 25%，支撑展会期间日均 10 万+ 访问量稳定运行；',
            ],
            en: [
                'Led a 4‑person frontend team’s daily development and collaboration; established unified technical standards, improving collaboration efficiency by 30%;',
                'Using React, TypeScript, and Webpack, reduced the workbench first‑screen load from 10s to 2.5s;',
                'Post‑optimization, increased user retention by 25% and supported 100k+ daily visits during events with stable performance;',
            ],
        },
    },
    {
        company: {
            zh: '杭州绿湾网络科技有限公司',
            en: 'Hangzhou GreenBay Network Technology Co., Ltd.',
        },
        role: { zh: '项目 Owner', en: 'Project Owner' },
        time: { zh: '2020.02 - 2021.05', en: 'Feb 2020 — May 2021' },
        points: {
            zh: [
                '主导数据治理中后台系统重构，技术栈涵盖 React、TypeScript、Webpack、ES6+；',
                '优化数据处理流程与接口设计，效率提升 60%，显著降低人工操作成本；',
                '项目成果助力团队获得公司季度 3.75 最高绩效，成为内部系统重构标杆；',
            ],
            en: [
                'Led the refactoring of the data‑governance admin system using React, TypeScript, Webpack, and ES6+;',
                'Optimized data processing workflows and API design, improving efficiency by 60% and reducing manual operation costs;',
                'The project helped the team achieve the company’s top quarterly performance rating of 3.75, becoming a benchmark for internal system refactoring;',
            ],
        },
    },
    {
        company: { zh: '北京汉克时代科技有限公司', en: 'Beijing Hank Times Technology Co., Ltd.' },
        role: { zh: '前端开发骨干', en: 'Key Frontend Developer' },
        time: { zh: '2017.08 - 2020.01', en: 'Aug 2017 — Jan 2020' },
        points: {
            zh: [
                '负责内部客服工作平台核心模块开发，技术栈 Vue2 + Element UI，支撑 20+ 客服人员日常办公；',
                '优化异常处理与性能瓶颈，系统稳定性达 96%+，累计完成 20+ 核心功能迭代；',
            ],
            en: [
                'Developed core modules of internal customer-service platform using Vue 2 + Element UI, supporting 20+ customer service staff;',
                'Optimized exception handling and performance bottlenecks, achieving 96%+ system stability; delivered 20+ core feature iterations;',
            ],
        },
    },
];

export default jobs;
