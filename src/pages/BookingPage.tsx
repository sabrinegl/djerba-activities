import { useState, useEffect } from 'react';
import React from 'react';
import { IonButton } from '@ionic/react';
import type { Activity } from '../data/data';
import { ACTIVITIES } from '../data/data';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { T, t } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

type Step = 1 | 2 | 3;

const WHATSAPP_NUMBER = '21697096645';

interface Props {
  preselected?: Activity | null;
  onClearPreselected?: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function BookingPage({ preselected, onClearPreselected, lang, setLang }: Props) {
  const [step, setStep]         = useState<Step>(1);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [clientName,  setClientName]  = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [date, setDate]     = useState('');
  const [people, setPeople] = useState(1);
  const [note, setNote]     = useState('');

  const minDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (preselected) { setActivity(preselected); setStep(2); }
  }, [preselected]);

  const canProceedStep2 =
    date.trim() !== '' &&
    clientName.trim() !== '' &&
    (clientEmail.trim() !== '' || clientPhone.trim() !== '');

  const buildWhatsAppURL = () => {
    const lines = [
      `Bonjour Djerba activities ! 👋`, ``,
      `━━━━━━━━━━━━━━━━━━━`,
      `👤 CLIENT`,
      `━━━━━━━━━━━━━━━━━━━`,
      `Nom    : ${clientName}`,
      clientEmail ? `Email  : ${clientEmail}` : null,
      clientPhone ? `Tél/WA : ${clientPhone}` : null,
      ``,
      `━━━━━━━━━━━━━━━━━━━`,
      `🎯 RÉSERVATION`,
      `━━━━━━━━━━━━━━━━━━━`,
      `Activité  : ${activity?.title}`,
      `Date      : ${new Date(date + 'T00:00:00').toLocaleDateString('fr-FR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      })}`,
      `Personnes : ${people}`,
      note ? `Note      : ${note}` : null,
      ``,
      `Merci de confirmer la disponibilité ! 🙏`,
    ].filter((l): l is string => l !== null);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleReset = () => {
    setStep(1); setActivity(null);
    setClientName(''); setClientEmail(''); setClientPhone('');
    setDate(''); setPeople(1); setNote('');
    onClearPreselected?.();
  };

  const goBackToStep1 = () => { setStep(1); onClearPreselected?.(); };

  // ── Shared input style ──
  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--bg-deep)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--r-sm)', padding: '12px 14px',
    color: 'var(--text-primary)', fontSize: 14, outline: 'none',
    fontFamily: 'inherit', boxSizing: 'border-box',
    transition: 'border-color 0.3s', colorScheme: 'dark',
  };
  const labelStyle: React.CSSProperties = {
    color: 'var(--text-accent)', fontSize: 11, letterSpacing: 1,
    textTransform: 'uppercase', display: 'block', marginBottom: 8,
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = 'var(--accent)');
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
            {([1, 2, 3] as Step[]).map((s, i) => (
              <React.Fragment key={s}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: step >= s ? 'var(--accent)' : 'var(--bg-card)',
                    border: `1px solid ${step >= s ? 'var(--accent)' : 'var(--border-subtle)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: step >= s ? '#000' : 'var(--text-muted)',
                    fontWeight: 700, fontSize: 13, transition: 'all 0.3s',
                  }}>{s}</div>
                  <span style={{ fontSize: 10,
                    color: step >= s ? 'var(--accent)' : 'var(--text-muted)',
                    whiteSpace: 'nowrap' }}>
                    {[t(T.booking.step1, lang), t(T.booking.step2, lang), t(T.booking.step3, lang)][i]}
                  </span>
                </div>
                {i < 2 && (
                  <div style={{ flex: 1, height: 1, marginBottom: 18,
                    background: step > s ? 'var(--accent)' : 'var(--border-subtle)',
                    transition: 'background 0.4s' }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginBottom: 20 }}>
                {t(T.booking.choose_act, lang)}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ACTIVITIES.map(a => (
                  <div key={a.id} onClick={() => setActivity(a)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      background: activity?.id === a.id ? 'var(--accent-dim)' : 'var(--bg-card)',
                      border: `1px solid ${activity?.id === a.id ? 'var(--accent)' : 'var(--border-subtle)'}`,
                      borderRadius: 14, padding: '14px 16px',
                      cursor: 'pointer', transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => {
                      if (activity?.id !== a.id)
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-mid)';
                    }}
                    onMouseLeave={e => {
                      if (activity?.id !== a.id)
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)';
                    }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12,
                      overflow: 'hidden', flexShrink: 0 }}>
                      <img src={a.img} alt={a.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 14,
                          fontFamily: 'var(--font-serif)' }}>{a.title}</span>
                      </div>
                      <span style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700 }}>{a.price}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 4 }}>{a.unit}</span>
                    </div>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                      border: `2px solid ${activity?.id === a.id ? 'var(--accent)' : 'var(--border-subtle)'}`,
                      background: activity?.id === a.id ? 'var(--accent)' : 'transparent',
                      transition: 'all 0.25s',
                    }} />
                  </div>
                ))}
              </div>
              <IonButton expand="block" color="primary" shape="round"
                disabled={!activity} onClick={() => setStep(2)}
                style={{ '--border-radius': '25px', marginTop: '24px' } as React.CSSProperties}>
                {t(T.booking.next_info, lang)}
              </IonButton>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <div>
              {/* Activity recap */}
              <div style={{ background: 'var(--accent-dim)',
                border: '1px solid var(--border-mid)',
                borderRadius: 12, padding: '12px 16px', marginBottom: 24,
                display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10,
                  overflow: 'hidden', flexShrink: 0 }}>
                  <img src={activity?.img} alt={activity?.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ color: 'var(--accent)', fontSize: 11, display: 'block' }}>
                    {t(T.booking.chosen_act, lang)}
                  </span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 14,
                    fontFamily: 'var(--font-serif)' }}>
                    {activity?.title}
                  </span>
                </div>
                <button onClick={goBackToStep1} style={{
                  background: 'transparent', border: '1px solid var(--border-mid)',
                  borderRadius: 8, color: 'var(--accent)', fontSize: 11,
                  padding: '4px 10px', cursor: 'pointer',
                }}>{t(T.booking.change, lang)}</button>
              </div>

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
                    <button onClick={() => setPeople(p => Math.min(20, p + 1))}
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

              {!canProceedStep2 && (
                <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 12 }}>
                  {t(T.booking.required, lang)}
                </p>
              )}

              <div style={{ display: 'flex', gap: 12 }}>
                <IonButton fill="outline" color="primary" shape="round"
                  onClick={goBackToStep1}
                  style={{ flex: 1, '--border-radius': '25px' } as React.CSSProperties}>
                  {t(T.booking.back, lang)}
                </IonButton>
                <IonButton color="primary" shape="round"
                  disabled={!canProceedStep2} onClick={() => setStep(3)}
                  style={{ flex: 2, '--border-radius': '25px' } as React.CSSProperties}>
                  {t(T.booking.next_confirm, lang)}
                </IonButton>
              </div>
            </div>
          )}

          {/* ── STEP 3 ── */}
          {step === 3 && (
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginBottom: 20 }}>
                {t(T.booking.check_booking, lang)}
              </p>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-mid)',
                borderRadius: 18, padding: '22px', marginBottom: 20 }}>

                <div style={{ height: 130, borderRadius: 12, overflow: 'hidden', marginBottom: 18 }}>
                  <img src={activity?.img} alt={activity?.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

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
                    ...(clientEmail ? [{ l: t(T.booking.email, lang),  v: clientEmail }] : []),
                    ...(clientPhone ? [{ l: t(T.booking.phone, lang),  v: clientPhone }] : []),
                  ].map((row, i, arr) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between',
                      padding: '5px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>{row.l}</span>
                      <span style={{ color: 'var(--text-primary)', fontSize: 13, fontWeight: 500 }}>{row.v}</span>
                    </div>
                  ))}
                </div>

                {/* Booking recap */}
                <div style={{ background: 'rgba(14,165,233,0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10, padding: '12px 14px' }}>
                  <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 2,
                    textTransform: 'uppercase', marginBottom: 10 }}>
                    {t(T.booking.booking_section, lang)}
                  </p>
                  {[
                    { l: t(T.booking.recap_activity, lang), v: `${activity?.title}` },
                    { l: t(T.booking.recap_date, lang), v: new Date(date + 'T00:00:00').toLocaleDateString(lang === 'ru' ? 'ru-RU' : lang === 'de' ? 'de-DE' : lang === 'en' ? 'en-GB' : 'fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) },
                    { l: t(T.booking.recap_people, lang),   v: `${people}` },
                    { l: t(T.booking.recap_price, lang),    v: `${activity?.price} × ${people}` },
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

              <button onClick={handleReset} style={{
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
