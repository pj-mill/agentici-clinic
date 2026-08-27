# AgentClinic Technology Constitution

## Required direction

- Use **TypeScript** throughout the application.
- Use a **server-side TypeScript web framework** so routing, data access, and
  rendered application flows can be developed together.
- Use **SQLite** as the initial relational database.
- Use **Tailwind CSS** for application styling.
- Use **Vitest** for automated tests and validation.
- Deliver a responsive, accessible interface for modern browsers across phone,
  tablet, and desktop screen sizes.

## Framework recommendation

Use **Next.js with the App Router**. It provides a popular TypeScript stack,
server-rendered pages, server-side actions, and a straightforward path to
interactive dashboard features without requiring a separate frontend and API
application at the outset.

## Engineering standards

- Keep domain rules and persistence logic separated from presentation.
- Validate user-controlled input at the server boundary.
- Prefer accessible HTML and progressive enhancement for core workflows.
- Design mobile-first and use Tailwind responsive utilities for larger
  viewports; do not require horizontal scrolling for core content.
- Keep local development simple and reproducible.
- Add Vitest coverage for appointment and other critical domain workflows as
  they are implemented.

## Evolution

SQLite is the default for the initial product and demonstrations. Any move to a
different database or deployment architecture must preserve the domain
interfaces and appointment data semantics.
