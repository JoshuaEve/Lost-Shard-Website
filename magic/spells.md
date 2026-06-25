---
title: Spell List
description: Every spell available in LostShard, with mana costs, reagents, and Magery requirements.
outline: [2, 3]
---

# Spell List

Below is every spell currently available in LostShard, grouped by spell book page. Spells are learned by consuming [Spell Scrolls](/magic/) and cast using mana and reagents.

## Spell Book Pages

### Page 3 — Travel I

#### Teleport
Teleports you up to **25 blocks** in the direction you are looking, finding the nearest safe landing spot and avoiding obstacles.

| Property | Value |
|----------|-------|
| Mana Cost | 20 |
| Reagent | Feather ×1 |
| Min Magery | 240 |
| Cooldown | 20 ticks (1 second) |
| Wand Castable | Yes |

---

### Page 4 — Travel II

#### Mark
Marks your current location. Use with [Recall](#recall) to return to it at any time.

| Property | Value |
|----------|-------|
| Wand Castable | No |

#### Recall
Teleports you to your last **Marked** location.

| Property | Value |
|----------|-------|
| Wand Castable | No |

---

### Page 5 — Control

#### Slow Field
Creates a field that slows movement for any entity passing through it.

| Property | Value |
|----------|-------|
| Wand Castable | No |

---

### Page 6 — Healing

#### Heal Self
Restores your health.

| Property | Value |
|----------|-------|
| Wand Castable | No |

#### Heal Other
Restores health to a targeted player.

| Property | Value |
|----------|-------|
| Wand Castable | No |

---

### Page 7 — Destruction

#### Fireball
Launches a fireball projectile that explodes on impact, dealing area damage.

| Property | Value |
|----------|-------|
| Mana Cost | 10 |
| Reagents | Gunpowder ×1, Redstone ×1 |
| Min Magery | 720 |
| Cooldown | 20 ticks (1 second) |
| Wand Castable | Yes |

::: warning
Fireball requires **720 Magery** — this is a high-tier spell. Ensure your Magery skill is well above 720 before attempting to cast it reliably.
:::

---

### Page 8 — Gates

#### Gate Travel
Opens a temporary gate between two locations, allowing movement between them.

| Property | Value |
|----------|-------|
| Wand Castable | No |

#### Permanent Gate Travel
Creates a **persistent** gate between two locations. Permanent gates are stored in the database and survive server restarts.

| Property | Value |
|----------|-------|
| Wand Castable | No |

---

## Spell Acquisition

All spells are learned from **Spell Scrolls**. Scrolls are:
- Found in the world as loot
- Granted by admins via `/givescroll <player> <spell>`
- Traded between players through the `/scrolls` menu

Once you use a scroll the spell is permanently added to your spellbook. You do not need to keep the scroll.

## Quick Reference Table

| Spell | Page | Mana | Reagents | Min Magery | Wand |
|-------|------|------|----------|-----------|------|
| Teleport | 3 | 20 | Feather | 240 | ✅ |
| Mark | 4 | — | — | — | ❌ |
| Recall | 4 | — | — | — | ❌ |
| Slow Field | 5 | — | — | — | ❌ |
| Heal Self | 6 | — | — | — | ❌ |
| Heal Other | 6 | — | — | — | ❌ |
| Fireball | 7 | 10 | Gunpowder, Redstone | 720 | ✅ |
| Gate Travel | 8 | — | — | — | ❌ |
| Permanent Gate | 8 | — | — | — | ❌ |
