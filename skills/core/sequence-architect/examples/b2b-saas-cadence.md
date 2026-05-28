# Example: AI-powered incident reduction tool - VP Engineering at B2B SaaS

## Inputs

**ICP:**
VP of Engineering at a 100-500 person B2B SaaS company. Owns the on-call rotation and reports incident frequency to the CTO or board. Trigger: a production incident in the last 30 days that appeared in a post-mortem. They're in an active window of "what do we change" - this window closes in 4-6 weeks when the post-mortem recommendations get folded into a sprint and forgotten.

**Offer:**
An AI monitoring layer that correlates error signals across the stack (APM, logs, deploys, alerts) and surfaces the probable root cause within 90 seconds of an incident. Not a replacement for PagerDuty or Datadog - sits on top of both. Sold as a monthly SaaS subscription per seat. The buyer gets a configured integration in 2 hours; the on-call team stops spending 20-40 minutes per incident on manual correlation.

**Trigger:**
Outage in the last 30 days detected via status page changes (e.g., Statuspage.io incident posted, then resolved).

**Channel preference:** LinkedIn-first, email backup.
**Target outcome:** Meeting booked.

---

## Cadence design

**Channel mix:** LinkedIn invite + DM primary, email touch 4-5. VP Engineering at 100-500 person SaaS is reachable on LinkedIn; email becomes a backup channel when LinkedIn touches are exhausted, not a parallel track.

**Timing rhythm:** Aggressive (day 1, 3, 7, 14, 21). The post-mortem window is short. A company that had an incident last week is in "what do we fix" mode; the same company in 6 weeks is back to normal velocity and this is a lower-priority problem.

**Arc:** 5 touches - all five arc positions active. The trigger is strong enough to carry through to a breakup touch.

---

## Cadence summary

| # | Channel    | Day | Arc role        | Words | CTA                  | Branch trigger               |
|---|------------|-----|-----------------|-------|----------------------|------------------------------|
| 1 | LI invite  |   1 | Cold opener     |   ~55 | Accept + note reply  | Positive reply -> meeting    |
| 2 | LI DM      |   3 | Context-builder |   ~70 | Reply to question    | Positive reply -> meeting    |
| 3 | LI DM      |   7 | Value-add       |   ~60 | Low-friction reply   | Not now -> nurture tag       |
| 4 | Email      |  14 | Soft pivot      |   ~45 | One-word reply       | Positive reply -> meeting    |
| 5 | Email      |  21 | Breakup         |   ~35 | Door open            | End -> archive at day 30     |

---

## Per-touch drafts

### Touch 1 - LinkedIn invite note | Day 1 | Cold opener

**Rationale:** The invite note is the first thing they see. It names the incident without pretending we have a relationship, and makes the ask small (accept + a word back). At 300 chars max, there's no room for throat-clearing.

> Saw your team had an incident last week. We built a tool that surfaces root cause within 90 seconds of a page - sits on top of your existing stack, no rip-and-replace. Happy to share how it works if timing is right.

---

### Touch 2 - LinkedIn DM | Day 3 | Context-builder

**Rationale:** They accepted the invite, which means the opener landed. Now add one piece of evidence that sharpens the case - the 20-40 min correlation number is specific and checkable.

> Most incident post-mortems at teams your size show 20-40 minutes of manual log/APM/deploy correlation before anyone has a working hypothesis. We cut that to under 90 seconds by running the correlation in the background as the incident opens. [Company] had three incidents last quarter - each one that window is your team's attention, not the fix. Worth 20 minutes to see if the math makes sense for you?

---

### Touch 3 - LinkedIn DM | Day 7 | Value-add

**Rationale:** No reply yet. Give something without asking for a call. The post-mortem framework is directly useful regardless of whether they buy - it earns credibility and keeps the conversation open with a low-friction ask.

> Not asking for time - just sending this because it's relevant to what you're probably writing right now. This is a 5-question post-mortem framework that specifically surfaces alert-to-hypothesis latency as a metric, which most post-mortems miss. Does your current process track that number? (Genuine question - the answer tells us whether we'd be useful to you.)

[attach or link a short post-mortem framework doc]

---

### Touch 4 - Email | Day 14 | Soft pivot

**Rationale:** Switch to email to appear in a different context. Acknowledge the silence directly. Make it easy to say no with a clear off-ramp.

**Subject:** Still worth a look?

> Three messages in and no reply - either the timing is wrong, the incident was a one-off, or I got the fit wrong. Any of those is fine to say. If the on-call situation is genuinely not a priority right now, one word back tells me and I'll stop. If the timing is the issue, tell me when and I'll reach out then.

---

### Touch 5 - Email | Day 21 | Breakup

**Rationale:** Close the loop cleanly. No guilt-trip. Leave a door open with one sentence - not two, not a re-pitch.

**Subject:** Closing the loop

> Removing you from my list - clearly not the right moment. If an incident changes the calculus, the offer stands.

---

## Branching rules

**Positive reply (any touch):**
Exit the sequence immediately. Reply within the same channel. Do not send the next scheduled touch. Book the meeting or continue the conversation - do not move to a formal "meeting booking flow" that re-starts the cadence.

**"Not now" reply (any touch):**
Exit the sequence. Respond: "Got it - I'll follow up in [X weeks/months] when the timing might be different. Good luck with [whatever they mentioned]." Tag as nurture. Re-enter the sequence at touch 1 (refreshed) in 60 days.

**Ignored through touch 5:**
Archive prospect to nurture list at day 30. No further active outreach for 90 days minimum. Re-entry conditions: a new trigger event (another incident, a team change, a funding announcement) or the 90-day nurture interval.

---

## End-state rule

If no reply by touch 5 (day 21), archive to nurture list at day 30. Re-entry: day 120 from touch 1, or earlier if a new trigger event is detected (new status page incident, funding announcement, VP Eng departure/hire).
