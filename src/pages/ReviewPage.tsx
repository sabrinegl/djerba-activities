import { useState } from 'react';
import React from 'react';
import { IonButton } from '@ionic/react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import type { Lang } from '../i18n/translations';

const WHATSAPP_NUMBER = '21697096645';

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LABELS: Record<string, Record<Lang, string>> = {
  badge:       { fr: '✦ Votre avis ✦',              en: '✦ Your review ✦',               de: '✦ Ihre Bewertung ✦',                  ru: '✦ Ваш отзыв ✦',              it: '✦ La tua recensione ✦'          },
  title1:      { fr: 'Partagez votre',               en: 'Share your',                    de: 'Teilen Sie Ihre',                     ru: 'Поделитесь своим',           it: 'Condividi la tua'               },
  title2:      { fr: 'expérience',                   en: 'experience',                    de: 'Erfahrung',                           ru: 'опытом',                     it: 'esperienza'                     },
  subtitle:    { fr: 'Votre avis nous aide à améliorer nos services.', en: 'Your review helps us improve our services.', de: 'Ihre Bewertung hilft uns, unsere Dienste zu verbessern.', ru: 'Ваш отзыв помогает нам улучшать наши услуги.', it: 'La tua recensione ci aiuta a migliorare i nostri servizi.' },
  activity:    { fr: 'Quelle activité avez-vous faite ?', en: 'Which activity did you do?', de: 'Welche Aktivität haben Sie gemacht?', ru: 'Какую активность вы выбрали?', it: 'Quale attività hai fatto?' },
  act_ph:      { fr: 'Ex: Jet-ski, Excursion désert...', en: 'E.g. Jet-ski, Desert tour...', de: 'Z.B. Jet-Ski, Wüstenausflug...', ru: 'Напр.: Гидроцикл, Экскурсия...', it: 'Es: Moto d\'acqua, Escursione...' },
  your_name:   { fr: 'Votre prénom',                 en: 'Your first name',               de: 'Ihr Vorname',                         ru: 'Ваше имя',                   it: 'Il tuo nome'                    },
  name_ph:     { fr: 'Sophie',                       en: 'John',                          de: 'Max',                                 ru: 'Иван',                       it: 'Marco'                          },
  rating:      { fr: 'Note globale',                 en: 'Overall rating',                de: 'Gesamtbewertung',                     ru: 'Общая оценка',               it: 'Valutazione generale'           },
  comment:     { fr: 'Votre commentaire',            en: 'Your comment',                  de: 'Ihr Kommentar',                       ru: 'Ваш комментарий',            it: 'Il tuo commento'                },
  comment_ph:  { fr: 'Décrivez votre expérience...', en: 'Describe your experience...', de: 'Beschreiben Sie Ihre Erfahrung...', ru: 'Опишите ваш опыт...', it: 'Descrivi la tua esperienza...' },
  recommend:   { fr: 'Recommanderiez-vous Djerba Activities ?', en: 'Would you recommend Djerba Activities?', de: 'Würden Sie Djerba Activities empfehlen?', ru: 'Порекомендуете ли вы Djerba Activities?', it: 'Consiglieresti Djerba Activities?' },
  yes:         { fr: '👍 Oui, absolument !',         en: '👍 Yes, absolutely!',           de: '👍 Ja, auf jeden Fall!',              ru: '👍 Да, однозначно!',         it: '👍 Sì, assolutamente!'          },
  no:          { fr: '👎 Pas vraiment',              en: '👎 Not really',                 de: '👎 Nicht wirklich',                   ru: '👎 Не особо',                it: '👎 Non molto'                   },
  send:        { fr: '⭐ Envoyer mon avis via WhatsApp', en: '⭐ Send my review via WhatsApp', de: '⭐ Bewertung per WhatsApp senden', ru: '⭐ Отправить отзыв в WhatsApp', it: '⭐ Invia recensione via WhatsApp' },
  required:    { fr: '* Prénom, note et commentaire requis', en: '* Name, rating and comment required', de: '* Name, Bewertung und Kommentar erforderlich', ru: '* Имя, оценка и комментарий обязательны', it: '* Nome, valutazione e commento obbligatori' },
  sent_title:  { fr: 'Merci pour votre avis !',     en: 'Thank you for your review!',    de: 'Danke für Ihre Bewertung!',           ru: 'Спасибо за ваш отзыв!',     it: 'Grazie per la tua recensione!' },
  sent_sub:    { fr: "Votre avis a bien été envoyé. Nous l'apprécions beaucoup !", en: 'Your review has been sent. We really appreciate it!', de: 'Ihre Bewertung wurde gesendet. Wir schätzen das sehr!', ru: 'Ваш отзыв отправлен. Мы очень ценим это!', it: 'La tua recensione è stata inviata. La apprezziamo moltissimo!' },
  new_review:  { fr: 'Laisser un autre avis',       en: 'Leave another review',          de: 'Weitere Bewertung',                   ru: 'Оставить ещё отзыв',        it: 'Lascia un\'altra recensione'   },
};

