---
title: Blacksmithy
description: The Blacksmithy skill governs item repair, smelting, and enchantment enhancement.
outline: [2, 3]
---

# Blacksmithy

**Blacksmithy** is the crafting/smithing skill. It lets you repair damaged gear, smelt unwanted items into raw materials, rename items, and — at high skill — enhance item enchantments beyond their normal caps.

## Opening Blacksmithy

```
/blacksmithy
```

This opens the Blacksmithy GUI. Individual actions can also be triggered via subcommands.

## Actions

### Repair
Restore durability on the item in your main hand.

- **Cost:** 10 stamina
- **Cooldown:** 200 ticks (~10 seconds)

```
/blacksmithy repair
```

### Smelt
Break down a damaged or unwanted item in your hand into raw materials.

- **Cost:** 15 stamina

```
/blacksmithy smelt
```

### Rename
Rename the item in your main hand.

- **Cost:** 10 stamina

```
/blacksmithy rename <new name>
```

### Enhance
Upgrade an item's enchantments beyond their normal levels using your Blacksmithy skill and crafting materials. Enhancement tiers are defined in `blacksmithy.yml`:

- **Cost:** 10 stamina + materials (varies by tier and enchantment)
- **Requires:** Minimum Blacksmithy skill level per tier

Enhancement tiers available (lowest to highest):
`Wooden → Stone → Iron → Diamond → Netherite` *(and beyond, as configured)*

## Training

Blacksmithy can be trained at a trainer NPC up to **level 250**:

- **Training cost:** 40 gold per level
- **Training cap:** 250

::: warning
Blacksmithy training costs **40 gold per level** — the highest of any skill. Prioritise natural leveling before spending gold.
:::

## Rebirth: Tempered Hands

Once Blacksmithy reaches **1000**, you can rebirth the skill. Rebirthing resets Blacksmithy to 0 and permanently unlocks the **Tempered Hands** passive.

## Tips

- Repair your gear regularly — repairing is far cheaper than replacing items.
- Smelting broken items you cannot repair recovers some materials.
- The enhance system allows you to push weapons and armor well beyond vanilla enchantment limits at high skill.
- [Mining](/skills/mining) and Blacksmithy naturally pair — mine your own ore and use Blacksmithy to process it into enhanced gear.
