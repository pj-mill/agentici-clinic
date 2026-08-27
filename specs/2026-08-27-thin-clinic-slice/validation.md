# Thin Clinic Slice Validation

The feature can be merged when all of the following are true:

## Domain and data

- Typed models exist for agents, ailments, therapies, and appointments.
- SQLite schema relationships reflect the domain: every agent has an ailment
  and therapy, while appointments are optional per agent.
- The seed dataset contains multiple representative agents and care contexts.
- At least one seeded agent has an appointment and at least one does not.
- Data access does not expose the database driver directly to the UI.

## Dashboard

- A server-rendered dashboard route is available from the homepage.
- The dashboard shows every seeded agent.
- Each agent's ailment, recommended therapy, and appointment status are visible.
- The dashboard is read-only and includes accessible navigation back home.

## Responsive accessibility

- The dashboard renders correctly at phone, tablet, and desktop viewport sizes.
- Core content does not require horizontal scrolling.
- Navigation is keyboard reachable with visible focus.
- Appointment status and care relationships are understandable without relying
  on color alone.

## Automated validation

- `npm test` passes with Vitest coverage for schema, seed data, and dashboard
  rendering.
- `npm run typecheck` passes.
- `npm run build` completes successfully.
