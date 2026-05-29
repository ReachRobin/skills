import type { Frontmatter } from './frontmatter.js'
import type { RenderedFile } from './render-cc-plugin.js'

export function renderSitePage(args: {
  slug: string
  frontmatter: Frontmatter
  body: string
}): RenderedFile {
  const { slug, frontmatter, body } = args
  const pluginName = frontmatter.tier === 'core' ? 'reachrobin' : 'reachrobin-lab'
  const installSnippet = [
    '/plugin marketplace add ReachRobin/skills',
    `/plugin install ${pluginName}`,
  ].join('\n')
  const data = {
    slug,
    name: frontmatter.name,
    description: frontmatter.description,
    tier: frontmatter.tier,
    category: frontmatter.category,
    rr_companion: frontmatter.rr_companion,
    needs_mcp: frontmatter.needs_mcp,
    version: frontmatter.version,
    maintainer: frontmatter.maintainer,
    body,
    installSnippet,
  }
  return {
    path: `${slug}.json`,
    contents: JSON.stringify(data, null, 2) + '\n',
  }
}
