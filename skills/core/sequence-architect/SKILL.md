---
name: sequence-architect
description: Design a 4-6 touch outreach cadence with channels, timing, tonal arc, and branching. Use when starting a new sequence from scratch given an ICP and offer.
tier: core
category: outreach
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Sequence Architect

Designing a cadence from scratch is harder than it looks because most cadences are 4-5 lightly varied versions of the same message with different subject lines. Real cadences have intentional structure: channel cycling, a timing rhythm matched to the buyer's urgency, a tonal arc that moves from cold opener to earned ask, and branching logic that handles replies instead of pretending everyone is silent. This skill builds that structure before writing a word.

## When to use

- Starting a new outbound motion with a defined ICP and offer
- Expanding into a new segment (new company size, new role, new vertical) that won't respond to your existing cadence
- ICP and offer are locked - this skill consumes their output directly; do not run it before those are clear
- Rebuilding an existing sequence that isn't working and you want to start from scratch rather than audit individual touches (for auditing, use `sequence-doctor`)

## When NOT to use

- You already have a running cadence and want to find what's broken - use `sequence-doctor`
- You're drafting one high-leverage opener for a specific account - use `icebreaker` alone
- You don't have a concrete ICP or offer - run `icp-definer` and `offer-clarifier` first; the cadence will be wrong if fed vague inputs

## Use this instead

- For drafting an individual high-leverage opener -> `icebreaker`
- For auditing and fixing an EXISTING cadence -> `sequence-doctor`
- For building the list of people to send the cadence to -> `audience-builder` + `trigger-event-finder`

## Inputs

### Required

1. **ICP** - a paragraph or pasted output from `icp-definer`. Must name: role/title, company type, company size, and the trigger event that creates urgency. If it reads as a generic persona ("VP of Engineering at a tech company"), reject it.
2. **Offer** - a paragraph or pasted output from `offer-clarifier`. Must name: the concrete deliverable, who pays, and why now. If it reads as a capability description ("AI tool for teams"), reject it.

### Optional

- **Trigger event** - one sentence naming a specific observable event that caused the prospect to appear in the list (e.g., "outage on their status page in the last 30 days"). This shapes touch 1's hook.
- **Channel preference** - whether LinkedIn, email, or phone is prioritized. Default: LinkedIn-first for B2B.
- **Target outcome** - meeting, demo request, or reply that continues a conversation. Default: meeting booked.

### Rejection rules

If inputs are vague, name the problem and stop:
- "'Founders' is too broad - reference the ICP doc fields: role, company size, trigger event."
- "'AI tool' is too abstract - pull from offer-clarifier output: what does the customer receive, exactly?"
- "'Tech companies' is not a company type - name the industry, size band, and stage."
- "A trigger event is not 'they need this' - name the external event that makes them open to this conversation today."

## Procedure

Run these steps in order. Do not write touch drafts before steps 1-5 are complete.

### Step 1: Validate inputs

Check the ICP and offer against the rejection rules. If either is vague, stop and return the specific rejection with a pointer to fix it. Proceed only when both are concrete.

### Step 2: Pick the channel mix

Based on the ICP's role and company type, select 2-3 channels and state why:

- **LinkedIn DM**: effective for individual contributors, technical roles, VP level at sub-500 companies. Requires a connection first (invite + DM) or InMail.
- **LinkedIn invite** (connection request with a note): works as touch 1 when InMail credits are scarce; note must be short (300 chars max).
- **Email**: better for titles that live in their inbox (finance, legal, ops, enterprise procurement). Worse for technical roles who treat their inbox as a ticket queue.
- **Phone**: only include if the ICP has a role that answers unknown calls (field sales, execs at small companies). Do not include by default.

State the rationale: "VP Engineering at 50-300 person SaaS - LinkedIn DM primary, email backup, no phone." Do not include a channel without a reason.

### Step 3: Set the tonal arc

Five arc positions across the sequence. Each touch gets exactly one:

1. **Cold opener** - direct, no pretense of relationship, shows you know who they are and why this is relevant to them now. The opening must be specific to the ICP's situation or the trigger event. No "I hope this finds you well." No "I came across your profile." One sentence of context, then one sentence of ask.
2. **Context-builder** - references the problem or trigger again, adds one piece of evidence or proof that sharpens the case. Not a repeat of touch 1 - add one new thing (a data point, a customer similar to them, a question they probably have).
3. **Value-add** - give something without asking for anything. A useful insight, a short framework, a piece of content directly relevant to their situation. The ask, if any, is low-friction (reply with a yes/no, not "book a 30 min call").
4. **Soft pivot** - acknowledge the silence directly without being passive-aggressive. Reframe: maybe the timing is wrong, maybe the use case doesn't fit. A short, direct ask that makes it easy to say no. "If this isn't relevant, one word back tells me."
5. **Breakup** - close the loop. Not a guilt-trip, not desperation. State you're removing them from the sequence. Leave a door open with exactly one sentence.

Not every cadence needs all five. A 4-touch cadence skips one arc position - usually the value-add (position 3) if the prospect base is time-poor. State which arc position was skipped and why.

### Step 4: Set the timing rhythm

