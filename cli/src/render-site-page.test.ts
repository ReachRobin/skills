import { describe, it, expect } from 'vitest'
import { renderSitePage } from './render-site-page.js'
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
Body content.
`

describe('renderSitePage', () => {
  it('produces a JSON data file for Astro consumption', () => {
    const { frontmatter, body } = parseFrontmatter(sampleMd)
    const out = renderSitePage({ slug: 'sequence-doctor', frontmatter, body })
    expect(out.path).toBe('sequence-doctor.json')
    const data = JSON.parse(out.contents)
    expect(data.slug).toBe('sequence-doctor')
    expect(data.name).toBe('sequence-doctor')
    expect(data.tier).toBe('core')
    expect(data.category).toBe('outreach')
    expect(data.rr_companion).toBe('optional')
    expect(data.body).toContain('Body content')
    expect(data.installSnippet).toContain('/plugin install reachrobin')
  })
})
