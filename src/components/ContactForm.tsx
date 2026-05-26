import { LoaderCircle, Send } from 'lucide-react';
import { type FormEvent, useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

type ContactFormProps = {
  recipientEmail: string;
};

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '');
    const subject = String(formData.get('subject') ?? 'Portfolio inquiry').trim() || 'Portfolio inquiry';
    const message = String(formData.get('message') ?? '').trim();

    if (!email.includes('@') || message.length < 12) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    const body = encodeURIComponent([
      `Name: ${name || '-'}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n'));
    const encodedSubject = encodeURIComponent(subject);

    window.setTimeout(() => {
      window.location.href = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${body}`;
      setStatus('success');
      form.reset();
    }, 350);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Nama</label>
      <input id="name" name="name" type="text" autoComplete="name" placeholder="Nama kamu" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="nama@email.com" required />

      <label htmlFor="subject">Subjek</label>
      <input id="subject" name="subject" type="text" placeholder="Project React, kolaborasi, atau peluang kerja" />

      <label htmlFor="message">Pesan</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Ceritakan kebutuhan, timeline, dan konteks singkatnya."
        required
      />

      <button className="primary-button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <LoaderCircle className="spin" aria-hidden="true" size={18} />
        ) : (
          <Send aria-hidden="true" size={18} />
        )}
        <span>{status === 'loading' ? 'Mengirim' : 'Kirim pesan'}</span>
      </button>

      <p className={`form-note ${status}`} role="status" aria-live="polite">
        {status === 'success' ? 'Terima kasih. Email client sudah disiapkan dengan isi pesanmu.' : null}
        {status === 'error' ? 'Masukkan email valid dan pesan minimal 12 karakter.' : null}
      </p>
    </form>
  );
}
