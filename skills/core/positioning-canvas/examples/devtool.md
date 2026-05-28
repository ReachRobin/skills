# Example: DevTool Positioning (StreamRoute)

## Scenario

**StreamRoute** is a fictional developer tool that routes webhook events from third-party services (Stripe, GitHub, Shopify, etc.) to the correct internal handler, with automatic retry, dead-letter queuing, and a live event inspector. The founder asks: "We're getting traction but our landing page says 'webhook infrastructure for developers' and no one really gets it. Sales calls end with 'oh, so it's like a message queue?' Help me position this."

## Walkthrough

### Step 1: Competitive alternatives

What would a developer use if StreamRoute didn't exist?

1. **Build it themselves** -- write a webhook receiver, parse event types, add retry logic, persist to a dead-letter table. Probably 3-5 days of work per integration; redo it every time a new source adds event types.
2. **A message queue (SQS, RabbitMQ)** -- handles fan-out but doesn't understand webhook semantics (no signature verification, no event-type routing, no replay UI)
3. **ngrok / Webhook.site** -- developer debugging tools, not production infrastructure; no persistence, no retry
4. **Zapier / Make** -- no-code automation, not developer infrastructure; can't be deployed in a CI pipeline or called from code
5. **Do nothing** -- ignore missing events, handle retries manually when customers complain

Mapping these confirms: the build-it-yourself alternative is the real competition, not a product category.

### Step 2: Unique attributes

Capabilities StreamRoute has that alternatives don't:

1. Understands provider event schemas natively (Stripe, GitHub, Shopify, etc.) -- no parsing code required
2. Visual event inspector with replay-from-any-point -- not just logs
3. Dead-letter queue with one-click requeue
4. Automatic signature verification per provider
5. Event-type routing rules written in YAML, not code
6. Full event history for audit/compliance
7. SDK-first -- integrates into existing codebases in 15 minutes; not a hosted wrapper that intercepts traffic

### Step 3: Value (so what?)

Working through each attribute to a business outcome:

- Native event schemas + YAML routing -> no parsing code -> dev writes integration in 30 min not 3 days -> **ship integrations 6x faster**
- Visual inspector + replay -> debug a failed webhook without reproducing the prod event -> **mean time to resolve webhook failures drops from hours to minutes**
- Dead-letter + requeue -> no data loss when downstream is unavailable -> **revenue events (Stripe payments) never fall on the floor**

Value pillars, clustered:
1. **Integration velocity** -- ship each new webhook integration faster
2. **Operational reliability** -- no silent data loss, fast incident recovery

### Step 4: Customers who care most

Who cares disproportionately about integration velocity + operational reliability?

- Engineering teams at SaaS companies that process revenue events via webhooks (Stripe payments, subscription changes)
- Specifically: backend engineers at Series A/B SaaS startups, 2-10 engineers on the team, no dedicated platform or infra team yet
- Trigger: they just burned a sprint on webhook boilerplate, OR had an incident where a Stripe webhook was missed and a customer's account wasn't upgraded

Not: solo developers building a weekend project (price sensitivity, not willing to add a dependency). Not: large enterprises with a platform team who build this in-house.

### Step 5: Market category

Options:
- "Webhook infrastructure" -- accurate but meaningless; customers don't search for this
- "Message queue" -- wrong category; customers in this category are comparing SQS vs RabbitMQ, and StreamRoute loses
- "Developer integration platform" -- too broad; competes with Zapier
- **"Webhook delivery platform"** -- customers who have a webhook problem search for this; StreamRoute's attributes are differentiators in this frame (native schema support vs generic queues), and the budget already exists (ops tools / infra line item)

## Output

```
POSITIONING: StreamRoute
Date: 2026-05-28
Audience version: backend engineers at SaaS startups

1. CATEGORY
   We are a webhook delivery platform for engineering teams at SaaS
   companies processing revenue-critical events.

2. ICP
   Best fit: Backend engineers at Series A/B SaaS startups (10-150 employees),
   2-10 person eng team, processing Stripe/GitHub/Shopify webhooks in
   production, no dedicated infra team.

   Disqualifiers: Solo developers / personal projects (no willingness to add
   infra dependency). Enterprise companies with platform teams (build in-house).
   Teams not yet in production (no real webhook volume to justify).

3. VALUE PILLARS
   - Integration velocity: ship each new webhook integration in 30 min, not
     3 days -- no parsing code, no boilerplate retry logic to write
   - Operational reliability: revenue events never fall on the floor; dead-letter
     + replay means every event gets processed even if downstream is unavailable

4. UNIQUE ATTRIBUTES (proof)
   - Native event schemas for Stripe, GitHub, Shopify (20+ providers) ->
     enables integration velocity
   - YAML routing rules, no code -> enables integration velocity
   - Visual inspector + replay-from-any-point -> enables operational reliability
   - Dead-letter queue with one-click requeue -> enables operational reliability
   - SDK-first (15-min integration, no traffic interception) -> enables both

5. COMPETITIVE ALTERNATIVES
   - vs build-it-yourself: we win on velocity (days -> minutes); they win on
     zero dependency
   - vs SQS/RabbitMQ: we win on webhook semantics (routing, signatures,
     schemas); they win on raw throughput at massive scale
   - vs Zapier/Make: we win on developer control and code-first deployment;
     they win on no-code accessibility

6. ONE-LINER
   StreamRoute is a webhook delivery platform that lets SaaS engineering
   teams ship new integrations in minutes and recover from delivery failures
   without writing a line of infrastructure code.
```

**Substitution test:** Replace "StreamRoute" with a queue-based competitor. The one-liner breaks immediately -- no queue product emphasizes "webhook semantics" or "deploy in 15 minutes without infrastructure code." The positioning is differentiated.

**Disqualifier test:** Three explicit disqualifiers named. Pass.

**Sales call test:** The one-liner works as a 15-second opener. Pass.
