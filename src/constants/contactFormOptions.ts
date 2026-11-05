export const PROJECT_TYPE_OPTIONS = [
  {
    value: 'Architecture & Conception Système',
    label: 'Architecture & DAT',
    desc: 'DAT, DDD, Résilience & Cloud',
  },
  {
    value: 'Ingénierie Web Full-Stack',
    label: 'Dév Web Critique',
    desc: 'Applications web sur-mesure & APIs transactionnelles',
  },
  {
    value: 'Audit & Performance',
    label: 'Audit & Dette Tech',
    desc: 'Refactorisation & Élimination de dette',
  },
  {
    value: 'Consultation ponctuelle',
    label: 'Cadrage Ponctuel',
    desc: "Revue de code & cadrage d'infrastructure",
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
