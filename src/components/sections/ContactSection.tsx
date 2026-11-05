import React, { useState } from 'react';
import { siteContent } from '../../constants/siteContent';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  onOpenLegal?: (tab: 'legal' | 'privacy' | 'cookies') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegal }) => {
  const { sectionTag, headline, subheadline, directContact, email } = siteContent.contact;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const contactEmail = email || 'contact@lsr-digital-architecture.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ContactInfo
            sectionTag={sectionTag}
            headline={headline}
            subheadline={subheadline}
            location={directContact.location}
            availability={directContact.availability}
            contactEmail={contactEmail}
            copiedEmail={copiedEmail}
            onCopyEmail={handleCopyEmail}
          />
          <ContactForm onOpenLegal={onOpenLegal} />
        </div>
      </div>
    </section>
  );
};
