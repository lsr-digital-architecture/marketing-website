import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { Briefcase, Code2 } from 'lucide-react';

export const TrackRecordSection: React.FC = () => {
  const { sectionTag, sectionTitle, sectionDescription, experiences, stack } =
    siteContent.trackRecord;

  return (
    <section
      id="parcours"
      className="py-24 relative bg-[#090A0F] border-t border-white/[0.08] overflow-hidden"
      aria-labelledby="parcours-heading"
    >
      <div className="absolute inset-0 blueprint-grid-bg opacity-25 pointer-events-none" />
      <div className="pointer-events-none absolute right-0 top-1/4 w-[420px] h-[280px] bg-gradient-to-l from-[#2563EB]/12 via-[#38BDF8]/06 to-transparent blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <SectionTag variant="amber">{sectionTag}</SectionTag>
          <h2
            id="parcours-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          {experiences.map((xp) => (
            <BentoCard
              key={`${xp.company}-${xp.period}`}
              glowColor={xp.current ? 'cyan' : 'blue'}
              className="p-6 flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded bg-[#131926] border border-white/10 text-[#38BDF8] shrink-0">
                    <Briefcase className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#64748B]">
                      {xp.period}
                      <span className="mx-1.5 text-white/20">·</span>
                      {xp.contract}
                    </p>
                    <h3 className="text-base font-heading font-semibold text-[#F8FAFC] tracking-tight truncate">
                      {xp.company}
                    </h3>
                  </div>
                </div>
                {xp.current && (
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-[#38BDF8]/35 bg-[#38BDF8]/10 text-[#38BDF8]">
                    En cours
                  </span>
                )}
              </div>

              <p className="text-sm text-[#E2E8F0] font-medium mb-4">{xp.role}</p>

              <ul className="space-y-3 mt-auto">
                {xp.blocks.map((block) => (
                  <li key={block.title}>
                    <p className="text-xs font-semibold text-[#38BDF8] mb-1">{block.title}</p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">{block.body}</p>
                  </li>
                ))}
              </ul>
            </BentoCard>
          ))}
        </div>

        <div className="rounded-[10px] border border-white/10 bg-gradient-to-r from-[#0D111A] via-[#131926] to-[#0D111A] p-5 sm:p-7">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded bg-[#090A0F] border border-white/10 text-[#38BDF8]">
              <Code2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-heading font-semibold text-[#F8FAFC] tracking-tight">
              Stack & expertises (alignées CV)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stack.map((group) => (
              <div key={group.label} className="space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#64748B]">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-[#090A0F]/60 text-xs font-medium text-[#E2E8F0]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
