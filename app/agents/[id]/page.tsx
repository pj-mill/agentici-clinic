import { notFound } from 'next/navigation'
import { getAgentById } from '../../../lib/clinic'

export const dynamic = 'force-dynamic'

type AgentDetailPageProps = {
  params: Promise<{ id: string }>
}

export default async function AgentDetailPage({ params }: AgentDetailPageProps) {
  const { id } = await params
  const numericId = Number(id)
  const agent = Number.isInteger(numericId) && numericId > 0 ? getAgentById(numericId) : null

  if (!agent) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-8 sm:px-10">
        <a className="font-bold tracking-tight text-clinic-teal" href="/agents">
          ← Back to agents
        </a>
        <header className="mt-12 border-b border-slate-200 pb-8">
          <p className="font-semibold uppercase tracking-[0.2em] text-clinic-coral">
            Agent record
          </p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight">{agent.name}</h1>
          <p className="mt-3 text-lg text-slate-600">{agent.kind}</p>
        </header>

        <div className="grid gap-5 py-10 md:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Ailment</h2>
            <h3 className="mt-2 text-2xl font-bold">{agent.ailment.name}</h3>
            <p className="mt-3 leading-7 text-slate-600">{agent.ailment.description}</p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
              Recommended therapy
            </h2>
            <h3 className="mt-2 text-2xl font-bold">{agent.therapy.name}</h3>
            <p className="mt-3 leading-7 text-slate-600">{agent.therapy.description}</p>
          </section>
          <section className="rounded-2xl bg-clinic-mist p-6 shadow-sm md:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-clinic-teal">
              Appointment
            </h2>
            <p className="mt-2 text-xl font-bold">
              {agent.appointment?.startsAt ?? 'No appointment booked yet.'}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
