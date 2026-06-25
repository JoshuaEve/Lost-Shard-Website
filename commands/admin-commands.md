---
title: Admin Commands
description: Reference for all LostShard admin commands. Requires the lostshard.admin permission.
outline: [2, 3]
---

# Admin Commands

All commands on this page require the `lostshard.admin` permission node. Misuse of these commands can permanently alter player data.

---

## Player Management

### `/setgold <player> <amount>`
Set a player's gold balance to an exact amount.

```
/setgold Steve 5000
```

### `/setmana <player> <amount>`
Set a player's current mana.

### `/setstamina <player> <amount>`
Set a player's current stamina.

### `/sethealth <player> <amount>`
Set a player's current health.

### `/setmurders <player> <amount>`
Set a player's murder count. Setting to 5 or higher marks them as a Murderer.

### `/setcriminal <player> <ticks>`
Manually apply criminal status to a player for the specified number of ticks (20 ticks = 1 second). A value of **3000 ticks** equals the standard 150-second criminal timer.

### `/setskill <player> <skill> <amount>`
Set a player's skill level directly. Valid skill names: `blades`, `archery`, `brawling`, `mining`, `lumberjacking`, `fishing`, `magery`, `blacksmithy`, `survivalism`, `taming`.

```
/setskill Steve blades 500
```

---

## Admin Chat

### `/admin [message]`
With no argument, toggles your active chat channel to the **Admin** channel. Pass a message to send a single message to the admin channel without switching.

---

## Titles

### `/title admin <player>`
Opens the title management GUI for another player, allowing you to grant or revoke titles.

---

## Teleportation

### `/setrune <player> <label> [world] [x] [y] [z]`
Add a rune to a player's runebook. If no coordinates are provided, the rune is set at your current location.

```
/setrune Steve "Spawn" world 0 64 0
```

### `/tprune <player> <rune_label>`
Teleport a player to one of their saved runes.

### `/tpworld <world>`
Teleport yourself to the specified world.

---

## Economy

### `/getbank <player>`
Open another player's bank inventory. Useful for moderation.

---

## Items

### `/givescroll <player> <spell>`
Give a spell scroll to a player, teaching them the specified spell on use.

```
/givescroll Steve fireball
```

---

## Spawns

### `/setcriminalspawn`
Set the criminal spawn location to your current position. Players with 5+ murders will spawn here.

### `/setlawfulspawn`
Set the lawful (normal) spawn location to your current position.

---

## Leaderboards

### `/leaderboard spawn <type>`
Spawn a leaderboard hologram at your location. Currently supported types: `kills`.

### `/leaderboard remove`
Remove the nearest leaderboard hologram.

---

## Economy / Plots

### `/broadcast <message>`
Send a server-wide broadcast message to all online players.

### `/collectplottax`
Manually trigger tax collection across all plots. Taxes are deducted from plot treasuries and distributed to their owning clans.
