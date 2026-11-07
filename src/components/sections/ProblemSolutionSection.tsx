import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { AlertTriangle, Clock, MessageSquareWarning, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  const {
    sectionTag,
    sectionTitle,
    sectionDescription,
    pains,
    solutionTitle,
    solutionDescription,
    solutionPoints,
  } = siteContent.problemSolution;

  const painIcons = [AlertTriangle, Clock, MessageSquareWarning];

  return (
    <section id="enjeux" className="py-24 relative bg-[#090A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionTag variant="amber">{sectionTag}</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {pains.map((pain, idx) => {
            const Icon = painIcons[idx % painIcons.length];
            return (
              <BentoCard key={pain.title} glowColor="amber" className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#F59E0B]">
                      Friction // 0{idx + 1}
                    </span>
                    <div className="p-2 rounded-lg bg-[#131926] border border-white/10 text-[#F59E0B]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#F8FAFC] mb-2 tracking-tight">
                    {pain.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{pain.description}</p>
                </div>
              </BentoCard>
            );
          })}
        </div>

        <BentoCard glowColor="cyan" className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-7 sm:p-9 border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-[#0D111A]/60">
              <div className="inline-flex items-center gap-2 mb-4">
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#38BDF8]">
                  Réponse
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-3">
                {solutionTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {solutionDescription}
              </p>
            </div>

            <div className="lg:col-span-7 p-7 sm:p-9">
              <ul className="space-y-4">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};