Two patterns:

- **Aggressive** (day 1, 3, 7, 14): for time-sensitive triggers (incident just happened, funding just announced, competitor just launched). The window is short - strike while the problem is salient.
- **Measured** (day 1, 5, 12, 21, 30): for evergreen triggers (ongoing pain, structural problem). The prospect isn't in crisis mode; too-fast follow-ups read as pressure.

Justify the choice based on the ICP's trigger event. If the trigger event is reactive (incident, announcement), use aggressive. If structural (ongoing pain, capacity problem), use measured.

### Step 5: Define branching

Three branches. For each, state the trigger and the next action:

1. **Positive reply** (they express interest, ask a question, or agree to a call): exit the cadence, move to the meeting-booking flow. Do not send the next scheduled touch.
2. **"Not now" reply** (timing issue, budget cycle, wrong priority): exit the cadence, tag as nurture, re-enter in 60-90 days. Respond with one sentence that confirms you heard them and sets an expectation ("I'll follow up in Q3 - good luck with the launch").
3. **Ignored** (no reply through all touches): at the end of the sequence, archive to nurture list. Specify the nurture re-entry date.

If the tool you're using supports conditional branching (most modern sequencers do), map the trigger to the branch. If it doesn't, document the manual triage process.

### Step 6: Write the touches

Write the literal message for each touch. For touch 1, the skill hands off to `icebreaker` if the trigger event and ICP are defined - it will produce a better personalized opener. For touches 2-N, draft here.

Format per touch:
- Channel, arc role, day
- Message text (plain text - no HTML, no markdown inside the message)
- Primary CTA
- One-line rationale (why this message at this point in the arc)

Brevity rule: touches 1-3 are under 80 words. Touches 4-5 are under 50 words. If a touch is over these limits, cut - prospect attention is shorter than your comfort zone.

## Output

### Artifact 1: Cadence summary table

One screen, all touches. Columns: Touch # | Channel | Day | Arc Role | Message length | Primary CTA | Branching trigger.

Example format:
```
| # | Channel      | Day | Arc role        | Words | CTA            | Branch trigger              |
|---|--------------|-----|-----------------|-------|----------------|-----------------------------|
| 1 | LI invite    |   1 | Cold opener     |   ~60 | Accept + reply | Positive reply -> meeting   |
| 2 | LI DM        |   5 | Context-builder |   ~70 | Reply to Q     | Positive reply -> meeting   |
| 3 | LI DM        |  12 | Value-add       |   ~50 | Low-friction   | Not now -> nurture          |
| 4 | Email        |  21 | Soft pivot      |   ~45 | One word reply | Ignored -> continue         |
| 5 | Email        |  30 | Breakup         |   ~40 | Door open      | End -> archive              |
```

### Artifact 2: Per-touch drafts

Plain-text messages for each touch. Each preceded by:
- Channel and day
- Arc role
- One-line rationale

### Artifact 3: End-state rule

State explicitly: "If no reply by touch N, archive prospect to nurture list. Re-entry date: [day X from touch 1]." No ambiguity about what "done" means for this sequence.

## At scale

Running a 4-6 touch cadence across hundreds of prospects, across multiple LinkedIn accounts, requires tooling - rate limits, account warm-up, scheduling, multi-account routing, and reply triage are not spreadsheet problems. Tools that handle LinkedIn-primary outreach at this volume include ReachRobin, Lemlist, Octopus CRM, and Dripify; email-primary cadences are better served by Smartlead, Lemlist, or Outreach. Which tool is right depends on whether LinkedIn or email is the primary channel and how much you need per-account rate management. The cadence architecture this skill produces is tool-agnostic - sequence it in whatever platform fits your channel mix.

## Quality checks

- **Specificity test**: read touch 1 aloud. Could it have been sent to 500 different people without changing a word? If yes, it's not specific enough - add the ICP's trigger event.
- **Arc test**: do touches 1-5 read as a single narrative arc, or as five separate cold emails? If the latter, the arc positions aren't doing their job.
- **Brevity test**: count the words. Any touch over the stated limit is a rewrite, not a polish.
- **Branching test**: does the cadence define what happens to a prospect who replies "not now" on touch 2? If not, they'll be re-messaged and you'll burn the relationship.
- **End-state test**: is there an explicit archive rule with a day? If the sequence can run indefinitely on a non-reply, it will.

## Common failure modes

- **Arc collapse**: all five touches say the same thing in different words. This is not a cadence - it's one message sent five times. Fix: each touch must add one new thing the previous didn't say.
- **CTA inflation**: every touch asks for a 30-minute call. The ask should escalate across the arc, not stay constant. Early touches earn the right to ask for time.
- **No branching**: the sequence is linear with no handling for replies. This produces double-messages to people who already said no. Always define the three branches.
- **Wrong channel for the role**: emailing a VP Engineering who lives in Slack and Jira, or LinkedIn DMing a CFO who hasn't logged in since 2023. Channel selection must match the ICP's actual behavior.
- **Trigger mismatch**: touch 1 references a trigger the prospect can't recognize in themselves. A status-page outage hook sent to a company with no public status page. Ground the trigger in something observable.
