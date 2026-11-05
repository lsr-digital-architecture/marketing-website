import React from 'react';
import { MapPin, Clock, CheckCircle, Copy, Mail } from 'lucide-react';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { Button } from '../common/Button';

interface ContactInfoProps {
  sectionTag: string;
  headline: string;
  subheadline: string;
  location: string;
  availability: string;
  contactEmail: string;
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  sectionTag,
  headline,
  subheadline,
  location,
  availability,
  contactEmail,
  copiedEmail,
  onCopyEmail,
}) => (
  <div className="lg:col-span-5 flex flex-col justify-between">
    <div>
      <SectionTag variant="cyan">{sectionTag}</SectionTag>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-4">
        {headline}
      </h2>
      <p className="text-base text-[#94A3B8] leading-relaxed mb-8">{subheadline}</p>

      <div className="space-y-4 mb-8">
        <BentoCard interactive={false} className="p-4 bg-[#0D111A]">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#131926] text-[#38BDF8] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#64748B] uppercase block">
                Localisation & Modalités
              </span>
              <p className="text-sm font-medium text-[#F8FAFC]">{location}</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard interactive={false} className="p-4 bg-[#0D111A]">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-[#131926] text-emerald-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#64748B] uppercase block">
                Disponibilité d&apos;intervention
              </span>
              <p className="text-sm font-medium text-[#F8FAFC]">{availability}</p>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>

    <div className="p-4 rounded-[10px] bg-[#0D111A] border border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Mail className="w-4 h-4 text-[#38BDF8]" />
        <span className="font-mono text-xs text-[#E2E8F0]">{contactEmail}</span>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onCopyEmail}
        title="Copier l'adresse email"
        icon={
          copiedEmail ? (
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )
        }
        iconPosition="left"
      >
        <span className={copiedEmail ? 'text-emerald-400' : ''}>
          {copiedEmail ? 'Copié' : 'Copier'}
        </span>
      </Button>
    </div>
  </div>
);
