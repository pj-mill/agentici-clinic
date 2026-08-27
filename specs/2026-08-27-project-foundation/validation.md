# Project Foundation Validation

The feature can be merged when all of the following are true:

## Setup and build

- A clean checkout can install dependencies using the documented package
  manager command.
- The development server starts using the documented command.
- The production build completes successfully.
- The application uses the Next.js App Router and TypeScript without requiring
  a separate frontend server.
- Tailwind CSS is configured and used for the application styling baseline.
- `npm test` runs the Vitest suite successfully.

## SQLite health check

- The server creates and queries an in-memory SQLite database through the typed
  data-access boundary.
- A browser-visible health-check route or status element reports a successful
  check when the database is available.
- Database errors are surfaced as an explicit unhealthy status or error
  response; they are not converted into a false success or silently ignored.

## Home page

- The root page identifies AgentClinic and briefly explains its purpose.
- The page presents the current health status clearly.
- Navigation or calls to action identify the future agent, therapy, and
  appointment areas without implying that unavailable workflows are complete.

## UI and accessibility

- The baseline renders correctly at phone, tablet, and desktop modern-browser
  viewports.
- The home page adapts its layout, spacing, and typography without horizontal
  scrolling at supported viewport sizes.
- All interactive elements are reachable using the keyboard.
- Focus remains visible while navigating with the keyboard.
- Text and status information remain understandable without relying on color
  alone.

## Manual validation record

The implementation should include the commands used and the browser scenarios
checked in the change description so reviewers can reproduce the result.
