---
name: positioning-canvas
description: Build a positioning statement for a product, feature, or company using April Dunford's "Obviously Awesome" 5-step framework. Use when launching, repositioning, or when messaging feels generic.
tier: core
category: strategy
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
created-by: jarektkaczyk
---

# Positioning Canvas

Apply April Dunford's positioning framework from *Obviously Awesome*. Positioning is upstream of copy, pricing, and GTM -- get it wrong and everything downstream is rework.

## When to use

- New product launch, pivot, or rebrand
- Sales calls keep ending with "I'm not sure who this is for"
- Conversion is fine but discovery is hard ("how would you find us?")
- Competitor expanded into your space and your differentiation feels muddy
- Multi-audience products (e.g., internal-tool-turned-SaaS) -- usually need *separate* positioning per audience

## When NOT to use

- You don't have a real product yet and are doing pure hypothesis work -- use a target-customer hypothesis doc instead
- The goal is tactical copywriting (landing page headlines, ad copy) -- positioning must be locked *first*; then hand to copy
- You already have differentiated, validated positioning that's converting well -- run this again only on trigger (new competitor, rebrand, new market)

## Use this instead

- **icp-definer** -- if you haven't yet defined who the best-fit buyers are, do that first; positioning step 4 (customers who care most) requires an ICP
- **gtm-motion-picker** -- if the question is how to reach the market, not how to describe the product
- **pricing-teardown** -- positioning change typically requires a pricing re-check; run after this

## The 5-step Dunford framework

Run these in order. Skipping a step or doing them in parallel produces incoherent positioning.

**1. Competitive alternatives** -- What would customers use if your product didn't exist? Includes spreadsheets, manual processes, the in-house build, doing nothing -- not just direct competitors. Force at least 3 alternatives, ideally including one non-software one.

**2. Unique attributes** -- What does your product have that the alternatives don't? Capabilities, not benefits. Be specific and falsifiable: "real-time" or "supports SAML" beats "fast" or "secure". List 5-10. If you can't find any, you don't have a position -- you have a feature.

**3. Value (so what?)** -- For each unique attribute, ask "so what does that let the customer do?" twice. Stop when you hit a business outcome (revenue, cost, risk, time). Cluster the values into 2-4 themes. The themes are your value pillars.

**4. Customers who care most** -- Which segment cares disproportionately about those value themes? Define them by *characteristics that predict caring*, not demographics. "Companies running outbound campaigns at >50/week with no SDR team" beats "SMB SaaS founders". The narrower the better -- you can broaden later.

**5. Market category** -- In the customer's mind, what frame of reference makes the value obvious? Pick a category where (a) the customer is already shopping, (b) your unique attributes are differentiators not table stakes, and (c) the budget exists. You can pick an existing category, sub-category an existing one, or rarely create a new one (expensive -- only with category-creation budget).

## Output format

Always produce this 1-page artifact. If it's longer than a page, you haven't finished thinking.

```
POSITIONING: [Product name]
Date: [YYYY-MM-DD]
Audience version: [if multi-audience: "for X buyers" / "for Y buyers"]

1. CATEGORY
   We are a [category] for [who].

2. ICP
   Best fit: [specific characteristics, not demographics]
   Disqualifiers: [who this is NOT for -- important]

3. VALUE PILLARS (2-4)
   - [Pillar]: [outcome it delivers]
   - [Pillar]: [outcome it delivers]

4. UNIQUE ATTRIBUTES (proof)
   - [Attribute] -> enables [pillar]
   - [Attribute] -> enables [pillar]

5. COMPETITIVE ALTERNATIVES
   - vs [alt]: we win on [pillar], they win on [thing]
   - vs [alt]: we win on [pillar], they win on [thing]

6. ONE-LINER
   [Single sentence that lands category + ICP + #1 value]
```

## Quality checks before finalizing

- **Substitution test**: replace your product name with a competitor's. Does the positioning still read true? If yes, it's not differentiated -- go back to step 2.
- **"So what" test**: read each value pillar aloud and say "so what?" If you can answer it from inside the pillar, you stopped too early -- push to a business outcome.
- **Sales call test**: could a salesperson use this on a 30-second elevator opener? If they need a paragraph, the category is wrong.
- **Disqualifier test**: did you name customers this is *not* for? Positioning without disqualifiers is wishful thinking.

## Common failure modes

- **"Better/faster/cheaper" positioning** -- these are claims, not categories. You need a category first.
- **Feature soup** -- 12 features as the "position". Features support a position, they aren't one.
- **Trying to be everything** -- broad ICPs make positioning soft. Narrow first; a strong wedge in one segment beats weak resonance everywhere.
- **Skipping competitive alternatives** -- leads to positioning in a vacuum. The customer's frame of reference is *their alternative*, not your roadmap.
- **One position for multi-audience products** -- if the product serves two distinct buyer types (e.g., internal users + external SaaS buyers), produce two artifacts. Don't average them.

## Research sources

When the user hasn't supplied research, gather it before running the framework:

- Product's own landing page, pricing page, and changelog
- 3+ competitor landing pages (official sources only -- no aggregator sites)
- G2 / Capterra / Reddit reviews -- read 1-star and 5-star, not 3-star
- The user's own win/loss notes if available

If research is thin, name it in the artifact ("based on landing-page review only -- interview data would sharpen step 4") rather than papering over the gap.

## Deliverable

Write the positioning artifact directly into the conversation as markdown. If the user asks for a doc/deck, hand off to `document-skills:doc-coauthoring` or `deck-builder` -- but the *positioning itself* must be locked first.
