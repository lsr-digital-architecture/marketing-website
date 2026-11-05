import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Button } from '../common/Button';
import {
  BLUEPRINT_NODES,
  type BlueprintNode,
  type BlueprintLayer,
} from '../../domain/blueprint/blueprintModel';
import { BlueprintDiagram } from './BlueprintDiagram';
import { BlueprintInspector } from './BlueprintInspector';

export const ArchitectureCanvas: React.FC = () => {
  const [activeNode, setActiveNode] = useState<BlueprintNode>(BLUEPRINT_NODES[1]);
  const [activeLayer, setActiveLayer] = useState<BlueprintLayer>('all');
  const [showGrid, setShowGrid] = useState<boolean>(true);

  return (
    <div className="w-full rounded-[10px] bg-[#090A0F] border border-white/[0.08] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] px-4 py-3 bg-[#0D111A]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-mono text-xs text-[#F8FAFC] tracking-wider uppercase font-semibold">
              SCHÉMA D&apos;ARCHITECTURE SYSTÈME // INTERACTIF
            </span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-[#94A3B8] border border-white/10">
            BLUEPRINT OPTION_B :: LIVE TELEMETRY
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-2 sm:mt-0">
          <Button
            variant="tab"
            size="sm"
            active={activeLayer === 'all'}
            onClick={() => setActiveLayer('all')}
          >
            Vue Globale
          </Button>
          <Button
            variant="tab"
            size="sm"
            active={activeLayer === 'ddd'}
            onClick={() => setActiveLayer('ddd')}
          >
            Clean Arch / DDD
          </Button>
          <Button
            variant="tab"
            size="sm"
            active={activeLayer === 'resilience'}
            onClick={() => setActiveLayer('resilience')}
          >
            Résilience & Flux
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowGrid(!showGrid)}
            title="Activer/Désactiver le quadrillage blueprint"
            aria-label="Quadrillage blueprint"
            className="p-1.5 ml-1"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        <BlueprintDiagram
          activeNode={activeNode}
          activeLayer={activeLayer}
          showGrid={showGrid}
          onSelectNode={setActiveNode}
        />
        <BlueprintInspector activeNode={activeNode} />
      </div>
    </div>
  );
};
