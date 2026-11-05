import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  meta: {
    title: 'LSR Digital Architecture — Ingénierie logicielle pour la Finance & la Fintech',
    description:
      "Société d'ingénierie et de conseil en architecture logicielle dédiée aux environnements financiers. Conception d'applications transactionnelles robustes, conformes et taillées pour les flux critiques.",
  },
  header: {
    brandName: 'LSR',
    brandSuffix: 'Digital Architecture',
    statusBadge: 'MISSIONS FINANCE & FINTECH',
    navigation: [
      { id: 'vision', label: '01. Approche' },
      { id: 'services', label: '02. Savoir-faire' },
      { id: 'blueprint', label: '03. Méthode' },
      { id: 'manifesto', label: '04. Philosophie' },
      { id: 'contact', label: '05. Contact' },
    ],
    cta: 'Initier un échange',
  },
  hero: {
    systemTag: '[ INGÉNIERIE LOGICIELLE — FINANCE & FINTECH ]',
    headline: 'Systèmes financiers fiables,',
    headlineAccent: 'architectures conçues pour durer.',
    subheadline:
      'Conception de socles techniques critiques pour banques, asset managers et fintechs. Alliez Clean Architecture, intégrité transactionnelle et zéro dette technique.',
    ctaPrimary: 'Explorer nos expertises',
    ctaSecondary: 'Consulter un architecte',
    metricsBanner: [
      {
        value: '99.99%',
        title: 'Continuité Opérationnelle',
        description:
          'Tolérance aux pannes native sur les parcours transactionnels et de back-office.',
      },
      {
        value: '< 50ms',
        title: 'Latence Maîtrisée',
        description: 'Profilage p99 chirurgical sur les flux financiers et APIs métier critiques.',
      },
      {
        value: '0 Dette',
        title: 'Conformité Durable',
        description:
          'Clean Architecture, typage strict et traçabilité adaptée aux exigences réglementaires.',
      },
    ],
  },
  services: {
    sectionTag: 'SERVICES & EXPERTISES',
    sectionTitle: "Des solutions d'ingénierie ciblées pour les systèmes financiers",
    sectionDescription:
      'Une approche pragmatique alliant vision métier finance et rigueur microscopique du code.',
    cards: [
      {
        code: 'SEC_01 // ARCHITECTURE',
        title: 'Architecture de Systèmes Financiers',
        pitch: 'Socles modulaires pour produits finance & fintech.',
        description:
          'Plans directeurs (DAT), cartographie DDD des domaines métier (ordre, cash, reporting, conformité) et flux de données résilients pour isoler les responsabilités critiques.',
        deliverables: [
          "Dossier d'Architecture Technique (DAT)",
          'Cartographie DDD & flux transactionnels',
          'Stratégie de scalabilité & haute disponibilité',
        ],
        tags: ['Clean Arch', 'DDD', 'Transactionnel', 'Event-Driven'],
      },
      {
        code: 'SEC_02 // CRAFTSMANSHIP',
        title: 'Ingénierie Full-Stack Finance',
        pitch: 'Applications métier et APIs haute fiabilité.',
        description:
          "Conception sur-mesure d'applications financières critiques, du back-end transactionnel aux interfaces de pilotage et de reporting.",
        deliverables: [
          'Portails métier & back-offices finance',
          'APIs transactionnelles sécurisées & auditables',
          'Composants modulaires typés et testés',
        ],
        tags: ['TypeScript', 'Java / Spring', 'React / Next', 'PostgreSQL'],
      },
      {
        code: 'SEC_03 // RESILIENCE',
        title: 'Audit Technique & Remédiation',
        pitch: 'Élimination de dette et consolidation.',
        description:
          "Diagnostic en profondeur des plateformes financières, élimination des goulets d'étranglement et restructuration sans coupure de service.",
        deliverables: [
          'Audit de code, performance et couverture',
          'Plan de refactorisation étape par étape',
          'Optimisation des requêtes & pipelines CI/CD',
        ],
        tags: ['Code Review', 'Profiling p99', 'DevOps & CI/CD', 'Sécurité'],
      },
    ],
  },
  methodology: {
    sectionTag: "MÉTHODE D'INGÉNIERIE",
    sectionTitle: "L'exigence du plan, la rigueur de l'exécution",
    steps: [
      {
        step: '01',
        name: 'Audit & Cartographie',
        description:
          'Analyse des flux métier finance, contraintes réglementaires et dette existante.',
      },
      {
        step: '02',
        name: 'Blueprint Cible',
        description: "Schéma directeur, découpage de domaine et validation des contrats d'APIs.",
      },
      {
        step: '03',
        name: 'Façonnage & Tests',
        description: 'Développement Clean Architecture, typage strict et tests automatisés.',
      },
      {
        step: '04',
        name: 'Déploiement & PRA',
        description: 'Mise en production sécurisée, observabilité continue et passation.',
      },
    ],
  },
  manifesto: {
    sectionTag: 'PHILOSOPHIE',
    quote: '« Concevoir des architectures financières lisibles, robustes et taillées pour durer. »',
    principles: [
      {
        title: 'Sobriété & Justesse',
        text: 'Refus de la sur-ingénierie : la simplicité maîtrisée reste le garant ultime de la robustesse sur les parcours critiques.',
      },
      {
        title: 'Intégrité & Traçabilité',
        text: 'Typage strict, schémas immuables et journaux d’audit pour éliminer les régressions silencieuses.',
      },
      {
        title: 'Artisanat & Transmission',
        text: 'Code propre, documenté et pensé pour être transmis aux équipes métier et tech sans friction.',
      },
    ],
  },
  contact: {
    sectionTag: 'INITIALISATION',
    headline: 'Prêt à consolider votre socle financier ?',
    subheadline:
      "Échangeons sur vos enjeux d'architecture, d'audit ou de développement en environnement finance / fintech.",
    email: 'contact@lsr-digital-architecture.com',
    directContact: {
      location: 'Conflans-Sainte-Honorine / Île-de-France & Remote',
      availability: 'Consultation technique sous 48h ouvrées',
    },
  },
  footer: {
    legalEntity: 'LSR Digital Architecture SASU',
    copyright: '© 2026 LSR Digital Architecture. Tous droits réservés.',
    email: 'contact@lsr-digital-architecture.com',
    ecosystem: {
      title: 'Écosystème LSR',
      links: [
        {
          id: 'cv',
          label: 'Curriculum Vitae',
          description: 'Parcours, missions & stack technique',
          href: 'https://cv.lsr-digital-architecture.com/',
          tag: 'CV',
        },
        {
          id: 'tools',
          label: 'LSR Tools',
          description: 'Raccourcisseur d’URL & utilitaires',
          href: 'https://tools.lsr-digital-architecture.com/',
          tag: 'TOOLS',
        },
      ],
    },
  },
};
