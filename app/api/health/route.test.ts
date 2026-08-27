import { describe, expect, it } from 'vitest'
import { GET } from './route'

describe('GET /api/health', () => {
  it('returns a successful SQLite health response', async () => {
    const response = GET()

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({
      status: 'healthy',
      detail: 'In-memory SQLite is connected and responding.',
    })
  })
})
