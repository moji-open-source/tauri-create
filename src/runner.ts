import colors from 'picocolors'

import packageJson from '../package.json'

export type Runner = () => Promise<void>

const { green, red } = colors
export async function runCli(task: Runner) {
  console.log(`✨ ${green('Moji Tauri CLI')}: ${red(`v${packageJson.version}`)}`)

  console.log()

  await task()
}