const tl = (key: string, lang: Lang): string =>
  LABELS[key]?.[lang] ?? LABELS[key]?.['fr'] ?? '';

const STAR_LABELS: Record<number, Record<Lang, string>> = {
  1: { fr: 'Très décevant', en: 'Very disappointing', de: 'Sehr enttäuschend', ru: 'Очень плохо', it: 'Molto deludente' },
  2: { fr: 'Décevant',      en: 'Disappointing',      de: 'Enttäuschend',      ru: 'Плохо',       it: 'Deludente'       },
  3: { fr: 'Correct',       en: 'Average',            de: 'Durchschnittlich',  ru: 'Нормально',   it: 'Nella media'     },
  4: { fr: 'Très bien',     en: 'Very good',          de: 'Sehr gut',          ru: 'Хорошо',      it: 'Molto bene'      },
  5: { fr: 'Exceptionnel',  en: 'Exceptional',        de: 'Außergewöhnlich',   ru: 'Отлично',     it: 'Eccezionale'     },
};

export default function ReviewPage({ lang, setLang }: Props) {
  const [name, setName]           = useState('');
  const [activity, setActivity]   = useState('');
  const [stars, setStars]         = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [comment, setComment]     = useState('');
  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [sent, setSent]           = useState(false);

  const canSend = name.trim() !== '' && stars > 0 && comment.trim() !== '';

  const buildWhatsAppURL = () => {
    const starStr = '⭐'.repeat(stars);
    const lines = [
      `Bonjour ! Voici mon avis sur Djerba Activities 🌟`,
      ``,
      `━━━━━━━━━━━━━━━━━━━`,
      `👤 ${name}`,
      activity ? `🎯 Activité : ${activity}` : null,
      ``,
      `${starStr} ${stars}/5 — ${STAR_LABELS[stars][lang]}`,
      ``,
      `💬 "${comment}"`,
      ``,
      recommend !== null ? `👍 Recommande : ${recommend ? 'OUI ✅' : 'NON ❌'}` : null,
      ``,
      `— Avis envoyé depuis l'app Djerba Activities`,
    ].filter((l): l is string => l !== null);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

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

  const displayStar = hoverStar || stars;

  if (sent) {
    return (
      <div style={{ background: 'var(--bg-deep)', minHeight: '100%' }}>
        <LanguageSwitcher lang={lang} setLang={setLang} />
        <div style={{ padding: '24px 18px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', minHeight: '80vh' }}>
          <div style={{ textAlign: 'center', maxWidth: 400 }}>
            <div style={{ fontSize: 48, marginBottom: 8, letterSpacing: 4 }}>{'⭐'.repeat(stars)}</div>
            <div style={{ fontSize: 48, marginBottom: 20 }}>🎉</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26,
              color: 'var(--text-primary)', marginBottom: 10 }}>{tl('sent_title', lang)}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14,
              lineHeight: 1.7, marginBottom: 28 }}>{tl('sent_sub', lang)}</p>
            <IonButton color="primary" fill="outline" shape="round"
              onClick={() => { setSent(false); setName(''); setActivity(''); setStars(0); setComment(''); setRecommend(null); }}>
              {tl('new_review', lang)}
            </IonButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100%' }}>
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <div style={{ padding: '24px 18px 48px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>

          <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 4,
            textTransform: 'uppercase', marginBottom: 8 }}>{tl('badge', lang)}</p>
          <h2 style={{ fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px,4vw,40px)', color: 'var(--text-primary)', marginBottom: 6 }}>
            {tl('title1', lang)}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{tl('title2', lang)}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 28 }}>{tl('subtitle', lang)}</p>

          {/* Étoiles */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 16, padding: '22px', marginBottom: 16, textAlign: 'center' }}>
            <label style={{ ...labelStyle, textAlign: 'center', marginBottom: 16 }}>{tl('rating', lang)}</label>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 10 }}>
              {[1, 2, 3, 4, 5].map(n => (
                <button key={n} onClick={() => setStars(n)}
                  onMouseEnter={() => setHoverStar(n)} onMouseLeave={() => setHoverStar(0)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: 4,
                    fontSize: 36, lineHeight: 1,
                    filter: n <= displayStar ? 'drop-shadow(0 0 6px rgba(249,185,0,0.6))' : 'grayscale(1) opacity(0.25)',
                    transform: n <= displayStar ? 'scale(1.15)' : 'scale(1)',
                    transition: 'all 0.15s',
                  }}>⭐</button>
              ))}
            </div>
            <div style={{ height: 20, color: displayStar > 0 ? 'var(--accent)' : 'transparent',
              fontSize: 13, fontWeight: 600, transition: 'color 0.2s' }}>
              {displayStar > 0 ? STAR_LABELS[displayStar][lang] : '—'}
            </div>
          </div>

          {/* Infos */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 16, padding: '22px', marginBottom: 16 }}>
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>{tl('your_name', lang)}</label>
              <input value={name} onChange={e => setName(e.target.value)}
                type="text" placeholder={tl('name_ph', lang)}
                style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelStyle}>{tl('activity', lang)}</label>
              <input value={activity} onChange={e => setActivity(e.target.value)}
                type="text" placeholder={tl('act_ph', lang)}
                style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
          </div>

          {/* Commentaire */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 16, padding: '22px', marginBottom: 16 }}>
            <label style={labelStyle}>{tl('comment', lang)}</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)} rows={4}
              placeholder={tl('comment_ph', lang)}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={onFocus} onBlur={onBlur} />
          </div>

          {/* Recommandation */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 16, padding: '22px', marginBottom: 24 }}>
            <label style={{ ...labelStyle, marginBottom: 14 }}>{tl('recommend', lang)}</label>
            <div style={{ display: 'flex', gap: 10 }}>
              {[true, false].map(val => (
                <button key={String(val)} onClick={() => setRecommend(recommend === val ? null : val)}
                  style={{
                    flex: 1, padding: '10px 12px',
                    background: recommend === val ? (val ? 'rgba(14,165,233,0.15)' : 'rgba(248,113,113,0.12)') : 'var(--bg-elevated)',
                    border: `1px solid ${recommend === val ? (val ? 'var(--accent)' : '#f87171') : 'var(--border-subtle)'}`,
                    borderRadius: 10, cursor: 'pointer',
                    color: recommend === val ? (val ? 'var(--accent)' : '#f87171') : 'var(--text-muted)',
                    fontSize: 13, fontWeight: recommend === val ? 600 : 400,
                    transition: 'all 0.2s',
                  }}>
                  {val ? tl('yes', lang) : tl('no', lang)}
                </button>
              ))}
            </div>
          </div>

          {!canSend && (
            <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 12 }}>
              {tl('required', lang)}
            </p>
          )}

          <a href={canSend ? buildWhatsAppURL() : undefined} target="_blank" rel="noreferrer"
            onClick={() => { if (canSend) setTimeout(() => setSent(true), 400); }}
            style={{ textDecoration: 'none', display: 'block' }}>
            <IonButton expand="block" color="success" shape="round" disabled={!canSend}
              style={{ '--border-radius': '25px', '--box-shadow': '0 8px 24px rgba(37,211,102,0.2)' } as React.CSSProperties}>
              {tl('send', lang)}
            </IonButton>
          </a>
        </div>
      </div>
    </div>
  );
}
