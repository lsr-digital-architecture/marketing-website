import { useMemo, useState } from 'react';
import { GLOSSARY_ITEMS } from '../constants/glossaryData';
import { GlossaryCategory, TermKind } from '../types';

export function useGlossaryFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory>('all');
  const [selectedKind, setSelectedKind] = useState<'all' | TermKind>('all');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_ITEMS.forEach((item) => {
      const firstChar = item.term.charAt(0).toUpperCase();
      if (/[A-Z]/u.test(firstChar)) {
        letters.add(firstChar);
      }
    });
    return letters;
  }, []);

  const allAlphabet = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), []);

  const filteredTerms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return GLOSSARY_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (selectedKind !== 'all' && item.kind !== selectedKind) {
        return false;
      }
      if (selectedLetter !== null) {
        const firstChar = item.term.charAt(0).toUpperCase();
        if (firstChar !== selectedLetter) {
          return false;
        }
      }
      if (query) {
        const matchTitle = item.term.toLowerCase().includes(query);
        const matchAcronym = item.acronym?.toLowerCase().includes(query);
        const matchShortDef = item.shortDefinition.toLowerCase().includes(query);
        const matchFullDef = item.fullDefinition.toLowerCase().includes(query);
        const matchSite = item.siteContext.toLowerCase().includes(query);
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(query));

        return (
          matchTitle || matchAcronym || matchShortDef || matchFullDef || matchSite || matchTags
        );
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedKind, selectedLetter]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedKind('all');
    setSelectedLetter(null);
  };

  return {
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
  };
}
