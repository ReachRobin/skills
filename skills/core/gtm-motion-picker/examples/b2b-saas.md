# Example: B2B SaaS Analytics Tool (Acme Analytics)

## Scenario

**Acme Analytics** is a fictional B2B SaaS product that helps marketing and growth teams track campaign attribution across paid, organic, and product channels in a single dashboard. It's been running for 18 months. The founder says: "We have 60 paying customers, mostly through founder-led sales and word of mouth. ACV is around $5K, average time-to-value is a few weeks. We're debating hiring two AEs vs investing in a self-serve funnel."

## Scoring the 4 variables

### 1. ACV: $5,000
Falls in the $1K-$15K band. PLG with sales assist (PLS) is the natural landing zone for this range. Full sales-led motion would require an AE to close every deal -- at $5K ACV, even a 6-week sales cycle makes the unit economics razor-thin (AE OTE $120K, closed 20 deals/year = $240K CAC per AE, which doesn't work at $5K ACV unless NRR is strong).

### 2. Time-to-value: ~3-4 weeks
This is the hard variable. 3-4 weeks is solidly in "PLG hard" territory -- users cannot reach "aha" alone in a session. The reason: attribution setup requires connecting multiple data sources (Google Ads, Facebook, Segment, the customer's product database). That integration work takes time. This pushes away from pure PLG toward hybrid or PLS where onboarding assistance bridges the TTV gap.

Can TTV be shortened? Potentially: pre-built connectors + a setup wizard could get first-value moment from "see your first attribution report" in 30-60 minutes, even if full setup takes longer. That's worth product investment before hiring AEs.

### 3. Buyer complexity: single buyer, multi-stakeholder light
Typically a VP Marketing or Head of Growth signs. IT may need to approve the data connector. No procurement review at the target company size (30-150 employees). This is "multi-stakeholder, single department" -- compatible with PLS, not a blocker for PLG at lower ACV.

### 4. Self-serve readiness: 3/5
- [x] Can sign up without talking to sales
- [ ] Cannot reach "aha" without human onboarding (data source integration requires guidance)
- [x] Can invite teammates after setup
- [ ] Cannot upgrade without a sales conversation (custom pricing above $500/month)
- [x] Has in-product upgrade trigger (usage-based limit at free tier)

3/5 means PLG-with-friction: fix the two gaps before committing to a pure PLG motion.

## Recommendation

**Motion: PLS (Product-Led Sales)** -- PLG funnel with sales-assist for accounts showing upgrade signals.

- ACV of $5K is right for PLS: low enough that full AE cycles are uneconomical, high enough that a lightweight sales-assist on PQLs pays off
- TTV of 3-4 weeks is the core friction point -- invest in onboarding automation first; with guided setup TTV could fall to <1 day for first value
- Buyer complexity is compatible: marketing VP can often approve $5K without IT or procurement
- Self-serve readiness is 3/5 -- two fixable gaps

**Hiring AEs now is premature.** At $5K ACV the first hires should be growth + onboarding, not quota-carrying AEs. Add a sales-assist layer (1 person, expansion-focused) only after the PLG funnel is converting at >10% trial-to-paid.

## Output

```
GTM MOTION RECOMMENDATION: Acme Analytics
Date: 2026-05-28

1. INPUTS
   - ACV: $5,000
   - Time-to-value: 3-4 weeks (first attribution report)
   - Buyer complexity: multi-stakeholder, single department (VP Marketing + light IT)
   - Self-serve readiness: 3/5 -- gaps: human onboarding required for data sources;
     no self-serve upgrade above $500/month

2. RECOMMENDED MOTION
   PLS (Product-Led Sales)

3. WHY THIS, NOT THE OTHERS
   - vs full PLG: TTV is too long for unassisted activation; 3/5 self-serve score
     means too many users stall before aha -- conversion would be <5% without fix
   - vs sales-led: $5K ACV doesn't support quota-carrying AEs (unit economics
     require $15K+ ACV minimum for a full-cycle AE to break even)
   - vs hybrid: clean segmentation rule doesn't exist yet -- no evidence of a
     mid-market segment at $30K+ ACV; don't hire for a motion you don't have data for

4. IMPLEMENTATION MOVES (do these next, in order)
   1. Build guided setup wizard for top 5 data connectors (Segment, Google Ads,
      Facebook Ads, HubSpot, GA4) -- target TTV <2 hours for first report. Owner:
      product/eng. Timeframe: 6 weeks.
   2. Define activation event (e.g., "first attribution report with >0 conversions
      tracked") and instrument it. Owner: growth/eng. Timeframe: 2 weeks.
   3. Add self-serve upgrade at $500/month and $1,200/month tiers with usage-based
      gates (tracked events, seats). Owner: product/billing. Timeframe: 4 weeks.
   4. Build PQL scoring: flag accounts that hit activation event + crossed 50% of
      usage limit within 30 days. Trigger outreach from founder or CS. Owner:
      growth. Timeframe: after activation event is instrumented.
   5. Add >$10K ACV deals to a sales-assist lane: one founder or fractional AE
      handles these personally. Hire a full AE only when there are consistently
      5+ $10K+ deals/month in the pipeline. Owner: founder. Timeframe: ongoing.

5. METRICS TO WATCH
   - Leading: % of signups hitting activation event within 14 days (signal:
     onboarding wizard working)
   - Lagging: trial-to-paid conversion rate at 30 days (proof: motion converting)
   - Tripwire: median time to activation >7 days (signal: TTV not improving,
     PLG motion won't work, re-evaluate)

6. WHAT TO STOP DOING
   - Founder-led demos for <$3K ACV deals: they're either self-serve or not a fit
   - Custom onboarding sessions for every new signup: automate the first-value
     path; reserve human time for PQL accounts only
   - Building features before fixing the TTV gap: a shorter time-to-value lifts
     every downstream metric; a new feature doesn't
```

**Review trigger:** If trial-to-paid conversion reaches >15% AND there are consistently 5+ $10K+ opportunities per month, add a sales-assist layer and revisit hybrid motion. If conversion stays <8% after onboarding wizard ships, the problem is product-market fit, not motion.
