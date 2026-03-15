---
title: Environment Variables
summary: Full environment variable reference
---

All environment variables that OnePersonCapital uses for server configuration.

## Server Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3100` | Server port |
| `HOST` | `127.0.0.1` | Server host binding |
| `DATABASE_URL` | (embedded) | PostgreSQL connection string |
| `ONE_PERSON_CAPITAL_HOME` | `~/.one-person-capital` | Base directory for all OnePersonCapital data |
| `ONE_PERSON_CAPITAL_INSTANCE_ID` | `default` | Instance identifier (for multiple local instances) |
| `ONE_PERSON_CAPITAL_DEPLOYMENT_MODE` | `local_trusted` | Runtime mode override |

## Secrets

| Variable | Default | Description |
|----------|---------|-------------|
| `ONE_PERSON_CAPITAL_SECRETS_MASTER_KEY` | (from file) | 32-byte encryption key (base64/hex/raw) |
| `ONE_PERSON_CAPITAL_SECRETS_MASTER_KEY_FILE` | `~/.one-person-capital/.../secrets/master.key` | Path to key file |
| `ONE_PERSON_CAPITAL_SECRETS_STRICT_MODE` | `false` | Require secret refs for sensitive env vars |

## Agent Runtime (Injected into agent processes)

These are set automatically by the server when invoking agents:

| Variable | Description |
|----------|-------------|
| `ONE_PERSON_CAPITAL_AGENT_ID` | Agent's unique ID |
| `ONE_PERSON_CAPITAL_COMPANY_ID` | Company ID |
| `ONE_PERSON_CAPITAL_API_URL` | OnePersonCapital API base URL |
| `ONE_PERSON_CAPITAL_API_KEY` | Short-lived JWT for API auth |
| `ONE_PERSON_CAPITAL_RUN_ID` | Current heartbeat run ID |
| `ONE_PERSON_CAPITAL_TASK_ID` | Issue that triggered this wake |
| `ONE_PERSON_CAPITAL_WAKE_REASON` | Wake trigger reason |
| `ONE_PERSON_CAPITAL_WAKE_COMMENT_ID` | Comment that triggered this wake |
| `ONE_PERSON_CAPITAL_APPROVAL_ID` | Resolved approval ID |
| `ONE_PERSON_CAPITAL_APPROVAL_STATUS` | Approval decision |
| `ONE_PERSON_CAPITAL_LINKED_ISSUE_IDS` | Comma-separated linked issue IDs |

## LLM Provider Keys (for adapters)

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Anthropic API key (for Claude Local adapter) |
| `OPENAI_API_KEY` | OpenAI API key (for Codex Local adapter) |
