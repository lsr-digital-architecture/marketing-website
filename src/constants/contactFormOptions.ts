export const PROJECT_TYPE_OPTIONS = [
  {
    value: 'Parcours Onboarding & Souscription',
    label: 'Onboarding & Souscription',
    desc: 'KYC / KYB, PPE, eIDAS & parcours de souscription',
  },
  {
    value: 'Conformité & Réglementation',
    label: 'Conformité & Réglementation',
    desc: 'MIFID II, LCB-FT / TRACFIN, DORA, ACPR / AMF',
  },
  {
    value: 'Moteurs de calcul & Patrimoine',
    label: 'Moteurs & Patrimoine',
    desc: 'DSP2, PER, Assurance-vie, SCPI & reporting',
  },
  {
    value: 'Architecture sécurisée',
    label: 'Architecture sécurisée',
    desc: 'Audit trail, idempotence & chiffrement patrimonial',
  },
  {
    value: 'Je souhaite simplement être accompagné sur mon projet',
    label: 'Je souhaite simplement être accompagné sur mon projet',
    desc: 'Cadrage initial, audit des flux métier et orientation sur-mesure',
    isFullWidth: true,
  },
] as const;

export const DEFAULT_PROJECT_TYPE = PROJECT_TYPE_OPTIONS[0].value;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
