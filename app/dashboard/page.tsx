import { getAgents } from '../../lib/clinic'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  const agents = getAgents()

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a className="font-bold tracking-tight text-clinic-teal" href="/">
              AgentClinic
            </a>
            <p className="mt-4 font-semibold uppercase tracking-[0.2em] text-clinic-coral">
              Clinic dashboard
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Today&apos;s care board
            </h1>
          </div>
          <p className="max-w-xs text-slate-600">
            A quick view of the agents currently receiving care.
          </p>
        </header>

        <section className="py-10" aria-labelledby="agent-list-heading">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold" id="agent-list-heading">
              Agents in care
            </h2>
            <span className="text-sm font-semibold text-slate-600">
              {agents.length} active {agents.length === 1 ? 'agent' : 'agents'}
            </span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {agents.map((agent) => (
              <article className="rounded-2xl bg-white p-6 shadow-sm" key={agent.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      <a className="hover:text-clinic-teal hover:underline" href={`/agents/${agent.id}`}>
                        {agent.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{agent.kind}</p>
                  </div>
                  <span className="rounded-full bg-clinic-mist px-3 py-1 text-xs font-bold text-clinic-teal">
                    Active
                  </span>
                </div>
                <dl className="mt-6 space-y-4 border-t border-slate-100 pt-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Ailment
                    </dt>
                    <dd className="mt-1 font-semibold">{agent.ailment.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Recommended therapy
                    </dt>
                    <dd className="mt-1 font-semibold">{agent.therapy.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Appointment
                    </dt>
                    <dd className="mt-1 font-semibold">
                      {agent.appointment?.startsAt ?? 'Not booked yet'}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
