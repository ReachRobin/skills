# Example: Director of RevOps at a fintech, missed-quarter post

## Input

**Prospect:** Alex Mercer  
**Title:** Director of Revenue Operations, Finova (fintech, ~300 employees, Series B)  
**LinkedIn summary:** Focused on Salesforce-to-BI data integrity, pipeline forecasting, and GTM systems. 7 years in ops, 4 of them in fintech. Posts occasionally about forecasting accuracy, RevTech stack decisions, and the gap between what sales says and what CRM shows.

**Recent posts:**

Post 1 (126 likes, 2 weeks ago):
> We missed our Q1 number. Not by a little. The forecast said we'd hit 94%, we closed at 71%. I've spent the last three weeks going back through the data trying to understand where the signal broke down. So far: three separate stage definitions living in Salesforce that no one reconciled, two reps who updated close dates retroactively after the call, and a BI pull that was snapshotting the wrong field. Every single one of these is a data quality problem, not a pipeline problem. We don't have a forecast accuracy issue. We have a data discipline issue. Not sure what to do with that yet.

Post 2 (44 likes):
> Hot take: most RevOps teams are data janitors with a Salesforce admin cert. That's not a knock on the people - it's a knock on how the function gets resourced. You can't run a serious forecasting motion on a team that spends 60% of its time fixing bad data manually.

Post 3 (31 likes):
> Stage-gate definitions that live in a slide deck and not in validation logic are not stage gates. They're suggestions.

**Offer:** We automate the data-quality layer between Salesforce and BI tools. Specifically: field-level validation rules that enforce stage criteria at entry, automated flagging of retroactive close-date changes, and a reconciliation layer that surfaces field-definition drift between what Salesforce stores and what your BI tool is pulling. Customers typically reduce forecast variance by 15-25% in the first quarter after implementation.

**Trigger:** Post 1 - missed Q1 forecast with a detailed breakdown of the data quality failures behind it.

---

## Output

## Why this person

Alex didn't just post that they missed their number - they did a forensic breakdown of three specific failure modes and landed on a data quality diagnosis. That's not a typical RevOps post. They're already thinking at the infrastructure level; they know the problem isn't the reps.

## Why now

Two weeks since a public post describing exactly the class of problem we solve: retroactive close-date edits, field definition drift, wrong BI snapshots. They're actively mid-diagnosis. This is as close to a hand-raise as cold outreach gets.

---

## Opener A: Role-based

Your Q1 postmortem named three failure modes - close-date edits, field drift, wrong snapshot field - that live below the CRM layer most RevOps tooling touches. We automate validation at the point of entry and flag exactly those three categories in real time. Worth 20 minutes to show you what that looks like in a Salesforce-BI setup similar to yours?

**Rationale:** Alex is mid-diagnosis and thinking in systems terms, not pipeline terms. This opener meets them where they already are and speaks in their own vocabulary without pretending to have all the answers.

---

## Opener B: Trigger-based

Your post about Q1 was unusually specific - three distinct failure modes, all data quality. We built a reconciliation layer specifically for the Salesforce-to-BI gap that covers retroactive edits, stage-gate drift, and snapshot field mismatch. Customers see 15-25% reduction in forecast variance in the first quarter. Two weeks out from that postmortem - does any of this land as the right next step?

**Rationale:** References the post directly without being sycophantic, names the specific problems they named, and offers a concrete outcome metric. The timing acknowledgment ("two weeks out") signals this isn't a scheduled drip.

---

## Opener C: Contrarian

Your Q1 postmortem conclusion - "data discipline issue, not pipeline issue" - is right. But fixing data discipline in Salesforce manually is how RevOps teams spend the next 18 months still being data janitors. The real fix is validation logic that makes bad data impossible to enter, not processes that rely on reps doing the right thing. We automate that layer. Interested in what that looks like in practice?

**Rationale:** Alex posted explicitly that RevOps teams shouldn't be data janitors. This opener agrees with their diagnosis and escalates it to challenge the next assumption - that manual discipline fixes the problem. Creates intellectual tension without being combative.

---

**My pick:** B, because the trigger is fresh and specific enough that naming it directly is the move. Alex is mid-problem and a solution that maps exactly to their own breakdown will feel like signal, not pitch.
