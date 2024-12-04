import { describe, expect, it } from 'vitest'
import { isEmpty } from '../src/arrays'

describe('array tool', () => {
  it('should return false when data is empty', () => {
    expect(isEmpty()).toBeTruthy()
    expect(isEmpty([])).toBeTruthy()
  })
})
