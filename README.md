# LSR Digital Architecture — Vitrine d'Ingénierie Finance & Fintech

> **Site vitrine officiel de LSR Digital Architecture SAS**  
> Conception sur-mesure d'architectures logicielles pour environnements financiers — transactionnelles, conformes et haute résilience.

---

## 🏛️ Direction Artistique & Design System (High-Craft Engineering / Option B)

L'univers visuel combine trois piliers fondamentaux : **Prestige & Haut de gamme**, **Précision chirurgicale**, et **Robustesse technique**.

- **Atmosphère :** Dark theme immersif inspiré des plans d'architectes (_Blueprints_) et des interfaces d'ingénierie moderne (Linear, Supabase, Vercel).
- **Palette chromatique & Variables CSS :**
  - `--bg-primary` : `#090A0F` (Noir Obsidian profond)
  - `--bg-surface` : `#0D111A` (Cartes Bento)
  - `--bg-surface-elevated` : `#131926`
  - `--text-primary` : `#F8FAFC` (Blanc Titane)
  - `--text-secondary` : `#94A3B8` (Gris acier doux)
  - `--text-muted` : `#64748B` (Gris technique)
  - `--accent-blue` : `#2563EB` (Bleu Cobalt)
  - `--accent-cyan` : `#38BDF8` (Cyan électrique)
  - `--accent-amber` : `#F59E0B` (Ambre / Cuivre brossé)
  - `--border-subtle` : `rgba(255, 255, 255, 0.08)`
  - `--border-active` : `rgba(56, 189, 248, 0.4)`
- **Typographies :**
  - Titres (H1/H2/H3) : `Plus Jakarta Sans` / `Cabinet Grotesk` (bold, tracking serré `-0.02em`)
  - Corps de texte : `Inter` (lisibilité optimale)
  - Éléments techniques & métadonnées : `JetBrains Mono` (espacement lettre `+0.05em`)
- **Cartes Bento :** Coins arrondis à `10px`, bordures fines 1px, repères d'angles orthogonaux et halo lumineux dynamique (_cursor tracking spotlight_).
- **Schémas d'Architecture :** Tracés filaires nets de 1.5px, connecteurs de données en dégradé de contour (`#2563EB` → `#38BDF8`), nœuds nodaux avec halo lumineux (`drop-shadow(0 0 6px #38BDF8)`).

---

## ⚡ Stack Technique & Bonnes Pratiques

