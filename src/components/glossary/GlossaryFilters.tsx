import React from 'react';
import { Search, X } from 'lucide-react';
import { GLOSSARY_CATEGORIES } from '../../constants/glossaryData';
import { GlossaryCategory, TermKind } from '../../types';

interface GlossaryFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: GlossaryCategory;
  onCategoryChange: (category: GlossaryCategory) => void;
  selectedKind: 'all' | TermKind;
  onKindChange: (kind: 'all' | TermKind) => void;
  selectedLetter: string | null;
  onLetterChange: (letter: string | null) => void;
  availableLetters: Set<string>;
  allAlphabet: string[];
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

export const GlossaryFilters: React.FC<GlossaryFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedKind,
  onKindChange,
  selectedLetter,
  onLetterChange,
  availableLetters,
  allAlphabet,
  searchInputRef,
}) => (
  <>
    <div className="glossary-modal__controls">
      <div className="glossary-modal__search-bar">
        <Search className="search-icon" />
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            if (selectedLetter) onLetterChange(null);
          }}
          placeholder="Rechercher un concept, sigle ou mot-clé (ex: Clean Architecture, DDD, p99, DAT, PRA)..."
          aria-label="Rechercher dans le glossaire"
        />
        {searchQuery && (
          <button
            type="button"
            className="clear-button"
            onClick={() => onSearchChange('')}
            aria-label="Effacer la recherche"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="glossary-modal__filters">
        <div className="glossary-modal__category-pills">
          {GLOSSARY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id as GlossaryCategory)}
              className={`glossary-modal__pill ${
                selectedCategory === cat.id ? 'glossary-modal__pill--active' : ''
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="glossary-modal__kind-pills">
          <button
            type="button"
            onClick={() => onKindChange('all')}
            className={`glossary-modal__pill ${
              selectedKind === 'all' ? 'glossary-modal__pill--active' : ''
            }`}
            title="Afficher tous les types de termes"
          >
            Tous
          </button>
          <button
            type="button"
            onClick={() => onKindChange('technique')}
            className={`glossary-modal__pill ${
              selectedKind === 'technique' ? 'glossary-modal__pill--active' : ''
            }`}
            title="Filtrer les termes techniques"
          >
            Techniques
          </button>
          <button
            type="button"
            onClick={() => onKindChange('methodologique')}
            className={`glossary-modal__pill ${
              selectedKind === 'methodologique' ? 'glossary-modal__pill--active' : ''
            }`}
            title="Filtrer les termes méthodologiques et organisationnels"
          >
            Méthodologiques
          </button>
        </div>
      </div>
    </div>

    <div className="glossary-modal__alphabet" aria-label="Index alphabétique">
      <button
        type="button"
        className={selectedLetter === null ? 'active' : ''}
        onClick={() => onLetterChange(null)}
        title="Toutes les lettres"
      >
        Tous
      </button>
      {allAlphabet.map((letter) => {
        const hasTerms = availableLetters.has(letter);
        const isCurrent = selectedLetter === letter;

        return (
          <button
            key={letter}
            type="button"
            disabled={!hasTerms}
            className={isCurrent ? 'active' : ''}
            onClick={() => onLetterChange(isCurrent ? null : letter)}
            aria-label={`Filtrer par lettre ${letter}`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  </>
);
