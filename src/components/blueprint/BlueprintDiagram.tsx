import React from 'react';
import {
  BLUEPRINT_NODES,
  isNodeActiveInLayer,
  type BlueprintNode,
  type BlueprintLayer,
} from '../../domain/blueprint/blueprintModel';

interface BlueprintDiagramProps {
  activeNode: BlueprintNode;
  activeLayer: BlueprintLayer;
  showGrid: boolean;
  onSelectNode: (node: BlueprintNode) => void;
}

export const BlueprintDiagram: React.FC<BlueprintDiagramProps> = ({
  activeNode,
  activeLayer,
  showGrid,
  onSelectNode,
}) => (
  <div
    className={`lg:col-span-8 p-4 relative overflow-hidden flex items-center justify-center bg-[#090A0F] ${
      showGrid ? 'blueprint-grid-bg' : ''
    }`}
  >
    <div className="pointer-events-none absolute top-1/4 left-1/4 w-72 h-72 bg-[#2563EB]/10 rounded-full blur-3xl" />
    <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />

    <svg
      viewBox="0 0 800 380"
      className="w-full h-auto max-w-[800px] select-none"
      style={{ filter: 'drop-shadow(0 0 1px rgba(56, 189, 248, 0.2))' }}
    >
      <defs>
        <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0.8" />
        </linearGradient>
        <filter id="nodeGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g className="flow-lines">
        <path
          d="M 140 190 L 210 190"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          className="animate-flow-dash"
        />
        <path
          d="M 330 190 C 380 190, 390 130, 420 130"
          stroke={activeLayer === 'resilience' ? 'var(--text-muted)' : 'url(#wireGradient)'}
          strokeWidth="1.5"
          strokeDasharray={activeLayer === 'resilience' ? '2 2' : '4 3'}
          fill="none"
        />
        <path
          d="M 330 190 C 380 190, 390 270, 420 270"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <path
          d="M 540 130 L 650 130"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <path
          d="M 480 165 L 480 235"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeOpacity="0.6"
        />
        <path
          d="M 540 270 L 650 270"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <path
          d="M 710 165 L 710 235"
          stroke="var(--accent-blue)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeOpacity="0.4"
        />
      </g>

      <g className="text-[10px] font-mono" fill="var(--text-muted)">
        <text x="30" y="30">
          SYS_LAYOUT :: DISTRIBUTED_HEXAGONAL
        </text>
        <text x="630" y="30">
          STATUS: NOMINAL (0 ERRORS)
        </text>
        <line
          x1="30"
          y1="40"
          x2="770"
          y2="40"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <line
          x1="30"
          y1="350"
          x2="770"
          y2="350"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      </g>

      {BLUEPRINT_NODES.map((node) => {
        const isSelected = activeNode.id === node.id;
        const isHighlighted = isNodeActiveInLayer(node, activeLayer);

        return (
          <g
            key={node.id}
            transform={`translate(${node.x}, ${node.y})`}
            role="button"
            tabIndex={0}
            aria-label={`Composant ${node.name} (${node.tag}) : ${node.role}. Cliquez pour afficher les détails.`}
            aria-pressed={isSelected}
            onClick={() => onSelectNode(node)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectNode(node);
              }
            }}
            className="cursor-pointer transition-all duration-300 focus:outline-none"
            style={{ opacity: isHighlighted ? 1 : 0.25 }}
          >
            {isSelected && (
              <circle
                cx="0"
                cy="0"
                r="40"
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth="1"
                strokeOpacity="0.3"
                className="animate-ping"
                style={{ animationDuration: '3s' }}
              />
            )}
            <circle
              cx="0"
              cy="0"
              r="28"
              fill="var(--bg-surface)"
              stroke={isSelected ? 'var(--accent-cyan)' : 'var(--border-strong)'}
              strokeWidth="1.5"
              filter={isSelected ? 'url(#nodeGlow)' : undefined}
              className="hover:stroke-[#38BDF8] transition-colors"
            />
            <circle
              cx="0"
              cy="0"
              r="16"
              fill={isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-primary)'}
              stroke={isSelected ? 'var(--accent-blue)' : 'var(--accent-cyan-border-40)'}
              strokeWidth="1"
            />
            <circle
              cx="0"
              cy="0"
              r="3.5"
              fill={isSelected ? 'var(--accent-cyan)' : 'var(--accent-blue)'}
              className={isSelected ? 'animate-pulse' : ''}
            />
            <text
              x="0"
              y="42"
              textAnchor="middle"
              fill="var(--text-primary)"
              className="text-[11px] font-mono font-medium tracking-tight"
            >
              {node.name.split(' / ')[0]}
            </text>
            <text
              x="0"
              y="54"
              textAnchor="middle"
              fill="var(--text-muted)"
              className="text-[9px] font-mono tracking-widest"
            >
              {node.tag}
            </text>
          </g>
        );
      })}
    </svg>
  </div>
);
