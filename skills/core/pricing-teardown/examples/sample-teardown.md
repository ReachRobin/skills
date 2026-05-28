# Example: Pricing Teardown (NoteStack)

## Scenario

**NoteStack** is a fictional team note-taking and meeting-notes app for small software teams. It has a free tier (unlimited personal notes, 1 workspace), a $12/user/month Starter plan (3 workspaces, shared docs, search), and a $29/user/month Pro plan (unlimited workspaces, integrations, admin controls). Annual billing offers 20% off. The founder says: "Trial conversion is around 4%. We have a lot of discount requests. Our biggest competitor just lowered prices. Should we respond?"

## Required inputs provided

- **Current plans:** Free / Starter ($12/user/month) / Pro ($29/user/month) + annual 20% discount
- **Competitors named:** Notion, Confluence, Coda, Slab, Slite
- **Customer mix:** 60% on Starter, 35% on Pro, 5% free-to-paid converted; ARPU $15.40
- **Sales data:** 40% of Starter-to-Pro upgrade requests include a discount ask; quote-to-close on Pro upgrades is 55%
- **Value metric candidate:** per seat (current); alternatives considered: per workspace, flat-per-team

## Step 1: Competitor pricing (official pricing pages)

| Vendor | Tier | Price/seat/month | Free tier | Notable gate |
|---|---|---|---|---|
| Notion | Free | $0 | Forever, limited blocks | Block limit + guests |
| Notion | Plus | $10 | - | Unlimited blocks; guests limited |
| Notion | Business | $15 | - | SAML, advanced permissions |
| Confluence | Free | $0 | 10 users max | User count |
| Confluence | Standard | $6.05 | - | Space admin; Atlassian billing |
| Confluence | Premium | $11.55 | - | Analytics, unlimited storage |
| Slab | Free | $0 | Up to 10 users | User count |
| Slab | Startup | $6.67 | - | Unlimited users, integrations |
| Slab | Business | $12.50 | - | Analytics, custom domains |
| Slite | Free | $0 | 3 channels | Channel count |
| Slite | Standard | $8 | - | Unlimited channels, search |
| Slite | Premium | $15 | - | AI features, SSO |
| Coda | Free | $0 | Per doc maker | Doc maker count |
| Coda | Pro | $10 per doc maker | - | No Coda branding |
| Coda | Team | $30 per doc maker | - | Advanced permissions |

Note: Coda prices per "doc maker" (user who creates docs), not all users -- this is a differentiated value metric.

## Step 2: Normalization

Market is predominantly per-seat pricing with free tiers. The effective paid range for the mid tier is $6-$12/seat/month. NoteStack's Starter at $12/seat sits at the top of what the market considers "basic/starter" and at the floor of what the market considers "business." That's a category mismatch: customers compare Starter to Notion Plus ($10) or Slite Standard ($8) and NoteStack looks expensive for the same feature set.

## Step 3: Anti-patterns detected

**1. Feature gate on table-stakes: advanced search on Starter tier**
Search is table-stakes in a note-taking app in 2026. Every competitor includes it in their first paid tier. NoteStack gates it. This generates support tickets ("why can't I find my notes?") and is the top-cited reason for Starter churn in the last 6 months. Fix: move search to Free tier.

**2. Annual discount of 20% without commitment language**
20% is a common refund-risk zone. NoteStack's annual plans are cancellable and partially refundable. The 40% discount-request rate from Starter users suggests they're already treating the annual plan as leverage. Fix: cap annual discount at 15% OR make annual non-refundable after 30 days with explicit commitment messaging.

**3. Only 2 paid tiers**
The gap from $12 to $29 is a 2.4x jump. Customers shopping for a team plan face a cliff -- Starter doesn't include integrations (a Pro feature), but Pro is nearly 3x the price. Mid-market teams (5-20 people, need integrations but don't need admin controls) have nowhere to land. Fix: add a Team tier at $18-20/seat with integrations but without enterprise features.

## Step 4: Value-metric audit

**Current:** per seat. 
**Should it change?** No -- note-taking value scales with team size. The more people on NoteStack, the more valuable the shared knowledge base. Per-seat is correct for this product. Coda's per-doc-maker model is clever for their use case (where many users read but few create) but NoteStack's usage data shows >80% of users create content, so per-doc-maker would shrink revenue. Keep per-seat.

## Step 5: Price point analysis

No formal Van Westendorp survey available. Using proxies:

- 40% discount-request rate on Starter upgrades: strong signal of pricing over the indifference point for that segment
- Notion Plus at $10 is the primary comparison; customers name it in support tickets when asking for discounts
- Trial conversion of 4% vs industry median of 8-12% for freemium SaaS: consistent with pricing friction at the paywall
- Estimated indifference price for Starter: $9-10/seat (basis: market clustering + discount-request frequency)
- Current Starter price: $12/seat -- roughly 20-25% above estimated indifference point

## Recommendation

**Action: Restructure (add a tier + move search to free + lower Starter, not raise)**

The problem isn't that price is too low -- it's that the tier structure is wrong and a table-stakes feature is gated. Specific changes:

1. Move search to Free tier (removes the biggest churn/complaint trigger)
2. Rename Starter to "Team" at $9/seat: unlimited workspaces, search, shared docs, Slack integration (currently a Pro feature)
3. Add "Business" tier at $18/seat: all Team features + advanced integrations (GitHub, Jira, Figma) + custom templates
4. Rename Pro to "Enterprise" at $29/seat + "contact us" option: all Business features + SSO, admin audit logs, priority support
5. Cap annual discount at 15%, make non-refundable after 30 days, add explicit commitment copy ("pay once for the year")

**Expected revenue impact:** The Starter -> Team price drop ($12 -> $9) reduces revenue per seat by 25% -- but higher trial conversion and lower churn are expected to more than offset. If trial conversion rises from 4% to 7% (still below industry median) and churn falls 15% from the search-gate removal, new MRR growth turns positive within 3 months. Basis: directional estimate, not a forecast; run a 60-day A/B test on new signups before rolling to existing base.

**Rollout:**
- Grandfather all existing Starter customers at their current price; they move to the new "Team" tier at $12 (not $9) unless they churn and re-subscribe
- New signups see the restructured pricing immediately
- No changes to Pro/Enterprise pricing for existing customers

**Risks:**
- Existing Starter customers at $12 who stay grandfathered see no benefit; some will notice the new $9 rate and complain. Have a response ready: "New pricing applies to new customers; if you want to move to the new structure, we can migrate you at the new rate."
- Moving search to Free reduces upgrade pressure. Monitor: does free-to-Starter conversion drop? If it drops more than 20%, add a different gate (e.g., team collaboration features) instead.

## What we don't know

- Exact churn reasons per plan (only have anecdotal "search" signal from support tickets)
- Whether the 40% discount-request rate is isolated to a specific company-size segment or cross-cutting
- How much of the 4% trial conversion is a pricing problem vs an onboarding problem -- onboarding funnel data would sharpen the diagnosis
- Enterprise segment appetite: are there >$29/seat deals being left on the table? No data on outbound or enterprise inbound