- **Build Tool :** [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (`strict: true`)
- **Styling :** [SCSS / Sass](https://sass-lang.com/) modulaire (tokens, mixins, BEM & utilitaires blueprint haute performance)
- **Iconographie :** [Lucide-React](https://lucide.dev/) + SVG Blueprint sur-mesure
- **Qualité de code :** Linter ultra-rapide ([oxlint](https://oxc.rs/)), formateur haute performance ([oxfmt](https://oxc.rs/docs/guide/usage/formatter)), TypeScript strict
- **Accessibilité (a11y) & SEO :** Mobile-first, balisage sémantique (`header`, `main`, `section`, `footer`), respect des contrastes WCAG, navigation au clavier et support de `prefers-reduced-motion`.

---

## 📂 Structure Modulaire du Projet

```text
lsr-digital-architecture/
├── public/
│   └── favicon.svg              # Favicon SVG géométrique blueprint
├── src/
│   ├── components/
│   │   ├── blueprint/
│   │   │   └── ArchitectureCanvas.tsx        # Schéma blueprint interactif & télémétrie en direct
│   │   ├── common/
│   │   │   ├── BentoCard.tsx                 # Carte bento 10px avec curseur glow & repères
│   │   │   ├── Button.tsx                    # Composant polymorphe de bouton unifié (primary, secondary, ghost, tab)
│   │   │   ├── SectionTag.tsx                # Badges de section monospace
│   │   │   └── TechBadge.tsx                 # Badges technologiques typés
│   │   ├── interactive/
│   │   │   └── ArchitectureDebtCalculator.tsx # Simulateur de dette technique & score de résilience
│   │   ├── legal/
│   │   │   ├── LegalModal.tsx                # Modale Mentions Légales (LCEN), RGPD et gestion cookies
│   │   │   └── CookieBanner.tsx              # Bandeau informatif de sobriété et vie privée
│   │   ├── layout/
│   │   │   ├── Header.tsx                    # En-tête fixe avec badge statut et scrollspy
│   │   │   └── Footer.tsx                    # Pied de page avec monitoring et mentions légales
│   │   └── sections/
│   │       ├── HeroSection.tsx               # Accroche, badges & cartes métriques bento
│   │       ├── ServicesSection.tsx           # Cartes SEC_01, SEC_02, SEC_03
│   │       ├── MethodologySection.tsx        # Pipeline des 4 jalons d'ingénierie
│   │       ├── ManifestoSection.tsx          # Citation d'architecte et principes clés
│   │       └── ContactSection.tsx            # Formulaire d'initialisation de projet & contact direct
│   ├── domain/
│   │   ├── blueprint/
│   │   │   └── blueprintModel.ts             # Modèle de domaine, nœuds et prédicats de filtrage
│   │   └── resilience/
│   │       └── resilienceCalculator.ts       # Règles métier pures & calcul d'indice de résilience
│   ├── constants/
│   │   └── siteContent.ts                    # Centralisation du contenu éditorial typé
│   ├── styles/
│   │   ├── _variables.scss                   # Variables SCSS & design tokens
│   │   ├── _mixins.scss                      # Mixins responsives, flexbox & bento
│   │   ├── _reset.scss                       # Reset, scrollbar technique & variables CSS
│   │   ├── _utilities.scss                   # Utilitaires layout, typographie & animations
│   │   ├── components/                       # Styles modulaires par composant
│   │   └── main.scss                         # Point d'entrée SCSS principal
│   ├── types/
│   │   └── index.ts                          # Interfaces TypeScript strictes
│   ├── utils/
│   │   └── cn.ts                             # Utilitaire de fusion conditionnelle de classes
│   ├── App.tsx                               # Assemblage de l'application
│   └── main.tsx                              # Point d'entrée React
├── index.html                                # Balisage SEO, OpenGraph & polices Google Fonts
└── package.json
```

---

## 🛠️ Commandes Disponibles

```bash
# Installation des dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Vérification des types TypeScript
pnpm typecheck

# Linter
pnpm lint

# Formater le code avec oxfmt
pnpm format

# Vérifier le formatage du code
pnpm format:check

# Compiler le bundle de production optimisé
pnpm build

# Prévisualiser la version de production
pnpm preview
```

---

## 🌐 Déploiement & Hébergement (Firebase & CI/CD)

Hébergement **Firebase Hosting** (multi-site) sur le projet GCP/Firebase `lsr-digital-architecture`, déployé via **GitHub Actions** + **Workload Identity Federation** (même SA que les autres frontends).

| Élément                    | Valeur                                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| Firebase / GCP project     | `lsr-digital-architecture`                                                                           |
| Hosting target             | `www` (alias CI)                                                                                     |
| Hosting site ID            | `lsr-digital-architecture` (site par défaut du projet, mappé sur le target `www`)                    |
| Domaine (apex personnel)   | `www.lsr-digital-architecture.com`                                                                   |
| Domaine marque (optionnel) | `lsr-digital-architecture.com` (déjà ou à rattacher au site par défaut)                              |
| WIF provider               | `projects/344658308078/locations/global/workloadIdentityPools/github-pool/providers/github-provider` |
| Service account            | `github-deployer@lsr-digital-architecture.iam.gserviceaccount.com`                                   |

### Pipeline

- **PR →** preview channel Firebase (`hosting:channel:deploy`, target `www`, expire 7j)
- **Push `main` →** live deploy (`firebase deploy --only hosting:www`)
- Qualité : `pnpm check:all` puis `pnpm build`

Aucun secret GitHub n'est requis pour l'auth (WIF). Le dépôt GitHub doit être autorisé sur le provider WIF / le SA `github-deployer`.

### Ops checklist (console / CLI, une fois)

1. Confirmer le mapping target `www` → site `lsr-digital-architecture` (déjà dans `.firebaserc`)
2. Attacher `www.lsr-digital-architecture.com` (et garder `lsr-digital-architecture.com` si déjà en place) au site par défaut
3. Vérifier les bindings WIF pour ce repo GitHub

Cartographie multi-site (même apex `lsr-digital-architecture.com`) :

| Subdomain | App                   | Cible                                                           |
| --------- | --------------------- | --------------------------------------------------------------- |
| `www`     | marketing-website     | Firebase Hosting site `lsr-digital-architecture` (target `www`) |
| `cv`      | curriculum-vitae      | Firebase Hosting site `lsr-cv`                                  |
| `tools`   | tools-webapp frontend | Firebase Hosting site `lsr-tools-webapp`                        |
| `api`     | tools-webapp backend  | Cloud Run `tools-api`                                           |

---

## 📄 Licence & Droits

© 2026 **LSR Digital Architecture SAS**. Tous droits réservés.
