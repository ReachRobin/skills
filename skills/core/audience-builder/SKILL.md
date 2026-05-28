---
name: audience-builder
description: Build a target audience list plan given an ICP. Outputs LinkedIn search filters and 3-5 lookalike sources. Use when starting a new outbound motion or expanding into a new segment.
tier: core
category: discovery
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Audience Builder

Most audience-building defaults to "let's pull a LinkedIn Sales Nav search and call it a day." The result is the same 200 people every competitor is also messaging. Real audience-building means triangulating multiple sources where your specific ICP actually shows up, with disqualifiers tight enough to keep volume in check.

## When to use

- Starting a new outbound motion from scratch
- Expanding into a new segment or vertical after a successful run in your primary one
- Refreshing a stale audience list after a significant ICP shift or post-churn analysis
- Building a parallel audience to A/B test against your current one

## When NOT to use

- You already have a working audience and just need to write better openers - use `icebreaker`
- You're prospecting one specific named account - use `account-mapper` (coming v0.2)
- You haven't defined your ICP yet - this skill requires a defined ICP as input; vague targeting intent ("mid-market SaaS") is not an ICP

## Use this instead

- For defining the ICP first -> `icp-definer`
- For finding trigger events on the resulting audience -> `trigger-event-finder`
- For designing the cadence for these prospects -> `sequence-architect`

---

## Inputs

**Required:** An ICP document or paragraph. It must include all four of these elements - if any are missing, stop and ask for them:

- **Firmographics** - industry, company size, geography, stage
- **Trigger events** - what changes in a company that creates urgency to buy
- **Disqualifiers** - explicit segments that look adjacent but aren't; at minimum 3
- **Buying signals** - externally-visible signals that correlate with fit

If the user pastes something that reads as a persona ("marketing leaders who care about brand") with no firmographics, triggers, or disqualifiers: reject it.

> "This reads as a persona, not an ICP. An ICP defines buying conditions, not demographic archetypes. Run `icp-definer` first, then come back."

---

## Output: Sourcing Plan

### 1. LinkedIn Sales Navigator Filters

Translate the ICP directly into Sales Nav-ready boolean filters. Use actual Sales Nav field names:

- **Job Title** (the "Job Title" keyword field, not just the standardized "Function/Seniority" dropdowns - combine both for coverage)
- **Seniority Level** - Director, VP, C-Level, Owner (Sales Nav enum values)
- **Company Headcount** - Sales Nav ranges: 1-10, 11-50, 51-200, 201-500, 501-1,000, 1,001-5,000
- **Industry** - Sales Nav industry taxonomy (e.g., "Computer Software", "Internet", "Information Technology and Services")
- **Geography** - Sales Nav region codes; be specific (e.g., "United States", "Canada", not just "North America")
- **Company Type** - Publicly Held, Privately Held, Not for Profit (use to exclude non-profits, government, etc.)
- **Years in Current Role** / **Years at Current Company** - for role-tenure signals
- **Keywords** - boolean strings for the Account Keywords field when firmographic targeting alone isn't precise enough

**Exclusions** - explicit negative criteria to keep precision high:
- Titles to exclude (e.g., staffing, consulting, freelance signals)
- Industries to exclude based on the ICP's disqualifiers
- Company size exclusions

Provide the filter set as a copy-pasteable list, not a paragraph. If the ICP is narrow enough that a single filter set covers it cleanly, provide one. If the ICP splits across two meaningfully different buyer types (e.g., technical buyer vs. business buyer), provide two filter sets.

Expected volume estimate per filter set: rough order of magnitude is fine ("roughly 5,000-15,000 results in North America at these settings"). If the filter set returns either too few (<500, hard to build meaningful pipeline) or too many (>50,000, too broad for sequenced outbound), flag it and suggest which dimension to tighten or loosen.

---

### 2. Lookalike Sources (3-5)

Non-LinkedIn sources where this ICP shows up organically. For each source: what to look for, where specifically to find it, and how to extract names from it.

**Job postings boards**
Companies hiring for a specific role signal they have the pain that role exists to solve. A company hiring a Head of Data Governance is a different buying signal than a company hiring a general data engineer. Which board to use depends on the ICP:
- Wellfound (AngelList) for startups
- LinkedIn Jobs for mid-market/enterprise
- We Work Remotely for distributed-first companies
- Greenhouse API (`/boards/{companySlug}/jobs`) for bulk extraction when you have a target company list

Extraction: manually search or use a scraper - the company name and job posting are the leads. Then enrich with Sales Nav for individual contacts.

**Conference and community attendee/speaker lists**
Niche conferences publish speaker lists publicly; past attendee lists sometimes appear via sponsorship decks or LinkedIn event attendees. Specificity matters: "DevOps Days" is too broad; "Platform Engineering Day" or "RevOps Co-op" is narrow enough to be a real signal. Search for past event pages, sponsor decks in PDF format, and LinkedIn Events for the attendee list (limited to connections + 2nd degree, but useful for sizing).

**Podcast guest lists**
Who's been a guest on industry-specific podcasts in the last 6 months. The host has done the ICP filtering for you - guests are active, articulate practitioners in the space. Scrape the podcast page or use Podchaser. Each guest is a name; find their company on LinkedIn.

**GitHub activity on specific repositories**
For technical ICPs: recent stargazers, forkers, or contributors on repos that are proxies for the problem space. The GitHub API (`/repos/{owner}/{repo}/stargazers`, `/repos/{owner}/{repo}/forks`) returns user handles - cross-reference email or company from their GitHub profile. Signals technical interest where job titles might not surface it.

**Newsletter subscriber footprints**
People who comment publicly on relevant newsletters (Substack Notes, LinkedIn Newsletter comment sections) are self-selected engaged readers in the space. This doesn't give you a subscriber list (you can't access that), but it gives you the most engaged slice. Search for newsletter names on LinkedIn and look at who's reposting or commenting.

---

### 3. Disqualifier Checks

From the ICP's disqualifier list, translate each into a checkable filter rule. These are the gates to run BEFORE adding any name to the list.

Format each as:
- **Signal to check:** [what to look for and where]
- **Action on match:** [skip / flag for manual review]

Examples:
- Company is a staffing agency or consultancy (check LinkedIn company type + "Services" industry tag) -> skip
- Headcount recently dropped >20% (check LinkedIn headcount trend, Layoffs.fyi) -> flag
- Company is in an IPO quiet period (S-1 filed, no secondary yet - check SEC EDGAR) -> flag, follow up post-lock
- Founder/CEO is the first point of contact and company is pre-Series A (check Crunchbase) -> skip if the ICP requires operational maturity
- Company is already a customer or in active pipeline (check CRM before adding) -> skip

---

## Guidance-only (v1)

This skill outputs a sourcing PLAN. It does NOT execute the searches. To run the LinkedIn search, paste the filters into Sales Navigator manually. To pull lookalike sources, use whatever scraping or research tools you have. A future version will pair this skill with an MCP-based search tool.

If you have a web search MCP installed (e.g., a Brave Search MCP, a SerpAPI MCP, or a Sales Nav-specific MCP), you can use this skill's output as the brief for that tool.

---

## At scale

Building a single audience is doable manually in a few hours. Maintaining 5-10 segmented audiences with regular refreshes is operational work - new hires, departures, and company changes mean lists decay fast. Tools like Clay, Apollo, and ReachRobin's prospect-campaign features automate the maintenance layer. The skill is the brief; the tool is the execution layer.
