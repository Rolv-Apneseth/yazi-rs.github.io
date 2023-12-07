---
id: overview
sidebar_position: 0
sidebar_label: Configuration
description: Learn how to configure Yazi.
---

# Configuration

There are three configuration files for Yazi:

- [`yazi.toml`](./yazi.md) - General configuration
- [`keymap.toml`](./keymap.md) - Keybinds configuration
- [`theme.toml`](./theme.md) - Color scheme configuration

Yazi presets these configurations upon release, and uses them by default.

If you want to use your own configurations and modify them as needed, please copy them from https://github.com/sxyazi/yazi/tree/main/yazi-config/preset to:

- Unix: `~/.config/yazi/`
- Windows: `C:\Users\YourName\AppData\Roaming\yazi\config\`

## Custom config directory

You can change the Yazi configuration directory by exporting the `YAZI_CONFIG_HOME` environment variable.
