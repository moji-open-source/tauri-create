import type { Choice } from '@posva/prompts'

export interface Configuration {
  renameFile?: Record<string, string>
  prompt?: Omit<Choice, 'value'> & { value: string }
}
