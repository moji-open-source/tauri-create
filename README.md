# Tauri Create <a href="https://npmjs.com/package/create-moji-tauri"><img src="https://img.shields.io/npm/v/create-moji-tauri" alt="npm package"></a>

<p align='center'>
<b>English</b> | <a href="https://github.com/moji-open-source/tauri-create/blob/main/README.zh-CN.md">简体中文</a>
<!-- Contributors: Thanks for getting interested, however we DON'T accept new translations to the README, thanks. -->
</p>

## Scaffolding your project

With NPM:

```bash
npm create moji-tauri@latest
```

With Yarn:

```bash
yarn create moji-tauri@latest
```

With PNPM:

```bash
pnpm create moji-tauri@latest
```

With Bun:

```bash
bun create moji-tauri@latest
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Nextjs + TypeScript tauri project, run:

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

Currently supported template presets include:

- `nextjs-ts`
- `svelte-ts`
- `vue-ts`

## Matter

- `${{PROJECT}}` - project name, The default name is my-tauri-app
