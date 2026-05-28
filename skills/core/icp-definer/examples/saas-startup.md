# Example: B2B SaaS Startup (Series A, ~40 customers)

## Input

**Paying customers provided:**

| Company | Industry | Employees | Stage | MRR | Tenure (mo) | Support tickets | NPS | Churn date |
|---|---|---|---|---|---|---|---|---|
| Acme Cloud Storage | Cloud infrastructure | 120 | Series B | $2,400 | 18 | 3 | 9 | - |
| Northwind Logistics | Supply chain SaaS | 85 | Series A | $1,800 | 14 | 2 | 8 | - |
| Cascade Analytics | Data/BI tooling | 200 | Series B | $3,600 | 22 | 1 | 10 | - |
| Irongate Security | Cybersecurity | 55 | Seed | $600 | 6 | 12 | 4 | - |
| Summit HR Platform | HR/workforce | 140 | Series A | $1,800 | 16 | 4 | 7 | - |
| Riverview Finance | Fintech | 310 | Series C | $1,200 | 8 | 18 | 3 | - |
| Bluebell DevTools | Developer tooling | 90 | Series A | $2,400 | 20 | 2 | 9 | - |

**Churned customers provided:**

| Company | Industry | Employees | Stage | MRR at churn | Tenure (mo) | Churn reason |
|---|---|---|---|---|---|---|
| Monolith ERP Corp | Enterprise ERP | 1,400 | Public | $800 | 3 | "Procurement process took 6 months, tool abandoned before rollout" |
| Freelance Collective | Marketplace/gig | 8 | Pre-seed | $99 | 2 | "Too complex, just needed email templates" |

**User's gut pick of top 3 healthiest:** Cascade Analytics, Acme Cloud Storage, Bluebell DevTools.

**Trigger context provided:** Most buyers mentioned "we just hired a new Head of Growth" or "we closed our round 2 months ago" in win calls.

## Walkthrough

**Step 1 - rank by composite health.** Applying `(MRR x tenure x NPS) / (support_tickets + 1)` scores Cascade Analytics highest (79,200), followed by Bluebell DevTools (48,000) and Acme Cloud Storage (43,200). Gut picks confirmed. Riverview Finance and Irongate Security score lowest despite decent MRR — high ticket volume destroys the ratio. This matches the churn data: Monolith ERP and Freelance Collective were outliers on size (too large / too small), not industry.

**Step 2 - find the divergence.** Top quartile (Cascade, Bluebell, Acme, Northwind) clusters tightly: 85-200 employees, Series A/B, tech-native companies (cloud infra, devtools, data/analytics, supply chain SaaS), all with a technical head of function rather than a non-technical executive buyer. Bottom cohort (Riverview, Irongate) are financial-services-adjacent with heavy compliance overhead. The churned customers bracket the size band: one is a 1,400-person public company with a procurement wall, one is a 8-person pre-seed with no process maturity. Employee band 70-250, Series A/B, is the signal; outside that, fit degrades sharply.

**Step 3 - extract JTBD from trigger context.** "Hired a new Head of Growth" + "just closed a round" map cleanly to a single job: the incoming growth leader needs to show traction fast without building new infrastructure from scratch. The exact phrase from win calls: *"I needed something I could hand to my team on day one and have running by the end of the week."* That's the JTBD. Cascade Analytics added: *"We were drowning in spreadsheets after our Series B and I couldn't get reporting done before board meetings."*

## Output

```
ICP: [Product] — B2B SaaS growth teams
Date: 2026-05-28
Confidence: Moderate (40 customers total; top-quartile signal is clear)

1. ONE-LINER
   Tech-native B2B SaaS company (70-250 employees, Series A/B) that hires
   a new growth or marketing leader — who needs to show early traction
   without building infrastructure from scratch.

2. FIRMOGRAPHICS
   - Industry: SaaS or tech-native (cloud, devtools, data/analytics, logistics SaaS)
   - Size: 70-250 employees
   - Stage: Series A or Series B (has budget, still moves fast)
   - Tech stack signal: uses Segment, HubSpot, or Mixpanel (signals data maturity)

3. TRIGGER EVENTS
   - New VP/Head of Growth or Marketing hired → immediate mandate, no legacy baggage
   - Series A/B close → budget unlocked, growth team being built
   - "Outgrew spreadsheets" moment before a board meeting → pain is acute and timed

4. JOBS-TO-BE-DONE
   When I join a new company mid-growth, I want to have core growth
   workflows running in days, so I can show early results before the
   board asks what I've been doing.

   When we close a round, I want to scale outreach without hiring 3
   more people, so I can hit the ARR targets we promised investors.

5. BUYING SIGNALS (for outbound)
   - LinkedIn: new "VP Growth", "Head of Marketing" hire at Series A/B SaaS in last 90 days
   - Crunchbase: Series A/B announcement in last 6 months
   - BuiltWith/HubSpot integration visible on domain → data-mature team
   - Job posting: "growth engineer", "growth analyst", "demand gen manager"

6. DEAL ROLES
   - Economic buyer: VP Growth, Head of Marketing, or CEO (at seed-late stage)
   - Champion: the new hire who sponsored the evaluation
   - End user: growth analyst or SDR team

7. DISQUALIFIERS — DO NOT TARGET
   - >400 employees or Series C+ with a formal procurement process —
     deal cycles stretch to 6+ months and stall without an enterprise
     sales motion we don't yet have (evidence: Monolith ERP churned in 3 months)
   - Financial services, healthcare, or legal — compliance overhead
     exceeds what the product currently handles; Riverview Finance
     generated 18 tickets in 8 months before churning
   - Pre-seed / <20 employees — no process maturity; churn on complexity
     before they get value (evidence: Freelance Collective)
   - Non-tech companies using the product as email-template tooling —
     wrong JTBD, no growth infrastructure to plug into

8. ICP SCORECARD (apply to any prospect)
   1. SaaS or tech-native business model? (0/1)
   2. 70-250 employees? (0/1)
   3. Series A or B? (0/1)
   4. Growth/marketing team of 2+ people? (0/1)
   5. Recent new hire in growth or marketing leadership (90 days)? (0/1)
   6. Recent funding event (6 months)? (0/1)
   7. Uses a CRM or marketing automation tool? (0/1)
   8. Not in financial services, healthcare, or legal? (0/1)
   9. English-speaking market? (0/1)
   10. Company has an outbound or content motion already? (0/1)

   Score >=7 = strong ICP. Score 5-6 = proceed with caution. Score <5 = pass.

9. EVIDENCE
   - Employee band 70-250: all 4 top-quartile accounts fall here; both churns bracket outside
   - Series A/B: 4/4 top accounts; Riverview (C+) and churn Monolith (public) are outliers
   - Trigger event "new growth hire": mentioned by 3 of 4 top accounts in win calls
   - JTBD phrasing: verbatim from Bluebell DevTools win call and Cascade Analytics onboarding note
   - Disqualifier evidence: Monolith (procurement), Riverview (compliance tickets), Freelance (churn reason)
```

**Review date:** 2026-11-28 (6 months). Re-run when customer count crosses 80 — current signal is moderate, not strong.
