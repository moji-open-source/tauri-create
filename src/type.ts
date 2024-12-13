import type { Choice } from '@posva/prompts'

export interface Configuration {
  renameFile?: Record<string, string>
  prompt?: Choice
}
