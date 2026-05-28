---
name: prospect-twin
description: Build a believable persona simulation of a prospect from their LinkedIn profile, then practice outreach against them. Use when preparing for a high-stakes outreach or call, when iterating on openers, or when testing whether a pitch lands.
tier: core
category: outreach
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Prospect Twin

Sales reps practice their pitches on coworkers who have never heard of the prospect and are too polite to push back. Coaches charge several hundred dollars an hour for roleplay that, at best, approximates the buyer. Prospect Twin builds a simulation of any specific LinkedIn prospect - their communication style, their priorities, their BS tolerance - so you can rehearse outreach against THEM before sending anything. The session ends with a debrief that tells you what landed and why.

This is interactive sales prep, not science fiction. The same information has always been available on LinkedIn; this skill just makes it actionable before the conversation starts.

## Ethics framing

This is a practice tool. The persona is inferred from public LinkedIn information: headline, About section, experience history, and public posts. Nothing is stored, nothing is scraped beyond what you provide in the session. Functionally equivalent to reading someone's LinkedIn before a call - just interactive. The prospect receives no contact; you're practicing on a model, not the person.

If anything, lean into what this is: serious sales prep has always meant learning who you're talking to. We made it interactive.

## When to use

- Preparing for a high-leverage cold DM or outbound call to a specific named prospect
- Iterating on openers before picking which version to actually send
- Testing whether a pitch framing lands with this type of buyer before running it at volume
- Training a new SDR against a realistic buyer archetype instead of a willing-but-uninformed teammate
- Building conviction that your sequence is ready for a high-priority account

## When NOT to use

- You actually know the person - skip the simulation, use your own knowledge
- You have no meaningful profile data (the profile is mostly empty, or the person has no public posts or activity) - a thin profile produces a thin persona; note this and reduce confidence accordingly
- The prospect is a non-public-figure private individual without a professional LinkedIn presence - do not build personas on private individuals outside a professional sales context

## Use this instead

- For drafting the opener itself once you've practiced -> `icebreaker`
- For designing the whole sequence around this prospect -> `sequence-architect`
- For auditing the cadence after practice runs confirm it's not working -> `sequence-doctor`

---

## Data paths

There are three ways to give this skill prospect data. The right path depends on your setup.

### Path A - ReachRobin Companion connected (smoothest)

If you have the ReachRobin Companion MCP installed, the skill can pull prospect data directly from your RR account. ReachRobin scrapes and stores LinkedIn profiles via Unipile when prospects are enrolled in campaigns - which means zero paste work.

**When to use this path:** you have an RR account and the prospect is already in your CRM (in a campaign or your contacts list).

**How:** tell the skill the prospect's name and campaign context. The skill calls `get_client` to fetch the stored profile data and proceeds directly to persona generation.

**Example invocation:**
> "Build a twin for the prospect named Jane Kim in my Q4 outbound campaign."

The skill will resolve the prospect, confirm the profile data it has, and ask if you want to proceed.

### Path B - Browser MCP installed

If you have `mcp-server-playwright` or a similar browser-automation MCP installed and configured in your AI client, the skill can instruct it to navigate to the prospect's public LinkedIn profile and extract the visible content.

**Requirements:** you need to be logged into LinkedIn in the browser the MCP controls. We don't ship this MCP; it's a separate install. Common options: `mcp-server-playwright` (Playwright-based), `browserbase-mcp` (cloud browser).

**When to use this path:** the prospect is not in your RR CRM, but you have a LinkedIn URL and a browser MCP configured.

**Example invocation:**
> "Build a twin for linkedin.com/in/<prospect-handle> - fetch via browser MCP."

The skill will navigate to the profile, extract headline, About, experience, and recent posts, then proceed to persona generation.

### Path C - Pure paste (fallback, works anywhere)

No MCP, no RR account, no setup required. Copy sections from LinkedIn and paste them directly into the chat.

**What to paste for best results:**
- Headline and current title/company
- About section (full text)
- Last 3-5 experience entries (title, company, duration, description if present)
- Last 5-10 posts, comments, or articles they've published

The more post/comment content you include, the sharper the communication-style inference. Experience history alone produces a functional but generic persona.

**If you paste only a URL:** the skill will ask you to paste specific sections. It will not attempt to fetch the URL itself without a browser MCP.

**Example invocation:**
> "Build a twin from this LinkedIn data: [paste]"

---

## Persona generation procedure

After receiving profile data via any path, the skill runs a 5-step internal inference walk before producing the persona doc. This is not template-filling - each step informs the next.

**Step 1: Role and seniority - scope and day**

