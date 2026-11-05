import React from 'react';
import { ShieldCheck, Cpu, Lock, ArrowUpRight } from 'lucide-react';

interface FooterStandardsProps {
  onOpenLegal?: (tab: 'legal' | 'privacy' | 'cookies') => void;
}

export const FooterStandards: React.FC<FooterStandardsProps> = ({ onOpenLegal }) => (
  <div className="footer-standards">
    <div className="footer-standards__header">
      <span className="footer-standards__title">Standards & Conformité</span>
      <span className="footer-standards__status-pill">
        <span className="pulse-dot" />
        Conforme
      </span>
    </div>

    <div className="footer-standards__list">
      <div className="footer-standards__item">
        <div className="footer-standards__icon-wrap">
          <Cpu className="w-3.5 h-3.5" />
        </div>
        <div className="footer-standards__content">
          <div className="footer-standards__meta">
            <span className="footer-standards__name">Finance-Ready Arch</span>
            <span className="footer-standards__tag footer-standards__tag--cyan">DDD</span>
          </div>
          <span className="footer-standards__desc">Intégrité transactionnelle & zéro dette</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpenLegal?.('privacy')}
        className="footer-standards__item footer-standards__item--interactive"
        title="Consulter le cadre de conformité RGPD & CNIL"
      >
        <div className="footer-standards__icon-wrap footer-standards__icon-wrap--emerald">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div className="footer-standards__content">
          <div className="footer-standards__meta">
            <span className="footer-standards__name">RGPD / CNIL</span>
            <span className="footer-standards__tag footer-standards__tag--emerald">AUDITÉ</span>
          </div>
          <span className="footer-standards__desc">Privacy by design & hébergement UE</span>
        </div>
        <ArrowUpRight className="w-3 h-3 footer-standards__arrow" />
      </button>

      <div className="footer-standards__item">
        <div className="footer-standards__icon-wrap">
          <Lock className="w-3.5 h-3.5" />
        </div>
        <div className="footer-standards__content">
          <div className="footer-standards__meta">
            <span className="footer-standards__name">Zero-Trust Ready</span>
            <span className="footer-standards__tag">SECOPS</span>
          </div>
          <span className="footer-standards__desc">Chiffrement & moindre privilège</span>
        </div>
      </div>
    </div>
  </div>
);
