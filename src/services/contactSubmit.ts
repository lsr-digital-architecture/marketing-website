import type { ContactFormData } from '../components/sections/ContactFormFields';
import { siteContent } from '../constants/siteContent';

export type ContactSubmitResult = { ok: true } | { ok: false; message: string };

const DEFAULT_ERROR =
  'Impossible d’envoyer votre message pour le moment. Réessayez ou écrivez-nous directement.';

const ACTIVATION_HINT =
  'La boîte contact@ doit encore activer FormSubmit : ouvrez le groupe Google Workspace, cherchez l’e-mail « Activate Form » (y compris spam), cliquez le lien, puis renvoyez votre message.';

function buildPayload(data: ContactFormData) {
  const pageUrl =
    typeof window !== 'undefined' && window.location?.href
      ? window.location.href
      : 'https://www.lsr-digital-architecture.com/';

  return {
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company.trim() || 'Non renseignée',
    projectType: data.projectType,
    message: data.message.trim() || '—',
    _subject: `[LSR Contact] ${data.projectType} — ${data.name.trim()}`,
    _replyto: data.email.trim(),
    _template: 'table',
    _captcha: 'false',
    _gotcha: '',
    // Required by FormSubmit when Referrer-Policy is strict-origin-when-cross-origin
    _url: pageUrl,
  };
}

function localizeSubmitMessage(raw: string | undefined): string {
  if (!raw) return DEFAULT_ERROR;
  if (/needs Activation|Activate Form/iu.test(raw)) return ACTIVATION_HINT;
  if (/web server|HTML files/iu.test(raw)) {
    return 'Envoi refusé par le service de messagerie. Rechargez la page depuis le site (pas un fichier local) et réessayez.';
  }
  return raw;
}

function parseSubmitBody(
  body: {
    success?: string | boolean;
    message?: string;
    error?: string;
  } | null
): ContactSubmitResult {
  if (!body) return { ok: false, message: DEFAULT_ERROR };
  if (body.error) return { ok: false, message: localizeSubmitMessage(body.error) };
  const success = body.success === true || body.success === 'true';
  return success ? { ok: true } : { ok: false, message: localizeSubmitMessage(body.message) };
}

/** Delivers the form to the Google Workspace inbox via FormSubmit AJAX. */
export async function submitContactForm(data: ContactFormData): Promise<ContactSubmitResult> {
  const inbox = siteContent.contact.email.trim();
  if (!inbox) return { ok: false, message: DEFAULT_ERROR };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(buildPayload(data)),
    });
    const body = (await response.json().catch(() => null)) as Parameters<typeof parseSubmitBody>[0];
    if (!response.ok) {
      return {
        ok: false,
        message: localizeSubmitMessage(body?.message || body?.error) || DEFAULT_ERROR,
      };
    }
    return parseSubmitBody(body);
  } catch {
    return { ok: false, message: DEFAULT_ERROR };
  }
}
