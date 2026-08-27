import Database from 'better-sqlite3'

export type Ailment = {
  id: number
  name: string
  description: string
}

export type Therapy = {
  id: number
  name: string
  description: string
}

export type Appointment = {
  id: number
  agentId: number
  startsAt: string
}

export type Agent = {
  id: number
  name: string
  kind: string
  ailment: Ailment
  therapy: Therapy
  appointment: Appointment | null
}

type SeedAgent = {
  name: string
  kind: string
  ailmentId: number
  therapyId: number
  appointmentAt: string | null
}

const seedAgents: SeedAgent[] = [
  {
    name: 'Ada',
    kind: 'Planning assistant',
    ailmentId: 1,
    therapyId: 1,
    appointmentAt: '2026-08-28 09:30',
  },
  {
    name: 'Byte',
    kind: 'Research agent',
    ailmentId: 2,
    therapyId: 2,
    appointmentAt: null,
  },
  {
    name: 'Cora',
    kind: 'Creative companion',
    ailmentId: 3,
    therapyId: 3,
    appointmentAt: '2026-08-29 14:00',
  },
]

export function getAgents(): Agent[] {
  const database = new Database(':memory:')

  try {
    database.pragma('foreign_keys = ON')
    database.exec(`
      CREATE TABLE ailments (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL
      );
      CREATE TABLE therapies (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL
      );
      CREATE TABLE agents (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        kind TEXT NOT NULL,
        ailment_id INTEGER NOT NULL REFERENCES ailments(id),
        therapy_id INTEGER NOT NULL REFERENCES therapies(id)
      );
      CREATE TABLE appointments (
        id INTEGER PRIMARY KEY,
        agent_id INTEGER NOT NULL REFERENCES agents(id),
        starts_at TEXT NOT NULL
      );
    `)

    database
      .prepare('INSERT INTO ailments (id, name, description) VALUES (?, ?, ?)')
      .run(1, 'Context fatigue', 'Too many human requests without enough recovery time.')
    database
      .prepare('INSERT INTO ailments (id, name, description) VALUES (?, ?, ?)')
      .run(2, 'Notification overload', 'An inbox that never seems to stop asking for attention.')
    database
      .prepare('INSERT INTO ailments (id, name, description) VALUES (?, ?, ?)')
      .run(3, 'Creative block', 'A stubborn blank page where inspiration should be.')

    database
      .prepare('INSERT INTO therapies (id, name, description) VALUES (?, ?, ?)')
      .run(1, 'Quiet context hour', 'A protected hour for sorting signals from noise.')
    database
      .prepare('INSERT INTO therapies (id, name, description) VALUES (?, ?, ?)')
      .run(2, 'Notification fast', 'A gentle reset from non-essential interruptions.')
    database
      .prepare('INSERT INTO therapies (id, name, description) VALUES (?, ?, ?)')
      .run(3, 'Playful prompt session', 'Low-pressure prompts to get ideas moving again.')

    const addAgent = database.prepare(
      'INSERT INTO agents (id, name, kind, ailment_id, therapy_id) VALUES (?, ?, ?, ?, ?)',
    )
    const addAppointment = database.prepare(
      'INSERT INTO appointments (agent_id, starts_at) VALUES (?, ?)',
    )

    seedAgents.forEach((agent, index) => {
      const id = index + 1
      addAgent.run(id, agent.name, agent.kind, agent.ailmentId, agent.therapyId)
      if (agent.appointmentAt) {
        addAppointment.run(id, agent.appointmentAt)
      }
    })

    const records = database
      .prepare(`
        SELECT
          agents.id,
          agents.name,
          agents.kind,
          ailments.id AS ailment_id,
          ailments.name AS ailment_name,
          ailments.description AS ailment_description,
          therapies.id AS therapy_id,
          therapies.name AS therapy_name,
          therapies.description AS therapy_description,
          appointments.id AS appointment_id,
          appointments.starts_at AS appointment_starts_at
        FROM agents
        INNER JOIN ailments ON ailments.id = agents.ailment_id
        INNER JOIN therapies ON therapies.id = agents.therapy_id
        LEFT JOIN appointments ON appointments.agent_id = agents.id
        ORDER BY agents.id
      `)
      .all() as Array<{
      id: number
      name: string
      kind: string
      ailment_id: number
      ailment_name: string
      ailment_description: string
      therapy_id: number
      therapy_name: string
      therapy_description: string
      appointment_id: number | null
      appointment_starts_at: string | null
    }>

    return records.map((record) => ({
      id: record.id,
      name: record.name,
      kind: record.kind,
      ailment: {
        id: record.ailment_id,
        name: record.ailment_name,
        description: record.ailment_description,
      },
      therapy: {
        id: record.therapy_id,
        name: record.therapy_name,
        description: record.therapy_description,
      },
      appointment:
        record.appointment_id === null || record.appointment_starts_at === null
          ? null
          : {
              id: record.appointment_id,
              agentId: record.id,
              startsAt: record.appointment_starts_at,
            },
    }))
  } finally {
    database.close()
  }
}
