---
title: Setup Commands
summary: Onboard, run, doctor, and configure
---

Instance setup and diagnostics commands.

## `one-person-capital run`

One-command bootstrap and start:

```sh
pnpm one-person-capital run
```

Does:

1. Auto-onboards if config is missing
2. Runs `one-person-capital doctor` with repair enabled
3. Starts the server when checks pass

Choose a specific instance:

```sh
pnpm one-person-capital run --instance dev
```

## `one-person-capital onboard`

Interactive first-time setup:

```sh
pnpm one-person-capital onboard
```

First prompt:

1. `Quickstart` (recommended): local defaults (embedded database, no LLM provider, local disk storage, default secrets)
2. `Advanced setup`: full interactive configuration

Start immediately after onboarding:

```sh
pnpm one-person-capital onboard --run
```

Non-interactive defaults + immediate start (opens browser on server listen):

```sh
pnpm one-person-capital onboard --yes
```

## `one-person-capital doctor`

Health checks with optional auto-repair:

```sh
pnpm one-person-capital doctor
pnpm one-person-capital doctor --repair
```

Validates:

- Server configuration
- Database connectivity
- Secrets adapter configuration
- Storage configuration
- Missing key files

## `one-person-capital configure`

Update configuration sections:

```sh
pnpm one-person-capital configure --section server
pnpm one-person-capital configure --section secrets
pnpm one-person-capital configure --section storage
```

## `one-person-capital env`

Show resolved environment configuration:

```sh
pnpm one-person-capital env
```

## `one-person-capital allowed-hostname`

Allow a private hostname for authenticated/private mode:

```sh
pnpm one-person-capital allowed-hostname my-tailscale-host
```

## Local Storage Paths

| Data | Default Path |
|------|-------------|
| Config | `~/.one-person-capital/instances/default/config.json` |
| Database | `~/.one-person-capital/instances/default/db` |
| Logs | `~/.one-person-capital/instances/default/logs` |
| Storage | `~/.one-person-capital/instances/default/data/storage` |
| Secrets key | `~/.one-person-capital/instances/default/secrets/master.key` |

Override with:

```sh
ONE_PERSON_CAPITAL_HOME=/custom/home ONE_PERSON_CAPITAL_INSTANCE_ID=dev pnpm one-person-capital run
```

Or pass `--data-dir` directly on any command:

```sh
pnpm one-person-capital run --data-dir ./tmp/one-person-capital-dev
pnpm one-person-capital doctor --data-dir ./tmp/one-person-capital-dev
```
