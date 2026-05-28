---
name: offer-clarifier
description: Force clarity on what you sell, who pays, and why now. Use before working on ICP, positioning, pricing, or outreach - the downstream work is garbage if the offer is vague.
tier: core
category: strategy
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Offer Clarifier

Most founders know what they built. Few can say what they sell. The gap between the two is where marketing money disappears, sales calls go sideways, and positioning exercises produce documents nobody uses. This skill closes the gap. It is the prerequisite for ICP, positioning, pricing, and outreach - all of which produce garbage when fed a vague offer.

The skill asks uncomfortable questions in sequence. It rejects hand-waving answers. It produces a 4-section offer clarity doc that is specific enough to be wrong - and specific enough to be useful.

## When to use

- Before running `icp-definer` - you can't define who buys if you can't say what they're buying
- Before running `positioning-canvas` - positioning requires a concrete offer to position
- Before running `pricing-teardown` - pricing requires a unit to price
- Before writing outreach copy or sequences - "we help companies grow" is not a hook
- When sales calls loop without closing - usually a symptom of offer vagueness
- When you can't write a one-line description that someone outside your industry understands
- When different people on your team describe what you sell differently

## When NOT to use

- You already have 10+ customers who bought the same thing for the same reason - your offer is clear enough; use `positioning-canvas` to tighten the message
- You're refining copy on a validated offer - messaging polish is not offer clarity; the offer is already clear
- You're picking a market segment before deciding what to sell them - use `icp-definer` (provisional hypothesis mode) to work through the targeting question first

## Use this instead

- For messaging once the offer is clear -> `positioning-canvas`
- For finding the right buyers -> `icp-definer`
- For setting prices on the clarified offer -> `pricing-teardown`
- For going to market with the clarified offer -> `gtm-motion-picker`

## Inputs

Ask for exactly these before starting. Do not assume or infer what's missing - name it and ask.

1. **One-line description** - what they sell, in plain language. The raw version, however vague. This is the starting point, not the output.
2. **Optional context** (use if provided):
   - Target market as currently understood
   - Current pricing (even if rough)
   - Customer count and any known paying customers by name/type
   - What they think is the pain they solve

If the one-line description hasn't been provided, ask for it before proceeding. Everything else can be surfaced through the clarifying questions.

## The 4-section offer clarity doc

This is the output. Each section has one job. Do not merge sections, summarize sections, or skip sections.

### 1. What you sell

The concrete deliverable. Not "value." Not "outcomes." Not "a platform that enables teams to..."

The literal thing the customer receives: a file, a report, a configured integration, a running service, a scheduled session, a trained model, a list of 300 qualified prospects, a certified document. If you can't name the artifact, you don't have an offer - you have a capability.

Bad: "We help engineering teams move faster."
Bad: "A productivity layer for developers."
Good: "A hosted link-routing service that evaluates CDN-edge redirect rules in <5ms, configured via YAML, billed per million redirects."

### 2. Who pays

The exact buyer. Not "decision-makers." Not "technical teams." Not "founders."

Job title + company type + the one condition that makes them the buyer right now. The more specific, the more useful. "VP of Engineering at a 150-250 person B2B SaaS company who owns the infrastructure budget and is on-call for the service it affects" is usable. "Technical leaders" is not.

Bad: "Developers and technical founders."
Bad: "Companies that need faster infrastructure."
Good: "VP of Engineering or Staff+ engineer at a 50-250 person SaaS company who owns the on-call rotation for a high-traffic API and reports latency SLAs to a CTO or board."

### 3. Why now

The trigger event that moves a buyer from "passively aware" to "active intent to buy." Not "they need it." Not "it's painful." The specific moment - the incident, the announcement, the hire, the deadline, the quarter-end number - that makes them open the wallet this quarter instead of next year.

Most buyers know their problem for months before they buy. The trigger is what converts awareness into urgency. If you can't name the trigger, your pipeline will be full of people who "get it" but never close.

Bad: "They're tired of slow redirects."
Bad: "They want better performance."
Good: "A production incident caused by a misconfigured redirect rule that took 4+ hours to diagnose - or a public SLA breach that appeared in a post-mortem. Alternatively: they just migrated to multi-CDN and realized their routing logic lives in 4 different configs with no single source of truth."

### 4. Pretend it is

The budget line item a buyer files this under to get it approved. Real corporate budgets have real categories. The buyer doesn't create a new budget category for your product - they fit it into one that already exists, or they fight for a new line item, which takes a quarter and usually fails.

Naming the pretend matters because it tells you (a) who controls the budget, (b) what competing purchases you're displacing, and (c) how to write the business case the buyer needs to get it approved.

Bad: "Infrastructure costs."
Bad: "Software budget."
Good: "CDN and edge infrastructure tooling" (under DevOps budget, owned by VP Eng) OR "Developer productivity tooling" (under R&D budget, sometimes owned by EM or CTO). If they can file it under an existing category, the approval path is shorter. If they can't, they're spending political capital you haven't earned yet.

## Clarifying questions - run in sequence

Do not skip ahead. Each question gates the next. If an answer is vague, reject it explicitly and reask. Examples of what rejection looks like are in the notes below each question.

