import type { Configuration } from '../src/type'

export const config = {
  'nextjs-ts': {
    renameFile: {
      '_gitignore': '.gitignore',
      '_lintstagedrc.mjs': '.lintstagedrc.mjs',
      '_eslint.config.mjs': 'eslint.config.mjs',
      '_tailwind.config.ts': 'tailwind.config.ts',
      '_tsconfig.json': 'tsconfig.json',
      '_pre-commit-config.yaml': '.pre-commit-config.yaml',
    },
    prompt: {
      title: 'Nextjs With Typescript',
      value: 'nextjs-ts',
      description: 'Nextjs With Typescript',
    },
  },
} as Record<string, Configuration>
