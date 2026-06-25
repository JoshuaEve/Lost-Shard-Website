---
title: Magic
description: Overview of the LostShard magic system — spells, scrolls, mana, and reagents.
outline: [2, 3]
---

# Magic

LostShard's magic system is powered by the [Magery](/skills/magery) skill. Players learn spells from consumable scrolls, cast them using mana and reagents, and can bind spells to numbered hotkeys for fast access in combat.

## Learning Spells

Spells are learned from **Spell Scrolls** — special consumable items found in the world or granted by admins. When you use a scroll, the spell is permanently added to your spellbook. Scrolls are **tradeable** between players.

View your scrolls:

```
/scrolls
```

## Mana

Every spell costs **mana** to cast. Mana regenerates passively over time. You can accelerate regeneration by [meditating](/combat/status-effects#meditation).

Your current mana is always visible in the **action bar**.

## Reagents

Most spells require **reagents** — physical items in your inventory consumed on each cast.

| Example Reagent | Used By |
|----------------|---------|
| Feather | Teleport |
| Gunpowder | Fireball |
| Redstone | Fireball |

If you don't have the required reagents in your inventory, the spell will not cast.

## Spell Success

Each spell has a **minimum Magery skill** requirement. Your chance of successful casting is based on how your current Magery compares to that minimum:

- **Below minimum** → very low success rate, high chance of failure
- **At minimum** → moderate success
- **Well above** → near-certain success

Mana is consumed regardless of whether the cast succeeds or fails.

## Binding & Casting Spells

Bind spells to 9 numbered slots:

```
/bind <1-9> <spell name>
```

Cast by slot number or by name:

```
/cast 1
/cast fireball
```

Your bound spells are shown in the **action bar** whenever you hold a wand.

## Wand Casting

When wand casting is enabled on the server, you can cast by:

1. Holding a **stick** in your main hand
2. **Left-clicking** on air or a block

The active spell (slot 1 by default) will be cast. Scroll your slot wheel to switch between bound spells.

## Anti-Magic Zones

Any **Lapis Block** within 2 blocks of you will **prevent spell casting**. These zones can be placed by players and admins to create magic-free areas (e.g., inside fortifications or capture zones).

## Restrictions

- You **cannot cast while stunned**
- You **cannot cast in anti-magic zones** (near Lapis Blocks)
- Mana must be sufficient for the spell's cost

## Further Reading

- [Spell List](/magic/spells) — every spell, its cost, reagents, and requirements
- [Runebook](/magic/runebook) — saving and teleporting to locations
- [Magery Skill](/skills/magery) — how to level the skill and unlock higher spells