**Q1. In one sentence: what does the customer get for their money? Name the thing they receive.**

Reject if: abstract ("a platform", "a solution", "a way to..."). Push for the artifact - the thing they could screenshot, download, configure, or point at in a browser.

**Q2. Walk me through a specific customer. Name them, or describe them specifically enough that I could find a similar company on LinkedIn. What was their job title? What did they pay per month?**

Reject if: "a startup" or "a SaaS company." Push for size, stage, role. "50-person Series A SaaS, VP Eng, paid $800/month" is acceptable. "A tech company" is not.

**Q3. What were they doing the week before they bought? What changed that made them start looking?**

Reject if: "they needed X" or "they were struggling with Y." Push for the specific event: the incident, the new hire, the board ask, the deadline. If they genuinely don't know, note that as a gap and move on - but flag it in the output.

**Q4. When they brought this to their boss or team lead, how did they describe it? What category did they put it in when approving the spend?**

Reject if: "software expense" or "tools budget." Push for the specific budget bucket: DevOps tooling, Sales productivity, Marketing services, Compliance infrastructure. If they have a real customer who bought, ask them to recall exactly how the PO or billing category was labeled.

**Q5. What would they have done if your product didn't exist? Be specific - not "they'd be worse off," but the actual workaround: the spreadsheet, the Zapier flow, the manual process, the competing tool, the internal build.**

This surfaces the real competitive alternative, which is almost never the vendor you're afraid of.

**Q6. Name one type of company or person that looks like your buyer but isn't. What makes them wrong-fit?**

Reject if: "everyone needs this" or the user can't name a disqualifier. Push for a concrete example: company too large, process too complex, wrong role, wrong tech stack. No disqualifier = no offer discipline.

**Q7. What's the first bill they pay after signing? Where does the value show up - in their dashboard, their on-call schedule, their quarterly report, their sales pipeline?**

This surfaces the time-to-value and the metric the buyer cares about, which feeds into the offer doc's "what you sell" section if the first pass was still too abstract.

**Q8. If a new customer wanted to cancel after 30 days, what reason would they give that would be completely fair?**

This surfaces the offer's failure mode - the case where delivery falls short of expectation. A good offer doc acknowledges this; an honest founder can answer it.

## Rejecting vague answers - examples

Use these as templates. The tone is direct, not hostile.

- "'Productivity tool' is too abstract. What does the customer produce that they couldn't produce before? Name the output."
- "'Founders' is too broad. Founders of what kind of company, at what stage, with what team size? Pick one you've actually sold to."
- "'Saves time' doesn't move budget. Saves whose time, on what task, at what frequency? If it's 2 hours a week for one engineer, that's a $200/month line item. If it's 2 hours a week across an on-call team of 8, that's different."
- "'They were frustrated' is not a trigger event. What happened? What did they open up the next morning and start looking for a solution to?"
- "'Software budget' is not a budget category. Does it come out of DevOps, Sales, Marketing, R&D, or IT? Who approves it?"
- "I need you to name a company or role I could find on LinkedIn. 'A SaaS company' is not findable."

## Output format

```
OFFER CLARITY: [Product name]
Date: [YYYY-MM-DD]

1. WHAT YOU SELL
   [Concrete deliverable - the artifact or running thing the customer receives]

2. WHO PAYS
   [Job title] at a [company type, size, stage] who [owns / is responsible for / reports on] [X]
   and [one condition that makes them the buyer right now]

3. WHY NOW
   [The specific trigger event: incident, hire, deadline, quarter-end, competitive move]
   [Minimum one concrete example drawn from a real or described customer]

4. PRETEND IT IS
   Primary: "[budget category]" - owned by [role], approved by [role above]
   Alternate path: "[budget category]" if primary path is blocked
   What they displace: [what they're currently spending on this slot, if anything]

---
GAPS
[Honest list of questions that couldn't be answered - these are the offer's weakest points]
```

## Quality checks

- **Artifact test**: read "What you sell" aloud. Could a non-technical buyer describe it accurately to their boss? If not, it's still abstract.
- **LinkedIn test**: read "Who pays." Could you search LinkedIn right now and find 50 of these people? If no, too broad.
- **Trigger test**: read "Why now." Is there a specific external event, or just a vague pain? Vague pain doesn't close deals.
- **Budget test**: read "Pretend it is." If the buyer's finance team asked what category to file it under, would this answer work? If not, the approval path is unclear.
- **Disqualifier test**: ask the user who this is NOT for. If they hesitate, the offer has no edges.

## Common failure modes

- **The capability trap**: describing what the product can do instead of what the customer gets. Capabilities are inputs; deliverables are outputs.
- **Audience averaging**: describing a buyer that is a blend of three different real buyers. Blended buyer descriptions are wrong for all three. Pick one and document the others separately.
- **Trigger fabrication**: inventing a trigger event that sounds plausible but hasn't been observed in actual customers. This produces messaging that resonates with no one. Ground it in a real customer's story.
- **Budget category theater**: naming a category that sounds right ("software tools") without knowing who actually owns it. The wrong budget owner is a blocker, not a champion.
- **No gaps section**: skipping the gaps section because it feels like admitting failure. The gaps section is the most operationally useful part - it names what to go learn next.
