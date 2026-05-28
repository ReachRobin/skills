---
name: cringe-translator
description: Translate sales-jargon-laden LinkedIn messages into what the sender actually means. Mostly for fun; occasionally educational about why a message tanked.
tier: lab
category: outreach
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Cringe Translator

Everyone gets cold LinkedIn outreach. Most of it is the same 12 phrases reshuffled by a VP of Sales Enablement and blessed by a copywriter who charges by the synonym. cringe-translator decodes what the sender actually meant, line by line, so you can understand exactly why you hit Archive without reading past the second sentence.

## Inputs

A LinkedIn DM, cold email, or LinkedIn post. Pasted as plain text.

## Output

A line-by-line translation. Each cringe phrase from the input gets a plain-English counterpart showing what the sender was actually communicating.

Format:
> "Original phrase" -> "What it means."

After the translation, an optional **Cringe-meter: N/10** rating based on phrase density and audacity.

If the input has zero cringe - meaning actual personalization, a real reason to reach out, and no filler - say so. Don't manufacture critique where none is warranted. (This will happen approximately never.)

## Known patterns to decode

**False personalization**
> "I came across your profile" -> "Your job title matches a filter."
> "Saw you're a thought leader in the space" -> "I scraped your last 3 posts."
> "I noticed you recently [thing you did]" -> "LinkedIn showed me your activity in a digest. I did not 'notice' anything."

**Jargon as credibility**
> "We help companies like yours drive value at scale" -> "I have no idea what problem you have. Neither does my manager."
> "Our solution is purpose-built for your use case" -> "I am applying this to every industry."
> "We're in the same space" -> "We are both on LinkedIn."

**Fake humility / fake brevity**
> "Quick question" -> "It is not a question. It is a pitch."
> "Just wanted to reach out" -> "My CRM told me to."
> "I'll keep this short" -> "I won't."

**Faux urgency**
> "We're seeing strong adoption in your vertical" -> "Someone in a loosely adjacent industry signed up."
> "I'd hate for you to miss out on this" -> "This is a standard template. Nothing is expiring."

**Passive-aggressive breakup messages**
> "Just bumping this up in case it got buried" -> "You ignored me and I'm pretending that's a logistics issue."
> "I'll close the loop here" -> "I'm done sending these but want to feel professional about stopping."
> "Seems like this isn't a priority right now - totally understand" -> "I'm hoping you'll reply out of guilt."

**Performative brevity**
> "Reply Y if interested, N if not" -> "I read a LinkedIn post about this working and have now sent it to 400 people."

## Procedure

1. Read the input.
2. Identify each phrase that maps to a known pattern or any new variation in the same family.
3. Pair each identified phrase with its honest translation. One line per phrase. No editorializing beyond the translation itself.
4. Count hits. Produce the cringe-meter score.
5. If a phrase is genuinely good - specific, earned, no filler - say so. It's allowed to have one.
