import matter from 'gray-matter'
import { z } from 'zod'

export const frontmatterSchema = z.object({
  name: z.string().regex(/^[a-z][a-z0-9-]*$/, 'lowercase-kebab only'),
  description: z.string().min(20).max(500),
  tier: z.enum(['core', 'lab']),
  category: z.enum(['strategy', 'discovery', 'outreach', 'operations']),
  rr_companion: z.enum(['none', 'optional', 'required']),
  needs_mcp: z.array(z.string()).default([]),
  license: z.literal('MIT'),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, 'must be semver'),
  maintainer: z.string().min(1),
  'created-by': z.string().optional(),
})

export type Frontmatter = z.infer<typeof frontmatterSchema>

export function parseFrontmatter(md: string): { frontmatter: Frontmatter; body: string } {
  const parsed = matter(md)
  const frontmatter = frontmatterSchema.parse(parsed.data)
  return { frontmatter, body: parsed.content }
}
