---
title: Parties
description: How to create and manage a party in LostShard.
outline: [2, 3]
---

# Parties

Parties are **temporary cooperative groups** designed for adventuring together. Parties provide a private chat channel and prevent friendly fire between members.

## Creating a Party

Any player can start a party by inviting someone:

```
/party invite <player>
```

You become the **party leader** automatically when the first player accepts.

## Joining a Party

When invited, accept with:

```
/party accept
```

::: tip
Invitations persist across logouts — if a player is offline when invited, they can still accept after rejoining.
:::

## Party Chat

Switch your active channel to party chat:

```
/party
/p
```

Send a single message to your party without switching channels:

```
/party <message>
/p <message>
```

## Managing Your Party

| Command | Description | Who Can Use |
|---------|-------------|------------|
| `/party info` | Open party info GUI | All members |
| `/party invite <players...>` | Invite one or more players | Leader |
| `/party kick <player>` | Remove a member | Leader |
| `/party transfer <player>` | Make another player the leader | Leader |
| `/party disband` | Dissolve the party entirely | Leader |
| `/party leave` | Leave the party | Any member |

## Friendly Fire

By default, party members **cannot damage each other**. If you want to spar or duel a party member, both players should enable friendly fire:

```
/ff on
```

## Party vs Clan

| Feature | Party | Clan |
|---------|-------|------|
| Persistence | Session/temporary | Permanent |
| Chat channel | Yes | Yes |
| Friendly fire protection | Yes | Yes |
| Control points | No | Yes |
| Clan buffs | No | Yes |
| Membership | Informal | Formal (invites) |

Use a party for short-term grouping. For a permanent faction, see [Clans →](/groups/clans)
