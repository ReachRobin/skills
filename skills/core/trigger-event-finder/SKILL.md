---
name: trigger-event-finder
description: Identify the trigger events that make ICP-fit prospects ready to buy, and how to monitor for them. Use when shifting from spray-and-pray to event-triggered outbound.
tier: core
category: discovery
rr_companion: optional
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Trigger Event Finder

Triggered outbound dramatically outperforms cold outbound because timing is the most underrated variable in conversion. A buyer 2 weeks after a funding round is a different person than the same buyer 6 weeks before. trigger-event-finder maps the events that move your ICP from "passive" to "active intent" and tells you how to monitor for them. Without a monitoring plan, trigger identification is just theory - you need to know the signal, the source, and the lag time between event and action.

## When to use

- Shifting from cold spray-and-pray outbound to event-triggered outbound
- Setting up monitoring after completing ICP definition - once you know who to target, this defines when to reach them
- When reply rates suggest your timing is wrong (people aren't cold, they're just not at the right moment)
- Building a signal stack for a new segment before the first campaign goes live

## When NOT to use

- You have no audience to monitor yet - use `audience-builder` first to define who you're watching
- You have an existing trigger but your messaging is generic - a well-timed generic opener still loses. Use `icebreaker` to build the trigger-anchored message first
- You're targeting a single named account tactically - this skill is for systematic monitoring across a list, not one-off account research

## Use this instead

- For defining the ICP first -> `icp-definer`
- For building the audience to monitor -> `audience-builder`
- For drafting the trigger-anchored opener once the event hits -> `icebreaker`

---

## Inputs

**Required:** An ICP document or paragraph with at least:

- Firmographics (industry, company size, stage)
- Trigger events - this skill expands on what the ICP identified
- The buying role (title and function) - determines which triggers are actually observable

If the ICP has no trigger events section at all, stop:

> "The ICP you've pasted has no trigger events. Before identifying how to monitor for triggers, you need to know which situations create urgency to buy. Run `icp-definer` and populate the Trigger Events section, then come back."

---

## Output: Trigger Map

### High-Signal Triggers (specific moment, high conviction)

These fire at a specific point in time and correlate tightly with buying intent. Worth building dedicated monitoring for each.

**Funding rounds**
A new round means new budget, new operational ambitions, and a leadership team under pressure to show progress. Series A and B are the highest-signal rounds for most B2B tools - the company is now large enough to professionalize and has budget to do it.
- Monitor: Crunchbase (`/company/{slug}/funding_rounds` API, or daily Crunchbase Alerts for saved searches), the Funded Today newsletter (daily digest of Crunchbase new rounds), TechCrunch and the specific trade press for the ICP's industry
- Lag: reach out within 2-5 business days of the announcement. After 2 weeks the signal ages fast

**Leadership changes (new VP or CXO in your buying role)**
New leaders evaluate the existing tool stack in the first 90 days. They come in with mandates, not institutional attachment to the current setup. This is a structural buying window.
- Monitor: LinkedIn job-change alerts (free, set up for saved searches by title + company size); Wiza, Apollo.io, or People Data Labs for bulk alerts; LinkedIn Sales Nav "Changed Jobs" filter
- Lag: reach out within 30 days of the job change. After 60 days the evaluation window may have already run

**Specific job postings that signal the pain**
A company posting for the role that maps to using your product is signaling they're scaling the function. A company posting for "Head of Data Quality" is a different signal than a company posting for a general data analyst.
- Monitor: LinkedIn Jobs API, Greenhouse's public `/boards/{companySlug}/jobs` endpoint (works for Greenhouse-hosted job pages without auth), We Work Remotely for remote-first ICPs, Wellfound for startups
- Lag: job postings are pre-buy signals - the company is building capacity, not yet buying tooling. Reach out within a week of posting; the role is still unfilled and the pain is fresh

**Regulatory deadlines (industry-specific)**
In compliance-heavy industries (healthcare, fintech, legal tech), regulatory deadlines create hard timelines. A company that has 6 months to achieve SOC 2 compliance is not the same as a company in a post-deadline panic.
- Monitor: industry trade press and regulatory body announcement pages, Google Alerts for "regulation" + "[specific law or standard]" + ICP industry term
- Lag: the ideal window is 6-9 months before the deadline, not 30 days out. Map the calendar when building the trigger list

