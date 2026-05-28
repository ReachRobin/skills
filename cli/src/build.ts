import { globby } from 'globby'
import fs from 'node:fs/promises'
import path from 'node:path'
import { parseFrontmatter } from './frontmatter.js'
import { renderCcPlugin, renderMarketplaceJson } from './render-cc-plugin.js'
import { renderPromptPack } from './render-prompt-pack.js'
import { renderSitePage } from './render-site-page.js'

const DIST = '../dist'

async function writeFile(target: string, contents: string) {
  await fs.mkdir(path.dirname(target), { recursive: true })
  await fs.writeFile(target, contents)
}

async function main() {
  await fs.rm(DIST, { recursive: true, force: true })

  const skillFiles = await globby(['../skills/{core,lab}/*/SKILL.md'])
  if (skillFiles.length === 0) {
    console.error('No skills found.')
    process.exit(1)
  }

  const coreSkills: Array<{ slug: string; description: string }> = []
  const labSkills: Array<{ slug: string; description: string }> = []

  for (const file of skillFiles) {
    const md = await fs.readFile(file, 'utf8')
    const slug = path.basename(path.dirname(file))
    const { frontmatter, body } = parseFrontmatter(md)

    const targetGroup = frontmatter.tier === 'core' ? coreSkills : labSkills
    targetGroup.push({ slug, description: frontmatter.description })

    const pluginDir = frontmatter.tier === 'core' ? 'cc-plugin' : 'cc-plugin-lab'
    const cc = renderCcPlugin({ slug, frontmatter, body })
    await writeFile(path.join(DIST, pluginDir, cc.path), cc.contents)

    const pp = renderPromptPack({ slug, frontmatter, body })
    await writeFile(path.join(DIST, 'prompt-pack', pp.path), pp.contents)

    const sp = renderSitePage({ slug, frontmatter, body })
    await writeFile(path.join(DIST, 'site-data', sp.path), sp.contents)
  }

  const coreManifest = renderMarketplaceJson({
    pluginName: 'skills',
    description: 'Open-source GTM playbook (core)',
    skills: coreSkills,
  })
  await writeFile(path.join(DIST, 'cc-plugin', coreManifest.path), coreManifest.contents)

  if (labSkills.length > 0) {
    const labManifest = renderMarketplaceJson({
      pluginName: 'skills-lab',
      description: 'Experiments and one-offs',
      skills: labSkills,
    })
    await writeFile(path.join(DIST, 'cc-plugin-lab', labManifest.path), labManifest.contents)
  }

  console.log(`Built ${coreSkills.length} core + ${labSkills.length} lab skills`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
