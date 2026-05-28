# Example: Linkdrop (CDN-edge link routing devtool)

The founder of Linkdrop starts vague. The skill asks 8 questions in sequence, rejects two bad answers explicitly, and produces a clean 4-section offer clarity doc.

---

## Session

**Q1. In one sentence: what does the customer get for their money? Name the thing they receive.**

> "I built a tool that helps engineering teams move faster."

That's a capability description, not a deliverable. What do they receive - a running service, a configured integration, a file, a dashboard? Pick the artifact.

> "Okay - they get a hosted service that evaluates redirect and routing rules at the CDN edge. They define rules in YAML, push them via our CLI, and traffic routes through our edge nodes instead of hitting their origin."

Good. Continue.

---

**Q2. Walk me through a specific customer. Name them, or describe them specifically enough that I could find a similar company on LinkedIn. What was their job title? What did they pay per month?**

> "Startups and scaleups that have CDN traffic."

"Startups and scaleups" is not findable on LinkedIn. Name a specific company or describe one precisely: headcount, stage, the role who bought it.

> "Northcroft Labs - 90 engineers, Series B, their Staff Engineer who owned the CDN infrastructure signed the contract. They were paying $1,200/month. They handle about 800 million redirects/month."

Good. Continue.

---

**Q3. What were they doing the week before they bought? What changed that made them start looking?**

> "A production incident. Their redirect rules were split across three CDN provider configs - Cloudflare, Fastly, and a legacy Akamai setup from before the acquisition. Someone at Northcroft updated the Cloudflare rules without knowing the Fastly rules contradicted them. A misconfigured rule sent 12% of mobile traffic to a 404 for 6 hours before anyone noticed. Post-mortem landed on the CTO's desk that Friday."

That's a trigger. Noted.

---

**Q4. When they brought this to their boss or team lead, how did they describe it? What category did they put it in when approving the spend?**

> "The Staff Engineer described it as 'CDN reliability tooling.' It went through their DevOps budget, approved by the VP Eng. They classified it alongside their observability stack - Datadog, PagerDuty. The PO said 'CDN and edge infrastructure.'"

Good. Continue.

---

**Q5. What would they have done if Linkdrop didn't exist?**

> "They were looking at two options. One: consolidate all routing logic into Cloudflare Workers and deprecate the Fastly and Akamai setups. Estimate was 3 months of engineering time and they'd be dependent on one vendor. Two: build an internal redirect config manager in their monorepo - a YAML-to-CDN-API translator their infra team would own. They'd started a spike on option two before finding us."

Good - the real alternative is an internal build, not a direct competitor. Continue.

---

**Q6. Name one type of company or person that looks like your buyer but isn't. What makes them wrong-fit?**

> "Companies that are still on a single CDN provider. They don't have the multi-CDN routing complexity problem, so the value prop doesn't land. We've talked to a few - they nod along but the pain isn't there. Also companies below about 30 engineers; they don't have dedicated infra ownership and the YAML config approach requires someone who understands CDN semantics."

Good disqualifier. Continue.

---

**Q7. What's the first bill they pay after signing? Where does the value show up?**

> "They see it within the first week - they deprecate their Fastly and Akamai manual config files and everything routes through a single YAML source of truth. The on-call team stops getting paged for 'which config is canonical' incidents. The VP Eng sees it at the next post-mortem review: zero redirect-related incidents in the 30 days post-onboarding."

Good. Final question.

---

**Q8. If a new customer wanted to cancel after 30 days, what reason would they give that would be completely fair?**

> "Probably: 'The YAML schema was too complex for anyone other than the one engineer who set it up.' We've seen that once - the original champion left the company and the new infra lead couldn't read the config. We didn't have enough tooling around it at the time."

Noted - that's a real gap in the onboarding/documentation side of the offer.

---

## Output

```
OFFER CLARITY: Linkdrop
Date: 2026-05-28

1. WHAT YOU SELL
   A hosted CDN-edge routing service. Customers define redirect and routing
   rules in YAML, push via CLI, and traffic evaluates rules at the edge
   across all CDN providers (Cloudflare, Fastly, Akamai, etc.) from a single
   config. Billed per million redirects evaluated. No origin traffic for
   routing decisions.

2. WHO PAYS
   Staff Engineer or VP of Engineering at a 50-300 person B2B SaaS company
   running 2+ CDN providers who owns the on-call rotation for a high-traffic
   API and reports latency and redirect SLAs to a CTO. They are the buyer
   when routing config drift between CDN providers has caused or is at risk
   of causing a production incident.

3. WHY NOW
   A production incident where conflicting routing rules across CDN providers
   caused incorrect traffic routing - customer facing 4xx, revenue impact, or
   SLA breach visible in a post-mortem. Alternatively: a recent multi-CDN
   migration (acquisition, CDN contract renegotiation, or Cloudflare/Fastly
   onboarding) that left routing logic split across 3+ provider-specific
   configs with no single source of truth and an on-call team nervous about
   the next incident.

4. PRETEND IT IS
   Primary: "CDN and edge infrastructure tooling" - under DevOps budget,
   owned by VP Engineering, approved alongside Datadog, PagerDuty, and
   other observability/reliability spend.
   Alternate path: "Developer productivity tooling" under R&D if DevOps
   budget is locked mid-cycle and the CTO classifies it as platform work.
   What they displace: 3 months of internal engineering time (self-build
   estimate from Northcroft Labs) or ongoing manual config sync labor
   across CDN provider dashboards.

---
GAPS
- Trigger confidence: only one confirmed incident-driven purchase so far;
  second trigger hypothesis (multi-CDN migration) is unconfirmed - needs
  3+ customer interviews to validate.
- Cancellation risk: YAML complexity post-champion-departure is a known
  failure mode; onboarding documentation and team handoff tooling are
  not yet part of the offer.
- Budget path below VP Eng: unknown whether Staff Engineers at 50-100
  person companies can self-approve at $1,200/month or require VP sign-off.
```