**Earnings calls mentioning the pain (public companies)**
Public companies disclose strategic priorities and operational problems in earnings calls. If the CFO names "operational efficiency" as a Q3 priority, the VP of Operations is now funded to act.
- Monitor: SeekingAlpha transcripts (free, covers most US public companies), Motley Fool transcript archive, Quartr app for real-time transcript feeds. Search the transcript text for keywords from the ICP's JTBD language
- Lag: reach out within 1-2 weeks of the earnings call while the mandate is fresh

---

### Medium-Signal Triggers (correlation, not certainty)

These suggest fit and openness to conversation, but don't pinpoint a specific moment. Combine with high-signal triggers for prioritization; don't lead the sequence with a medium-signal trigger alone.

**Overall headcount growth (hiring spree)**
A company that grew from 100 to 180 employees in 3 months is in scaling mode. Scaling mode creates operational debt.
- Monitor: LinkedIn Insights headcount graph (available in Sales Nav Company Pages), People Data Labs historical headcount API, Bombora intent data for "hiring trends" topic spikes

**Tech stack changes detected from job postings**
A job posting that now requires "experience with Snowflake" where last year it required "experience with Redshift" signals a migration. That migration may create buying opportunities at the integration or workflow layer.
- Monitor: Diffbot's job posting change API, or manually compare current and archived (Wayback Machine) job postings for key technical requirements

**M&A activity in their space**
When a direct competitor gets acquired, the acquiree's customers often go into "evaluate alternatives" mode. The acquirer's customers sometimes have the same reaction.
- Monitor: Crunchbase acquisitions feed, industry newsletter digests, Google Alerts for "[competitor name] acquired"

**Industry awards and shortlists**
Companies that make a "fastest growing" list or an industry ranking have leadership teams in motion - they're growing fast and may be buying tooling to support it.
- Monitor: industry publication websites (G2, Gartner Peer Insights, Deloitte Fast 500); most publish lists annually with company names

---

### Low-Signal but Cheap-to-Monitor

These are weak signals individually but free to watch and useful for warm context when used alongside a stronger trigger.

**Social posts mentioning the pain by name**
The ICP contact posting publicly about the problem is as warm as cold outbound gets. Not common, but high value when it happens.
- Monitor: LinkedIn search for keyword terms from the ICP's JTBD language + title/industry filter; X Advanced Search for the same terms

**Conference attendance or speaking slots**
Attending a conference signals active engagement with the topic. Speaking at one signals enough subject matter ownership to have a point of view.
- Monitor: conference agenda pages, LinkedIn event attendees for industry events (visible up to 2nd degree connections)

**Blog posts on their company site about related projects**
A company that published a blog post titled "How We Rebuilt Our Data Pipeline" is mid-project and talking publicly about it. Their engineering team is in the weeds on exactly the problem.
- Monitor: Google Alerts for "[problem keyword] site:[company.com]" - works for companies with active engineering blogs; RSS feeds from known company engineering blogs

---

## Guidance-only (v1)

This skill outputs a monitoring PLAN. It does NOT execute the searches, set up the alerts, or pull the data. To act on this output: pick the 2-3 highest-signal triggers for your ICP, set up the monitoring tools listed above, and build a lightweight process to process the feed daily or weekly.

If you have a web search MCP installed (e.g., a Brave Search MCP, a SerpAPI MCP, or a Crunchbase MCP), you can use this skill's output as the brief for that tool to execute the monitoring queries.

A future version of this skill will connect directly to monitoring sources and surface live trigger events against a saved prospect list.

---

## At scale

Watching 3-5 high-signal triggers for a list of 100 prospects is a daily 20-minute job - a spreadsheet and a handful of saved searches will do it. Watching 20 triggers across 10,000 prospects is full-time operational work; tools like Clay, Apollo, and ReachRobin's signal-detection features automate it. The skill is the brief; the tool is the execution layer.
