export function isEmpty(arr?: unknown[]) {
  const size = arr?.length ?? 0
  return size === 0
}
