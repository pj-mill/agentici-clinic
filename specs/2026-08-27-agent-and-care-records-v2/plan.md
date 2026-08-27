# Agent and Care Records Plan

1. **Extend the clinic read boundary**
   - Reuse the Phase 2 domain models and seeded relationships.
   - Add typed operations for listing agents and reading one agent with related
     ailment, therapy, and appointment context.
   - Define explicit not-found behavior for unknown agent identifiers.

2. **Build the agent listing**
   - Add a responsive route showing agents currently in care.
   - Show essential identity and a concise care summary for each agent.
   - Add keyboard-accessible links from each record to its detail view.

3. **Build agent detail views**
   - Add a route that identifies an individual agent.
   - Present related ailment and recommended therapy information clearly.
   - Show appointment details or an understandable empty state.
   - Provide accessible navigation back to the listing or dashboard.

4. **Connect existing navigation**
   - Link Phase 2 dashboard cards to individual agent detail views.
   - Preserve homepage and health-check behavior.
   - Surface unknown-record errors as explicit not-found results.

5. **Validate the read experience**
   - Add Vitest coverage for collection reads, related record reads, and
     not-found behavior.
   - Add rendering coverage for listing, details, relationships, and empty
     appointment states.
   - Manually verify responsive layout, keyboard navigation, visible focus, and
     the production build.
