---
name: icp-definer
description: Define an Ideal Customer Profile from observed paying-customer data, churn data, and qualitative signals. Use when defining or tightening ICP, when sales efficiency drops (rising CAC, falling close rate), or when support load suggests wrong-fit customers.
tier: core
category: strategy
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
created-by: jarektkaczyk
---

# ICP Definer

An ICP describes the customer who *gets the most value, fastest, with the lowest support cost, and stays longest*. It is data-driven, not aspirational. Written ICPs that read like marketing personas ("Marketing Mary, 32, loves coffee") fail — they describe the human, not the buying conditions.

## When to use

- Pre-Series A / pre-PMF: too many segments, can't pick
- Post-PMF: tightening for efficient growth
- Diagnosing rising CAC, falling LTV, or support overload
- Multi-audience product (internal users vs external SaaS buyers) — produce *separate* ICPs per audience
- Entering a new market where existing ICP may not transfer

## When NOT to use

- You have fewer than 10 paying customers — the data is too thin; use qualitative hypothesis docs instead
- You haven't shipped yet — no customers means no ICP data; use a target-customer hypothesis with an explicit review date
- You're trying to justify a segment you've already decided to target — this process surfaces truth, not confirmation
- The goal is messaging polish, not targeting discipline — use `positioning-canvas` instead

## Use this instead

- **positioning-canvas** — once ICP is locked, use this to build the messaging that speaks to those buyers; ICP feeds positioning step 4
- **audience-builder** — for sourcing and scoring outbound lists against a defined ICP
- **gtm-motion-picker** — use this if the question is "which go-to-market motion fits our ICP" rather than "who is our ICP"

## Required inputs

Ask the user for these before running. If missing, name what's missing in the artifact.

1. **Customer list** — paying customers with: company, plan/MRR, signup date, activation date, churn date (if churned), support ticket volume, NPS/CSAT if available
2. **Top 10 healthiest accounts** — the user's gut pick (cross-check against data later)
3. **Top 5 worst-fit accounts** — high support, low usage, churned, refund requests
4. **Lost-deal notes** if available — common reasons prospects didn't buy
5. **Win-call recordings or notes** if available — exact words customers use

If the user has fewer than 20 paying customers, mark the ICP *provisional* — the data is too thin for statistical confidence.

## The 6-dimension framework

Each dimension answers a different sales/marketing question.

### 1. Firmographics (who they are)
- Industry / sub-industry
- Company size (employees, revenue, or whatever predicts best)
- Geography (only if it predicts — not by default)
- Tech stack signals (e.g., "uses HubSpot", "has a product team")
- Stage / maturity (seed vs Series B vs public — affects buying process)

**Rule**: only include a dimension if your healthiest cohort clusters on it AND your worst cohort doesn't. Otherwise it's noise.

### 2. Trigger events (when they buy)
What changed that made the problem urgent? Examples:
- New VP of Sales hired (new playbook)
- Just raised a round (now has budget)
- Lost a major customer (panic on retention)
- Compliance deadline (forced timeline)
- Outgrew a tool (Excel breaking, current vendor missing a feature)

If no triggers are identifiable, the product is probably a "vitamin not painkiller" — flag this.

### 3. Jobs-to-be-Done (why they hire the product)
Use Christensen's JTBD form:
> When [situation], I want to [motivation], so I can [expected outcome].

Pull *exact phrases* from win-call recordings if possible. Customer's words > marketing language.

### 4. Disqualifiers (who this is NOT for)
The most under-done part of most ICPs. Name segments that look adjacent but aren't:
- Companies below/above a size threshold
- Industries with regulatory friction the product can't handle
- Buying processes too complex for current sales motion
- Use cases the product handles poorly

A good ICP doc has at least 3 explicit disqualifiers.

### 5. Buying signals (how to find them)
Externally-visible signals that correlate with fit — these power outbound:
- Job postings (e.g., "hiring SDRs" → ready for an outbound tool)
- Funding announcements
- Tech stack via BuiltWith / Wappalyzer
- LinkedIn activity / podcast appearances
- Public product changes

### 6. Buyer / champion / user (who matters in the deal)
- **Economic buyer**: who signs the check
- **Champion**: who advocates internally
- **End user**: who actually uses it

These are often three different people. Messaging must address each.

## Process

1. **Pull the data**. Get the customer list with metrics. Read CSV/sheet if supplied.
2. **Rank accounts** by composite health. Default formula: `(MRR × tenure_months × NPS_score) / (support_tickets + 1)`. Tune with user.
3. **Compare top quartile vs bottom quartile** across each firmographic dimension. Note where they diverge — those are your ICP signals.
4. **Run JTBD interviews** if the user has time — 5 wins, 5 losses, 5 churns. If not, extract from existing call notes / support tickets.
5. **Draft the ICP** in the output format below.
6. **Stress-test**: pick 3 of the user's "best gut accounts" and 3 "worst gut accounts" — does the ICP correctly predict them? If not, dimensions are wrong.
7. **Score new prospects**: provide a simple 0-10 scoring rubric for inbound/outbound lists.

## Output format

```
ICP: [Product] — [Audience version if multi]
Date: [YYYY-MM-DD]
Confidence: [Strong / Moderate / Provisional]

1. ONE-LINER
   [Company type] in [stage/situation] who [JTBD] when [trigger event].

2. FIRMOGRAPHICS
   - Industry: [...]
   - Size: [...]
   - Stage: [...]
   - Tech stack signal: [...]

3. TRIGGER EVENTS
   - [Event] → why it creates urgency

4. JOBS-TO-BE-DONE
   When [situation], I want to [motivation], so I can [outcome].

5. BUYING SIGNALS (for outbound)
   - [Signal + where to find it]

6. DEAL ROLES
   - Economic buyer: [title]
   - Champion: [title]
   - End user: [title]

7. DISQUALIFIERS — DO NOT TARGET
   - [Segment + why]

8. ICP SCORECARD (apply to any prospect)
   [10-question rubric, each 0-1, score >=7 = ICP]

9. EVIDENCE
   [Citations: which customers / data points support each claim]
```

## Quality checks

- **Predictive test**: pick 5 accounts not used in the analysis. Does the scorecard rank them correctly by actual revenue/retention?
- **Disqualifier test**: at least 3 explicit disqualifiers? If not, the ICP is too broad.
- **JTBD test**: are the JTBDs in the *customer's* words, or marketing-speak?
- **Falsifiability test**: could this ICP be wrong? If it reads as universal truths ("companies that want to grow"), it has no information content.

## Common failure modes

- **Aspirational ICP** — the customer the team *wishes* they had, not the one they actually serve well. Anchor on data.
- **Demographic personas** — "Marketing Mary, 32" tells you nothing about why she buys. Replace with situation + JTBD.
- **No disqualifiers** — a list of who's a fit without who isn't is a wishlist, not an ICP.
- **Ignoring multi-audience reality** — internal vs external buyers, free vs paid, SMB vs enterprise often need separate ICPs. Don't average them.
- **Static doc** — ICPs decay. Mark a review date (default: 6 months out).

## Handoffs

- Once ICP is locked, hand to `positioning-canvas` if positioning isn't yet defined (positioning step 4 needs ICP)
- Hand to outbound/copy work for messaging that uses the JTBD language
- Hand to sales ops for the scorecard to filter inbound leads
