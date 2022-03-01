{
    "compilerOptions": {
        // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
        "allowSyntheticDefaultImports": true,
        // 从 tslib 导入辅助工具函数（比如 __extends， __rest等）
        "importHelpers": true,
        "target": "esnext",
        // 指定生成哪个模块系统代码
        "module": "esnext",
        // 决定如何处理模块
        "moduleResolution": "node",
        // 指定ECMAScript目标版本
        "strict": true,
        "jsx": "preserve",
        // 生成相应的 .map文件。
        "sourceMap": true,
        // 忽略所有的声明文件（ *.d.ts）的类型检查。
        "skipLibCheck": true,
        "resolveJsonModule": true,
        "esModuleInterop": true,
        // 编译过程中需要引入的库文件的列表。
        "lib": ["esnext", "dom"],
        // 解析非相对模块名的基准目录
        "baseUrl": ".",
        // 模块名到基于 baseUrl的路径映射的列表。
        "paths": {
            "@/*": ["src/*"],
            "#/*": ["types/*"]
        },
        // 要包含的类型声明文件名列表
        "types": [
            // "node",
            "vite/client"
        ],
        "typeRoots": ["./node_modules/@types/", "./types"]
    },
    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}