import type { Choice } from '@posva/prompts'
import type { Configuration } from '../type'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import prompts from '@posva/prompts'
import fs from 'fs-extra'
import minimist from 'minimist'
import colors from 'picocolors'

import { config } from '../../templates/config'
import { banner } from '../banner'
import { tryExecute } from '../errors'
import { runCli } from '../runner'

const { red } = colors

const argv = minimist<{
  template?: string
}>(process.argv.splice(2).filter(Boolean), {
  alias: { t: 'template' },
})

const cwd = process.cwd()
const defaultTargetDir = 'tauri-project'

let tempConfig: Configuration = {}

runCli(async () => {
  banner()

  const argTargetDir = argv._[0]
  let argTemplate: string = argv.template || argv.t

  let targetDir = argTargetDir || defaultTargetDir

  let result: prompts.Answers<
    'projectName' | 'overwrite' // | 'packageName' | 'framework' | 'variant'
  > | undefined

  const errMsg = await tryExecute(async () => {
    result = await prompts(
      [
        {
          type: argTargetDir ? null : 'text',
          name: 'projectName',
          initial: defaultTargetDir,
          message: 'Plase input your project name',
          onState: (state) => {
            targetDir = state.value
          },
        },
        {
          type: 'select',
          name: 'template',
          message: 'Please select template you want to create',
          choices: () => Object.values(config).map(it => it.prompt!).filter(isValidChoice),
          onState: (state) => {
            argTemplate = state.value
          },
        },
        {
          type: () => !fs.existsSync(targetDir) || isEmptyDir(targetDir) ? null : 'select',
          name: 'overwrite',
          message: 'Current directory is not empty.  Please chosse how to proceed.',
          choices: [
            {
              title: 'Cancel operation',
              value: 'no',

            },
            {
              title: 'Remove existing files and continue',
              value: 'yes',
            },
            {
              title: 'Ignore files and continue',
              value: 'ignore',
            },
          ],
        },
        {
          type: (_, { overwrite }) => {
            if (overwrite === 'no')
              throw new Error(`${red('✖')} Operation cancelled`)
            return null
          },
          name: 'overwriteChecker',
        },
      ],
      {
        onCancel: () => {
          throw new Error(`${red('✖')} Operation cancelled`)
        },
      },
    )
  })

  if (errMsg) {
    console.error(errMsg)
    process.exit(1)
  }

  if (!result)
    return

  const { overwrite } = result

  tempConfig = config[argTemplate]

  const templateDir = getTemplateDir(argTemplate)
  const root = path.join(cwd, targetDir)

  if (!fs.existsSync(templateDir)) {
    console.error(`${red('✖')} Invalid template name: ${argTemplate}`)
    process.exit(1)
  }

  if (overwrite === 'yes') {
    emptyDir(root)
  }
  else if (!fs.existsSync(root)) {
    fs.mkdirSync(root)
  }

  copyDir(templateDir, root)

  process.exit(0)
})

function getTemplateDir(tem: string) {
  return path.resolve(
    fileURLToPath(import.meta.url),
    '../../..',
    'templates',
    tem,
  )
}

function isEmptyDir(dir: string) {
  const files = fs.readdirSync(dir)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

function copyDir(targetPath: string, tarPath: string) {
  const stat = fs.statSync(targetPath)
  if (stat.isFile()) {
    copyFile(targetPath, tarPath)
    return
  }

  if (!fs.existsSync(tarPath))
    fs.mkdirSync(tarPath)

  for (const file of fs.readdirSync(targetPath)) {
    const { renameFile = {} } = tempConfig
    copyFile(path.join(targetPath, file), path.join(tarPath, renameFile[file] ?? file))
  }
}

function copyFile(targetPath: string, tarPath: string) {
  const stat = fs.statSync(targetPath)

  if (stat.isDirectory()) {
    copyDir(targetPath, tarPath)
    return
  }

  if (stat.isFile())
    fs.copyFileSync(targetPath, tarPath)
}

function emptyDir(dir: string) {
  if (!fs.existsSync(dir))
    return

  for (const file of fs.readdirSync(dir)) {
    if (file === '.git')
      continue

    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}

function isValidChoice(choice?: Choice) {
  return choice && !isBlank(choice.value) && !isBlank(choice.title)
}

function isBlank(str?: string) {
  return !str || /^\s*$/.test(str)
}
