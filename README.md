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

 Avoiding the hassle of copying a large number of CSS files in React projects makes web development faster and more efficient.

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
## Component library ui
If you feel that the default UI is not very suitable to provide 
  manager.js => .storybook/manager.js

## Private Warehouse Deployment
verdaccio

##  management tool => menorepo 
1. lerna
2. turbo
3. rush

### Advantages of menorepo
1. Code reuse: public configuration eslint prettier babel ts webpack
2. Dependency management
    workspace：npm8+ yarn pnpm 
3. Unified development environment
nodejs nvm
4. Micro front-end webpack mouse federation: Check if isolation is required

### install lerna
1. pnpm i lerna -D 
2. Root directory creation file write pnpm workspac
3. Rewrite the root directory src to=>packages

### pnpm workspace
Install the root directory global plugin  **pnpm i xxx - w**
Uninstall  **pnpm remove xx**
Install to the corresponding sub package  **pnpm i class variant authority filter components**
