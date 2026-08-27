import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import DashboardPage from './page'

describe('DashboardPage', () => {
  it('renders the seeded agents and care context', () => {
    const markup = renderToStaticMarkup(<DashboardPage />)

    expect(markup).toContain('Today&#x27;s care board')
    expect(markup).toContain('Agents in care')
    expect(markup).toContain('Ada')
    expect(markup).toContain('Context fatigue')
    expect(markup).toContain('Quiet context hour')
    expect(markup).toContain('Byte')
    expect(markup).toContain('Not booked yet')
    expect(markup).toContain('Cora')
    expect(markup).toContain('href="/agents/1"')
    expect(markup).toContain('href="/agents/2"')
    expect(markup).toContain('href="/agents/3"')
  })
})
