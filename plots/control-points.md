---
title: Control Points
description: How to capture and hold control points for your clan in LostShard.
outline: [2, 3]
---

# Control Points

Control Points are special plots placed by server administrators that clans can fight to capture and hold. Owning a control point grants your entire clan **permanent stat bonuses** and **potion effects** as long as you hold it.

## Locating Control Points

Control Points are visible on the map as special plots, marked with particle effects to indicate their zone boundaries. Particle markers refresh every second so you always know exactly where the zone is.

## Capturing a Control Point

1. **Join a clan** — only clan members can capture control points
2. **Stand inside the control point zone**
3. Run:
   ```
   /claim
   ```
4. **Stay inside the zone** for the full capture duration (default: **120 seconds**)

A progress bar is shown during the capture process. If you leave the zone before capture completes, the progress is cancelled.

::: warning
Only **clan members** can capture control points. Solo players or party members without a clan cannot initiate a capture.
:::

## Capture Cooldown

After a control point changes hands, there is a **capture cooldown** before it can be captured again (default: **3600 seconds / 1 hour**). This prevents rapid back-and-forth capping.

## Clan Bonuses

Clans that own a control point receive the following for **all clan members**, server-wide:

| Bonus Type | Source | Notes |
|-----------|--------|-------|
| Max Mana | Control point ownership | Amount varies per point |
| Max Stamina | Control point ownership | Amount varies per point |
| Potion effects | Standing in the zone | Auto-applied every 1 second |
| Claim streak bonuses | Consecutive captures | Additional benefits for sustained ownership |

Bonuses are configured per control point by server admins — different control points may offer different buffs.

## Zone Effects

While standing **inside** a control point zone, members of the owning clan receive continuous potion effects. These effects are refreshed every second automatically — you just need to be standing in the zone.

## Defending a Control Point

There are no automated defense mechanics — you must physically defend your control points from enemy clans attempting to capture them. Coordinate with your clan to:

- Monitor control points regularly
- Station defenders in or near the zone
- Communicate via clan chat (`/c`)

## Losing a Control Point

If an enemy clan successfully captures your control point:

- Your clan immediately loses the stat bonuses from that point
- The capturing clan begins receiving the bonuses
- A capture cooldown prevents immediate recapture

## Tax Collection

Control points generate tax revenue for the owning clan. Collect taxes with:

```
/collectplottax
```
