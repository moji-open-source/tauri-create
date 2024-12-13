# Tauri Create <a href="https://npmjs.com/package/create-moji-tauri"><img src="https://img.shields.io/npm/v/create-moji-tauri" alt="npm package"></a>

## 项目搭建

使用 NPM:

```bash
npm create moji-tauri@latest
```

使用 Yarn:

```bash
yarn create moji-tauri@latest
```

使用 PNPM:

```bash
pnpm create moji-tauri@latest
```

使用 Bun:

```bash
bun create moji-tauri@latest
```

按照提示进行操作！

您也可以通过额外的命令行选项直接指定您想要使用的项目名称和模板。例如，要搭建一个 Nextjs + TypeScript tauri 项目，请运行：

```bash
# npm 7+, extra double-dash is needed:
npm create moji-tauri@latest my-tauri-app -- --template nextjs-ts

# yarn
yarn create moji-tauri@latest my-tauri-app --template nextjs-ts

# pnpm
pnpm create moji-tauri@latest my-tauri-app --template nextjs-ts

# Bun
bun create moji-tauri@latest my-tauri-app --template nextjs-ts
```

当前支持的模板预设有：

- `nextjs-ts`
- `svelte-ts`

## 模板占位符

- `${{PROJECT}}` - 项目名称，默认名称为 my-tauri-app
