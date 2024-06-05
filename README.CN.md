# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Configuration file description
"type": "module",
Configuration file use commandjs add cjs to file suffix
eg：tailwind.config.cjs(module.exports)

## environment

node v20.12.1

pnpm 9.1.4


## plugins

class-variance-authority 
  避免了在 React 项目中复制大量 CSS 文件的麻烦，使网页开发变得更加迅速高效。
  eg:
  ```ts
  export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  const buttonClasses = cva(["border rounded"], {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-700",
        secondary: "bg-gray-500 text-white hover:bg-gray-700",
      },
      size: {
        small: "py-1 px-2 text-sm",
        medium: "py-2 px-4 text-md",
        large: "py-3 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  });
  return (
    <button
      type="button"
      className={buttonClasses({ variant, size })}
      {...props}
    >
      {children}
    </button>
  );
};
  ```
## 组件库ui
如果你觉得默认的ui不是很合适 提供了 manager.js => .storybook/manager.js

## 私仓部署
verdaccio

## menorepo 管理工具
1. lerna
2. turbo
3. rush

### menorepo 优势
  1.  代码复用：公共配置 eslint prettier babel ts webpack
  2.  依赖管理
      workspace：npm8+ yarn pnpm 
  3.  统一的开发环境
      nodejs nvm
  4.  微前端 webpack moudle federation：看是否需要隔离

### 安装 lerna
1 pnpm i lerna -D 
2 根目录创建文件 pnpm-workspace 写入
3 根目录 src 改写成=》packages

### pnpm workspace
安装根目录 全局插件 pnpm i xxx -w
卸载 pnpm remove xx
安装到对应子包 pnpm i class-variance-authority --filter components 
