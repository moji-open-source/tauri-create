import process from 'node:process'
import pc from 'picocolors'

import * as arrays from '../arrays'
import { runCli } from '../runner'

runCli(async () => {
  const args = process.argv.splice(2).filter(Boolean)

  if (arrays.isEmpty(args)) {
    console.log(
      pc.green('What should be done?'),
    )
    return
  }

  console.log(
    pc.green(`How are ${pc.italic(`you`)} doing?`),
  )

  console.log(process.argv.splice(2).filter(Boolean))
})
