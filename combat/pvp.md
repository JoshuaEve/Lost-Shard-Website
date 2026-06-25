---
title: PvP & Murder System
description: How LostShard's PvP, criminal, and murder systems work.
outline: [2, 3]
---

# PvP & Murder System

LostShard uses a morality-based PvP system that tracks murder counts and criminal status to create meaningful consequences for player killers.

## Engaging in PvP

Any player can attack any other player at any time. However, there are social and mechanical consequences for doing so.

## Criminal Status

When you **attack another player**, you are immediately flagged as **Criminal** for **3000 ticks (150 seconds / 2.5 minutes)**.

While you are criminal:
- Other players can kill you **without consequence** (no murder count increase)
- Your criminal timer counts down in real-time
- Attacking more players resets or extends your timer

Criminal ticks are shown in `/stats`.

## Murder Count

Killing a **non-criminal** player adds **1 to your murder count**.

- Killing criminal players → no murder count increase
- Admin kills → no murder count increase
- Killing mobs → no effect

Murder count is persistent and shown in `/stats`.

## Murderer Status

A player with **5 or more murders** is flagged as a **Murderer**.

| Murders | Status |
|---------|--------|
| 0 – 4 | Normal |
| 5+ | Murderer |

Murderer status affects:
- Your spawn point (Murderers respawn at the **criminal spawn**)
- How other players perceive and interact with you

## Spawn Points

The server has two configurable spawn points:

| Spawn | Used By |
|-------|---------|
| **Lawful Spawn** | Non-murderers |
| **Criminal Spawn** | Players with 5+ murders |

Set by admins with `/setlawfulspawn` and `/setcriminalspawn`.

## Kill Tracking

All player kills are tracked per character. View the top players by kills with:

```
/leaderboard
/top
```

Admins can spawn kill leaderboard holograms in the world with `/leaderboard spawn kills`.

## Friendly Fire

By default, members of your **party** and **clan** cannot be damaged by you (or you by them). Enable intentional PvP with allies using:

```
/ff on
```

See [Status Effects](/combat/status-effects) for full details on criminal and other combat states.
