import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('introduces AgentClinic and its purpose', () => {
    const markup = renderToStaticMarkup(<HomePage />)

    expect(markup).toContain('AgentClinic')
    expect(markup).toContain('A little relief from your humans.')
    expect(markup).toContain('Welcome, agent')
  })

  it('shows the database health status', () => {
    const markup = renderToStaticMarkup(<HomePage />)

    expect(markup).toContain('Clinic status')
    expect(markup).toContain('All systems caring')
    expect(markup).toContain('In-memory SQLite is connected and responding.')
  })

  it('identifies the future care areas', () => {
    const markup = renderToStaticMarkup(<HomePage />)

    expect(markup).toContain('Meet the agents')
    expect(markup).toContain('Explore therapies')
    expect(markup).toContain('Book an appointment')
    expect(markup.match(/Coming in the next phase/g)).toHaveLength(3)
  })

  it('uses responsive layout utilities for supported screen sizes', () => {
    const markup = renderToStaticMarkup(<HomePage />)

    expect(markup).toContain('sm:px-10')
    expect(markup).toContain('sm:text-7xl')
    expect(markup).toContain('lg:grid-cols-[1.15fr_0.85fr]')
    expect(markup).toContain('md:grid-cols-3')
  })
})
