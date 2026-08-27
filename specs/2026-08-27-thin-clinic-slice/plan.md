# Thin Clinic Slice Plan

1. **Define the clinic domain**
   - Create typed Agent, Ailment, Therapy, and Appointment models.
   - Define foreign-key relationships and appointment optionality in SQLite.
   - Keep persistence details behind a typed clinic data-access boundary.

2. **Seed representative data**
   - Add a small set of varied agents and care contexts.
   - Seed related ailments and therapies for every agent.
   - Include both agents with appointments and an agent without an appointment.

3. **Build the dashboard route**
   - Add a server-rendered dashboard route for the seeded clinic data.
   - Show each agent's identity, ailment, recommended therapy, and appointment
     status.
   - Keep the dashboard read-only and responsive across supported viewports.

4. **Connect the foundation**
   - Link the homepage care call-to-action to the dashboard.
   - Preserve the existing homepage and SQLite health-check behavior.
   - Provide clear navigation back to the homepage.

5. **Validate the slice**
   - Add Vitest coverage for schema setup, seed data, and dashboard rendering.
   - Verify responsive layout, keyboard navigation, visible focus, and status
     clarity manually in a modern browser.
   - Run typecheck and production build before merge.
