import React from 'react';
import { User, Building2, Check, AlertCircle, Mail } from 'lucide-react';
import type { ContactFormData } from './ContactFormFields';

interface ContactIdentityFieldsProps {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  touched: { name: boolean; email: boolean };
  setTouched: React.Dispatch<React.SetStateAction<{ name: boolean; email: boolean }>>;
  isNameValid: boolean;
  isEmailValid: boolean;
}

export const ContactIdentityFields: React.FC<ContactIdentityFieldsProps> = ({
  formData,
  setFormData,
  touched,
  setTouched,
  isNameValid,
  isEmailValid,
}) => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="form-group">
        <div className="form-label-row">
          <label htmlFor="form-name" className="form-label">
            <span className="form-label__text">Nom & Rôle</span>
            <span className="form-label__required">*</span>
          </label>
          <span className="form-badge form-badge--required">Requis</span>
        </div>
        <div className="form-control-wrapper">
          <span className="form-control-icon">
            <User className="w-4 h-4" />
          </span>
          <input
            id="form-name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            placeholder="Jean Dupont (CTO)"
            className={`form-input ${
              touched.name && !isNameValid ? 'is-invalid' : isNameValid ? 'is-valid' : ''
            }`}
            aria-invalid={touched.name && !isNameValid}
            aria-describedby={touched.name && !isNameValid ? 'form-name-error' : undefined}
          />
          {isNameValid && (
            <span className="form-control-status form-control-status--valid">
              <Check className="w-4 h-4" strokeWidth={2.5} />
            </span>
          )}
          {touched.name && !isNameValid && (
            <span className="form-control-status form-control-status--invalid">
              <AlertCircle className="w-4 h-4" />
            </span>
          )}
        </div>
        {touched.name && !isNameValid && (
          <div id="form-name-error" className="form-error-msg" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Veuillez renseigner votre nom (min. 2 caractères).</span>
          </div>
        )}
      </div>

      <div className="form-group">
        <div className="form-label-row">
          <label htmlFor="form-email" className="form-label">
            <span className="form-label__text">Email</span>
            <span className="form-label__required">*</span>
          </label>
          <span className="form-badge form-badge--required">Requis</span>
        </div>
        <div className="form-control-wrapper">
          <span className="form-control-icon">
            <Mail className="w-4 h-4" />
          </span>
          <input
            id="form-email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder="jean@entreprise.com"
            className={`form-input ${
              touched.email && !isEmailValid ? 'is-invalid' : isEmailValid ? 'is-valid' : ''
            }`}
            aria-invalid={touched.email && !isEmailValid}
            aria-describedby={touched.email && !isEmailValid ? 'form-email-error' : undefined}
          />
          {isEmailValid && (
            <span className="form-control-status form-control-status--valid">
              <Check className="w-4 h-4" strokeWidth={2.5} />
            </span>
          )}
          {touched.email && !isEmailValid && (
            <span className="form-control-status form-control-status--invalid">
              <AlertCircle className="w-4 h-4" />
            </span>
          )}
        </div>
        {touched.email && !isEmailValid && (
          <div id="form-email-error" className="form-error-msg" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Format d&apos;email valide requis.</span>
          </div>
        )}
      </div>
    </div>

    <div className="form-group">
      <div className="form-label-row">
        <label htmlFor="form-company" className="form-label">
          <span className="form-label__text">Entreprise / Organisation</span>
        </label>
        <span className="form-badge form-badge--optional">Optionnel</span>
      </div>
      <div className="form-control-wrapper">
        <span className="form-control-icon">
          <Building2 className="w-4 h-4" />
        </span>
        <input
          id="form-company"
          type="text"
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Nom de l'entreprise, startup ou institution"
          className={`form-input ${formData.company.trim().length > 0 ? 'is-valid' : ''}`}
        />
        {formData.company.trim().length > 0 && (
          <span className="form-control-status form-control-status--valid">
            <Check className="w-4 h-4" strokeWidth={2.5} />
          </span>
        )}
      </div>
    </div>
  </>
);
