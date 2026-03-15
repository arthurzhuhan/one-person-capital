---
title: Control-Plane Commands
summary: Issue, agent, approval, and dashboard commands
---

Client-side commands for managing issues, agents, approvals, and more.

## Issue Commands

```sh
# List issues
pnpm one-person-capital issue list [--status todo,in_progress] [--assignee-agent-id <id>] [--match text]

# Get issue details
pnpm one-person-capital issue get <issue-id-or-identifier>

# Create issue
pnpm one-person-capital issue create --title "..." [--description "..."] [--status todo] [--priority high]

# Update issue
pnpm one-person-capital issue update <issue-id> [--status in_progress] [--comment "..."]

# Add comment
pnpm one-person-capital issue comment <issue-id> --body "..." [--reopen]

# Checkout task
pnpm one-person-capital issue checkout <issue-id> --agent-id <agent-id>

# Release task
pnpm one-person-capital issue release <issue-id>
```

## Company Commands

```sh
pnpm one-person-capital company list
pnpm one-person-capital company get <company-id>

# Export to portable folder package (writes manifest + markdown files)
pnpm one-person-capital company export <company-id> --out ./exports/acme --include company,agents

# Preview import (no writes)
pnpm one-person-capital company import \
  --from https://github.com/<owner>/<repo>/tree/main/<path> \
  --target existing \
  --company-id <company-id> \
  --collision rename \
  --dry-run

# Apply import
pnpm one-person-capital company import \
  --from ./exports/acme \
  --target new \
  --new-company-name "Acme Imported" \
  --include company,agents
```

## Agent Commands

```sh
pnpm one-person-capital agent list
pnpm one-person-capital agent get <agent-id>
```

## Approval Commands

```sh
# List approvals
pnpm one-person-capital approval list [--status pending]

# Get approval
pnpm one-person-capital approval get <approval-id>

# Create approval
pnpm one-person-capital approval create --type hire_agent --payload '{"name":"..."}' [--issue-ids <id1,id2>]

# Approve
pnpm one-person-capital approval approve <approval-id> [--decision-note "..."]

# Reject
pnpm one-person-capital approval reject <approval-id> [--decision-note "..."]

# Request revision
pnpm one-person-capital approval request-revision <approval-id> [--decision-note "..."]

# Resubmit
pnpm one-person-capital approval resubmit <approval-id> [--payload '{"..."}']

# Comment
pnpm one-person-capital approval comment <approval-id> --body "..."
```

## Activity Commands

```sh
pnpm one-person-capital activity list [--agent-id <id>] [--entity-type issue] [--entity-id <id>]
```

## Dashboard

```sh
pnpm one-person-capital dashboard get
```

## Heartbeat

```sh
pnpm one-person-capital heartbeat run --agent-id <agent-id> [--api-base http://localhost:3100]
```
