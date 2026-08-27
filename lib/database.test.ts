import { describe, expect, it } from 'vitest'
import { checkDatabaseHealth } from './database'

describe('checkDatabaseHealth', () => {
  it('reports a responsive in-memory SQLite database', () => {
    expect(checkDatabaseHealth()).toEqual({
      status: 'healthy',
      detail: 'In-memory SQLite is connected and responding.',
    })
  })
})
