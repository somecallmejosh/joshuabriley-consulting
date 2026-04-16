(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const PORTAL_ID = '245615253';
  const FORM_GUID = 'e7cbc2bc-27f0-4a84-b8c4-79e4d3657b39';
  const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;
  const FALLBACK_EMAIL = 'josh@thebrileys.com';

  const alertEl = document.getElementById('form-alert');
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitIcon = submitBtn?.querySelector('[data-submit-icon]');
  const submitSpinner = submitBtn?.querySelector('[data-submit-spinner]');
  const submitLabel = submitBtn?.querySelector('[data-submit-label]');

  const ALERT_BASE =
    'rounded-2xl border px-5 py-4 text-sm leading-relaxed font-body';
  const ALERT_VARIANTS = {
    success: 'bg-sage/10 border-sage/40 text-navy',
    error: 'bg-coral/10 border-coral/40 text-navy',
  };

  function getHubspotCookie() {
    const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
    return match ? match[1] : undefined;
  }

  function hideAlert() {
    if (!alertEl) return;
    alertEl.classList.add('hidden');
    alertEl.textContent = '';
  }

  function showAlert(type, title, body) {
    if (!alertEl) return;
    alertEl.className = `${ALERT_BASE} ${ALERT_VARIANTS[type] ?? ''}`;
    alertEl.innerHTML = '';

    const iconName =
      type === 'success'
        ? 'ph:check-circle-duotone'
        : 'ph:warning-circle-duotone';
    const iconClass = type === 'success' ? 'text-sage' : 'text-coral';

    const wrap = document.createElement('div');
    wrap.className = 'flex items-start gap-3';

    const icon = document.createElement('iconify-icon');
    icon.setAttribute('icon', iconName);
    icon.setAttribute('width', '22');
    icon.className = `${iconClass} shrink-0 mt-0.5`;
    icon.setAttribute('aria-hidden', 'true');

    const text = document.createElement('div');
    const titleEl = document.createElement('p');
    titleEl.className = 'font-heading font-semibold text-navy';
    titleEl.textContent = title;
    text.appendChild(titleEl);

    if (body) {
      const bodyEl = document.createElement('p');
      bodyEl.className = 'mt-1 text-charcoal/75';
      bodyEl.textContent = body;
      text.appendChild(bodyEl);
    }

    wrap.appendChild(icon);
    wrap.appendChild(text);
    alertEl.appendChild(wrap);

    alertEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (type === 'error') alertEl.focus?.();
  }

  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    submitBtn.setAttribute('aria-busy', loading ? 'true' : 'false');
    if (submitIcon) submitIcon.classList.toggle('hidden', loading);
    if (submitSpinner) submitSpinner.classList.toggle('hidden', !loading);
    if (submitLabel) submitLabel.textContent = loading ? 'Sending…' : 'Send message';
  }

  function humanizeError(err) {
    if (!err) return null;
    const raw = (err.message || '').toString();
    const fieldMatch = raw.match(/fields\.([a-zA-Z_]+)/);
    const fieldLabels = {
      firstname: 'first name',
      lastname: 'last name',
      email: 'email',
      phone_number: 'phone number',
      i_am_interested_in: 'service selection',
      description: 'message',
    };
    const fieldName = fieldMatch ? fieldLabels[fieldMatch[1]] || fieldMatch[1] : null;

    switch (err.errorType) {
      case 'INVALID_EMAIL':
        return 'That email address doesn\u2019t look right. Please double-check and try again.';
      case 'BLOCKED_EMAIL':
        return 'That email address can\u2019t be accepted. Try a different address.';
      case 'REQUIRED_FIELD':
        return fieldName
          ? `Please fill in your ${fieldName}.`
          : 'A required field is missing.';
      case 'INVALID_NUMBER':
        return 'The phone number looks invalid. Please check the format.';
      case 'INPUT_TOO_LARGE':
        return fieldName
          ? `Your ${fieldName} is too long. Please shorten it.`
          : 'One of the fields is too long. Please shorten it.';
      case 'INVALID_HUTK':
      case 'INVALID_CONTEXT':
      case 'INVALID_METADATA':
      case 'INVALID_FORM_OPTIONS':
        return 'Something looked off with the submission. Please refresh the page and try again.';
      case 'TOO_MANY_ERRORS':
        return 'Several fields need attention. Please review the form and try again.';
      default:
        return raw || null;
    }
  }

  async function parseErrorResponse(response) {
    try {
      const data = await response.json();
      if (Array.isArray(data?.errors) && data.errors.length) {
        const messages = data.errors.map(humanizeError).filter(Boolean);
        if (messages.length) return messages.join(' ');
      }
      if (data?.message) return data.message;
    } catch (_) {
      /* fall through */
    }
    if (response.status === 429) {
      return 'Too many submissions in a short time. Please wait a moment and try again.';
    }
    if (response.status >= 500) {
      return `The form service is temporarily unavailable (error ${response.status}). Please try again in a few minutes.`;
    }
    return `The submission failed (error ${response.status}). Please try again.`;
  }

  function getValue(name) {
    const field = form.elements.namedItem(name);
    return field && 'value' in field ? field.value.trim() : '';
  }

  async function handleSubmit(event) {
    event.preventDefault();
    hideAlert();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = {
      fields: [
        { name: 'firstname', value: getValue('first-name') },
        { name: 'lastname', value: getValue('last-name') },
        { name: 'email', value: getValue('email') },
        { name: 'phone_number', value: getValue('phone') },
        { name: 'i_am_interested_in', value: getValue('service') },
        { name: 'description', value: getValue('message') },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title || 'Contact',
      },
    };

    const hutk = getHubspotCookie();
    if (hutk) payload.context.hutk = hutk;

    setLoading(true);
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const reason = await parseErrorResponse(response);
        showAlert(
          'error',
          'We couldn\u2019t send your message.',
          `${reason} If it keeps happening, email ${FALLBACK_EMAIL} directly.`
        );
        return;
      }

      form.reset();
      showAlert(
        'success',
        'Thanks \u2014 your message is on its way.',
        'I\u2019ll reply within one business day, usually sooner.'
      );
    } catch (err) {
      showAlert(
        'error',
        'We couldn\u2019t reach the form service.',
        `Check your internet connection and try again, or email ${FALLBACK_EMAIL} directly.`
      );
    } finally {
      setLoading(false);
    }
  }

  form.addEventListener('submit', handleSubmit);
})();
