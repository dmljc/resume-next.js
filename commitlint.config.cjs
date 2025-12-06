/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],

    // 自定义规则
    rules: {
        // @see https://commitlint.js.org/#/reference-rules
        // 提交类型枚举，git提交type必须是以下类型
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新增功能
                'fix', // 修复缺陷
                'docs', // 文档变更
                'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
                'refactor', // 代码重构（不包括 bug 修复、功能新增）
                'perf', // 性能优化
                'test', // 添加疏漏测试或已有测试改动
                'build', // 构建流程、外部依赖变更（如升级 npm 包、修改配置等）
                'ci', // 修改 CI 配置、脚本
                'revert', // 回滚 commit
                'chore', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
            ],
        ],
        // type 不能为空
        'type-empty': [2, 'never'],
        // subject 不能为空
        'subject-empty': [2, 'never'],
        // subject 长度限制
        'subject-max-length': [2, 'always', 100],
        // subject 不以句号结尾
        'subject-full-stop': [2, 'never', '.'],
        // subject 大小写不做校验
        'subject-case': [0],
    },

    prompt: {
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixesSelect: '选择关联issue前缀（可选）:',
            customFooterPrefix: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            generatingByAI: '正在通过 AI 生成你的提交简短描述...',
            generatedSelectByAI: '选择一个 AI 生成的简短描述:',
            confirmCommit: '是否提交当前 Commit ?',
        },
        // 提交范围
        scopes: [
            { name: 'components', description: '组件相关' },
            { name: 'styles', description: '样式相关' },
            { name: 'pages', description: '页面相关' },
            { name: 'utils', description: '工具函数' },
            { name: 'config', description: '配置文件' },
            { name: 'deps', description: '依赖更新' },
            { name: 'seo', description: 'SEO 优化' },
            { name: 'deploy', description: '部署相关' },
        ],
        // 提交类型
        types: [
            { value: 'feat', name: '特性:     ✨  新增功能', emoji: ':sparkles:' },
            { value: 'fix', name: '修复:     🐛  修复缺陷', emoji: ':bug:' },
            { value: 'docs', name: '文档:     📝  文档变更', emoji: ':memo:' },
            {
                value: 'style',
                name: '格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）',
                emoji: ':lipstick:',
            },
            {
                value: 'refactor',
                name: '重构:     ♻️   代码重构（不包括 bug 修复、功能新增）',
                emoji: ':recycle:',
            },
            { value: 'perf', name: '性能:     ⚡️  性能优化', emoji: ':zap:' },
            {
                value: 'test',
                name: '测试:     ✅  添加疏漏测试或已有测试改动',
                emoji: ':white_check_mark:',
            },
            {
                value: 'build',
                name: '构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改配置等）',
                emoji: ':package:',
            },
            { value: 'ci', name: '集成:     🎡  修改 CI 配置、脚本', emoji: ':ferris_wheel:' },
            { value: 'revert', name: '回退:     ⏪️  回滚 commit', emoji: ':rewind:' },
            {
                value: 'chore',
                name: '其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
                emoji: ':hammer:',
            },
        ],
        useEmoji: true,
        allowCustomIssuePrefix: false,
        allowEmptyIssuePrefix: false,
        // 跳过 scope（提交范围）选择步骤
        skipQuestions: ['scope'],
    },
};
