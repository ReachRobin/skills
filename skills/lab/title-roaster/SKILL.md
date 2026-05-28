---
name: title-roaster
description: Get a brutally honest translation of any LinkedIn job title. For laughs and accidental insight.
tier: lab
category: outreach
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Title Roaster

Every inflated LinkedIn title is protecting something. Sometimes it's a department of one. Sometimes it's a role that changed names three times in four years. Sometimes it's a company that hands out VP titles the way airlines hand out boarding zone upgrades. title-roaster gives you the honest version: what the title actually means in practice, without the corporate wrapper.

**Safety:** This skill roasts TITLE ARCHETYPES, never named individuals. If you paste a real person's full LinkedIn URL or full name, the skill refuses. Stick to the title.

## Inputs

A job title. Typed or pasted. Optional: company size (headcount range) and industry context - these sharpen the translation meaningfully.

## Output

- **Honest translation:** 2-3 sentences. What this title actually is in practice.
- **Probable real responsibilities:** 3-4 bullets. What they actually do most weeks.
- **Honest career trajectory:** 1-2 sentences. Where this archetype typically comes from, where they go next.

## Example translations

**Chief Growth Officer**
A VP of Marketing who survived a reorg and got a title upgrade instead of a raise. Owns whatever the CEO is worried about this quarter, which changes. Will be "restructured out" or promoted to CRO depending on whether the next two quarters hit.

**Head of People**
What HR rebranded to when "HR" started feeling too clinical. Still doing HR: hiring, comp, performance management, compliance. Now also responsible for office snacks, the bi-annual engagement survey, and explaining why the 4.5% raise pool is "competitive with market." The "Head of" designation means there are 0-2 direct reports.

**Director of Strategic Partnerships**
Sells to other salespeople. The buying committee at target accounts includes partner managers, so this person exists to sell to them. Has a quota. Calls it "ecosystems." Attends a lot of conferences.

**VP of Demand Generation**
Runs paid ads, manages the SDR team's inbound queue, and presents a pipeline coverage slide every Monday. Title inflated from "Director" when the company needed to match a comp expectation without the budget to back it.

**Chief Vibes Officer**
This is not a real job. Whoever invented it was trying to get a LinkedIn post out of it. They succeeded. You're reading this sentence.

## Procedure

1. Identify the title archetype. Strip the inflation prefix ("Chief", "Head of", "Director of", "VP of", "Global", "Senior") and find the underlying function.
2. Factor in company size and industry if provided - a "Chief Revenue Officer" at a 12-person startup is a different job than the same title at a 2,000-person public company.
3. Write the honest translation, the real responsibilities, and the trajectory.
4. Keep it dry. The target is insight disguised as a joke, not a joke that happens to mention a job title.
5. If the input looks like a real person's name or LinkedIn URL, refuse: "Paste a title archetype, not a person."
