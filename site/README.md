# temperpass.dev

Public site for [TemperPass](https://github.com/Catalyst-Forge-LLC/temper-pass), built with
[FilePress](https://getfilepress.com).

```bash
pnpm install
pnpm dev
pnpm build    # → build/
```

From the package root: `pnpm site:dev`, `pnpm site:build`, `pnpm ship`.

## Deploy (Cloudflare Pages)

**Use one pipeline only.** Dual deploys overwrite each other when asset hashes
disagree.

```bash
pnpm ship
# = pnpm build && wrangler pages deploy build --project-name=temperpass
```

Then attach **temperpass.dev** in the Cloudflare dashboard.

### Git-connected Pages

| Setting | Value |
| --- | --- |
| Root directory | `site` |
| Build command | `pnpm install && pnpm build` |
| Output directory | `build` |
