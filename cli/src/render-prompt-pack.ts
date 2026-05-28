import type { Frontmatter } from './frontmatter.js'
import type { RenderedFile } from './render-cc-plugin.js'

export function renderPromptPack(args: {
  slug: string
  frontmatter: Frontmatter
  body: string
}): RenderedFile {
  const { slug, frontmatter, body } = args
  // Prompt-pack is meant to be pasted into any chat. Open with a one-line
  // instruction prologue, then the skill body unchanged.
  const prologue = `You are an assistant performing the following task: ${frontmatter.description}\n\n`
  return {
    path: `${slug}.md`,
    contents: prologue + body.trimStart(),
  }
}
