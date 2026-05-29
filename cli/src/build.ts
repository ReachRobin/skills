import { globby } from 'globby'
import fs from 'node:fs/promises'
import path from 'node:path'
import { parseFrontmatter } from './frontmatter.js'
import { renderMarketplaceManifest } from './render-marketplace.js'
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
    console.log('No skills to build yet.')
    return
  }

  const coreSkills: Array<{ slug: string; description: string; skillPath: string }> = []
  const labSkills: Array<{ slug: string; description: string; skillPath: string }> = []

  for (const file of skillFiles) {
    const md = await fs.readFile(file, 'utf8')
    const slug = path.basename(path.dirname(file))
    const { frontmatter, body } = parseFrontmatter(md)

    // Path to the source skill dir, relative to the repo root (where the
    // marketplace.json lives and `source: "./"` resolves from).
    const skillPath = './' + path.relative('..', path.dirname(file)).split(path.sep).join('/')

    const targetGroup = frontmatter.tier === 'core' ? coreSkills : labSkills
    targetGroup.push({ slug, description: frontmatter.description, skillPath })

    const pp = renderPromptPack({ slug, frontmatter, body })
    await writeFile(path.join(DIST, 'prompt-pack', pp.path), pp.contents)

    const sp = renderSitePage({ slug, frontmatter, body })
    await writeFile(path.join(DIST, 'site-data', sp.path), sp.contents)
  }

  const manifest = renderMarketplaceManifest({
    name: 'reachrobin-skills',
    description: 'Open-source GTM playbook as skills',
    owner: { name: 'ReachRobin' },
    plugins: [
      {
        name: 'reachrobin',
        description: 'Open-source GTM playbook (core)',
        skillPaths: coreSkills.map((s) => s.skillPath),
      },
      ...(labSkills.length > 0
        ? [
            {
              name: 'reachrobin-lab',
              description: 'Experiments and one-offs',
              skillPaths: labSkills.map((s) => s.skillPath),
            },
          ]
        : []),
    ],
  })
  // Repo root (one level up from cli/), NOT under dist/ - this file is committed.
  await writeFile(path.join('..', manifest.path), manifest.contents)

  console.log(`Built ${coreSkills.length} core + ${labSkills.length} lab skills`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
