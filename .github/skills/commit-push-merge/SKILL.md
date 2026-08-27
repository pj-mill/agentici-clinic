---
name: commit-push-merge
description: Commit all current branch changes, push the feature branch to GitHub, and merge it into main when the user requests the complete delivery workflow.
---

# Commit, Push, and Merge

Use this skill when the user asks to commit all changes, publish the current
feature branch to GitHub, and merge that branch into `main`.

## Workflow

1. Inspect repository state before changing anything:
   - Run `git status --short --branch`.
   - Confirm the current branch is a feature branch and is not `main`.
   - Inspect the diff, including untracked files that are in scope.
   - Check configured remotes with `git remote -v`.
2. Validate the changes using the smallest existing project checks appropriate
   to the files changed. Do not commit known failing tests, type checks, builds,
   or lint checks unless the user explicitly directs this.
3. Stage all intended changes with `git add -A`, then inspect the staged diff
   with `git diff --cached --check` and `git diff --cached`.
4. Create one commit using the repository's existing commit-message style.
   The commit message should describe the delivered feature, not the
   mechanics of this workflow. Include:

   ```
   Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
   ```
5. Push the feature branch and set its upstream when needed:

   ```
   git push -u origin <feature-branch>
   ```

6. Synchronize before merging:
   - Fetch `origin`.
   - Confirm `main` is up to date with `origin/main`.
   - If the feature branch is behind `main`, rebase or merge `origin/main`
     into the feature branch, resolve conflicts while preserving both the
     feature and upstream work, rerun validation, and push the updated branch.
7. Merge into `main` using a non-interactive fast-forward merge when possible:

   ```
   git switch main
   git pull --ff-only origin main
   git merge --ff-only <feature-branch>
   git push origin main
   ```

   If fast-forward merging is not possible, stop and ask the user whether to
   create a merge commit or resolve the divergence another way. Do not force
   push or rewrite shared history.
8. Verify delivery with:
   - `git status --short --branch`
   - `git log -1 --oneline` on `main`
   - `git ls-remote --heads origin main <feature-branch>`
   Report the commit, branches pushed, and merge result.

## Safety rules

- Never commit secrets, credentials, generated local state, or unrelated user
  changes. If scope is unclear, ask before staging.
- Never use `git reset --hard`, `git checkout --`, force push, or destructive
  cleanup to resolve this workflow.
- Do not amend an existing commit unless the user explicitly requests it.
- Preserve the user's work when resolving conflicts; stop and ask if the
  correct resolution is ambiguous.
- Do not claim a push or merge succeeded without verifying the remote refs.
