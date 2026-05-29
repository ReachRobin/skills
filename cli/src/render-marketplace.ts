import type { RenderedFile } from './types.js'

// Claude Code reads a single `.claude-plugin/marketplace.json` at the repo root.
// Each plugin entry inlines its skill list (source `./`, skill dirs relative to
// the repo root) - skills are auto-loaded from the committed source tree, so no
// built artifact needs committing. Mirrors Anthropic's `anthropic-agent-skills`
// marketplace, which namespaces skills as `<plugin>:<skill>`.
export function renderMarketplaceManifest(args: {
  name: string
  description: string
  owner: { name: string }
  plugins: Array<{ name: string; description: string; skillPaths: string[] }>
}): RenderedFile {
  const manifest = {
    name: args.name,
    owner: args.owner,
    metadata: { description: args.description, version: '0.0.1' },
    plugins: args.plugins.map((p) => ({
      name: p.name,
      description: p.description,
      source: './',
      strict: false,
      skills: p.skillPaths,
    })),
  }
  return {
    path: '.claude-plugin/marketplace.json',
    contents: JSON.stringify(manifest, null, 2) + '\n',
  }
}
