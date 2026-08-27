import { checkDatabaseHealth } from '../../../lib/database'

export function GET() {
  const health = checkDatabaseHealth()

  return Response.json(health, {
    status: health.status === 'healthy' ? 200 : 503,
  })
}
