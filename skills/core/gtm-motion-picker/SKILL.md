---
name: gtm-motion-picker
description: Decide between PLG, sales-led, hybrid, or community-led GTM motion based on ACV, time-to-value, buyer complexity, and self-serve readiness. Use when launching or repositioning a product, or when sales costs are out of whack with ACV.
tier: core
category: strategy
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
created-by: jarektkaczyk
---

# GTM Motion Picker

A GTM motion is the *system* through which a product reaches its market -- not a single channel. The wrong motion creates compounding waste: PLG with too-high ACV burns customer acquisition costs you can't recoup; sales-led with too-low ACV burns headcount on deals that can't pay for the AE.

## When to use

- Pre-launch: deciding initial motion
- ACV much less than CAC payback target -> motion is too expensive for price point
- Self-serve signup with 0% activation -> product can't be PLG yet, or onboarding is broken
- Sales team selling deals < $5K ACV with full demo cycles -> motion is too heavy
- Hybrid drift: started PLG, accidentally hired AEs, no one knows who owns what

## When NOT to use

- You haven't shipped yet and are doing hypothesis work -- answer the 4 scoring variables first, then run this
- You want to plan a single marketing campaign, not a go-to-market system -- channel tactics don't require a motion decision
- ACV/TTV are completely unknown -- gather data first; scoring without numbers produces wrong recommendations

## Use this instead

- **icp-definer** -- if you don't know who you're selling to, fix that before deciding how to reach them
- **positioning-canvas** -- if the question is how to describe the product, not how to sell it
- **pricing-teardown** -- motion choice has pricing implications (PLG requires a self-serve tier; sales-led allows "contact us"); run after this

## The 4 deciding variables

Score each. The combination determines the motion.

