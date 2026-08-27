import Database from 'better-sqlite3'

export type DatabaseHealth =
  | { status: 'healthy'; detail: string }
  | { status: 'unhealthy'; detail: string }

export function checkDatabaseHealth(): DatabaseHealth {
  let database: Database.Database | undefined

  try {
    database = new Database(':memory:')
    const result = database.prepare('SELECT 1 AS connected').get() as {
      connected: number
    }

    if (result.connected !== 1) {
      return {
        status: 'unhealthy',
        detail: 'The database returned an unexpected health-check result.',
      }
    }

    return {
      status: 'healthy',
      detail: 'In-memory SQLite is connected and responding.',
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'Unknown database error.'
    return {
      status: 'unhealthy',
      detail: `SQLite health check failed: ${detail}`,
    }
  } finally {
    database?.close()
  }
}
