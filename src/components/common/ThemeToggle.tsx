import React from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import type { ThemePreference } from '../../context/themeContextCore';

interface ThemeToggleProps {
  className?: string;
}

const OPTIONS: {
  value: ThemePreference;
  label: string;
  Icon: typeof Monitor;
}[] = [
  { value: 'system', label: 'Thème système', Icon: Monitor },
  { value: 'light', label: 'Mode clair', Icon: Sun },
  { value: 'dark', label: 'Mode sombre', Icon: Moon },
];

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  return (
    <div
      role="group"
      aria-label="Choisir le thème"
      className={`inline-flex items-center gap-0.5 p-0.5 rounded-lg border transition-colors ${
        isLight ? 'bg-slate-100/80 border-slate-300/80' : 'bg-[#0D111A] border-white/10'
      } ${className}`}
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={isActive}
            title={label}
            className={`relative inline-flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
              isActive
                ? isLight
                  ? 'bg-white text-slate-800 border border-slate-300/80 shadow-sm'
                  : 'bg-[#131926] text-white border border-white/15 shadow-sm'
                : isLight
                  ? 'text-slate-500 border border-transparent hover:text-slate-700 hover:bg-white/60'
                  : 'text-white/55 border border-transparent hover:text-white/85 hover:bg-white/[0.04]'
            }`}
          >
            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
};
