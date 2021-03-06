# 快速上手

## 安装 UUI

1. 使用 NPM 客户端安装 UUI 包和它依赖的 peer dependencies，拉取所有相关的依赖：

```bash
yarn add @hackplan/uui react react-dom
```

2. 安装完成之后，就可以在你的网页应用中导入 UUI 组件了：

```tsx
import { Button } from '@hackplan/uui';

// 使用 JSX
const button1 = <Button>Click me!</Button>;

// 使用 React.createElement
const button2 = React.createElement(Button, { styling: { type: 'primary' } }, "点击我！");
```

3. **不要忘记导入 CSS 样式文件！** 另外，UUI 的 NPM 包同时也提供了 Sass 的样式源码，你可以在 `lib/styles` 中找到它们。

```tsx
// using node-style package resolution in a CSS file
@import '@hackplan/uui/lib/index.css';
```

[![Edit uui-getting-started](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/uui-getting-started-3fg1o?fontsize=14&hidenavigation=1&theme=dark)

## TypeScript

UUI 是使用 TypeScript 开发实现的，因此它的 `*.d.ts` 类型定义文件都是打包进 UUI NPM 包的，会自动地被项目编译器使用。同时，在你使用 UUI 前，还需要安装 UUI 的依赖类型文件：

```bash
yarn add @types/react @types/react-dom
```