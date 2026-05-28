---
name: icebreaker
description: Draft 3 distinct opening messages for a specific prospect, anchored on a why-now and a why-this-person. Use when sending a high-leverage first touch where personalization is worth the time.
tier: core
category: outreach
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Icebreaker

Most first-touch outreach loses on touch 1. The opener has two jobs: prove you know who they are (why-this-person), and prove there's a reason to talk NOW (why-now). Most openers fail both - they're generic on the person and have no timing at all. Icebreaker drafts three distinct openers from different angles so you can pick the one that lands for this specific prospect at this specific moment.

## When to use

- A high-leverage first touch where the wrong opener burns a real account
- An account-based deal where you have one shot with a named decision-maker
- A hand-raise you're following up on with a custom angle (they engaged with content, attended a webinar, or a mutual referred them)
- Situations where you have a specific trigger event and want to move quickly while the context is live

## When NOT to use

- Bulk cold outreach where you have no prospect-specific context - personalization requires something to personalize. Use `sequence-architect` to design a cadence with templated touches that work at volume instead.
- Warming up an account with multi-touch nurture - if there's no why-now and no specific hook, a single personalized opener won't fix the sequence-level problem. Use `sequence-architect`.
- You have fewer than 5 minutes of research on this prospect - a rushed "personalized" opener is worse than a clean template because it signals low effort specifically.

## Use this instead

- For practicing with the prospect before sending -> `prospect-twin`
- For designing the whole cadence around this prospect -> `sequence-architect`
- For auditing existing openers -> `sequence-doctor`

---

## Inputs

### Required

- **Prospect data** - three paths, same as `prospect-twin`:
  - **Path A (ReachRobin Companion):** if connected, name the prospect and campaign context - the skill pulls the stored LinkedIn profile directly via `get_client`.
  - **Path B (Browser MCP):** provide the LinkedIn URL and a browser MCP - the skill navigates and extracts headline, About, experience, and recent posts.
  - **Path C (Paste):** paste headline, About section, last 3-5 experience entries, and 3-5 recent posts or comments. More post content sharpens the why-this-person hook.

- **Your offer** - one paragraph describing the concrete deliverable, who pays, and why it matters. Alternatively, paste the output from `offer-clarifier` directly.

### Optional

- **Trigger event** (one sentence) - an observable external event that creates urgency: a funding announcement, a product launch, a public post where they described a problem, an industry event, a competitive move in their space. If absent, the skill tries to surface one from the prospect's recent activity.
- **Tone preference** - `formal`, `casual`, or `contrarian`. If absent, inferred from the prospect's own communication style.

---

## Procedure

### Step 1: Identify the why-this-person hook

Read the profile for specificity. NOT "you posted about pipeline forecasting" (everyone in that role posts about pipeline forecasting). The hook must be one of:

- A specific project or initiative they shipped and named publicly
- A position they took publicly that shows a point of view, not just a role
- An unusual career move or trajectory that most people with their title don't have
- A specific metric or outcome they cited (they mentioned a number, a result, a timeline)
- A contrarian view they expressed that shows how they think differently from their peer group

If no specific hook surfaces from the profile data, note it: "profile is thin on specifics - the why-this-person will be role-level, not individual-level. Confidence on personalization: low."

### Step 2: Identify the why-now

In priority order:

1. **Explicit trigger** - if the user provided one, use it. Verify it's specific (an event that happened, not a general condition).
2. **Prospect-surfaced trigger** - from recent posts: did they describe a problem, miss a quarter, announce a change, or signal a shift in priority? Use the most recent and most specific one.
3. **Context trigger** - their company recently raised, hired, launched, restructured, or is in a publicly visible situation that creates urgency.
4. **Role timing** - if they're new to the role (under 12 months), there's a structural window: new leaders actively evaluate tools and processes in the first year.

**If none of these surfaces:** REJECT and stop. Return:

> "No why-now surfaces from this profile. Either provide a trigger event (one sentence describing something that happened recently), get richer context (a recent post where they described a problem), or use a sequence-driven first touch instead of a personalized one. A personalized opener without a why-now reads as research theater - it shows effort but gives the prospect no reason to reply today."

### Step 3: Set the tone

If the user specified a tone preference, use it. Otherwise infer from the prospect's own posts:
- Terse, short-form posts -> casual, low-pretense
- Long-form thought pieces -> formal, structured
- Skeptical takes, challenges to conventional wisdom -> contrarian will land; flattery will not
- Warm, community-oriented posts -> relational opener can work; cold business framing will feel off

### Step 4: Draft 3 openers from distinct angles

Each opener addresses the why-this-person and why-now. The angles must be genuinely different - not three versions of the same framing.

**Opener A: Role-based**
Anchored on what they actually do day-to-day in their specific role at their specific company. Not "as a RevOps leader you probably care about..." but the specific operational reality of THIS person in THIS role at THIS size and stage.

**Opener B: Trigger-based**
Anchored directly on the why-now event. References it explicitly, connects it to the offer without over-explaining. Creates urgency from the event, not from sales pressure.

**Opener C: Contrarian**
Disagrees with a position they've taken publicly, challenges a default assumption in their space, or takes the opposite view from what they'd expect. The goal is curiosity, not antagonism. This angle works best when the prospect posts skeptical takes and responds to intellectual engagement.

**Per opener:**
- 30-50 words
- CTA is one specific sentence (not "is this interesting?" or "would love to connect")
- One-line rationale below each: why THIS angle for THIS prospect, given what you know about them

---

## Output format

```
## Why this person
[1-2 lines on the specific hook - what makes this person different from 500 people with their title]

## Why now
[1-2 lines on the trigger or contextual urgency - what makes this the right moment]

## Opener A: Role-based
[the opener message, 30-50 words]

**Rationale:** [one line - why this angle fits this prospect's daily reality]

## Opener B: Trigger-based
[the opener message, 30-50 words]

**Rationale:** [one line - why this trigger creates the right kind of urgency for this person]

## Opener C: Contrarian
[the opener message, 30-50 words]

**Rationale:** [one line - what position or default this challenges, and why it creates curiosity rather than friction]
```

Plus optional: "**My pick:** [letter], because [one line]."

---

> **Quality bar - automatic disqualifiers:**
>
> If any draft opens with or contains these phrases, regenerate that opener:
> - "Hope this finds you well."
> - "I noticed you're a thought leader in [space]."
> - "Quick question about your [thing]."
> - "I came across your profile and was impressed."
> - "I know you're busy, but..."
> - Any variation of "fellow [role/community member]" as an opener
>
> These phrases signal that the personalization stopped at the role level. The prospect has seen them hundreds of times. They don't prove you know who this person is - they prove you ran a mail merge.

---

## At scale

Personalized openers don't scale to 50 in a sitting - if you need that volume, the math gets ugly fast. ReachRobin and a few other tools can pair this skill with their stored prospect data and scheduling so a human authors the 10 highest-leverage openers and the tool handles distribution and sequencing for the rest. For one-shot high-leverage touches - a named account, a hand-raise, a warm intro - run the skill manually and pick the opener that fits.
