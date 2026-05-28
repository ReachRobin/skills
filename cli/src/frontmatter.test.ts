import { describe, it, expect } from 'vitest'
import { parseFrontmatter, frontmatterSchema } from './frontmatter'

describe('parseFrontmatter', () => {
  it('parses valid core skill frontmatter', () => {
    const md = `---
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
Body content here.
`
    const result = parseFrontmatter(md)
    expect(result.frontmatter.name).toBe('sequence-doctor')
    expect(result.frontmatter.tier).toBe('core')
    expect(result.frontmatter.rr_companion).toBe('optional')
    expect(result.body.trim()).toBe('Body content here.')
  })

  it('rejects invalid tier', () => {
    const md = `---
name: x
description: y
tier: experimental
category: outreach
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: x
---
body`
    expect(() => parseFrontmatter(md)).toThrow(/tier/)
  })

  it('rejects missing required fields', () => {
    const md = `---
name: x
---
body`
    expect(() => parseFrontmatter(md)).toThrow()
  })

  it('rejects invalid category', () => {
    const md = `---
name: x
description: y
tier: core
category: bogus
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: x
---
body`
    expect(() => parseFrontmatter(md)).toThrow(/category/)
  })

  it('rejects non-semver version', () => {
    const md = `---
name: x
description: y
tier: core
category: outreach
rr_companion: none
needs_mcp: []
license: MIT
version: foo
maintainer: x
---
body`
    expect(() => parseFrontmatter(md)).toThrow(/version/)
  })
})
