import { describe, it, expect } from 'vitest'
import { renderCcPlugin } from './render-cc-plugin.js'
import { parseFrontmatter } from './frontmatter.js'

const sampleMd = `---
name: sequence-doctor
description: Audit an outreach sequence and produce a fix list. Use when reviewing existing cadences.
tier: core
category: outreach
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---
# Body
Skill body content goes here.
`

describe('renderCcPlugin', () => {
  it('produces a SKILL.md file ready for CC consumption', () => {
    const { frontmatter, body } = parseFrontmatter(sampleMd)
    const out = renderCcPlugin({ slug: 'sequence-doctor', frontmatter, body })
    expect(out.path).toBe('skills/sequence-doctor/SKILL.md')
    expect(out.contents).toContain('name: sequence-doctor')
    expect(out.contents).toContain('description: Audit an outreach sequence')
    expect(out.contents).toContain('# Body')
  })

  it('strips internal-only frontmatter fields', () => {
    // CC's skill format expects only `name` and `description`; everything else is metadata.
    const { frontmatter, body } = parseFrontmatter(sampleMd)
    const out = renderCcPlugin({ slug: 'sequence-doctor', frontmatter, body })
    expect(out.contents).not.toContain('tier:')
    expect(out.contents).not.toContain('maintainer:')
    expect(out.contents).not.toContain('version:')
  })
})
