---
name: changelog
description: Update the root CHANGELOG.md with dated summaries before merging feature work.
---

# Update Changelog

Use this skill when the user manually invokes it before merging feature work.
Keep the project-root `CHANGELOG.md` current without replacing existing history.

## Workflow

1. Check whether `CHANGELOG.md` exists.
   - If it does not exist, inspect the full repository history with
     `git log --date=short --pretty=format:"%ad|%s"` and create it.
   - Group entries under `## YYYY-MM-DD` headings, newest first.
   - Include one concise bullet for each meaningful project commit.
   - Omit session metadata, checkpoint, and other automation-only commits.
2. Inspect the current branch and changes with `git status` and the relevant
   diff.
3. Determine the date for the update from the current date or the change's
   commit date, using ISO format (`YYYY-MM-DD`).
4. Add a concise bullet under that date summarizing the user-visible or
   developer-relevant change.
   - Do not duplicate an existing bullet.
   - Preserve all existing headings and bullets.
   - Keep entries focused on intent and outcomes, not file inventories.
5. If the date heading does not exist, create it in reverse chronological order.
6. Review the result for accurate dates, clear wording, and valid Markdown.

## Format

Use this structure:

```markdown
# Changelog

## 2026-08-27

- Added the initial AgentClinic foundation and health-check endpoint.

## 2026-08-26

- Defined the product mission and technology direction.
```

## Guidelines

- Keep the changelog in the repository root.
- Use date headings only; do not use an undated `Unreleased` section.
- Summarize grouped work in a small number of bullets when several commits form
  one feature.
- Never rewrite or remove historical entries unless the user explicitly asks.
- Do not commit or push automatically; leave version-control actions to the
  user.
