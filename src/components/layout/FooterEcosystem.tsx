import React from 'react';
import { ArrowUpRight, FileUser, Wrench } from 'lucide-react';
import { siteContent } from '../../constants/siteContent';

const LINK_ICONS = {
  cv: FileUser,
  tools: Wrench,
} as const;

export const FooterEcosystem: React.FC = () => {
  const { title, links } = siteContent.footer.ecosystem;

  return (
    <div className="footer-standards">
      <div className="footer-standards__header">
        <span className="footer-standards__title">{title}</span>
        <span className="footer-standards__status-pill">
          <span className="pulse-dot" />
          Live
        </span>
      </div>

      <div className="footer-standards__list">
        {links.map((link) => {
          const Icon = LINK_ICONS[link.id as keyof typeof LINK_ICONS] ?? Wrench;

          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-standards__item footer-standards__item--interactive"
              title={`Ouvrir ${link.label}`}
            >
              <div className="footer-standards__icon-wrap footer-standards__icon-wrap--emerald">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="footer-standards__content">
                <div className="footer-standards__meta">
                  <span className="footer-standards__name">{link.label}</span>
                  <span className="footer-standards__tag footer-standards__tag--cyan">
                    {link.tag}
                  </span>
                </div>
                <span className="footer-standards__desc">{link.description}</span>
              </div>
              <ArrowUpRight className="w-3 h-3 footer-standards__arrow" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
