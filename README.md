<div align="center">
  <picture>
    <source srcset="https://raw.githubusercontent.com/odest/catalyzer/refs/heads/master/.github/assets/logo-light.svg" media="(prefers-color-scheme: dark)">
    <source srcset="https://raw.githubusercontent.com/odest/catalyzer/refs/heads/master/.github/assets/logo-dark.svg" media="(prefers-color-scheme: light)">
    <img src="https://raw.githubusercontent.com/odest/catalyzer/refs/heads/master/.github/assets/logo-dark.svg" alt="Catalyzer" width="120" height="120">
  </picture>

  <h1>Catalyzer</h1>

  <p>
    <strong>Build Cross-Platform Apps Faster Than Ever</strong><br>
    Write your code once and build for Web, Desktop, and Mobile.<br>
    Powered by Tauri and Next.js in a single monorepo.
  </p>

[![CI Status](https://github.com/odest/catalyzer/actions/workflows/ci.yml/badge.svg)](https://github.com/odest/catalyzer/actions/workflows/ci.yml)
[![Release](https://github.com/odest/catalyzer/actions/workflows/release.yml/badge.svg)](https://github.com/odest/catalyzer/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/github/v/release/odest/catalyzer?label=Version&color=orange)](https://github.com/odest/catalyzer/releases/latest)
[![CLI](https://img.shields.io/npm/v/create-catalyzer?label=CLI&color=orange)](https://www.npmjs.com/package/create-catalyzer)

[![Live Demo](https://img.shields.io/badge/Demo-Live-success)](https://catalyzer.dev)
[![Docs](https://img.shields.io/badge/Docs-Online-blue)](https://catalyzer.dev/docs)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Desktop%20%7C%20Mobile-blue.svg)](https://catalyzer.dev)

  <br />

  <picture>
    <source srcset="https://raw.githubusercontent.com/odest/catalyzer/refs/heads/master/.github/assets/banner-light.webp" media="(prefers-color-scheme: light)">
    <source srcset="https://raw.githubusercontent.com/odest/catalyzer/refs/heads/master/.github/assets/banner-dark.webp" media="(prefers-color-scheme: dark)">
    <a href="https://catalyzer.dev" target="_blank">
    <img src="https://raw.githubusercontent.com/odest/catalyzer/refs/heads/master/.github/assets/banner-dark.webp" alt="Catalyzer" width="800">
  </a>
    
  </picture>
</div>

<br>

Catalyzer is a starting point for building cross-platform apps. It covers **Web**, **Desktop** (Windows, macOS, Linux), and **Mobile** (Android, iOS) from the same shared UI, themes, and logic. Run the CLI, scaffold your project, and start building.

## 💡 Philosophy

- **Unified** - One codebase, every platform. Web and native share the same pages, components, and state through `packages/core` and `packages/ui`.
- **Ready** - 40+ themes, 10 languages, CI/CD, and a scaffolding CLI out of the box.
- **Portable** - Run `npm create catalyzer@latest`, brand your project, and own the code. No lock-in.
- **Strict** - End-to-end TypeScript, shared lint rules, and automated releases keep things solid.

## ✨ Features

- **Cross-Platform** - Single codebase deploys to web, desktop, and mobile
- **Shared Architecture** - Design system primitives in `packages/ui`, business logic and pages in `packages/core`
- **40+ Themes** - Light and dark variants of 40+ color schemes, plus custom theming support
- **10 Languages** - Type-safe i18n works with both SSR (web) and static export (native)
- **PWA** - Offline support, precaching, and runtime caching strategies for the web app
- **Landing Page** - Pre-built, SEO-optimized marketing pages designed to pitch your product
- **Docs Page** - Integrated, MDX-powered documentation architecture ready for your technical guides
- **Scaffolding CLI** - `npm create catalyzer@latest` sets up a branded, configured project
- **Turborepo** - Dependency-aware builds and caching
- **TypeScript** - Strict, end-to-end type safety with shared configs
- **CI/CD** - GitHub Actions + Release Please for automated builds and versioning

## 🚀 Quick Start

### Prerequisites

- **[Node.js](https://nodejs.org/)** v20 or higher
- **[pnpm](https://pnpm.io/installation)** v8 or higher
- **[Rust](https://www.rust-lang.org/tools/install)** (latest stable, needed for native builds)

> [!NOTE]
> Building native apps requires additional platform-specific tools (e.g., Xcode, Android Studio, C++ Build Tools).
> See our [Docs](https://catalyzer.dev/docs) or Tauri's [Prerequisites Guide](https://v2.tauri.app/start/prerequisites/) for details.

### Create a New Project

```bash
npm create catalyzer@latest
```

<details>
<summary>Using other package managers</summary>

```bash
pnpm create catalyzer@latest
yarn create catalyzer@latest
npx create-catalyzer@latest
bunx create-catalyzer@latest
```

</details>

The CLI configures your project name, identifiers, and versions. It can also initialize git and install dependencies for you.

### Start Developing

```bash
cd <your-project-name>

# Run this only if you skipped dependency installation during scaffolding
pnpm install

pnpm dev
```

This starts both the web app (http://localhost:3000) and the native desktop app in parallel.

### Configuration

Before deploying or sharing your project, make sure to update the site metadata (URLs, headline, and description) in:
`packages/core/src/config/site.ts`

> [!IMPORTANT]
> **GitHub Actions & Release Please:** For the automated release pipelines and changelog generation to function properly, you **must** configure the following repository settings:
>
> 1. **Workflow Permissions** (Settings > Actions > General): Grant **Read and write permissions** and check **Allow GitHub Actions to create and approve pull requests**.
> 2. **Pull Request Merging** (Settings > General): To maintain the required linear git history for the release bot, uncheck `Allow merge commits` and `Allow rebase merging`. Leave only **`Allow squash merging`** checked, and set the default commit message to **`Pull request title`**.

## 📦 Overview

### Monorepo Structure

```
apps/
  web/                → Next.js SSR — web app, landing page, docs, PWA
  native/             → Next.js (Static) + Tauri 2 — desktop & mobile

packages/
  core/               → Business logic: pages, stores, hooks, providers, config
  ui/                 → Design system: shadcn/ui primitives, themes, styles
  i18n/               → 10-language type-safe translations (SSR & static)
  cli/                → Scaffolding tool (npm create catalyzer@latest)
  typescript-config/  → Shared TypeScript configs
```

Both `web` and `native` import pages, layouts, and state from `packages/core`, and design system primitives from `packages/ui`. The web app runs with SSR and PWA support. The native app uses a static HTML export served by Tauri's Rust backend.

### Supported Platforms

| Platform       | Status       | Links                                                               |
| -------------- | ------------ | ------------------------------------------------------------------- |
| **🌐 Web**     | ✅ Available | [Live Demo](https://catalyzer.dev)                                  |
| **📱 PWA**     | ✅ Available | [Live Demo](https://catalyzer.dev)                                  |
| **🪟 Windows** | ✅ Available | [Download Demo](https://github.com/odest/catalyzer/releases/latest) |
| **🍎 macOS**   | ✅ Available | [Download Demo](https://github.com/odest/catalyzer/releases/latest) |
| **🐧 Linux**   | ✅ Available | [Download Demo](https://github.com/odest/catalyzer/releases/latest) |
| **🤖 Android** | ✅ Available | [Download Demo](https://github.com/odest/catalyzer/releases/latest) |
| **📱 iOS**     | ✅ Available | [Download Demo](https://github.com/odest/catalyzer/releases/latest) |

## 🛠️ Tech Stack

<p>
  <a href="https://nextjs.org" target="_blank">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  </a>
  <a href="https://v2.tauri.app" target="_blank">
    <img src="https://img.shields.io/badge/Tauri%202-000000?style=for-the-badge&logo=tauri&logoColor=white" alt="Tauri 2">
  </a>
  <a href="https://react.dev" target="_blank">
    <img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=white" alt="React">
  </a>
  <br>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://www.rust-lang.org/" target="_blank">
    <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust">
  </a>
  <br>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-000000?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  </a>
  <a href="https://ui.shadcn.com/" target="_blank">
    <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
  </a>
  <br>
  <a href="https://www.fumadocs.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Fumadocs-000000?style=for-the-badge&logoColor=white" alt="Fumadocs">
  </a>
  <a href="https://turborepo.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Turborepo-000000?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo">
  </a>
  <a href="https://pnpm.io/" target="_blank">
    <img src="https://img.shields.io/badge/pnpm-000000?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm">
  </a>
</p>

## ⌨️ Core Commands

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

## 📖 Documentation

For setup guides, architecture, theming, i18n, deployment and more, see **[Documentation](https://catalyzer.dev/docs)**

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

[MIT](LICENSE)
