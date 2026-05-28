---
name: jargon-bingo
description: Score sales calls, emails, or posts on a 5x5 bingo card of cliches. Mostly for fun; quietly useful for spotting jargon-heavy patterns.
tier: lab
category: outreach
rr_companion: none
needs_mcp: []
license: MIT
version: 1.0.0
maintainer: jarektkaczyk
---

# Jargon Bingo

Most sales and corporate communication is undifferentiated by design: the same 30 phrases, recycled, rearranged, and passed through a marketing approval cycle. If your message hits BINGO, a prospect could have received it from any of your competitors and not known the difference. That's the problem. This card just makes it visible.

## Inputs

A sales call transcript, email, LinkedIn post, or any business-speak text. Pasted as plain text.

## Output

1. A 5x5 ASCII bingo card. Each cell holds one sales jargon phrase, drawn from the pool below. FREE SPACE in the center.
2. Every cell that matched text in the input is marked `[X]`.
3. Score: **BINGO** if any row, column, or diagonal is fully marked. Otherwise: count of hits + the closest miss (the row, column, or diagonal one square away from BINGO).

## Jargon pool (sample 24 + FREE SPACE)

The skill draws 24 distinct phrases from this pool each run. Sampling produces a different card each time.

```
synergy
circle back
low-hanging fruit
move the needle
value-add
thought leader
best-in-class
deep dive
table stakes
north star
operationalize
right-size
10x
leverage
scalable
differentiator
win-win
boil the ocean
blue ocean
land and expand
single pane of glass
delight the customer
paradigm shift
game changer
bandwidth
ecosystem
robust
pivot
learnings
streamline
holistic
proactive outreach
aligned
impactful
```

## Procedure

1. Sample 24 phrases at random from the pool (no repeats). Arrange into a 5x5 grid, FREE SPACE at position row 3, col 3.
2. Scan the input for each phrase (case-insensitive, partial-word matches count: "leveraging" counts for "leverage").
3. Mark each hit with `[X]`.
4. Check rows, columns, and both diagonals for BINGO.
5. If BINGO: call it. If not: report hit count and name the line closest to BINGO ("Row 2 is one away - missing only 'synergy'").

## Card format

Use ASCII box drawing so it screenshots well:

```
+-----------------+-----------------+-----------------+-----------------+-----------------+
|   thought       |   circle        |   low-hanging   |   synergy       |   value-add     |
|   leader        |   back          |   fruit         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+-----------------+
|   move the      |   best-in-      |   deep dive     |   table         |   north star    |
|   needle        |   class         |                 |   stakes        |                 |
+-----------------+-----------------+-----------------+-----------------+-----------------+
|   10x           |   leverage      |  ** FREE **     |   scalable      |   win-win       |
|                 |                 |  ** SPACE **    |                 |                 |
+-----------------+-----------------+-----------------+-----------------+-----------------+
|   land and      |   single pane   |   operationalize|   right-size    |   differentiator|
|   expand        |   of glass      |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+-----------------+
|   blue ocean    |   boil the      |   paradigm      |   game          |   delight the   |
|                 |   ocean         |   shift         |   changer       |   customer      |
+-----------------+-----------------+-----------------+-----------------+-----------------+
```

Replace each cell with `[X] phrase` when matched. FREE SPACE is always marked.
