# Project Foundation Requirements

## Scope

This feature establishes the runnable AgentClinic foundation described in Phase
1 of the roadmap:

- Configure a server-side TypeScript application using Next.js App Router.
- Provide reproducible local development and validation commands.
- Use Tailwind CSS for the application styling baseline.
- Establish a responsive styling baseline with keyboard-accessible interaction
  states.
- Add an in-memory SQLite health check that is visibly verifiable.
- Create a minimal AgentClinic home page that introduces the clinic and links
  toward future care workflows.

## Decisions

- **Framework:** Next.js with the App Router, following the technology
  constitution.
- **Language:** TypeScript throughout application code.
- **Styling:** Tailwind CSS for responsive, maintainable utility-based styles.
- **Home page:** Provide a concise, welcoming landing page with the clinic
  purpose, health status, and non-functional navigation or calls to action for
  future agent, therapy, and appointment areas.
- **Database:** SQLite in memory for this foundation phase. The database
  connection must be isolated behind a typed data-access boundary so a
  file-backed or hosted database can be introduced later without coupling the
  UI to the driver.
- **Validation:** Manual browser validation for the visible health check and
  keyboard-accessible baseline. Automated tests are deferred for this phase.
- **Audience:** Optimize the foundation for reproducible local setup and
  demonstration use.

## Context

The foundation is the first demonstrable vertical slice. It should keep local
development simple while proving that the selected server-side stack, browser
UI, and SQLite integration work together. It does not implement agent records,
therapies, appointments, or the full dashboard.

## Out of scope

- Authentication and staff roles.
- Agent, ailment, therapy, or appointment domain models.
- Functional agent, therapy, or appointment workflows behind the home page
  navigation.
- Production database persistence and deployment configuration.
- Full dashboard information architecture.
