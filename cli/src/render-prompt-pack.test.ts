import { describe, it, expect } from 'vitest'
import { renderPromptPack } from './render-prompt-pack.js'
import { parseFrontmatter } from './frontmatter.js'

const sampleMd = `---
name: sequence-doctor
description: Audit an outreach sequence and produce a fix list.
tier: core
category: outreach
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---
# Sequence Doctor

Body content here.

## When to use
After you have an existing cadence.
`

describe('renderPromptPack', () => {
  it('produces a clean markdown file with no CC-specific frontmatter', () => {
    const { frontmatter, body } = parseFrontmatter(sampleMd)
    const out = renderPromptPack({ slug: 'sequence-doctor', frontmatter, body })
    expect(out.path).toBe('sequence-doctor.md')
    // Prompt-pack format: a single intro line (the skill description as instruction prologue) then the body.
    expect(out.contents.startsWith('# Sequence Doctor')).toBe(false)
    expect(out.contents).toContain('You are an assistant')
    expect(out.contents).toContain('Audit an outreach sequence')
    expect(out.contents).toContain('# Sequence Doctor')
    expect(out.contents).toContain('## When to use')
    // No frontmatter
    expect(out.contents).not.toMatch(/^---/m)
  })
})
