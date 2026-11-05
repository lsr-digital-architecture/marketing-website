# SPA Structure Guidelines

This repo is a content-oriented SPA. Keep a modular folder layout; do **not** introduce Clean Architecture or Atomic Design layers here.

## 1. Source Layout

Prefer this structure under `src/`:

```text
src/
  App.tsx                 # thin assembler (compose layout + sections)
  main.tsx
  components/
    layout/               # shell chrome (Header, Footer, …)
    sections/             # page sections (Hero, Services, Contact, …)
    common/               # shared presentational pieces (Button, Badge, …)
    …                     # feature folders when scope is local (legal, glossary, …)
  constants/              # editorial copy, dictionaries, static config
  hooks/                  # reusable React hooks (`use…`)
  domain/                 # pure domain logic when needed (no React)
  context/                # React context providers
  utils/                  # small shared helpers
  styles/                 # SCSS entry + partials
```

## 2. Placement Rules

- **Components**: UI only. Group by role (`layout`, `sections`, `common`) or by local feature folder when the UI is self-contained.
- **Constants**: Keep large copy, glossaries, and static site data in `src/constants/**` — out of JSX.
- **Hooks**: Extract state, effects, a11y, and interaction logic into `src/hooks/`.
- **Domain**: Put pure calculations/models in `src/domain/` when logic is non-trivial and UI-independent.
- **App.tsx**: Remain a thin composer; avoid growing page content or business logic there.

## 3. File Size Exception

- `src/constants/**` is exempt from the `max-lines` (250) rule — large editorial/data modules are expected there.
- All other source files follow `.agents/rules/file-size-limits.md`.
