---
title: Combat
description: Overview of LostShard's combat systems — skills, PvP, friendly fire, and DPS tracking.
outline: [2, 3]
---

# Combat

LostShard features a deep PvP system with skill-based damage scaling, a murder/criminal system, status effects, and group-friendly fire controls.

## Damage Scaling

Your combat skills directly increase your damage output. Each combat skill adds a flat bonus to damage based on skill tier:

| Skill Range | Bonus Damage |
|-------------|-------------|
| 0 – 249 | +0 |
| 250 – 499 | +1 |
| 500 – 749 | +2 |
| 750 – 999 | +3 |
| 1000 | +4 |

This applies to **[Blades](/skills/blades)**, **[Archery](/skills/archery)**, and **[Brawling](/skills/brawling)** independently.

## PvP & Murder System

LostShard has a full consequences-based PvP system. See [PvP & Murder System →](/combat/pvp)

Key points:
- Killing a non-criminal player increases your **murder count** by 1
- **5 or more murders** marks you as a **Murderer**
- Attacking another player marks you as **Criminal** for 150 seconds
- Criminal players can be killed by anyone without penalty

## Friendly Fire

By default, you **cannot damage** players in your party or clan. Toggle this with:

```
/friendlyfire [on|off]
/ff [on|off]
```

When enabled, you can freely damage your allies — useful for dueling or training.

## Status Effects

LostShard adds custom status effects on top of vanilla Minecraft:

| Effect | Source | Description |
|--------|--------|-------------|
| Criminal | Attacking a player | Makes you a valid target for 150 seconds |
| Murderer | 5+ murder count | Permanent status until murders decay |
| Bleed | High Blades skill | Damage over time from sword hits |
| Stunned | Combat abilities | Blocks spell casting |
| Meditating | `/meditate` | Faster mana regen, breaks on movement |

Full details: [Status Effects →](/combat/status-effects)

## DPS Mode

Toggle DPS tracking with:

```
/dps
```

While active, your damage output is tracked over a rolling window and displayed in chat so you can evaluate build effectiveness.

## Combat Skills

- [Blades](/skills/blades) — Sword combat with scaling damage and bleed
- [Archery](/skills/archery) — Bow combat with scaling damage
- [Brawling](/skills/brawling) — Unarmed combat with scaling damage
- [Magery](/skills/magery) — Offensive and utility spells
- [Taming](/skills/taming) — Wolf companions in combat
