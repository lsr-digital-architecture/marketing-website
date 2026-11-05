import React from 'react';
import { MessageSquare, Check, AlertCircle } from 'lucide-react';
import { PROJECT_TYPE_OPTIONS } from '../../constants/contactFormOptions';
import { ContactIdentityFields } from './ContactIdentityFields';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

interface ContactFormFieldsProps {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  touched: { name: boolean; email: boolean };
  setTouched: React.Dispatch<React.SetStateAction<{ name: boolean; email: boolean }>>;
  isNameValid: boolean;
  isEmailValid: boolean;
  rgpdConsent: boolean;
  setRgpdConsent: (value: boolean) => void;
  rgpdError: boolean;
  setRgpdError: (value: boolean) => void;
  onOpenLegal?: (tab: 'legal' | 'privacy' | 'cookies') => void;
}

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  formData,
  setFormData,
  touched,
  setTouched,
  isNameValid,
  isEmailValid,
  rgpdConsent,
  setRgpdConsent,
  rgpdError,
  setRgpdError,
  onOpenLegal,
}) => (
  <>
    <ContactIdentityFields
      formData={formData}
      setFormData={setFormData}
      touched={touched}
      setTouched={setTouched}
      isNameValid={isNameValid}
      isEmailValid={isEmailValid}
    />

    <div className="form-group">
      <div className="form-label-row">
        <span id="label-project-type" className="form-label">
          <span className="form-label__text">Type d&apos;intervention ciblée</span>
          <span className="form-label__required">*</span>
        </span>
        <span className="form-badge form-badge--required">Requis</span>
      </div>
      <div className="form-radio-grid" role="radiogroup" aria-labelledby="label-project-type">
        {PROJECT_TYPE_OPTIONS.map((opt) => {
          const isSelected = formData.projectType === opt.value;
          return (
            <label
              key={opt.value}
              className={`form-radio-card ${isSelected ? 'is-selected' : ''} ${
                'isFullWidth' in opt && opt.isFullWidth ? 'form-radio-card--full' : ''
              }`}
              title={opt.desc}
            >
              <input
                type="radio"
                name="projectType"
                value={opt.value}
                checked={isSelected}
                onChange={() => setFormData({ ...formData, projectType: opt.value })}
                className="form-radio-input"
              />
              <span className="form-radio-indicator" aria-hidden="true">
                <span className="form-radio-indicator__dot" />
              </span>
              <span className="form-radio-label">{opt.label}</span>
            </label>
          );
        })}
      </div>
    </div>

    <div className="form-group">
      <div className="form-label-row">
        <label htmlFor="form-message" className="form-label">
          <span className="form-label__text">Votre projet en quelques mots</span>
        </label>
        <span className="form-badge form-badge--optional">Optionnel</span>
      </div>
      <div className="form-control-wrapper">
        <span className="form-control-icon form-control-icon--textarea">
          <MessageSquare className="w-4 h-4" />
        </span>
        <textarea
          id="form-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Contexte technique, enjeux de charge, délais d'intervention, volumétrie..."
          className="form-textarea"
        />
      </div>
      <div className="form-footer-meta">
        <span>{formData.message.length} caractères</span>
      </div>
    </div>

    <div className="pt-1">
      <label
        htmlFor="rgpd-consent"
        className={`form-checkbox-container ${rgpdConsent ? 'is-checked' : ''} ${
          rgpdError && !rgpdConsent ? 'border-red-400/50 bg-red-500/5' : ''
        }`}
      >
        <input
          id="rgpd-consent"
          type="checkbox"
          required
          checked={rgpdConsent}
          onChange={(e) => {
            setRgpdConsent(e.target.checked);
            if (e.target.checked) setRgpdError(false);
          }}
          className="form-hidden-checkbox"
          aria-required="true"
          aria-invalid={rgpdError && !rgpdConsent}
          aria-describedby={rgpdError && !rgpdConsent ? 'rgpd-consent-error' : undefined}
        />
        <div
          className={`form-custom-checkbox ${rgpdConsent ? 'is-checked' : ''}`}
          aria-hidden="true"
        >
          {rgpdConsent && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </div>
        <span className="form-checkbox-label">
          J&apos;accepte que les données saisies soient exploitées par LSR Digital Architecture afin
          de répondre à ma demande technique, conformément à la{' '}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenLegal?.('privacy');
            }}
            className="text-[#38BDF8] hover:underline inline font-medium"
          >
            politique de confidentialité (RGPD)
          </button>
          . <span className="text-[#38BDF8]">*</span>
        </span>
      </label>
      {rgpdError && !rgpdConsent && (
        <div id="rgpd-consent-error" className="form-error-msg mt-2" role="alert">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Veuillez accepter la politique de confidentialité pour valider.</span>
        </div>
      )}
    </div>
  </>
);
