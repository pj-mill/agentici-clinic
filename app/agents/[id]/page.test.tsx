import { renderToStaticMarkup } from 'react-dom/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import AgentDetailPage from './page'

const { notFound } = vi.hoisted(() => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
}))

vi.mock('next/navigation', () => ({ notFound }))

describe('AgentDetailPage', () => {
  beforeEach(() => {
    notFound.mockClear()
  })

  it('renders related care details and an appointment empty state', async () => {
    const element = await AgentDetailPage({ params: Promise.resolve({ id: '2' }) })
    const markup = renderToStaticMarkup(element)

    expect(markup).toContain('Byte')
    expect(markup).toContain('Notification overload')
    expect(markup).toContain('Notification fast')
    expect(markup).toContain('No appointment booked yet.')
    expect(markup).toContain('Back to agents')
  })

  it.each(['999', 'not-an-id'])('returns not found for invalid id %s', async (id) => {
    await expect(AgentDetailPage({ params: Promise.resolve({ id }) })).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalledOnce()
  })
})
