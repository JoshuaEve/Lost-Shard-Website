---
title: Player Commands
description: Full reference for all player-facing LostShard commands.
outline: [2, 3]
---

# Player Commands

All commands listed here are available to every player on the server.

## Character

### `/stats`
Opens a GUI showing your character's current gold, murder count, mana, and stamina.

### `/skills`
Opens the skills menu where you can view all skill levels, read skill descriptions, train skills (costs gold), and trigger rebirths.

### `/title`
Opens the title selection GUI. Titles are decorative prefixes displayed before your name. Titles must be unlocked before they can be selected.

### `/dps`
Toggles DPS (damage-per-second) mode. While active, your damage output is tracked and displayed in chat.

---

## Chat

### `/global [message]` · `/g [message]`
With no argument, switches your active chat channel to **Global** so all messages go server-wide. Pass a message to send a single message to global without switching channels.

### `/shout <message>`
Broadcasts a message to every player on the server with your signature color applied.

### `/whisper <player> <message>`
Sends a private message to the specified player.

---

## Party

### `/party [message]` · `/p [message]`
With no argument, switches your active chat channel to **Party**. Pass a message to send it to your party without switching channels.

| Subcommand | Description |
|------------|-------------|
| `/party info` | Open the party info GUI |
| `/party invite <players...>` | Invite one or more players to your party |
| `/party accept` | Accept a pending party invitation |
| `/party leave` | Leave your current party |
| `/party disband` | Disband the party *(leader only)* |
| `/party kick <player>` | Remove a member from the party *(leader only)* |
| `/party transfer <player>` | Transfer party leadership *(leader only)* |

::: tip
Invitations persist across logouts — players can accept after rejoining.
:::

---

## Clan

### `/clan [message]` · `/c [message]`
With no argument, switches your active chat channel to **Clan**. Pass a message to send it to your clan without switching channels.

| Subcommand | Description |
|------------|-------------|
| `/clan info` | Open the clan management GUI |
| `/clan create <name>` | Found a new clan with the given name |
| `/clan accept` | Accept a pending clan invitation |
| `/clan rename <name>` | Rename the clan — costs **1000 gold** *(owner only)* |
| `/clan help` | Display clan help information |

---

## Magic

### `/cast <spell | 1–9>`
Cast a spell by its full name or by the slot number it is bound to.

```
/cast fireball
/cast 3
```

### `/bind <slot> <spell>`
Bind a spell to a numbered slot (1–9) for quick casting.

```
/bind 1 teleport
/bind 2 fireball
```

### `/scrolls`
Opens the scroll management GUI. View your collected spell scrolls and transfer them to other players.

### `/runebook`
Opens the runebook GUI. View all saved rune locations and click a rune to teleport to it.

### `/meditate`
Toggles meditation. While meditating, mana regenerates faster. Any movement cancels meditation.

---

## Bank

### `/bank`
Opens your personal bank — a 27-slot (3-row) chest available from anywhere. Items stored here persist across sessions.

---

## Plots

### `/plot create <name>`
Creates a new plot centered on your current location. Costs **1000 gold + 1 diamond**.

### `/plot info`
Opens the plot management GUI for the plot you are standing in.

### `/claim`
Begins the capture sequence for a [control point](/plots/control-points) you are standing inside. You must be a clan member. Capture takes 120 seconds by default.

---

## Skills

### `/blacksmithy`
Opens the Blacksmithy GUI.

| Subcommand | Description |
|------------|-------------|
| `/blacksmithy repair` | Repair the item in your main hand (costs 10 stamina) |
| `/blacksmithy smelt` | Convert a damaged item to raw materials (costs 15 stamina) |
| `/blacksmithy rename <name>` | Rename the held item (costs 10 stamina) |

### `/fishing`
Opens fishing-related commands and the fishing skill menu.

### `/survivalism`
Opens the Survivalism skill menu for camp creation and management.

### `/pets`
Opens the pet management GUI.

- View all tamed wolves
- Summon individual pets or your entire pack (costs **20 stamina** per summon)
- Release pets from your roster

---

## Combat & Utility

### `/friendlyfire [on | off]` · `/ff [on | off]`
Toggles friendly fire with your party and clan members. When disabled (default), you cannot damage allies. Pass `on` or `off` to set explicitly, or omit the argument to toggle.

### `/spawn`
Teleports you to the server's lawful spawn point.

### `/leaderboard` · `/top`
Opens the leaderboard GUI to view top players by kills and other statistics.
