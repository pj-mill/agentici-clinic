# Agent and Care Records Validation

The feature can be merged when all of the following are true:

## Data and read paths

- Existing Phase 2 SQLite models and seed data are reused without contradictory
  relationships.
- A typed collection read returns every seeded agent with care context.
- A typed individual read returns an agent with its related ailment, therapy,
  and appointment information.
- Unknown agent identifiers produce an explicit not-found result or response.

## User experience

- The agent listing identifies all agents currently in care.
- Every listed agent has an accessible link to its detail view.
- Detail views clearly label the agent, ailment, recommended therapy, and
  appointment context.
- Agents without appointments receive an understandable empty state.
- Users can navigate back to the listing or dashboard with an accessible
  control.

The canonical agent listing URL is `/agents`; `/dashboard` may remain as a
compatibility alias, but primary calls to action and back links must use
`/agents`.

## Responsive accessibility

- Listing and detail views render correctly at phone, tablet, and desktop
  viewport sizes.
- Core content does not require horizontal scrolling.
- Links are keyboard reachable with visible focus.
- Relationships and status are understandable without relying on color alone.

Manual browser check:

- At 320px, tablet, and desktop widths, load `/agents` and an agent detail
  route, confirm there is no horizontal scrolling, and confirm content reflows.
- Use only the keyboard to reach every agent link and the back link; verify the
  focus indicator remains visible.
- Load `/agents/999` and `/agents/not-an-id` and confirm each produces an
  explicit not-found response.

## Automated validation

- `npm test` passes with Vitest coverage for core data and UI read paths.
- `npm run typecheck` passes.
- `npm run build` completes successfully.
