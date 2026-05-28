---
name: pricing-teardown
description: Run a competitive pricing teardown and produce a pricing recommendation. Pulls 5-10 competitor pricing pages, normalizes to a common axis, identifies packaging anti-patterns, and runs a Van Westendorp sanity check on the user's own price.
tier: core
category: strategy
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
created-by: jarektkaczyk
---

# Pricing Teardown

Pricing is the highest-leverage growth lever -- a 1% price increase typically delivers more profit than a 1% volume increase or 1% cost decrease (Marn & Rosiello, *HBR* 2003). But pricing is also the most under-instrumented decision in early-stage SaaS. This skill replaces gut with structured analysis.

## When to use

- New plan launch or repackaging
- Conversion is high in trial but low at paywall
- High discount-request rate from sales
- Competitor moved (raised, lowered, repackaged) and team wants a response
- Annual pricing review
- Pre-Series A: founders priced based on what felt comfortable, not value

## When NOT to use

- You haven't defined your ICP yet -- pricing without an ICP produces a number for no one; run `icp-definer` first
- You want to design a landing page -- pricing design is output, not input; lock the numbers first
- The problem is positioning, not price -- if customers don't understand the value, changing the number won't fix conversion; run `positioning-canvas` first

## Use this instead

- **positioning-canvas** -- if the pricing problem is actually a category/value-framing problem
- **icp-definer** -- if you don't know which segment to price for
- **gtm-motion-picker** -- if the question is "should we have a sales tier" rather than "what should our sales tier cost"

## Required inputs

1. **Current pricing** -- every plan, tier, add-on. Public + non-public/enterprise rates.
2. **Top 5 competitors** -- direct, indirect, and "do nothing" alternative
3. **Customer mix** -- % revenue per plan, ARPU per plan, plan-level churn if available
4. **Sales pricing data** -- quote-to-close ratio, average discount %, top objections
5. **Value metric candidates** -- what scales with customer value? (seats, API calls, contacts, revenue processed, GB stored, campaigns sent...)

## Process

### Step 1: Pull competitor pricing (from official sources only)

Hit the vendor's own pricing page -- not aggregator sites or blog comparisons. Capture:
- Tier names + prices + billing cadence (monthly/annual + discount)
- Value metric (per seat, per X, flat)
- Tier limits (the gates that force upgrades)
- Add-ons and overage charges
- Free tier shape (forever-free vs trial vs no free)
- "Contact us" tier (signal of enterprise motion)

If a competitor hides pricing entirely, note it -- strategic signal (sales-led + custom pricing).

### Step 2: Normalize to a common axis

Build a comparison table where every competitor is normalized to the *same* value metric. If the market mostly prices per seat, convert your per-API-call pricing to "implied per seat" using customer averages. Pricing isn't comparable if units differ.

Columns: vendor, tier, price/[unit], what's included, upgrade gate, free-tier shape.

### Step 3: Identify anti-patterns

| Anti-pattern | Symptom | Fix |
|---|---|---|
| **Value metric does not equal value** | Per-seat pricing for a product where value scales with usage | Switch metric to what scales with value |
| **Too many tiers** (>4) | Decision paralysis, low-tier defaulting | Collapse to 3 tiers (Good / Better / Best) |
| **No anchor tier** | Mid-tier feels expensive | Add a deliberately-overpriced top tier to anchor mid-tier as "the reasonable choice" |
| **Feature gates on table-stakes** | Frustration, support tickets, churn | Move table-stakes to the lowest paid tier |
| **Free tier with no upgrade path** | Free users never convert | Add usage-based gate (volume, seats, time) that forces decision |
| **Round numbers** ($99, $999) | Leaves money on the table | Test $97, $129 |
| **Annual >= 20% off without commitment** | High refund/churn risk | Cap annual discount at 15-20% OR require non-refundable commitment |
| **No mid-market tier** | Drop-off between SMB and enterprise | Add mid-tier with sales-assisted onboarding |

### Step 4: Value-metric audit

