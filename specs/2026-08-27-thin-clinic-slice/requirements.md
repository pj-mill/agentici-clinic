# Thin Clinic Slice Requirements

## Scope

This feature implements Phase 2 of the AgentClinic roadmap:

- Define the initial agent, ailment, therapy, and appointment domain models.
- Seed a small, representative dataset.
- Render one dashboard route showing agents and their current care context.

## Decisions

- **Persistence:** Use an in-memory SQLite database behind typed data-access
  functions. The database is intentionally read-only for this phase.
- **Domain relationships:** Agents link to an ailment and a recommended therapy;
  appointments optionally link to an agent.
- **Dashboard:** Provide a server-rendered dashboard that presents the seeded
  agents, their care context, and appointment status.
- **Validation:** Use Vitest coverage for schema setup, seed data, and dashboard
  rendering, supplemented by responsive and keyboard-accessibility checks.
- **Responsive behavior:** The dashboard must adapt across phone, tablet, and
  desktop viewports without horizontal scrolling.

## Context

Phase 1 established the server-side TypeScript application, Tailwind CSS
baseline, SQLite health check, and minimal homepage. This phase creates the
first useful clinic slice while keeping data and workflows deliberately small
and demonstrable.

## Out of scope

- Agent, ailment, therapy, or appointment editing.
- Appointment booking, rescheduling, or cancellation.
- Authentication and staff roles.
- Search, filtering, pagination, and detail routes.
- Production database persistence or deployment configuration.
