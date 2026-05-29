import { describe, it, expect } from 'vitest'
import { renderMarketplaceManifest } from './render-marketplace.js'

describe('renderMarketplaceManifest', () => {
  it('produces a root .claude-plugin/marketplace.json with one entry per plugin', () => {
    const out = renderMarketplaceManifest({
      name: 'reachrobin-skills',
      description: 'Open-source GTM playbook as skills',
      owner: { name: 'ReachRobin' },
      plugins: [
        {
          name: 'reachrobin',
          description: 'core',
          skillPaths: ['./skills/core/icebreaker', './skills/core/icp-definer'],
        },
        {
          name: 'reachrobin-lab',
          description: 'lab',
          skillPaths: ['./skills/lab/title-roaster'],
        },
      ],
    })

    expect(out.path).toBe('.claude-plugin/marketplace.json')
    const data = JSON.parse(out.contents)
    expect(data.name).toBe('reachrobin-skills')
    expect(data.plugins).toHaveLength(2)

    const core = data.plugins[0]
    expect(core.name).toBe('reachrobin')
    // source `./` + skill dirs relative to repo root -> CC auto-loads from the source tree.
    expect(core.source).toBe('./')
    expect(core.skills).toEqual(['./skills/core/icebreaker', './skills/core/icp-definer'])

    expect(data.plugins[1].name).toBe('reachrobin-lab')
    expect(data.plugins[1].skills).toEqual(['./skills/lab/title-roaster'])
  })
})
