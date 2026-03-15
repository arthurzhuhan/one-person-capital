---
title: Storage
summary: Local disk vs S3-compatible storage
---

OnePersonCapital stores uploaded files (issue attachments, images) using a configurable storage provider.

## Local Disk (Default)

Files are stored at:

```
~/.one-person-capital/instances/default/data/storage
```

No configuration required. Suitable for local development and single-machine deployments.

## S3-Compatible Storage

For production or multi-node deployments, use S3-compatible object storage (AWS S3, MinIO, Cloudflare R2, etc.).

Configure via CLI:

```sh
pnpm one-person-capital configure --section storage
```

## Configuration

| Provider | Best For |
|----------|----------|
| `local_disk` | Local development, single-machine deployments |
| `s3` | Production, multi-node, cloud deployments |

Storage configuration is stored in the instance config file:

```
~/.one-person-capital/instances/default/config.json
```
