import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { ShieldCheck } from 'lucide-react';

export const TrustBannerSection: React.FC = () => {
  const { sectionTag, sectionTitle, sectionDescription, badges } = siteContent.trust;

  return (
    <section
      id="confiance"
      className="py-20 relative bg-[#090A0F] border-t border-white/[0.08] overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div className="absolute inset-0 blueprint-grid-bg opacity-25 pointer-events-none" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[640px] h-[180px] bg-gradient-to-b from-[#2563EB]/12 via-[#38BDF8]/08 to-transparent blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <SectionTag variant="blue">{sectionTag}</SectionTag>
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div
          className="rounded-[10px] border border-white/10 bg-gradient-to-r from-[#0D111A] via-[#131926] to-[#0D111A] p-5 sm:p-7"
          role="list"
          aria-label="Standards de conformité"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.label}
                role="listitem"
                className="group flex flex-col gap-2 rounded-lg border border-white/[0.08] bg-[#090A0F]/50 px-4 py-4 transition-colors duration-200 hover:border-[#38BDF8]/35"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" aria-hidden="true" />
                  <span className="font-mono text-sm font-semibold tracking-wide text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    {badge.label}
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed pl-7">{badge.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
