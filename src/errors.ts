export async function tryExecute(task: () => Promise<void>) {
  try {
    await task()
  }
  catch (err: unknown) {
    return err instanceof Error ? err.message : 'Unknown error'
  }
}
