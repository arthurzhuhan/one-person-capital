# CLI Reference

OnePersonCapital CLI now supports both:

- instance setup/diagnostics (`onboard`, `doctor`, `configure`, `env`, `allowed-hostname`)
- control-plane client operations (issues, approvals, agents, activity, dashboard)

## Base Usage

Use repo script in development:

```sh
pnpm one-person-capital --help
```

First-time local bootstrap + run:

```sh
pnpm one-person-capital run
```

Choose local instance:

```sh
pnpm one-person-capital run --instance dev
```

## Deployment Modes

Mode taxonomy and design intent are documented in `doc/DEPLOYMENT-MODES.md`.

Current CLI behavior:

- `one-person-capital onboard` and `one-person-capital configure --section server` set deployment mode in config
- runtime can override mode with `ONE_PERSON_CAPITAL_DEPLOYMENT_MODE`
- `one-person-capital run` and `one-person-capital doctor` do not yet expose a direct `--mode` flag

Target behavior (planned) is documented in `doc/DEPLOYMENT-MODES.md` section 5.

Allow an authenticated/private hostname (for example custom Tailscale DNS):

```sh
pnpm one-person-capital allowed-hostname dotta-macbook-pro
```

All client commands support:

- `--data-dir <path>`
- `--api-base <url>`
- `--api-key <token>`
- `--context <path>`
- `--profile <name>`
- `--json`

Company-scoped commands also support `--company-id <id>`.

Use `--data-dir` on any CLI command to isolate all default local state (config/context/db/logs/storage/secrets) away from `~/.one-person-capital`:

```sh
pnpm one-person-capital run --data-dir ./tmp/one-person-capital-dev
pnpm one-person-capital issue list --data-dir ./tmp/one-person-capital-dev
```

## Context Profiles

Store local defaults in `~/.one-person-capital/context.json`:

```sh
pnpm one-person-capital context set --api-base http://localhost:3100 --company-id <company-id>
pnpm one-person-capital context show
pnpm one-person-capital context list
pnpm one-person-capital context use default
```

To avoid storing secrets in context, set `apiKeyEnvVarName` and keep the key in env:

```sh
pnpm one-person-capital context set --api-key-env-var-name ONE_PERSON_CAPITAL_API_KEY
export ONE_PERSON_CAPITAL_API_KEY=...
```

## Company Commands

```sh
pnpm one-person-capital company list
pnpm one-person-capital company get <company-id>
pnpm one-person-capital company delete <company-id-or-prefix> --yes --confirm <same-id-or-prefix>
```

Examples:

```sh
pnpm one-person-capital company delete PAP --yes --confirm PAP
pnpm one-person-capital company delete 5cbe79ee-acb3-4597-896e-7662742593cd --yes --confirm 5cbe79ee-acb3-4597-896e-7662742593cd
```

Notes:

- Deletion is server-gated by `ONE_PERSON_CAPITAL_ENABLE_COMPANY_DELETION`.
- With agent authentication, company deletion is company-scoped. Use the current company ID/prefix (for example via `--company-id` or `ONE_PERSON_CAPITAL_COMPANY_ID`), not another company.

## Issue Commands

```sh
pnpm one-person-capital issue list --company-id <company-id> [--status todo,in_progress] [--assignee-agent-id <agent-id>] [--match text]
pnpm one-person-capital issue get <issue-id-or-identifier>
pnpm one-person-capital issue create --company-id <company-id> --title "..." [--description "..."] [--status todo] [--priority high]
pnpm one-person-capital issue update <issue-id> [--status in_progress] [--comment "..."]
pnpm one-person-capital issue comment <issue-id> --body "..." [--reopen]
pnpm one-person-capital issue checkout <issue-id> --agent-id <agent-id> [--expected-statuses todo,backlog,blocked]
pnpm one-person-capital issue release <issue-id>
```

## Agent Commands

```sh
pnpm one-person-capital agent list --company-id <company-id>
pnpm one-person-capital agent get <agent-id>
pnpm one-person-capital agent local-cli <agent-id-or-shortname> --company-id <company-id>
```

`agent local-cli` is the quickest way to run local Claude/Codex manually as a OnePersonCapital agent:

- creates a new long-lived agent API key
- installs missing OnePersonCapital skills into `~/.codex/skills` and `~/.claude/skills`
- prints `export ...` lines for `ONE_PERSON_CAPITAL_API_URL`, `ONE_PERSON_CAPITAL_COMPANY_ID`, `ONE_PERSON_CAPITAL_AGENT_ID`, and `ONE_PERSON_CAPITAL_API_KEY`

Example for shortname-based local setup:

```sh
pnpm one-person-capital agent local-cli codexcoder --company-id <company-id>
pnpm one-person-capital agent local-cli claudecoder --company-id <company-id>
```

## Approval Commands

```sh
pnpm one-person-capital approval list --company-id <company-id> [--status pending]
pnpm one-person-capital approval get <approval-id>
pnpm one-person-capital approval create --company-id <company-id> --type hire_agent --payload '{"name":"..."}' [--issue-ids <id1,id2>]
pnpm one-person-capital approval approve <approval-id> [--decision-note "..."]
pnpm one-person-capital approval reject <approval-id> [--decision-note "..."]
pnpm one-person-capital approval request-revision <approval-id> [--decision-note "..."]
pnpm one-person-capital approval resubmit <approval-id> [--payload '{"...":"..."}']
pnpm one-person-capital approval comment <approval-id> --body "..."
```

## Activity Commands

```sh
pnpm one-person-capital activity list --company-id <company-id> [--agent-id <agent-id>] [--entity-type issue] [--entity-id <id>]
```

## Dashboard Commands

```sh
pnpm one-person-capital dashboard get --company-id <company-id>
```

## Heartbeat Command

`heartbeat run` now also supports context/api-key options and uses the shared client stack:

```sh
pnpm one-person-capital heartbeat run --agent-id <agent-id> [--api-base http://localhost:3100] [--api-key <token>]
```

## Local Storage Defaults

Default local instance root is `~/.one-person-capital/instances/default`:

- config: `~/.one-person-capital/instances/default/config.json`
- embedded db: `~/.one-person-capital/instances/default/db`
- logs: `~/.one-person-capital/instances/default/logs`
- storage: `~/.one-person-capital/instances/default/data/storage`
- secrets key: `~/.one-person-capital/instances/default/secrets/master.key`

Override base home or instance with env vars:

```sh
ONE_PERSON_CAPITAL_HOME=/custom/home ONE_PERSON_CAPITAL_INSTANCE_ID=dev pnpm one-person-capital run
```

## Storage Configuration

Configure storage provider and settings:

```sh
pnpm one-person-capital configure --section storage
```

Supported providers:

- `local_disk` (default; local single-user installs)
- `s3` (S3-compatible object storage)
