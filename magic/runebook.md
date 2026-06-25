---
title: Runebook
description: How to use the LostShard runebook to save and teleport to locations.
outline: [2, 3]
---

# Runebook

Every player has a **Runebook** — a personal collection of up to **9 saved locations** (runes) that you can teleport to at any time. Runes persist across sessions and are stored on your character permanently.

## Opening Your Runebook

```
/runebook
```

This opens the Runebook GUI. Each rune is shown as a slot with its label, world, and coordinates. Click a rune to teleport to it.

## Adding Runes via Magic

Use the **Mark** and **Recall** spells to interact with your runebook:

- **Mark** — Saves your current location as a rune entry
- **Recall** — Teleports you to your most recently Marked location
- **Gate Travel** — Opens a temporary portal between two marked locations
- **Permanent Gate Travel** — Creates a persistent portal stored in the database

See the [Spell List](/magic/spells) for full spell details.

## Admin-Placed Runes

Admins can add runes directly to your runebook using:

```
/setrune <player> <label> [world] [x] [y] [z]
```

If no coordinates are provided, the rune is placed at the admin's current location.

Admins can also teleport you directly to a rune:

```
/tprune <player> <rune_label>
```

## Rune Limits

Each player can store a maximum of **9 runes** in their runebook. Managing your runes carefully is important — choose locations that are hard to reach by other means.

## Tips

- Mark your **base**, **clan's control point**, and key **farming locations** as early priorities.
- Combine Recall with a Mark near a control point for fast repositioning in clan warfare.
- The Runebook GUI lets you see the exact coordinates of each rune so you always know where you're going.
- Permanent Gates created via Magery persist indefinitely and don't consume runebook slots.
