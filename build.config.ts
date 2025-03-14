import { globSync } from 'tinyglobby'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: globSync(
    ['src/commands/*.ts'],
    { expandDirectories: false },
  ).map(i => ({
    input: i.slice(0, -3),
    name: i.replace(/^src\//, '').slice(0, -3),
  })),
  declaration: true,
  clean: true,
  failOnWarn: false,
  rollup: {
    inlineDependencies: true,
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
})
