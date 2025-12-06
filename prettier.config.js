/** @type {import("prettier").Config} */
const config = {
    // 缩进宽度
    tabWidth: 4,
    // 使用空格缩进
    useTabs: false,
    // 语句末尾分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // JSX 使用双引号
    jsxSingleQuote: false,
    // 尾随逗号：ES5 兼容模式
    trailingComma: 'es5',
    // 对象花括号内部空格
    bracketSpacing: true,
    // JSX 标签闭合位置
    bracketSameLine: false,
    // 箭头函数参数括号：仅在需要时添加
    arrowParens: 'avoid',
    // 换行宽度
    printWidth: 100,
    // 换行符
    endOfLine: 'lf',
    // HTML 空格敏感度
    htmlWhitespaceSensitivity: 'css',
    // 嵌入语言格式化
    embeddedLanguageFormatting: 'auto',
};

export default config;