Ask: *what does the customer get more of, the more they pay you?* That should be the value metric. Common ones:

- **Per seat** -- value scales with team size (Slack, Notion, GitHub)
- **Per usage** -- value scales with volume processed (Stripe, Twilio, OpenAI)
- **Per outcome** -- value scales with results delivered (Intercom resolutions, lead-gen tools paid per qualified lead)
- **Per asset under management** -- value scales with what's protected/stored/served (Auth0 MAU, S3 GB)
- **Flat** -- only when value is binary (either you have access or you don't)

A misaligned value metric is the #1 fixable pricing error in SaaS.

### Step 5: Van Westendorp Price Sensitivity Meter

If the user has access to customers, run this 4-question survey (n=50+ for signal):

1. At what price would you consider [product] *too expensive* and not buy?
2. At what price is it *expensive but you'd still consider it*?
3. At what price is it *a bargain*?
4. At what price is it *so cheap you'd doubt the quality*?

Plot cumulative curves. Intersection of "too expensive" and "too cheap" = **Optimal Price Point**. Intersection of "expensive" and "bargain" = **Indifference Price Point** (median customer's expected price).

If running the survey isn't feasible, use proxies:
- Discount-request frequency -- high = priced over indifference point
- Conversion rate at price wall -- low = priced over too-expensive point
- Feature-request patterns ("I'd pay more if you added X") = headroom signal

### Step 6: Recommendation

Output one of these decisions:
- **Hold** -- price is right, fix something else (usually packaging or positioning)
- **Raise** -- gap below indifference point, anti-patterns absent -- typically 10-30% on new customers, grandfather existing
- **Restructure** -- current price fine, tiers/value-metric wrong
- **Reposition** -- pricing reflects wrong category -- see `positioning-canvas` first, then come back

Never recommend "lower" without strong evidence -- lowering price almost always destroys margin without buying volume in B2B SaaS.

## Output format

```
PRICING TEARDOWN: [Product]
Date: [YYYY-MM-DD]

1. CURRENT STATE
   - Plans: [list]
   - Value metric: [current]
   - ARPU: $[X]
   - Plan mix: [%/plan]

2. COMPETITOR LANDSCAPE (normalized table)
   | Vendor | Tier | Price/[unit] | Free tier | Notable gate |

3. ANTI-PATTERNS DETECTED
   - [Pattern]: [evidence] -> [fix]

4. VALUE METRIC AUDIT
   - Current: [X]
   - Should be: [Y] (because [reason]) OR: current is correct

5. PRICE POINT ANALYSIS
   - Estimated indifference price: $[X] (basis: [survey/proxy])
   - Estimated optimal price: $[X]
   - Gap vs current: [+/- %]

6. RECOMMENDATION
   - Action: [Hold / Raise / Restructure / Reposition]
   - Specifics: [exact change]
   - Expected revenue impact: [+ X% on new MRR within Y months, basis: ...]
   - Risks: [what could go wrong]
   - Rollout: [grandfather existing? A/B test? sales script changes?]

7. WHAT WE DON'T KNOW
   [Honest list of data gaps that would sharpen the recommendation]
```

## Common failure modes

- **Cost-plus pricing** -- pricing based on what it costs to serve. In SaaS, marginal cost is near zero; price on value, not cost.
- **Competitor mirror** -- copying a competitor's price without copying their cost structure or positioning is suicide.
- **Discounting as default** -- every discount is a permanent price cut for that segment. Use sparingly with rationale (annual commitment, multi-year, volume).
- **Hidden pricing as cleverness** -- works for true enterprise sales-led, fails everywhere else. Forces every prospect into a sales call; if you can't close on a call, the price is wrong.
- **Pricing in isolation from packaging** -- the *bundle* matters as much as the *number*. Don't change one without the other.

## Handoffs

- If pricing reveals positioning is wrong -> `positioning-canvas`
- If pricing reveals ICP is wrong -> `icp-definer`
- If pricing change requires GTM motion change (e.g., adding sales-led tier) -> `gtm-motion-picker`
