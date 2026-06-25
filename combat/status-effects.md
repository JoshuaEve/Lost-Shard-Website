---
title: Status Effects
description: Custom status effects in LostShard — criminal, bleed, meditation, and stun.
outline: [2, 3]
---

# Status Effects

LostShard adds several custom status effects layered on top of vanilla Minecraft's potion system.

## Criminal

**Source:** Attacking another player  
**Duration:** 3000 ticks (150 seconds / 2.5 minutes)

When you attack a player you are flagged as Criminal. While criminal:

- Any player can kill you without incurring a murder count increase
- Your criminal timer counts down in real-time (visible in `/stats`)
- Attacking another player resets or extends the timer

Criminal status decays to zero naturally if you avoid combat.

## Murderer

**Source:** Reaching 5 or more murders  
**Duration:** Persistent (requires murder count to drop below 5)

Murderer is a long-term reputation status. It causes:

- Your respawn point to change to the **Criminal Spawn** location
- Other players to be able to kill you without penalty (the same as criminal)

Admins can adjust your murder count with `/setmurders`.

## Bleed

**Source:** Being hit by a player with high [Blades](/skills/blades) skill  
**Duration:** Several seconds (scales with Blades skill)

Bleed is a damage-over-time debuff inflicted by skilled sword users. While bleeding:

- You take periodic damage ticks
- The effect cannot be prevented in normal combat

The chance to apply Bleed and its damage scale with the attacker's Blades level.

## Stunned

**Source:** Specific combat abilities or effects  
**Duration:** Varies

While stunned:

- You **cannot cast spells**
- Normal movement and melee are unaffected

Avoid being stunned in magic duels — a single stun can cost you a critical cast window.

## Meditation {#meditation}

**Source:** `/meditate` command  
**Duration:** Until you move

Meditation is a voluntary state that dramatically increases mana regeneration. To enter meditation:

```
/meditate
```

To exit meditation, simply move. Any character movement immediately breaks the meditating state.

::: tip
Use meditation between fights or while waiting at a spawn point to top up mana quickly. Do not meditate in exposed areas — you are vulnerable to ambush while sitting still.
:::

## Plot Buffs

[Control Point](/plots/control-points) plots can apply permanent potion effects to players standing inside them. These buffs are automatically refreshed every second while you remain in the plot zone. The specific buff types are configured per control point.
