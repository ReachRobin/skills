# Contributing

Welcome! This project is a collection of AI skills for Go-To-Market professionals. Anyone can contribute a skill, from one-liners to full GTM playbooks. We accept contributions at two tiers: core skills (high review bar) and lab skills (experimental, lower bar).

## Skill Anatomy

Every skill is a markdown file with YAML frontmatter. Start from `skills/_template/SKILL.md` as your template. A skill defines:

- **Frontmatter** — metadata fields that the build system reads:
  - `name` — skill slug, must match the directory name
  - `description` — one to three sentences (50+ chars)
  - `tier` — `core` or `lab`
  - `category` — topic area (e.g., strategy, outreach, operations)
  - `rr_companion` — optional ReachRobin feature integration (for core skills)
  - `needs_mcp` — list of MCP servers this skill requires (empty array if none)
  - `license` — MIT, Apache-2.0, etc.
  - `version` — semantic version (start at 0.1.0)
  - `maintainer` — your GitHub handle
  - `created-by` — your GitHub handle

- **Body** — written for end users. Required sections for **core** skills: "When to use", "When NOT to use", "Use this instead". Lab skills have a lower bar: description + procedure enough to understand what it does.

The `pnpm validate` script checks frontmatter format and scans for unsafe patterns (hard-coded secrets, invalid syntax). The `pnpm build` script renders each skill into three outputs: a Claude Code plugin file, a standalone prompt pack, and a web gallery entry.

## Core vs Lab Tier

**Core tier** skills appear in the main Claude Code plugin. They're vetted, maintained, and have examples showing inputs and outputs. When to propose core:

- Solves a significant problem in the GTM journey.
- Has clear inputs (what you paste in) and clear outputs (what the skill produces).
- Includes guidance on when it applies and when it doesn't.
- You're committed to updating it as AI models improve.

**Lab tier** skills are experimental. Lower review bar, fewer guarantees, but the same format. Lab is where skills graduate from, or where one-offs live. No need for extensive guidance sections.

## Contribution Flow

Two paths depending on tier:

### Lab skill (direct PR)
1. Create a directory under `skills/lab/` named after your skill (lowercase, kebab-case).
2. Copy `skills/_template/SKILL.md` into the directory as `SKILL.md`.
3. Fill in frontmatter and body.
4. Create `examples/` subdirectory with `before-after.md` showing a minimal input-output pair.
5. Run `pnpm validate` and `pnpm build` locally to verify (no build errors, outputs look reasonable).
6. Open a PR.

### Core skill (discussion first)
1. Open a GitHub Discussion in the "Skills" category. Sketch the idea: what problem it solves, rough inputs and outputs, why it's core-tier.
2. Wait for a maintainer to respond with feedback or green-light.
3. Once approved, follow the lab flow above but create under `skills/core/` instead.

## DCO Sign-off

Every commit must be signed off. Use `git commit -s` or add `-s` to your existing workflow. The DCO GitHub Action on pull requests enforces this. It takes 5 seconds per commit.

## Local Development

- `pnpm install` — install dependencies
- `pnpm validate` — check all skills' frontmatter and safety lints (no errors = exit 0)
- `pnpm build` — render skills into outputs (CC plugin, prompt pack, site data)
- `pnpm typecheck` — TypeScript check
- `pnpm test` — unit tests

The web gallery dev server (`pnpm site:dev`) comes in Phase 0 Task 0.12.

## Code of Conduct

We have a Code of Conduct. Please read it: `.github/CODE_OF_CONDUCT.md`. TL;DR: be respectful, assume good faith, keep focus on technical work, and report violations to dev@reachrobin.com.
