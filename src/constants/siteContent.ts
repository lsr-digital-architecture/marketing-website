import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  meta: {
    title:
      'LSR Digital Architecture — Développement Fintech, CGP & Conformité (ACPR / AMF)',
    description:
      'Développeur Full-Stack freelance — Fintech, CGP & Conformité. 6+ ans (Tylia), mission en cours chez Astoria Finance. Double compétence Code + Réglementation (ACPR, AMF, LCB-FT, MIFID II, DORA).',
  },
  header: {
    brandName: 'LSR',
    brandSuffix: 'Digital Architecture',
    statusBadge: 'EN MISSION · FINTECH · CGP',
    navigation: [
      { id: 'vision', label: '01. Approche' },
      { id: 'enjeux', label: '02. Enjeux' },
      { id: 'services', label: '03. Expertises' },
      { id: 'confiance', label: '04. Conformité' },
      { id: 'parcours', label: '05. Parcours' },
      { id: 'contact', label: '06. Contact' },
    ],
    cta: 'Échanger sur votre projet',
  },
  hero: {
    systemTag: '[ FINTECH · CGP · CONFORMITÉ — EN MISSION ]',
    headline: 'Tech & régulation financière',
    headlineAccent: 'sans friction.',
    subheadline:
      'Développeur Full-Stack freelance avec 6+ ans en fintech (Tylia) et missions CGP / patrimoine. Actuellement en mission chez Astoria Finance. Je traduis ACPR / AMF / LCB-FT / MIFID II / DORA en logiciels sécurisés — sans faire perdre de temps aux fondateurs ni aux responsables conformité.',
    ctaPrimary: 'Échanger sur votre projet',
    ctaSecondary: 'Audit de vos flux métier',
    metricsBanner: [
      {
        value: '6+ ans',
        title: 'Fintech (Tylia)',
        description:
          'Systèmes transactionnels, APIs NestJS / TypeScript et plateformes en marque blanche sur GCP.',
      },
      {
        value: 'Astoria',
        title: 'Mission CGP en cours',
        description:
          'Outils métier patrimoine : onboarding, souscription, back-offices et contrôles conformité.',
      },
      {
        value: 'Code + Régul.',
        title: 'Double compétence rare',
        description:
          'KYC / KYB, LCB-FT, MIFID II, ACPR / AMF, RGPD, DORA — intégrés dès le premier commit.',
      },
    ],
  },
  problemSolution: {
    sectionTag: 'PROBLÈME → SOLUTION',
    sectionTitle: 'Ce qui coûte vraiment cher aux acteurs de la finance',
    sectionDescription:
      'Les délais et les amendes ne viennent pas du manque de développeurs. Ils viennent du décalage entre le code livré et le métier réglementé.',
    pains: [
      {
        title: 'Risque de non-conformité',
        description:
          'Contrôles ACPR, failles LCB-FT, pistes d’audit incomplètes : une dette réglementaire invisible jusqu’au prochain examen — ou à la prochaine amende.',
      },
      {
        title: 'Temps perdu en onboarding métier',
        description:
          'Former un développeur généraliste à ce qu’est un PER, une SCPI, un test d’adéquation MIFID II ou un gel des avoirs retarde chaque sprint et chaque livraison.',
      },
      {
        title: 'Traduction conformité → produit',
        description:
          'Les fondateurs et RCCI passent des semaines à expliquer des contraintes que le code devrait déjà absorber. Chaque allers-retours est du ROI perdu.',
      },
    ],
    solutionTitle: 'Un profil immédiatement opérationnel',
    solutionDescription:
      'Dès le premier commit : compréhension métier, cadrage réglementaire et implémentation sécurisée. Vous gardez la main sur le produit ; je porte la friction Code ↔ Conformité.',
    solutionPoints: [
      'Vocabulaire CGP / Fintech maîtrisé (KYC, KYB, KYD, PPE, DDA, DSP2, eIDAS…)',
      'Exigences ACPR / AMF / TRACFIN / CNIL / ANSSI traduites en règles et contrôles logiciels',
      'Architecture traçable, idempotente et prête pour audit',
      'Pas de « phase conformité » en fin de projet : elle est dans chaque livraison',
    ],
  },
  services: {
    sectionTag: 'BRIQUES D’EXPERTISE MÉTIER',
    sectionTitle: 'Quatre piliers pour moderniser vos outils sans risque réglementaire',
    sectionDescription:
      'Des briques concrètes, prêtes à s’intégrer à votre stack — du parcours client à la piste d’audit.',
    cards: [
      {
        code: 'SEC_01 // ONBOARDING',
        title: 'Parcours Onboarding & Souscription',
        pitch: 'KYC/KYB bout-en-bout, sans rupture conformité.',
        description:
          'Parcours d’entrée en relation et de souscription conçus pour la vitesse commerciale et la robustesse réglementaire : vérification de pièces, screening et signature eIDAS.',
        deliverables: [
          'KYC / KYB & vérification documentaire',
          'Screening PPE / Gel des avoirs',
          'Signature électronique eIDAS',
        ],
        tags: ['KYC', 'KYB', 'KYD', 'PPE', 'eIDAS', 'Souscription'],
      },
      {
        code: 'SEC_02 // CONFORMITÉ',
        title: 'Conformité & Réglementation',
        pitch: 'La régulation dans le produit, pas dans un PDF.',
        description:
          'Implémentation des contrôles métier exigés par MIFID II, DDA et LCB-FT/TRACFIN, avec une trajectoire claire vers les exigences de résilience DORA.',
        deliverables: [
          'Contrôles MIFID II & DDA',
          'Flux LCB-FT / TRACFIN',
          'Préparation exigences DORA',
        ],
        tags: ['MIFID II', 'DDA', 'LCB-FT', 'TRACFIN', 'DORA', 'ACPR', 'AMF'],
      },
      {
        code: 'SEC_03 // PATRIMOINE',
        title: 'Moteurs de calcul & Patrimoine',
        pitch: 'Chiffres justes, allocations actionnables.',
        description:
          'Agrégation bancaire et patrimoniale (DSP2), simulateurs fiscaux / PER / Assurance-vie et moteurs d’allocation d’actifs pour cabinets CGP et fintechs patrimoine.',
        deliverables: [
          'Agrégation DSP2 & vision 360°',
          'Simulateurs fiscaux / PER / AV',
          'Allocation d’actifs & reporting',
        ],
        tags: ['DSP2', 'PER', 'Assurance-vie', 'SCPI', 'Allocation'],
      },
      {
        code: 'SEC_04 // SÉCURITÉ',
        title: 'Architecture sécurisée',
        pitch: 'Traçabilité financière digne d’un contrôle.',
        description:
          'Piste d’audit fiable, idempotence sur les opérations financières et chiffrement des données patrimoniales — pour tenir face aux audits et aux incidents.',
        deliverables: [
          'Audit trail complet & immutable',
          'Idempotence financière',
          'Chiffrement données patrimoniales',
        ],
        tags: ['Audit trail', 'Idempotence', 'Chiffrement', 'RGPD', 'ANSSI'],
      },
    ],
  },
  trust: {
    sectionTag: 'PREUVE DE CONFIANCE',
    sectionTitle: 'Des mots-clés que vos auditeurs et vos RCCI reconnaissent',
    sectionDescription:
      'Pas du marketing décoratif : des standards effectivement portés dans le code, les contrôles et la documentation livrable.',
    badges: [
      {
        label: 'AMF Ready',
        hint: 'Parcours & contrôles alignés sur les attentes AMF',
      },
      {
        label: 'LCB-FT Compliant',
        hint: 'Screening, vigilance et traçabilité TRACFIN',
      },
      {
        label: 'MIFID II',
        hint: 'Adéquation, information client, governance produit',
      },
      {
        label: 'ACPR · DORA · RGPD',
        hint: 'Gouvernance, résilience opérationnelle et protection des données',
      },
    ],
  },
  trackRecord: {
    sectionTag: 'PARCOURS & STACK',
    sectionTitle: 'Ce que dit le CV — missions et compétences opérationnelles',
    sectionDescription:
      'Même contenu que le curriculum vitae : missions fintech / CGP et stack utilisée au quotidien.',
    experiences: [
      {
        period: '2026 – Présent',
        role: 'Développeur Full-Stack — Finance / CGP',
        company: 'Astoria Finance',
        contract: 'Freelance',
        current: true,
        blocks: [
          {
            title: 'Outils métier CGP & patrimoine',
            body: "Développement sur-mesure pour cabinets CGP / gestion de patrimoine : parcours d'onboarding & souscription, back-offices métier et interfaces de pilotage. Vocabulaire métier maîtrisé (PER, SCPI, assurance-vie, adéquation).",
          },
          {
            title: 'Conformité & traçabilité',
            body: 'Intégration des contraintes ACPR / AMF / LCB-FT dans le produit : contrôles métier, piste d’audit fiable et livraisons compatibles avec les exigences de conformité — dès le premier commit.',
          },
        ],
      },
      {
        period: '2020 – 2026 · 6 ans',
        role: 'Développeur Full-Stack — Fintech',
        company: 'Tylia',
        contract: 'CDI',
        current: false,
        blocks: [
          {
            title: 'Plateformes fintech & APIs',
            body: '6 ans sur des systèmes transactionnels et plateformes fintech en marque blanche : microservices et APIs modulaires sous Node.js, NestJS et TypeScript. Intégrité des flux, résilience cloud (GCP) et modélisation de données critiques.',
          },
          {
            title: 'Produit & livraison continue',
            body: "Développement d'interfaces métier, code reviews et rituels agiles pour livrer des fonctionnalités fiables en environnement financier exigeant.",
          },
        ],
      },
    ],
    stack: [
      {
        label: 'Métier Finance & Conformité',
        items: [
          'KYC / KYB',
          'KYD',
          'LCB-FT',
          'MIFID II',
          'ACPR / AMF',
          'RGPD',
          'DORA',
          'TRACFIN',
          'CNIL',
          'ANSSI',
        ],
      },
      {
        label: 'Stack maîtresse',
        items: ['TypeScript', 'React', 'NextJS', 'Node.js', 'NestJS', 'GCP', 'JavaScript'],
      },
      {
        label: 'Autres langages',
        items: ['PHP', 'Rust', 'C#', 'Java', 'Python', 'SQL', 'C / C++', 'HTML / CSS', 'Bash'],
      },
    ],
  },
  methodology: {
    sectionTag: 'MÉTHODE D’INTERVENTION',
    sectionTitle: 'De l’audit des flux à la livraison conforme',
    steps: [
      {
        step: '01',
        name: 'Audit des flux métier',
        description:
          'Cartographie onboarding, souscription, conformité et reporting — avec les points de friction réglementaires.',
      },
      {
        step: '02',
        name: 'Cadrage Code ↔ Régul.',
        description:
          'Traduction des exigences ACPR / AMF / LCB-FT en règles logicielles, contrats d’API et piste d’audit.',
      },
      {
        step: '03',
        name: 'Livraison incrémentale',
        description:
          'Développement sur-mesure, tests métier, et contrôles conformité intégrés à chaque itération.',
      },
      {
        step: '04',
        name: 'Passation & résilience',
        description:
          'Documentation exploitable, observabilité et préparation aux contrôles / exigences DORA.',
      },
    ],
  },
  manifesto: {
    sectionTag: 'POSITIONNEMENT',
    quote:
      '« La conformité n’est pas un frein au produit. C’est une contrainte de conception — et je la code dès le premier commit. »',
    principles: [
      {
        title: 'ROI avant vanity tech',
        text: 'Chaque brique sert un parcours métier ou un contrôle réglementaire. Pas de sur-ingénierie qui retarde la mise en production.',
      },
      {
        title: 'Régulation dans le design',
        text: 'MIFID II, LCB-FT, DDA, DORA : traités comme des invariants d’architecture, pas comme une checklist de fin de projet.',
      },
      {
        title: 'Transmission sans friction',
        text: 'Code, audit trail et documentation pensés pour vos équipes tech, vos RCCI et vos prochains contrôles.',
      },
    ],
  },
  contact: {
    sectionTag: 'PROCHAIN ÉCHANGE',
    headline: 'Parlons de votre outil métier — et de sa conformité.',
    subheadline:
      'CTO, CEO fintech, directeur de cabinet CGP ou courtier : un audit flash de vos flux ou un cadrage de modernisation sous 48h ouvrées. Profil Full-Stack Fintech / CGP, actuellement en mission.',
    email: 'contact@lsr-digital-architecture.com',
    directContact: {
      location: 'Conflans-Sainte-Honorine, Yvelines — Île-de-France & Remote',
      availability: 'Freelance — En mission · Réponse sous 48h ouvrées',
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
          description: 'Parcours Astoria / Tylia & stack technique',
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
