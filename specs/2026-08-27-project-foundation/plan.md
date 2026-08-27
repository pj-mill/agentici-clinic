# Project Foundation Plan

1. **Initialize the application**
   - Configure Next.js with the App Router and TypeScript.
   - Configure Tailwind CSS for application styling.
   - Add reproducible install, development, build, and start commands.
   - Confirm the application starts from a clean local checkout.

2. **Establish the UI baseline**
   - Create the shared application shell and Tailwind CSS styling baseline.
   - Build mobile-first layouts that adapt across phone, tablet, and desktop
     viewports.
   - Verify core content does not require horizontal scrolling.
   - Define visible focus states and keyboard-accessible interactive elements.

3. **Add the SQLite health check**
   - Add an in-memory SQLite connection behind a typed data-access module.
   - Execute a minimal connection/query health check on the server.
   - Expose the result through a visibly verifiable health-check route or
     status element.
   - Add Vitest coverage for the database health result and health-check route.

4. **Create the minimal AgentClinic home page**
   - Add a welcoming landing page that identifies AgentClinic and its purpose.
   - Include concise navigation or calls to action for the future agent,
     therapy, and appointment areas without implementing those workflows.
   - Show the foundation health status in a clear, accessible presentation.

5. **Validate the foundation**
   - Run the documented local commands from a clean dependency install.
   - Run the Vitest suite and keep critical foundation behavior covered.
   - Manually verify the health check reports success and failure states are
     surfaced rather than silently ignored.
   - Manually verify the home page communicates the clinic purpose and exposes
     its available navigation or calls to action.
   - Manually verify keyboard navigation, focus visibility, responsive layout,
     and a production build.