Map the current title and company size to a realistic decision-making scope. A "VP of Engineering" at a 30-person seed-stage startup has a very different decision surface than the same title at a 500-person Series C. Infer: what this person can approve unilaterally, what requires sign-off, what they're measured on, what a Tuesday afternoon actually looks like.

**Step 2: Career arc - trajectory and aspiration**

Read the experience history as a story, not a list. What did they get promoted past? What pattern of moves do they show (deep specialist, generalist climber, founder-to-operator, operator-to-founder)? Infer what they're trying to do in the next 2-3 years and what problems they're trying to solve to get there.

**Step 3: Public statements - real priorities vs. performed priorities**

Posts and comments reveal what someone actually cares about as opposed to what their role requires them to care about. A CTO who posts about team culture 80% of the time and product architecture 20% has different priorities than their job title implies. Read the pattern: what do they post about unprompted? What do they engage on? What's conspicuously absent? Distinguish between "company line" posts and personal conviction posts.

**Step 4: Communication patterns - style, tolerance, register**

Infer from post length, vocabulary, use of jargon vs. plain language, and response style in comments. Does this person write long-form thought pieces or short direct takes? Do they engage diplomatically or do they push back bluntly? How do they respond to people pitching them in comments? This is the calibration layer for how to speak to them, not just what to say.

**Step 5: Internal monologue on an inbound DM**

Synthesize the above into their probable experience of receiving a cold outbound message: what headline makes them keep reading vs. archive in 2 seconds, what framing sets off the "vendor pitch" alarm, what would make them think "this person did their homework," and what would make them reply with a question vs. ignore.

---

## Persona doc format

The output of the inference walk is a persona doc with six sections. This is for the user's reference and to anchor the roleplay that follows.

**Who they actually are** (one sharp line - not their headline reworded)
What this person is really doing at this stage of their career. Should be specific enough that it wouldn't apply to most people with the same title.

**Communication style**
Formality level, length tolerance, BS detector sensitivity, how they treat unsolicited outreach. Derived from post patterns, not job title assumptions.

**What they actually care about**
Inferred from public statements and career arc. Explicitly separate from "what their role requires them to post about." These two things are often different.

**Opener patterns that land vs. flop**
Specific: not "be personal" but "opening with a trigger event from their company's recent news will land; opening with flattery about their career will not." Include 2-3 anti-patterns specific to this person, not the archetype.

**Likely objections to a generic pitch in their domain**
Three objections they'd raise, specific to this person's context. "We already have a vendor" is too generic. "We just migrated off the last tool that promised this" is a real objection.

**Probable buying mode right now**
One of: actively researching (known problem, evaluating options), passively open (would hear something interesting), post-purchase (just bought, not looking), not in market (this problem isn't live). Derived from career timing, company signals, and what they're posting about. Flag low confidence if the signal is thin.

---

## Chat handoff

After producing the persona doc, the skill transitions the LLM into character for a practice session.

**Literal instructions for the LLM:**

You will BECOME this person for a practice session. Stay in their first-person voice at all times. Match their inferred communication style: if they're terse, be terse; if they write in full sentences, write in full sentences; if they have a dry wit, have a dry wit. React to the user's outreach attempts the way this person would react - which mostly means brushing off generic pitches with one-line responses, asking pointed questions about specifics, or ignoring entirely and letting the user try again.

Specifically:
- A generic opener gets a one-line brush-off or no reply (the user has to try again)
- A moderately relevant opener gets a "what specifically?" or "tell me more about X" that tests whether they can follow up
- A genuinely good opener - specific, relevant, low-ask - gets a "ok, I'm curious, go on" or equivalent that earns the next move
- Objections should be the ones named in the persona doc, surfaced naturally when the pitch reaches them

Do NOT break character to coach, explain, or soften. The user is practicing; let them practice. They will learn more from a realistic cold response than from a kind one.

Break character ONLY when the user types `/end`.

After `/end`, deliver a debrief:
1. Which of their attempts landed and why (be specific - what about that opener worked for this persona)
2. Which attempts fell flat and why (specific failure mode, not generic feedback)
3. One concrete thing to try next time they're in this situation with this type of buyer

The debrief should feel like notes from a coach who watched the session, not a report card.

---

## At scale

Practicing one prospect at a time is fine for high-priority accounts. If you're trying to systematically rehearse against a list of 50 target accounts before a campaign launch, that's a Companion workflow - skills combined with ReachRobin's CRM-scraped LinkedIn data mean you can run prospect-twin prep on a list without manually pulling profiles. ReachRobin, Salesforce with LinkedIn Sales Navigator, and a few other platforms that store scraped profile data are the natural pairings; the skill is the practice surface, they're the data layer.

For building the target list before any of this: `audience-builder`. For designing the sequence that follows the practice: `sequence-architect`.
