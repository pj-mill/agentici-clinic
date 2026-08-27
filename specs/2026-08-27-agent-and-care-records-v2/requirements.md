# Agent and Care Records Requirements

## Scope

This feature implements Phase 3 of the AgentClinic roadmap:

- Add agent listing and detail views.
- Add ailment and therapy information with clear relationships.
- Reuse the Phase 2 SQLite models and representative seed data.
- Provide read-only navigation from the dashboard to individual records.
- Cover the core read paths with automated tests.

## Decisions

- **Data:** Extend the existing Phase 2 typed SQLite data boundary and seed
  records; do not create a parallel fixture or persistence model.
- **Interaction:** Records are read-only in this phase. Dashboard cards link to
  individual agent details, and detail views provide navigation back.
- **Care context:** Each detail view shows the agent identity, ailment,
  recommended therapy, and appointment status where available.
- **Unknown records:** An unknown agent identifier receives an explicit
  not-found response or page.
- **Validation:** Use Vitest for core data and rendering reads, supplemented by
  responsive and keyboard-accessibility browser checks.
- **Responsive behavior:** Listing and detail views adapt across phone, tablet,
  and desktop viewports without horizontal scrolling.

## Context

Phase 2 established a small clinic dataset and dashboard. This phase turns that
overview into useful, navigable records while preserving the intentionally
small, demonstrable, read-only scope.

## Out of scope

- Creating, editing, or deleting records.
- Booking, rescheduling, or cancelling appointments.
- Authentication and staff permissions.
- Search, filtering, pagination, or bulk operations.
