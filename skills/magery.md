---
title: Magery
description: The Magery skill governs spell casting, spell success rates, and mana efficiency.
outline: [2, 3]
---

# Magery

**Magery** is the magic skill. It determines your ability to successfully cast spells, how often you fail, and unlocks access to higher-tier spells that have a minimum required Magery level.

For a full breakdown of available spells and the casting system, see the [Magic overview](/magic/).

## Leveling Magery

Casting spells successfully grants Magery experience. Even failed casts may award experience — mana is still consumed on failure.

## Spell Success

Each spell has a **minimum Magery requirement**. Your actual success rate scales with how far your Magery is above or below that minimum:

- Below minimum → very low success rate
- At minimum → moderate success rate
- Well above minimum → near-certain success

::: tip
Failed casts still consume mana. Build your Magery before attempting high-tier spells to avoid wasting resources.
:::

## Anti-Magic Zones

Casting is **blocked** near **Lapis Blocks**. Any Lapis Block within 2 blocks of the caster prevents spell casting entirely. These zones can be used by server admins and players to create anti-magic areas.

## Wand Casting

With wand casting enabled, you can cast your bound spells by:

1. Holding a **stick** in your main hand
2. Left-clicking on air or a block

The action bar always shows your currently bound spells and their slot numbers.

## Spell Slots

Bind up to **9 spells** to number slots using:

```
/bind <1-9> <spell name>
```

Then cast by slot:

```
/cast 1
```

## Rebirth: Arcane Reservoir

Once Magery reaches **1000**, you can rebirth the skill. Rebirthing resets Magery to 0 and permanently unlocks the **Arcane Reservoir** passive, granting a permanent benefit to mana or casting.

## Tips

- [Meditate](/combat/status-effects#meditation) to recover mana quickly between battles.
- Anti-magic zones (Lapis Blocks) can be used defensively to deny casters in your territory.
- High Magery opens up the highest-tier utility and offensive spells like [Gate Travel](/magic/spells#gate-travel).
- Being stunned prevents casting — protect yourself from stuns in PvP.
