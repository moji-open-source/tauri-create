export type Runner = () => Promise<void>

export async function runCli(task: Runner) {
  await task()
}
