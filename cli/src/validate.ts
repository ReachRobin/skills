import { globby } from 'globby'
import fs from 'node:fs/promises'
import path from 'node:path'
import { parseFrontmatter } from './frontmatter.js'
import { runSafetyLints } from './safety-lints.js'

async function main() {
  const skillFiles = await globby(['../skills/{core,lab}/*/SKILL.md'])
  let errors = 0

  for (const file of skillFiles) {
    const md = await fs.readFile(file, 'utf8')
    const slug = path.basename(path.dirname(file))

    try {
      const { frontmatter, body } = parseFrontmatter(md)
      if (frontmatter.name !== slug) {
        console.error(`[${file}] frontmatter.name (${frontmatter.name}) != directory (${slug})`)
        errors++
      }
      const lintIssues = runSafetyLints(body)
      for (const issue of lintIssues) {
        console.error(`[${file}] ${issue.kind}: ${issue.match}`)
        errors++
      }
    } catch (err) {
      console.error(`[${file}] frontmatter invalid:`, (err as Error).message)
      errors++
    }
  }

  if (errors > 0) {
    console.error(`\n${errors} validation errors`)
    process.exit(1)
  }
  console.log(`Validated ${skillFiles.length} skills, no errors`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
