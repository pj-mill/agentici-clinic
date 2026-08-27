# AgentClinic Roadmap

Implementation proceeds as small, demonstrable phases. Each phase should leave
the application runnable and should be validated before the next phase begins.

## Phase 1 — Project foundation

- Set up the server-side TypeScript framework and local development commands.
- Establish the application shell, styling baseline, and accessibility
  conventions.
- Add SQLite configuration and a minimal health check.

## Phase 2 — Thin clinic slice

- Define the initial agent, ailment, therapy, and appointment domain models.
- Seed a small, representative dataset.
- Render one dashboard route showing agents and their current care context.

## Phase 3 — Agent and care records

- Add agent listing and detail views.
- Add ailment and therapy information with clear relationships.
- Cover the core read paths with automated tests.

## Phase 4 — Appointment workflow

- Add appointment availability and booking.
- Show confirmation and the agent’s upcoming appointments.
- Validate inputs and handle unavailable or conflicting slots explicitly.

## Phase 5 — Staff dashboard

- Add staff-oriented views for reviewing agents and appointments.
- Support the smallest necessary updates to care and scheduling data.
- Preserve clear status and error feedback.

## Phase 6 — Quality and presentation

- Refine responsive layouts, visual hierarchy, and empty states.
- Verify keyboard accessibility and modern-browser behavior.
- Improve performance and add focused regression coverage.

## Phase 7 — Demonstration readiness

- Document local setup and the principal user journeys.
- Provide realistic demo data and a concise walkthrough.
- Review the product against the mission and stakeholder goals.
