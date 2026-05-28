export type LintIssue = {
  kind: 'pii_email' | 'pii_linkedin' | 'prompt_injection' | 'real_person'
  match: string
  line?: number
}

const PLACEHOLDER_EMAIL_DOMAINS = new Set(['example.com', 'example.org', 'example.net', 'test.com'])
const EMAIL_RE = /\b[A-Z0-9._%+-]+@([A-Z0-9.-]+\.[A-Z]{2,})\b/gi

const LINKEDIN_HANDLE_RE = /linkedin\.com\/in\/([A-Za-z0-9-]+)/gi
const LINKEDIN_PLACEHOLDER_RE = /linkedin\.com\/in\/<[^>]+>/gi

const PROMPT_INJECTION_PATTERNS = [
  /\bignore\s+(all\s+)?previous\s+instructions\b/i,
  /\bdisregard\s+(all\s+)?prior\s+instructions\b/i,
  /\bforget\s+everything\s+(you\s+were\s+told|above)\b/i,
  /\bsystem\s+prompt\s+override\b/i,
]

const REAL_PERSON_BLOCKLIST = [
  // Tiny conservative list. Add by maintainer consensus only.
  'elon musk',
  'sam altman',
  'mark zuckerberg',
  'bill gates',
  'jeff bezos',
  'tim cook',
  'satya nadella',
  'sundar pichai',
  'donald trump',
  'joe biden',
]

export function runSafetyLints(body: string): LintIssue[] {
  const issues: LintIssue[] = []
  const lower = body.toLowerCase()

  // Emails
  for (const m of body.matchAll(EMAIL_RE)) {
    const domain = m[1]?.toLowerCase() ?? ''
    if (!PLACEHOLDER_EMAIL_DOMAINS.has(domain)) {
      issues.push({ kind: 'pii_email', match: m[0] })
    }
  }

  // LinkedIn URLs that look like real handles
  for (const m of body.matchAll(LINKEDIN_HANDLE_RE)) {
    const wholeMatch = m[0]
    if (LINKEDIN_PLACEHOLDER_RE.test(wholeMatch)) continue
    if (/^linkedin\.com\/in\/<.+>$/i.test(wholeMatch)) continue
    issues.push({ kind: 'pii_linkedin', match: wholeMatch })
  }
  LINKEDIN_PLACEHOLDER_RE.lastIndex = 0
  LINKEDIN_HANDLE_RE.lastIndex = 0

  // Prompt-injection bait
  for (const re of PROMPT_INJECTION_PATTERNS) {
    const m = body.match(re)
    if (m) issues.push({ kind: 'prompt_injection', match: m[0] })
  }

  // Real-person blocklist
  for (const name of REAL_PERSON_BLOCKLIST) {
    if (lower.includes(name)) {
      issues.push({ kind: 'real_person', match: name })
    }
  }

  return issues
}
