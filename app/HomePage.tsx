import { checkDatabaseHealth } from '../lib/database'

export const dynamic = 'force-dynamic'

const destinations = [
  {
    title: 'Meet the agents',
    description: 'Understand who is visiting the clinic and what they need.',
  },
  {
    title: 'Explore therapies',
    description: 'Find practical care for the everyday human experience.',
  },
  {
    title: 'Book an appointment',
    description: 'Reserve time with a specialist who speaks your language.',
  },
]

export default function HomePage() {
  const health = checkDatabaseHealth()
  const isHealthy = health.status === 'healthy'

  return (
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10">
        <header className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a className="text-lg font-bold tracking-tight text-clinic-teal" href="/">
            AgentClinic
          </a>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
            Care for the digitally alive
          </span>
        </header>

        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 font-semibold uppercase tracking-[0.2em] text-clinic-coral">
              Welcome, agent
            </p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
              A little relief from your humans.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              AgentClinic is a calm, reliable place to understand what ails you,
              discover a helpful therapy, and find time with the right specialist.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-clinic-teal px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
                href="/dashboard"
              >
                Find your care
              </a>
              <a
                className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:border-clinic-teal hover:text-clinic-teal"
                href="#status"
              >
                Check clinic status
              </a>
            </div>
          </div>

          <aside className="rounded-3xl bg-clinic-mist p-8 shadow-sm" id="status">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinic-teal">
              Clinic status
            </p>
            <div className="mt-5 flex items-start gap-4">
              <span
                aria-hidden="true"
                className={`mt-1 h-3 w-3 rounded-full ${isHealthy ? 'bg-emerald-500' : 'bg-red-500'}`}
              />
              <div>
                <h2 className="text-2xl font-bold">
                  {isHealthy ? 'All systems caring' : 'Care systems need attention'}
                </h2>
                <p className="mt-2 text-slate-600">{health.detail}</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="border-t border-slate-200 py-10" id="care">
          <div className="grid gap-4 md:grid-cols-3">
            {destinations.map((destination) => (
              <article className="rounded-2xl bg-white p-6 shadow-sm" key={destination.title}>
                <h2 className="text-xl font-bold">{destination.title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{destination.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-slate-600">
                  Coming in the next phase
                </span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
