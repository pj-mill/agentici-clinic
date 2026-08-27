import { describe, expect, it } from 'vitest'
import { getAgentById, getAgents } from './clinic'

describe('getAgents', () => {
  it('returns seeded agents with related care records', () => {
    const agents = getAgents()

    expect(agents).toHaveLength(3)
    expect(agents[0]).toMatchObject({
      name: 'Ada',
      ailment: { name: 'Context fatigue' },
      therapy: { name: 'Quiet context hour' },
      appointment: { startsAt: '2026-08-28 09:30' },
    })
    expect(agents[1]).toMatchObject({
      name: 'Byte',
      ailment: { name: 'Notification overload' },
      therapy: { name: 'Notification fast' },
      appointment: null,
    })
  })

  it('returns a related agent by id and an explicit null for unknown ids', () => {
    expect(getAgentById(2)?.ailment.name).toBe('Notification overload')
    expect(getAgentById(999)).toBeNull()
  })
})
