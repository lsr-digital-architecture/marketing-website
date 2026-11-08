import React, { useState } from 'react';
import { Send, CheckCircle, Terminal, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { BentoCard } from '../common/BentoCard';
import { Button } from '../common/Button';
import { DEFAULT_PROJECT_TYPE, EMAIL_REGEX } from '../../constants/contactFormOptions';
import { siteContent } from '../../constants/siteContent';
import { submitContactForm } from '../../services/contactSubmit';
import { ContactFormFields, type ContactFormData } from './ContactFormFields';

interface ContactFormProps {
  onOpenLegal?: (tab: 'legal' | 'privacy' | 'cookies') => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onOpenLegal }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: DEFAULT_PROJECT_TYPE,
    message: '',
  });
  const [touched, setTouched] = useState({ name: false, email: false });
  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [rgpdError, setRgpdError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isNameValid = formData.name.trim().length >= 2;
  const isEmailValid = EMAIL_REGEX.test(formData.email.trim());
  const contactEmail = siteContent.contact.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    setSubmitError(null);

    if (!isNameValid) {
      document.querySelector<HTMLElement>('#form-name')?.focus();
      return;
    }
    if (!isEmailValid) {
      document.querySelector<HTMLElement>('#form-email')?.focus();
      return;
    }
    if (!rgpdConsent) {
      setRgpdError(true);
      document.querySelector<HTMLElement>('#rgpd-consent')?.focus();
      return;
    }

    setRgpdError(false);
    setIsSubmitting(true);

    const result = await submitContactForm(formData);
    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.message);
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmitError(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: DEFAULT_PROJECT_TYPE,
      message: '',
    });
    setTouched({ name: false, email: false });
    setRgpdConsent(false);
  };

  return (
    <div className="lg:col-span-7">
      <BentoCard glowColor="blue" className="p-7 sm:p-9">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#F8FAFC]">
              Demande de consultation enregistrée
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
              Merci {formData.name}. Votre brief a été transmis à{' '}
              <span className="font-mono text-[#E2E8F0]">{contactEmail}</span>. Nous reviendrons
              vers vous sous 48h ouvrées.
            </p>
            <Button type="button" variant="secondary" size="sm" onClick={resetForm}>
              Envoyer un autre message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                DEMANDE D&apos;ÉCHANGE TECHNIQUE
              </span>
              <span className="text-[11px] font-mono text-[#64748B]">RÉPONSE SOUS 48H</span>
            </div>

            <ContactFormFields
              formData={formData}
              setFormData={setFormData}
              touched={touched}
              setTouched={setTouched}
              isNameValid={isNameValid}
              isEmailValid={isEmailValid}
              rgpdConsent={rgpdConsent}
              setRgpdConsent={setRgpdConsent}
              rgpdError={rgpdError}
              setRgpdError={setRgpdError}
              onOpenLegal={onOpenLegal}
            />

            {submitError && (
              <div
                className="flex items-start gap-2.5 rounded-lg border border-red-400/40 bg-red-500/10 px-3.5 py-3 text-sm text-red-200"
                role="alert"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <p>{submitError}</p>
                  <p className="text-xs text-red-200/80">
                    Vous pouvez aussi écrire à{' '}
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-mono underline hover:text-white"
                    >
                      {contactEmail}
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              icon={
                isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )
              }
              iconPosition="right"
            >
              {isSubmitting ? 'Transmission sécurisée...' : 'Initier la prise de contact'}
            </Button>

            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#64748B] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]/80 shrink-0" />
              <span>Confidentialité stricte · Chiffrement en transit · Zéro démarchage</span>
            </div>
          </form>
        )}
      </BentoCard>
    </div>
  );
};
