export const PROJECT_TYPE_OPTIONS = [
  {
    value: 'Architecture Systèmes Financiers',
    label: 'Architecture Finance',
    desc: 'DAT, DDD, flux transactionnels & Cloud',
  },
  {
    value: 'Ingénierie Full-Stack Finance',
    label: 'Dév Full-Stack Finance',
    desc: 'Back-office, APIs métier & interfaces de pilotage',
  },
  {
    value: 'Audit & Performance',
    label: 'Audit & Dette Tech',
    desc: 'Refactorisation & fiabilisation de plateforme',
  },
  {
    value: 'Consultation ponctuelle',
    label: 'Cadrage Ponctuel',
    desc: 'Revue de code & cadrage d’architecture finance',
  },
  {
    value: 'Je souhaite simplement être accompagné sur mon projet',
    label: 'Je souhaite simplement être accompagné sur mon projet',
    desc: 'Cadrage initial, audit du besoin et orientation technique sur-mesure',
    isFullWidth: true,
  },
] as const;

export const DEFAULT_PROJECT_TYPE = PROJECT_TYPE_OPTIONS[0].value;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
