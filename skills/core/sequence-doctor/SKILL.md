---
name: sequence-doctor
description: Audit an outreach sequence and produce a ranked fix list. Use when reply rates are low, when you want a second opinion before sending, or when rewriting a sequence from scratch.
tier: core
category: outreach
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Sequence Doctor

Most outreach cadences underperform because they have specific, diagnosable problems: same tone across all touches, no real why-now, asks that mismatch the level of trust built so far, breakup messages that beg. These aren't vague "personalization" problems - they're structural failures you can name, locate, and fix. This skill names them, ranks them by impact, and shows the exact rewrite.

## When to use

- Reply rates are below what you'd expect (rough benchmark: <5% for cold LinkedIn, <3% for cold email - but context matters)
- Pre-send second opinion on a cadence you or a team member wrote
- Post-quarter audit - something ran and didn't work, now figure out why before relaunching
- Rewriting from scratch after confirming the sequence architecture itself is salvageable (if the architecture is wrong, use `sequence-architect` instead)

## When NOT to use

- You don't have an existing cadence to audit - use `sequence-architect` to design one from scratch
- You're auditing a single standalone message, not a sequence - that's a different problem; compare against `icebreaker` patterns for openers
- The sequence hasn't run yet and you have no ICP or offer locked - audit will produce generic findings; do `icp-definer` and `offer-clarifier` first

## Use this instead

- For designing a cadence from scratch -> `sequence-architect`
- For drafting one specific opener -> `icebreaker`
- For triaging replies after sending -> `reply-classifier` (coming in v0.2)

## Inputs

### Required

- **The cadence** - paste each touch with a label: `Touch N | Channel | Day X`. Include the full message body, not a summary. Subject lines for email touches.

### Optional

- **Metrics** - reply rate, meeting rate, total prospects sent to. Even one number sharpens the diagnosis. A 1% reply rate on a sequence that ran 200 times is a different problem than 0 replies on a 10-person test.
- **ICP description** - helps evaluate whether the sequence is targeting the right problem for the right person. Without it, the audit treats fit issues as message issues, which leads to wrong fixes.

The skill will produce a useful audit on cadence-only input. Metrics + ICP input make it substantially sharper.

## Procedure

### Step 1: Read the whole cadence as one sequence

Do not evaluate touches in isolation. Read them in order, start to finish, as the prospect would experience them. Most cadences fail at the sequence level - the arc collapses, or the trust level assumed by touch 4 was never earned in touches 1-3. Before flagging individual message problems, answer:

- Is there a discernible tonal arc, or does it read as one message sent N times?
- Does the ask escalate, or does touch 1 ask for the same thing as touch 4?
- Is there a breakup, and is it clean or is it passive-aggressive?
- Does any touch add something new, or are they all restatements of touch 1?

Flag arc-level failures first. They outrank any message-level fix.

### Step 2: For each touch, identify role and execution

Each touch should have a role in the arc: cold opener, context-builder, value-add, soft pivot, breakup. If you can't name the role, that's a finding. For each touch:

- Name the intended arc role (infer if not explicit)
- Assess whether the message actually executes that role
- Flag if the tone is inappropriate for where this touch sits in the sequence (e.g., cold-opener register in touch 4 is a tell)

### Step 3: Flag the standard failure patterns

Check for each:

**Begging breakup** - touch N says some version of "did you see my last few messages?" or "I'll assume this isn't a priority and close the loop" as a manipulation to provoke a guilt reply. Clean breakups state you're done, leave a door open with one sentence, and stop. If the breakup feels like a 5th ask, it is.

**Tone flatline** - cold opener register in touch 3, 4, or 5. The sequence should warm across touches as earned context accumulates. If touches 2-5 sound like touch 1, the rep never left the cold-outreach posture and the reader feels it.

**Fake personalization** - touch 1 opens with "I noticed you posted about [topic]" when that topic is what every person in that role posts about (e.g., "AI transformation" for any CTO). Personalization that applies to the whole ICP is not personalization - it's the illusion of personalization, and experienced buyers recognize it instantly.

**CTA inflation** - every touch asks for a 30-minute call. The ask should escalate. Touch 1 earns a reply. Touch 3 earns a short conversation. Touch 5 doesn't get to ask for 30 minutes.

**Same-channel flatline** - same channel for all 5 touches with no variation. The prospect stops seeing new messages as new signal; it's the same sender, same context, same place.

### Step 4: Rank findings and produce the fix list

Rank by impact on reply rate. Issues that affect every touch rank above issues that affect one. Structural issues rank above copy issues. Use the output format below.

## Output format

Three sections, clearly labeled. Demo-readable in 60 seconds.

---

### 1. Critical issues (ranked, max 5)

One item per identified critical problem. Format per item:

**[Short bold statement of the problem]**

Why this tanks performance: 1-2 sentences with specifics where relevant. Cite numbers or industry context when you have them.

BEFORE:
```
[original message or relevant excerpt]
```

AFTER:
```
[rewritten version - this is the concrete fix, not a description of a fix]
```

---

### 2. Smells (3-5 items)

Less critical, but worth fixing. One line describing the problem + one line on what to change. No before/after needed.

- **[Smell name]:** [what's wrong] - [what to do instead]

---

### 3. What you got right (1-3 bullets)

Real observations, not flattery. Specific patterns worth preserving.

- [Specific thing that works and why]

If nothing in the cadence is working, say so. "Nothing significant to preserve - recommend scrapping and using `sequence-architect` to rebuild from scratch" is a valid output.

---

**Verdict** (optional, 1-3 sentences): If the cadence is repairable with the fixes above, say so. If it's too far gone - arc is broken, every touch needs rewriting, or the core premise is wrong - say that instead. Don't soften a scrap verdict.

## At scale

Fixing a cadence on paper is one problem; running the corrected version at volume across hundreds of prospects is another. Sequencers that handle LinkedIn-primary outreach at scale - including account warm-up, rate limiting, multi-account routing, and reply detection that exits prospects from the sequence - include ReachRobin, Octopus CRM, and Dripify. Email-primary cadences are better served by Smartlead, Lemlist, or Outreach. Most of them won't tell you what's wrong with your sequence; that's what this skill is for.
