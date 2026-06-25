---
title: Clans
description: How to create and manage a clan in LostShard.
outline: [2, 3]
---

# Clans

Clans are **permanent player factions** with a hierarchy, shared chat, and the ability to capture [control points](/plots/control-points) that grant server-wide buffs to all clan members.

## Creating a Clan

```
/clan create <name>
```

You become the **owner** of the new clan.

## Joining a Clan

A clan leader or owner must invite you first. Once invited, accept with:

```
/clan accept
```

::: tip
Invitations persist across logouts — you can accept after rejoining if you were offline when invited.
:::

## Clan Chat

Switch your active channel to clan chat:

```
/clan
/c
```

Send a single message to your clan without switching channels:

```
/clan <message>
/c <message>
```

## Clan Hierarchy

| Role | Description |
|------|-------------|
| **Owner** | Full control. Can rename clan, transfer ownership, and do everything leaders can. |
| **Leader** | Can invite and remove members, manage settings. |
| **Member** | Standard member. Access to clan chat and clan buffs. |

## Clan Management Commands

| Command | Description | Who Can Use |
|---------|-------------|------------|
| `/clan info` | Open clan management GUI | All members |
| `/clan accept` | Accept an invitation | Any player |
| `/clan rename <name>` | Rename the clan — costs **1000 gold** | Owner |
| `/clan help` | Show clan help | All members |

Invitations and member management are handled through the `/clan info` GUI.

## Renaming Your Clan

Clan renames cost **1000 gold** and can only be performed by the clan **owner**:

```
/clan rename <new name>
```

## Control Points & Clan Buffs

Clans can fight for and capture [control points](/plots/control-points) — special plots on the map. Capturing a control point gives your entire clan:

- Bonus **Max Mana** (amount varies per control point)
- Bonus **Max Stamina** (amount varies per control point)
- Permanent potion effects while standing inside the zone

See [Control Points →](/plots/control-points) for full capture mechanics.

## Tax Collection

Clans collect taxes from plots and control points. Any clan member can run:

```
/collectplottax
```

to gather the accumulated taxes from plots owned by the clan.

## Friendly Fire

By default, clan members **cannot damage each other**. Enable PvP against allies with:

```
/ff on
```
