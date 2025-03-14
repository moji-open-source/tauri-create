import type { Configuration } from '../src/type'

export const config = {
  'nextjs-ts': {
    renameFile: {
      '_gitignore': '.gitignore',
      '_lintstagedrc.mjs': '.lintstagedrc.mjs',
      '_eslint.config.mjs': 'eslint.config.mjs',
      '_tsconfig.json': 'tsconfig.json',
      '_pre-commit-config.yaml': '.pre-commit-config.yaml',
      '_editorconfig': '.editorconfig',
    },
    prompt: {
      title: 'Nextjs With Typescript',
      value: 'nextjs-ts',
      description: 'Nextjs With Typescript',
    },
  },
  'svelte-ts': {
    renameFile: {
      '_gitignore': '.gitignore',
      '_tsconfig.json': 'tsconfig.json',
    },
    prompt: {
      title: 'Svelte With Typescript',
      value: 'svelte-ts',
      description: 'Svelte With Typescript',
    },
  },
  'vue-ts': {
    renameFile: {
      '_gitignore': '.gitignore',
      '_tsconfig.json': 'tsconfig.json',
      '_tsconfig.node.json': 'tsconfig.node.json',
    },
    prompt: {
      title: 'Vue With Typescript',
      value: 'vue-ts',
      description: 'Vue With Typescript',
    },
  },
} as Record<string, Configuration>
