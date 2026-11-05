import React from 'react';
import { Copy, Check } from 'lucide-react';
import type { GlossaryItem } from '../../types';

interface GlossaryTermCardProps {
  item: GlossaryItem;
  isHighlighted: boolean;
  isCopied: boolean;
  onCopyLink: (termId: string) => void;
}

export const GlossaryTermCard: React.FC<GlossaryTermCardProps> = ({
  item,
  isHighlighted,
  isCopied,
  onCopyLink,
}) => (
  <article
    id={`glossary-term-${item.id}`}
    className={`glossary-card ${isHighlighted ? 'glossary-card--highlighted' : ''}`}
  >
    <div className="glossary-card__header">
      <div className="glossary-card__term-info">
        <h3 className="glossary-card__title">
          <span>{item.term}</span>
          {item.acronym && <span className="glossary-card__acronym">{item.acronym}</span>}
        </h3>

        <div className="glossary-card__badges">
          <span className={`glossary-card__kind-badge glossary-card__kind-badge--${item.kind}`}>
            {item.kind === 'technique' ? 'Terme Technique' : 'Méthodologique / Métier'}
          </span>
          <span className="glossary-card__category-badge">• {item.categoryLabel}</span>
        </div>
      </div>

      <div className="glossary-card__actions">
        <button
          type="button"
          onClick={() => onCopyLink(item.id)}
          className="p-1.5 rounded hover:bg-white/5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
          title="Copier le lien direct vers ce terme"
          aria-label={`Copier le lien vers ${item.term}`}
        >
          {isCopied ? (
            <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copié</span>
            </span>
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>

    <p className="glossary-card__short-def">{item.shortDefinition}</p>
    <p className="glossary-card__full-def">{item.fullDefinition}</p>

    <div className="glossary-card__context-box">
      <span className="context-label">Présent sur le site :</span>
      <span>{item.siteContext}</span>
    </div>

    {item.keyBenefit && (
      <div className="glossary-card__benefit-box">
        <span className="benefit-label">Impact clé :</span>
        <span>{item.keyBenefit}</span>
      </div>
    )}

    <div className="glossary-card__tags">
      {item.tags.map((tag) => (
        <span key={tag} className="tag-chip">
          #{tag}
        </span>
      ))}
    </div>
  </article>
);
