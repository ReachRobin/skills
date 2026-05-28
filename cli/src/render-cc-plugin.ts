import type { Frontmatter } from './frontmatter.js'

export type RenderedFile = { path: string; contents: string }

export function renderCcPlugin(args: {
  slug: string
  frontmatter: Frontmatter
  body: string
}): RenderedFile {
  const { slug, frontmatter, body } = args
  // CC's SKILL.md only requires `name` and `description` in frontmatter.
  // Strip our internal metadata to keep the file lean for CC consumption.
  const ccFrontmatter = `---
name: ${frontmatter.name}
description: ${frontmatter.description}
---`
  return {
    path: `skills/${slug}/SKILL.md`,
    contents: `${ccFrontmatter}\n${body}`,
  }
}

export function renderMarketplaceJson(args: {
  pluginName: string
  description: string
  skills: Array<{ slug: string; description: string }>
}): RenderedFile {
  const manifest = {
    name: args.pluginName,
    description: args.description,
    version: '0.0.1',
    skills: args.skills.map((s) => ({
      name: s.slug,
      description: s.description,
      path: `skills/${s.slug}/SKILL.md`,
    })),
  }
  return {
    path: 'marketplace.json',
    contents: JSON.stringify(manifest, null, 2) + '\n',
  }
}
