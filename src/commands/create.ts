import type { TemConfig } from '../type'
import process from 'node:process'
import prompts from '@posva/prompts'

import pc from 'picocolors'
import * as arrays from '../arrays'
import { runCli } from '../runner'

runCli(async () => {
  const args = process.argv.splice(2).filter(Boolean)

  if (arrays.isEmpty(args)) {
    console.log(
      pc.green('What should be done?'),
    )
  }

  const { projectName } = await prompts({
    type: 'text',
    name: 'projectName',
    initial: 'my-tauri-app',
    message: 'Plase input your project name',
  })

  const configs = {
    PROJECT: projectName,
  } satisfies TemConfig

  console.log('configs ==> ', configs)
})
