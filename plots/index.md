---
title: Plots
description: How to create, manage, and upgrade land plots in LostShard.
outline: [2, 3]
---

# Plots

Plots are **protected land claims** that let you own and secure territory on the server. Plots protect your builds, control access for other players, and can be upgraded into large player-created towns, dungeons, or neutral zones.

## Creating a Plot

Stand at the location where you want your plot centered and run:

```
/plot create <name>
```

**Cost:** 1000 gold + 1 diamond

## Managing Your Plot

```
/plot info
```

Opens the plot management GUI for the plot you are standing in. From here you can:

- View and change plot settings
- Add or remove friends
- Control access permissions
- Deposit or withdraw from the plot treasury
- Upgrade the plot type

## Access Control

| Permission Level | Description |
|-----------------|-------------|
| **Owner** | Full control over all settings |
| **Co-owner** | All owner privileges except deletion |
| **Friend** | Can enter the plot; build permission is togglable |
| **Public** | Access controlled by the locked/unlocked setting |

## Plot Settings

| Setting | Description |
|---------|-------------|
| Locked / Unlocked | Controls whether non-friends can enter |
| PvP | Toggle player combat inside the plot |
| Explosions | Toggle explosion damage |
| Mob Spawning | Toggle natural mob spawning |
| Protect | Master protection flag |
| For Sale | Set a sale price for the plot |
| Build (for friends) | Whether friends can place/break blocks |

## Plot Treasury

Each plot has a **treasury** — a shared pool of gold for the plot. Clan members can deposit into and withdraw from the treasury. Plot taxes are automatically deducted from the treasury.

## Plot Types

Plots can be upgraded to different types that change their size, purpose, and cost:

| Type | Upgrade Cost | Description |
|------|-------------|-------------|
| Standard | — | Default plot |
| Town | 135,000 gold | Large player settlement |
| Dungeon | 40,000 gold | Dungeon/adventure area |
| Neutral | 10,000 gold | Neutral zone (reduced combat rules) |
| Testing | — | Testing/dev area |

Additional features:

| Feature | Cost | Description |
|---------|------|-------------|
| AutoKick | 25,000 gold | Automatically remove non-permitted players |

## Control Points

**Control Points** are special plots that clans fight to capture. Capturing a control point grants your entire clan stat bonuses and other buffs.

[Control Points →](/plots/control-points)

## Plot Tax

Plots are subject to taxes collected by the server. Taxes are taken from the plot treasury. Clan members can collect taxes with:

```
/collectplottax
```

Admins can force-collect all server plot taxes with the admin version of the same command.
