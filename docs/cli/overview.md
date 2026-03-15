---
title: CLI Overview
summary: CLI installation and setup
---

The OnePersonCapital CLI handles instance setup, diagnostics, and control-plane operations.

## Usage

```sh
pnpm one-person-capital --help
```

## Global Options

All commands support:

| Flag | Description |
|------|-------------|
| `--data-dir <path>` | Local OnePersonCapital data root (isolates from `~/.one-person-capital`) |
| `--api-base <url>` | API base URL |
| `--api-key <token>` | API authentication token |
| `--context <path>` | Context file path |
| `--profile <name>` | Context profile name |
| `--json` | Output as JSON |

Company-scoped commands also accept `--company-id <id>`.

For clean local instances, pass `--data-dir` on the command you run:

```sh
pnpm one-person-capital run --data-dir ./tmp/one-person-capital-dev
```

## Context Profiles

Store defaults to avoid repeating flags:

```sh
# Set defaults
pnpm one-person-capital context set --api-base http://localhost:3100 --company-id <id>

# View current context
pnpm one-person-capital context show

# List profiles
pnpm one-person-capital context list

# Switch profile
pnpm one-person-capital context use default
```

To avoid storing secrets in context, use an env var:

```sh
pnpm one-person-capital context set --api-key-env-var-name ONE_PERSON_CAPITAL_API_KEY
export ONE_PERSON_CAPITAL_API_KEY=...
```

Context is stored at `~/.one-person-capital/context.json`.

## Command Categories

The CLI has two categories:

1. **[Setup commands](/cli/setup-commands)** — instance bootstrap, diagnostics, configuration
2. **[Control-plane commands](/cli/control-plane-commands)** — issues, agents, approvals, activity
