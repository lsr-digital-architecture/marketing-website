import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '../common/Button';
import type { BlueprintNode } from '../../domain/blueprint/blueprintModel';

interface BlueprintInspectorProps {
  activeNode: BlueprintNode;
}

export const BlueprintInspector: React.FC<BlueprintInspectorProps> = ({ activeNode }) => (
  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#0D111A] p-5 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
        <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
          TÉLÉMÉTRIE DU COMPOSANT
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
          {activeNode.tag}
        </span>
      </div>

      <h3 className="text-lg font-heading font-semibold text-[#F8FAFC] mb-1">{activeNode.name}</h3>
      <p className="text-xs font-mono text-[#94A3B8] mb-5">Rôle : {activeNode.role}</p>

      <div className="grid grid-cols-2 gap-2.5 mb-5 font-mono text-xs">
        <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
          <span className="text-[10px] text-[#64748B] block">LATENCE P99</span>
          <span className="text-sm font-semibold text-[#38BDF8]">{activeNode.metrics.latency}</span>
        </div>
        <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
          <span className="text-[10px] text-[#64748B] block">DÉBIT CHARGE</span>
          <span className="text-sm font-semibold text-[#F8FAFC]">
            {activeNode.metrics.throughput}
          </span>
        </div>
        <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
          <span className="text-[10px] text-[#64748B] block">DISPONIBILITÉ SLA</span>
          <span className="text-sm font-semibold text-emerald-400">{activeNode.metrics.sla}</span>
        </div>
        <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
          <span className="text-[10px] text-[#64748B] block">PATTERN DÉDIÉ</span>
          <span className="text-xs font-medium text-[#94A3B8] truncate">
            {activeNode.metrics.pattern}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <span className="text-xs font-mono text-[#64748B] block uppercase tracking-wider">
          Contrats & Garanties Techniques :
        </span>
        {activeNode.details.map((detail) => (
          <div
            key={detail}
            className="flex items-start gap-2 text-xs text-[#94A3B8] leading-relaxed"
          >
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="pt-4 border-t border-white/[0.08]">
      <Button
        href="#contact"
        variant="secondary"
        size="md"
        fullWidth
        icon={<ArrowRight className="w-3.5 h-3.5" />}
        iconPosition="right"
      >
        Exiger cette rigueur sur votre stack
      </Button>
    </div>
  </div>
);
