import React, { useEffect, useRef, useState } from 'react';
import { X, Search, BookOpen, ExternalLink, RotateCcw } from 'lucide-react';
import { Button } from '../common/Button';
import { GLOSSARY_ITEMS } from '../../constants/glossaryData';
import { useModalA11y } from '../../hooks/useModalA11y';
import { useGlossaryFilter } from '../../hooks/useGlossaryFilter';
import { GlossaryFilters } from './GlossaryFilters';
import { GlossaryTermCard } from './GlossaryTermCard';

interface GlossaryModalProps {
  isOpen: boolean;
  initialTermId?: string | null;
  onClose: () => void;
  onSelectTerm?: (termId: string) => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  initialTermId,
  onClose,
  onSelectTerm,
}) => {
  const modalCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [copiedTermId, setCopiedTermId] = useState<string | null>(null);

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedKind,
    setSelectedKind,
    selectedLetter,
    setSelectedLetter,
    availableLetters,
    allAlphabet,
    filteredTerms,
    resetFilters,
  } = useGlossaryFilter();

  useEffect(() => {
    if (isOpen && initialTermId) {
      const targetEl = document.querySelector(`#glossary-term-${initialTermId}`);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [isOpen, initialTermId]);

  useModalA11y({
    isOpen,
    onClose,
    containerRef: modalCardRef,
    initialFocusRef: searchInputRef,
  });

  const handleCopyLink = async (termId: string) => {
    onSelectTerm?.(termId);
    const url = `${window.location.origin}${window.location.pathname}#glossaire-${termId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedTermId(termId);
      setTimeout(() => setCopiedTermId(null), 2000);
    } catch {
      // Ignore clipboard write failure
    }
  };

  const handleResetFilters = () => {
    resetFilters();
    searchInputRef.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="glossary-modal-title"
      className="glossary-modal"
    >
      <div className="glossary-modal__backdrop" onClick={onClose} aria-hidden="true" />

      <div ref={modalCardRef} className="glossary-modal__card">
        <div className="glossary-modal__header">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#131926] text-[#38BDF8] border border-white/10 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#38BDF8] tracking-widest uppercase block">
                  RÉFÉRENTIEL TECHNIQUE & MÉTHODOLOGIQUE
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#94A3B8]">
                  {GLOSSARY_ITEMS.length} termes
                </span>
              </div>
              <h2
                id="glossary-modal-title"
                className="text-base sm:text-lg font-heading font-bold text-[#F8FAFC]"
              >
                Glossaire des Termes & Concepts du Site
              </h2>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fermer le glossaire"
            className="w-9 h-9 p-0 shrink-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <GlossaryFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedKind={selectedKind}
          onKindChange={setSelectedKind}
          selectedLetter={selectedLetter}
          onLetterChange={setSelectedLetter}
          availableLetters={availableLetters}
          allAlphabet={allAlphabet}
          searchInputRef={searchInputRef}
        />

        <div ref={contentRef} className="glossary-modal__content">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="inline-flex p-3 rounded-full bg-white/5 text-[#94A3B8] mb-2">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-heading font-semibold text-[#F8FAFC]">
                Aucun terme ne correspond à vos critères
              </h3>
              <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
                Essayez d&apos;élargir votre recherche ou de réinitialiser les filtres appliqués.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleResetFilters}
                icon={<RotateCcw className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            filteredTerms.map((item) => (
              <GlossaryTermCard
                key={item.id}
                item={item}
                isHighlighted={initialTermId === item.id}
                isCopied={copiedTermId === item.id}
                onCopyLink={handleCopyLink}
              />
            ))
          )}
        </div>

        <div className="glossary-modal__footer">
          <div className="flex items-center gap-2">
            <span className="text-[#38BDF8] font-bold">LSR // GLOSSARY</span>
            <span>•</span>
            <span>
              Affichage de {filteredTerms.length} sur {GLOSSARY_ITEMS.length} termes
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1"
            >
              <span>Sitemap</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={onClose}
              className="hover:text-[#38BDF8] transition-colors"
            >
              Fermer le glossaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