### 1. ACV (annual contract value)
- **<$1K** -> PLG strongly favored (sales economics don't work)
- **$1K-$15K** -> PLG with sales assist (PLS)
- **$15K-$100K** -> hybrid (PLG top-of-funnel + AE close)
- **>$100K** -> sales-led (relationship-driven, multi-stakeholder)

ACV is the dominant variable. If ACV < $1K and you want sales-led, you're wrong about the motion or the price.

### 2. Time-to-value (TTV)
- **<10 minutes** -> PLG viable (user can hit "aha" alone)
- **10 min - 1 day** -> PLG with onboarding investment
- **1 day - 1 week** -> PLG hard, hybrid or services-assisted onboarding needed
- **>1 week** -> sales-led or implementation-led (can't expect self-serve)

If TTV > 1 week, PLG is fantasy without major product investment. Either invest in shortening TTV or accept sales-led economics.

### 3. Buyer complexity
- **1 buyer = 1 user** (individual contributors, freelancers) -> PLG
- **1 buyer, not 1 user, same team** (manager buys for team) -> PLG with team-upgrade flow
- **Multi-stakeholder, single department** -> PLS or hybrid
- **Cross-functional buying committee** (security, legal, procurement, finance) -> sales-led

You cannot self-serve through a procurement review. Beyond a certain buyer complexity, sales-led is the only motion that closes.

### 4. Self-serve readiness (product side)
A 5-checkpoint test:
- [ ] Can a user sign up without talking to sales?
- [ ] Can they get to "aha" without onboarding from a human?
- [ ] Can they invite teammates without an admin handshake?
- [ ] Can they upgrade plans without a quote?
- [ ] Is there an in-product upgrade trigger when limits are hit?

**5/5** -> PLG-ready. **3-4/5** -> PLG with friction; fix gaps. **<3/5** -> not PLG-ready regardless of what you call it.

## Decision matrix

```
                        ACV -> low ($1K-$15K)    mid ($15K-$100K)    high (>$100K)
TTV: minutes/hours      PLG / PLS               PLG + AE assist     Sales-led, PLG-influenced
TTV: days               PLS                     Hybrid              Sales-led
TTV: weeks+             Probably wrong product  Sales-led           Sales-led + services
```

Adjust toward sales if buyer complexity is high. Adjust toward PLG if buyer = user.

## The motions defined

### PLG (Product-Led Growth)
User signs up, activates, and upgrades themselves. Sales mostly absent. Examples: Linear, Notion (early), Figma (individual).

**Implementation moves**:
- Activation event defined and instrumented
- Free tier with usage-based upgrade gate (not feature-based -- feature gates feel punitive)
- In-product upgrade prompts at moments of value
- Self-serve checkout (Stripe / Paddle)
- Help docs > sales calls; community > AEs
- North-star metric tied to product usage, not pipeline

### PLS (Product-Led Sales)
PLG funnel plus sales-assist on accounts showing buying signals. Examples: Slack, Atlassian, Loom.

**Implementation moves**:
- Activation event triggers PQL (Product-Qualified Lead) scoring
- Lightweight sales team focused on expansion, not new acquisition
- Self-serve up to a threshold (seats, usage, $X ACV); sales kicks in above
- Reverse trial: start premium, downgrade if not used (forces conversation)

### Hybrid (PLG + traditional sales)
Two motions running in parallel for different segments. PLG for SMB/individual, sales-led for mid-market+. Examples: Notion (now), Datadog.

**Implementation moves**:
- Clear segmentation rule (size? ACV? industry?) with no overlap
- Separate funnels with separate metrics
- Compensation model that prevents AE poaching of PLG accounts
- Different pricing tiers for each motion

### Sales-led
AE-driven from first touch. Long cycles, multi-call, custom pricing. Examples: Salesforce, ServiceNow, most enterprise.

**Implementation moves**:
- ICP locked tight (every AE hour is expensive)
- Outbound + ABM as primary channels
- Custom pricing / "contact us" -- public pricing optional
- Implementation/CS team for post-sale (high-ACV customers expect handholding)
- Quota-carrying AEs with multi-quarter cycles

### Community-led / Developer-led
Special case where the user community is the channel. Open-source-driven (Hashicorp, MongoDB, GitLab) or developer-tools (Vercel, Supabase). Usually a flavor of PLG with heavy investment in DevRel.

## Process

1. **Score the 4 variables** with the user. If they don't know one, that itself is a signal -- usually they don't have the data.
2. **Apply the matrix** to get a motion candidate.
3. **Pressure-test**: do they have the team and product to execute it? PLG with no growth team and no instrumentation will fail. Sales-led with no sales hires will fail.
4. **Pick the motion**. Be opinionated -- "hybrid" is the default cop-out, only choose it when the segmentation rule is clean.
5. **List 3-5 implementation moves** specific to this product, not generic ones.
6. **Identify metrics** that prove the motion is working (and lagging metrics that say it's not).

## Output format

```
GTM MOTION RECOMMENDATION: [Product]
Date: [YYYY-MM-DD]

1. INPUTS
   - ACV: $[X]
   - Time-to-value: [duration]
   - Buyer complexity: [1 buyer = 1 user / team / multi-stakeholder / committee]
   - Self-serve readiness: [score]/5 -- gaps: [list]

2. RECOMMENDED MOTION
   [PLG / PLS / Hybrid / Sales-led / Community-led]

3. WHY THIS, NOT THE OTHERS
   - vs [other motion]: [reason it's wrong here]

4. IMPLEMENTATION MOVES (do these next, in order)
   1. [Move + owner + timeframe]

5. METRICS TO WATCH
   - Leading: [metric] (signal that motion is working)
   - Lagging: [metric] (proof that motion is working)
   - Tripwire: [metric] (signal motion is failing)

6. WHAT TO STOP DOING
   [Activities that fit a different motion and now waste resources]
```

## Common failure modes

- **PLG cargo-culting** -- calling everything PLG because it's fashionable. PLG requires <$15K ACV, low TTV, and self-serve product. Without all three, it fails.
- **Sales-led on a $50/month product** -- the AE costs more than the customer is worth. Fix by raising ACV or moving to PLG.
- **Hybrid as a hedge** -- choosing hybrid because you can't decide. Hybrid only works with clean segmentation; otherwise it's two half-funded motions.
- **Ignoring buyer complexity** -- beautiful PLG product that hits a procurement wall at $50K. Add sales-assist *before* hitting the wall, not after.
- **Motion mismatch with comp plan** -- PLG product with quota-carrying AEs creates AE behavior that breaks the funnel (forcing conversations on PQLs that wanted self-serve).

## Handoffs

- Motion choice changes pricing structure -> `pricing-teardown`
- Motion choice changes who you target -> `icp-definer`
- Motion choice changes how you describe the product -> `positioning-canvas`
- Motion implementation requires team/process changes -> user owns this; this skill stops at the recommendation
