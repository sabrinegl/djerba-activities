import { useState } from 'react';
import React from 'react';
import { IonButton } from '@ionic/react';
import type { Pack } from '../data/data';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { T, t } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

const WHATSAPP_NUMBER = '21694512405';

interface Props {
  pack: Pack;
  onBack: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

type Step = 2 | 3;

export default function PackageBookingPage({ pack, onBack, lang, setLang }: Props) {
  const [step, setStep]           = useState<Step>(2);
  const [clientName,  setClientName]  = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [date,   setDate]   = useState('');
  const [people, setPeople] = useState(1);
  const [note,   setNote]   = useState('');

  const minDate = new Date().toISOString().split('T')[0];

  const canProceed =
    date.trim() !== '' &&
    clientName.trim() !== '' &&
    (clientEmail.trim() !== '' || clientPhone.trim() !== '');

  const buildWhatsAppURL = () => {
    const lines = [
      `Bonjour Djerba Activities ! 👋`,
      ``,
      `━━━━━━━━━━━━━━━━━━━`,
      `👤 CLIENT`,
      `━━━━━━━━━━━━━━━━━━━`,
      `Nom    : ${clientName}`,
      clientEmail ? `Email  : ${clientEmail}` : null,
      clientPhone ? `Tél/WA : ${clientPhone}` : null,
      ``,
      `━━━━━━━━━━━━━━━━━━━`,
      `✨ FORMULE`,
      `━━━━━━━━━━━━━━━━━━━`,
      `Pack      : ${pack.name}`,
      `Prix      : ${pack.price} / pers.`,
      `Inclus    :`,
      ...pack.features.map(f => `  • ${f}`),
      ``,
      `📅 Date      : ${new Date(date + 'T00:00:00').toLocaleDateString('fr-FR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      })}`,
      `👥 Personnes : ${people}`,
      note ? `📝 Note      : ${note}` : null,
      ``,
      `Merci de confirmer la disponibilité ! 🙏`,
    ].filter((l): l is string => l !== null);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--bg-deep)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--r-sm)', padding: '12px 14px',
    color: 'var(--text-primary)', fontSize: 14, outline: 'none',
    fontFamily: 'inherit', boxSizing: 'border-box',
    transition: 'border-color 0.3s', colorScheme: (document.documentElement.getAttribute('data-theme') || 'dark') as 'dark' | 'light',
  };
  const labelStyle: React.CSSProperties = {
    color: 'var(--text-accent)', fontSize: 11, letterSpacing: 1,
    textTransform: 'uppercase', display: 'block', marginBottom: 8,
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = 'var(--accent)');
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = 'var(--border-subtle)');

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100%' }}>
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div style={{ padding: '24px 18px 40px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>

          {/* Title */}
          <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 4,
            textTransform: 'uppercase', marginBottom: 8 }}>
            {t(T.booking.label, lang)}
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px,4vw,40px)', color: 'var(--text-primary)', marginBottom: 6 }}>
            {t(T.booking.title1, lang)}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}> {t(T.booking.title2, lang)}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 28 }}>
            {t(T.booking.subtitle, lang)}
          </p>

          {/* Step indicator (steps 2 & 3 only) */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
            {([2, 3] as Step[]).map((s, i) => (
              <React.Fragment key={s}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: step >= s ? 'var(--accent)' : 'var(--bg-card)',
                    border: `1px solid ${step >= s ? 'var(--accent)' : 'var(--border-subtle)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: step >= s ? '#000' : 'var(--text-muted)',
                    fontWeight: 700, fontSize: 13, transition: 'all 0.3s',
                  }}>{s === 2 ? 1 : 2}</div>
                  <span style={{ fontSize: 10,
                    color: step >= s ? 'var(--accent)' : 'var(--text-muted)',
                    whiteSpace: 'nowrap' }}>
                    {s === 2 ? t(T.booking.step2, lang) : t(T.booking.step3, lang)}
                  </span>
                </div>
                {i < 1 && (
                  <div style={{ flex: 1, height: 1, marginBottom: 18,
                    background: step > s ? 'var(--accent)' : 'var(--border-subtle)',
                    transition: 'background 0.4s' }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ── Package recap (always visible) ── */}
          <div style={{
            background: 'var(--accent-dim)',
            border: '1px solid var(--border-mid)',
            borderRadius: 14, padding: '16px 18px', marginBottom: 24,
            position: 'relative', overflow: 'hidden',
          }}>
            {pack.badge && (
              <span style={{
                position: 'absolute', top: 12, right: 12,
                background: 'var(--accent)', color: '#000',
                fontSize: 9, fontWeight: 800, padding: '3px 10px', borderRadius: 20,
              }}>{pack.badge}</span>
            )}
            <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 2,
              textTransform: 'uppercase', marginBottom: 6 }}>✨ Formule choisie</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20,
                fontWeight: 700, color: 'var(--text-primary)' }}>{pack.name}</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22,
                fontWeight: 900, color: 'var(--accent)' }}>{pack.price}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>/ pers.</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
              {pack.features.map((f, i) => (
                <span key={i} style={{ color: 'var(--text-secondary)', fontSize: 12 }}>
                  <span style={{ color: 'var(--accent)', marginRight: 4 }}>✓</span>{f}
                </span>
              ))}
            </div>
            <button onClick={onBack} style={{
              marginTop: 10, background: 'transparent',
              border: '1px solid var(--border-mid)',
              borderRadius: 8, color: 'var(--accent)', fontSize: 11,
              padding: '4px 10px', cursor: 'pointer',
            }}>
              {t(T.booking.change, lang)}
            </button>
          </div>

          {/* ── STEP 2 : Infos client + date ── */}
          {step === 2 && (
            <div>
              {/* Client info */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: 14, padding: '18px', marginBottom: 16 }}>
                <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 2,
                  textTransform: 'uppercase', marginBottom: 16 }}>
                  {t(T.booking.your_info, lang)}
                </p>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>
                    {t(T.booking.full_name, lang)} <span style={{ color: 'var(--red-required)' }}>*</span>
                  </label>
                  <input value={clientName} onChange={e => setClientName(e.target.value)}
                    type="text" placeholder="Sophie Martin"
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>
                    {t(T.booking.email, lang)}
                    <span style={{ color: 'var(--text-muted)', fontSize: 10, marginLeft: 6,
                      textTransform: 'none', letterSpacing: 0 }}>
                      {t(T.booking.email_or_phone, lang)}
                    </span>
                  </label>
                  <input value={clientEmail} onChange={e => setClientEmail(e.target.value)}
                    type="email" placeholder="email@exemple.com"
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div>
                  <label style={labelStyle}>
                    {t(T.booking.phone, lang)}
                    <span style={{ color: 'var(--text-muted)', fontSize: 10, marginLeft: 6,
                      textTransform: 'none', letterSpacing: 0 }}>
                      {t(T.booking.email_or_phone, lang)}
                    </span>
                  </label>
                  <input value={clientPhone} onChange={e => setClientPhone(e.target.value)}
                    type="tel" placeholder="+33 6 XX XX XX XX"
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>

              {/* Booking details */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: 14, padding: '18px', marginBottom: 20 }}>
                <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 2,
                  textTransform: 'uppercase', marginBottom: 16 }}>
                  {t(T.booking.details, lang)}
                </p>

                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>
                    {t(T.booking.date, lang)} <span style={{ color: 'var(--red-required)' }}>*</span>
                  </label>
                  <input type="date" value={date} min={minDate}
                    onChange={e => setDate(e.target.value)}
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>{t(T.booking.people, lang)}</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <button onClick={() => setPeople(p => Math.max(1, p - 1))}
                      style={{ width: 40, height: 40, borderRadius: '50%',
                        background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                        color: 'var(--accent)', fontSize: 20, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ color: 'var(--text-primary)', fontSize: 24, fontWeight: 700,
                      fontFamily: 'var(--font-serif)', minWidth: 32, textAlign: 'center' }}>{people}</span>
                    <button onClick={() => setPeople(p => Math.min(50, p + 1))}
                      style={{ width: 40, height: 40, borderRadius: '50%',
                        background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                        color: 'var(--accent)', fontSize: 20, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                      {people === 1 ? t(T.booking.person, lang) : t(T.booking.persons, lang)}
                    </span>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{t(T.booking.note, lang)}</label>
                  <textarea value={note} onChange={e => setNote(e.target.value)} rows={3}
                    placeholder={t(T.booking.note_ph, lang)}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>

              {!canProceed && (
                <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 12 }}>
                  {t(T.booking.required, lang)}
                </p>
              )}

              <div style={{ display: 'flex', gap: 12 }}>
                <IonButton fill="outline" color="primary" shape="round"
                  onClick={onBack}
                  style={{ flex: 1, '--border-radius': '25px' } as React.CSSProperties}>
                  {t(T.booking.back, lang)}
                </IonButton>
                <IonButton color="primary" shape="round"
                  disabled={!canProceed} onClick={() => setStep(3)}
                  style={{ flex: 2, '--border-radius': '25px' } as React.CSSProperties}>
                  {t(T.booking.next_confirm, lang)}
                </IonButton>
              </div>
            </div>
          )}

          {/* ── STEP 3 : Récap + WhatsApp ── */}
          {step === 3 && (
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginBottom: 20 }}>
                {t(T.booking.check_booking, lang)}
              </p>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-mid)',
                borderRadius: 18, padding: '22px', marginBottom: 20 }}>

                {/* Client recap */}
                <div style={{ background: 'rgba(14,165,233,0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 2,
                    textTransform: 'uppercase', marginBottom: 10 }}>
                    {t(T.booking.client_section, lang)}
                  </p>
                  {[
                    { l: t(T.booking.full_name, lang), v: clientName },
                    ...(clientEmail ? [{ l: t(T.booking.email, lang), v: clientEmail }] : []),
                    ...(clientPhone ? [{ l: t(T.booking.phone, lang), v: clientPhone }] : []),
                  ].map((row, i, arr) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between',
                      padding: '5px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>{row.l}</span>
                      <span style={{ color: 'var(--text-primary)', fontSize: 13, fontWeight: 500 }}>{row.v}</span>
                    </div>
                  ))}
                </div>

                {/* Pack + booking recap */}
                <div style={{ background: 'rgba(14,165,233,0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10, padding: '12px 14px' }}>
                  <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 2,
                    textTransform: 'uppercase', marginBottom: 10 }}>
                    ✨ Formule
                  </p>
                  {[
                    { l: 'Pack',                       v: pack.name },
                    { l: t(T.booking.recap_price, lang), v: `${pack.price} × ${people}` },
                    { l: t(T.booking.recap_date, lang),  v: new Date(date + 'T00:00:00').toLocaleDateString(
                        lang === 'ru' ? 'ru-RU' : lang === 'de' ? 'de-DE' : lang === 'en' ? 'en-GB' : 'fr-FR',
                        { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
                      )},
                    { l: t(T.booking.recap_people, lang), v: `${people}` },
                    ...(note ? [{ l: t(T.booking.recap_note, lang), v: note }] : []),
                  ].map((row, i, arr) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between',
                      alignItems: 'flex-start', padding: '5px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>{row.l}</span>
                      <span style={{ color: 'var(--text-primary)', fontSize: 13, fontWeight: 500,
                        textAlign: 'right', maxWidth: '60%' }}>{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp info */}
              <div style={{ background: 'var(--green-bg)', border: '1px solid var(--green-border)',
                borderRadius: 12, padding: '12px 16px', marginBottom: 20 }}>
                <p style={{ color: 'var(--green)', fontSize: 13, margin: 0 }}>
                  {t(T.booking.wa_info, lang)}
                </p>
              </div>

              <a href={buildWhatsAppURL()} target="_blank" rel="noreferrer"
                style={{ textDecoration: 'none', display: 'block', marginBottom: 12 }}>
                <IonButton expand="block" color="success" shape="round"
                  style={{
                    '--border-radius': '25px',
                    '--box-shadow': '0 8px 24px var(--green-border)',
                  } as React.CSSProperties}>
                  {t(T.booking.confirm_wa, lang)}
                </IonButton>
              </a>

              <IonButton expand="block" fill="outline" color="primary" shape="round"
                onClick={() => setStep(2)}
                style={{ '--border-radius': '25px' } as React.CSSProperties}>
                {t(T.booking.edit, lang)}
              </IonButton>

              <button onClick={onBack} style={{
                background: 'transparent', border: 'none', color: 'var(--text-muted)',
                fontSize: 12, cursor: 'pointer', marginTop: 20,
                display: 'block', textAlign: 'center', width: '100%',
              }}>
                {t(T.booking.new_booking, lang)}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
