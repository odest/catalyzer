# {{PROJECT_NAME}}

## Getting Started

### Prerequisites

- **[Node.js](https://nodejs.org/)** v20 or higher
- **[pnpm](https://pnpm.io/installation)** v8 or higher
- **[Rust](https://www.rust-lang.org/tools/install)** (latest stable, needed for native builds)

> [!NOTE]
> Building native apps requires additional platform-specific tools (e.g., Xcode, Android Studio, C++ Build Tools).
> See Tauri's [Prerequisites Guide](https://v2.tauri.app/start/prerequisites/) for details.

### Development

```bash
pnpm install
pnpm dev
```

This starts both the web app (http://localhost:3000) and the native desktop app in parallel.

### Commands

```bash
pnpm dev                  # Start all apps in dev mode
pnpm build                # Build everything
pnpm check                # Check formatting and lint rules
pnpm fix                  # Auto-fix formatting and lint issues
pnpm typecheck            # TypeScript validation across all workspaces
pnpm web dev              # Web app only
pnpm tauri dev            # Desktop app only
pnpm tauri android dev    # Android app
pnpm tauri ios dev        # iOS app
pnpm shadcn add           # Add shadcn/ui components to packages/ui
pnpm clean                # Clean all build outputs
```

### Monorepo Structure

```
apps/
  web/                → Next.js SSR — web app, landing page, docs, PWA
  native/             → Next.js (Static) + Tauri 2 — desktop & mobile

packages/
  core/               → Business logic: pages, stores, hooks, providers, config
  ui/                 → Design system: shadcn/ui primitives, themes, styles
  i18n/               → Type-safe translations (SSR & static)
  typescript-config/  → Shared TypeScript configs
```

### Configuration

Before deploying or sharing your project, update the site metadata (URLs, headline, and description) in:
`packages/core/src/config/site.ts`

---

<div align="center">
  <sub>Built with <b><a href="https://github.com/odest/catalyzer">Catalyzer</a></b> - Accelerate your cross-platform app development</sub>
</div>
