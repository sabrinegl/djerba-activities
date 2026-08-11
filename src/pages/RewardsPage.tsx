import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
import { REWARDS } from '../data/data';
import LanguageSwitcher from '../components/LanguageSwitcher';
import type { Lang } from '../i18n/translations';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQL2N9SGldgY2u4SmT-QQqHmH7a2eQ2utSxwNJh4UYpC_rZW4U-BnDduHTUVjjXQL1ESZWeoOH6AQsi/pub?gid=0&single=true&output=csv';

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
  setTab: (id: string) => void;
}

interface ClientData {
  code: string;
  name: string;
  points: number;
  history: string[];
}

const L: Record<string, Record<Lang, string>> = {
  badge:        { fr: '✦ Mes Points ✦',         en: '✦ My Points ✦',          de: '✦ Meine Punkte ✦',          ru: '✦ Мои очки ✦',             it: '✦ I miei punti ✦'          },
  title1:       { fr: 'Votre espace',            en: 'Your personal',           de: 'Ihr persönlicher',          ru: 'Ваш личный',               it: 'Il tuo spazio'             },
  title2:       { fr: 'récompenses',             en: 'rewards space',           de: 'Belohnungsbereich',         ru: 'кабинет наград',           it: 'premi'                     },
  subtitle:     { fr: 'Entrez votre code client pour voir vos points cumulés.', en: 'Enter your client code to see your accumulated points.', de: 'Geben Sie Ihren Kundencode ein, um Ihre Punkte zu sehen.', ru: 'Введите ваш код клиента, чтобы увидеть накопленные очки.', it: 'Inserisci il tuo codice cliente per vedere i tuoi punti.' },
  code_label:   { fr: 'Votre code client',       en: 'Your client code',        de: 'Ihr Kundencode',            ru: 'Ваш код клиента',          it: 'Il tuo codice cliente'     },
  code_ph:      { fr: 'Ex: DJB-847',             en: 'E.g. DJB-847',            de: 'z.B. DJB-847',             ru: 'Напр.: DJB-847',           it: 'Es: DJB-847'               },
  code_hint:    { fr: 'Ce code vous a été envoyé par WhatsApp après votre première réservation.', en: 'This code was sent to you via WhatsApp after your first booking.', de: 'Dieser Code wurde Ihnen nach Ihrer ersten Buchung per WhatsApp zugeschickt.', ru: 'Этот код был отправлен вам через WhatsApp после первого бронирования.', it: 'Questo codice ti è stato inviato via WhatsApp dopo la tua prima prenotazione.' },
  search:       { fr: 'Voir mes points',         en: 'Check my points',         de: 'Meine Punkte anzeigen',     ru: 'Посмотреть мои очки',      it: 'Vedi i miei punti'         },
  not_found:    { fr: 'Code introuvable. Vérifiez votre code ou contactez-nous.', en: 'Code not found. Check your code or contact us.', de: 'Code nicht gefunden. Überprüfen Sie Ihren Code.', ru: 'Код не найден. Проверьте код.', it: 'Codice non trovato. Controlla il codice.' },
  loading:      { fr: 'Recherche en cours...',   en: 'Searching...',            de: 'Suche läuft...',            ru: 'Поиск...',                 it: 'Ricerca in corso...'       },
  hello:        { fr: 'Bonjour',                 en: 'Hello',                   de: 'Hallo',                     ru: 'Здравствуйте',             it: 'Ciao'                      },
  your_points:  { fr: 'Vos points cumulés',      en: 'Your accumulated points', de: 'Ihre gesammelten Punkte',   ru: 'Ваши накопленные очки',    it: 'I tuoi punti accumulati'   },
  history:      { fr: 'Historique',              en: 'History',                 de: 'Verlauf',                   ru: 'История',                  it: 'Storico'                   },
  rewards_title:{ fr: 'Récompenses disponibles', en: 'Available rewards',       de: 'Verfügbare Belohnungen',    ru: 'Доступные награды',        it: 'Premi disponibili'         },
  unlocked:     { fr: '✅ Débloqué !',           en: '✅ Unlocked!',            de: '✅ Freigeschaltet!',         ru: '✅ Разблокировано!',        it: '✅ Sbloccato!'             },
  locked:       { fr: 'encore',                  en: 'more',                   de: 'noch',                      ru: 'ещё',                      it: 'ancora'                    },
  pts_needed:   { fr: 'pts pour débloquer',      en: 'pts to unlock',           de: 'Pkt. zum Freischalten',     ru: 'очков для разблокировки',  it: 'pti per sbloccare'         },
  no_code:      { fr: 'Pas encore de code ?',    en: 'No code yet?',            de: 'Noch kein Code?',           ru: 'Нет кода?',                it: 'Nessun codice?'            },
  no_code_sub:  { fr: 'Réservez une activité et nous vous enverrons votre code client par WhatsApp.', en: 'Book an activity and we will send you your client code via WhatsApp.', de: 'Buchen Sie eine Aktivität und wir schicken Ihnen Ihren Kundencode per WhatsApp.', ru: 'Забронируйте активность, и мы отправим вам код клиента через WhatsApp.', it: "Prenota un'attività e ti invieremo il tuo codice cliente via WhatsApp." },
  book_now:     { fr: 'Réserver maintenant',     en: 'Book now',                de: 'Jetzt buchen',              ru: 'Забронировать',            it: 'Prenota ora'               },
  logout:       { fr: 'Changer de code',         en: 'Change code',             de: 'Code ändern',               ru: 'Сменить код',              it: 'Cambia codice'             },
};

const tl = (k: string, lang: Lang): string => L[k]?.[lang] ?? L[k]?.fr ?? '';

function parseCSV(csv: string): ClientData[] {
  const lines = csv.trim().split('\n').slice(1);
  return lines.map(line => {
    const cols = line.split(',').map(c => c.trim().replace(/^"|"$/g, ''));
    const points = parseInt(cols[2] ?? '0', 10);
    const historyRaw = cols[3] ?? '';
    const history = historyRaw ? historyRaw.split('|').map(h => h.trim()).filter(Boolean) : [];
    return {
      code:   (cols[0] ?? '').toUpperCase(),
      name:   cols[1] ?? '',
      points: isNaN(points) ? 0 : points,
      history,
    };
  });
}

function ProgressBar({ points }: { points: number }) {
  const maxPoints = Math.max(...REWARDS.map(r => r.points));
  const pct = Math.min((points / maxPoints) * 100, 100);
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ height: 8, background: 'var(--bg-elevated)', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 99,
          width: `${pct}%`,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
          transition: 'width 1s cubic-bezier(.23,1,.32,1)',
          boxShadow: '0 0 8px var(--accent-glow)',
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ color: 'var(--text-muted)', fontSize: 10 }}>0</span>
        {REWARDS.map(r => (
          <span key={r.points} style={{ color: 'var(--text-muted)', fontSize: 10 }}>{r.points}</span>
        ))}
      </div>
    </div>
  );
}

export default function RewardsPage({ lang, setLang, setTab }: Props) {
  const [code, setCode]     = useState('');
  const [client, setClient] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState(false);

  const handleSearch = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setError(false);
    setClient(null);
    try {
      const res  = await fetch(SHEET_CSV_URL);
      const text = await res.text();
      const data = parseCSV(text);
      const found = data.find(d => d.code === code.trim().toUpperCase());
      if (found) { setClient(found); } else { setError(true); }
    } catch { setError(true); }
    finally { setLoading(false); }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--bg-deep)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--r-sm)', padding: '14px 16px',
    color: 'var(--text-primary)', fontSize: 16, outline: 'none',
    fontFamily: 'var(--font-serif)', boxSizing: 'border-box',
    transition: 'border-color 0.3s',
    colorScheme: (document.documentElement.getAttribute('data-theme') || 'dark') as 'dark' | 'light',
    letterSpacing: 2, textTransform: 'uppercase' as const, textAlign: 'center' as const,
  };

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100%' }}>
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div style={{ padding: '24px 18px 48px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>

          {/* Header */}
          <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 4,
            textTransform: 'uppercase', marginBottom: 8 }}>{tl('badge', lang)}</p>
          <h2 style={{ fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px,4vw,40px)', color: 'var(--text-primary)', marginBottom: 6 }}>
            {tl('title1', lang)}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{tl('title2', lang)}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 28 }}>
            {tl('subtitle', lang)}
          </p>

          {/* ── Formulaire code ── */}
          {!client && (
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 18, padding: '28px 24px', marginBottom: 24 }}>
              <div style={{ textAlign: 'center', fontSize: 48, marginBottom: 16 }}>🎫</div>
              <label style={{ color: 'var(--text-accent)', fontSize: 11, letterSpacing: 1,
                textTransform: 'uppercase', display: 'block', marginBottom: 10, textAlign: 'center' }}>
                {tl('code_label', lang)}
              </label>
              <input
                value={code}
                onChange={e => { setCode(e.target.value); setError(false); }}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                type="text" placeholder={tl('code_ph', lang)} maxLength={10}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border-subtle)')}
              />
              {error && (
                <p style={{ color: 'var(--red-required)', fontSize: 12, textAlign: 'center', marginTop: 10 }}>
                  ❌ {tl('not_found', lang)}
                </p>
              )}
              <p style={{ color: 'var(--text-muted)', fontSize: 11, textAlign: 'center',
                marginTop: 10, marginBottom: 20, lineHeight: 1.6 }}>
                {tl('code_hint', lang)}
              </p>
              <IonButton expand="block" color="primary" shape="round"
                disabled={loading || !code.trim()} onClick={handleSearch}
                style={{ '--border-radius': '25px' } as React.CSSProperties}>
                {loading ? tl('loading', lang) : tl('search', lang)}
              </IonButton>
            </div>
          )}

          {/* ── Résultat client ── */}
          {client && (
            <div>
              {/* Score */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-mid)',
                borderRadius: 18, padding: '24px', marginBottom: 16,
              }}>
                <p style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: 1,
                  textTransform: 'uppercase', marginBottom: 4 }}>
                  {tl('hello', lang)},{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>{client.name}</strong> 👋
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 16 }}>
                  #{client.code}
                </p>
                <div style={{ textAlign: 'center', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 64,
                    fontWeight: 900, color: 'var(--accent)',
                    filter: 'drop-shadow(0 0 20px var(--accent-glow))' }}>
                    {client.points}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: 16, marginLeft: 8 }}>pts</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 12,
                  textAlign: 'center', marginBottom: 8 }}>
                  {tl('your_points', lang)}
                </p>
                <ProgressBar points={client.points} />
              </div>

              {/* Récompenses */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: 18, padding: '20px', marginBottom: 16 }}>
                <p style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: 1,
                  textTransform: 'uppercase', marginBottom: 14 }}>{tl('rewards_title', lang)}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {REWARDS.map((r, i) => {
                    const unlocked = client.points >= r.points;
                    const missing  = r.points - client.points;
                    const rewardText = r.reward[lang as keyof typeof r.reward] ?? r.reward.fr;
                    return (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '14px', borderRadius: 12,
                        background: unlocked ? 'var(--accent-dim)' : 'var(--bg-elevated)',
                        border: `1px solid ${unlocked ? 'var(--border-mid)' : 'var(--border-subtle)'}`,
                        opacity: unlocked ? 1 : 0.65,
                        transition: 'all 0.3s',
                      }}>
                        <span style={{ fontSize: 28 }}>{r.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ color: 'var(--text-primary)', fontSize: 13,
                            fontWeight: 600, marginBottom: 3 }}>
                            {rewardText}
                          </div>
                          <div style={{ fontSize: 11,
                            color: unlocked ? 'var(--green)' : 'var(--text-muted)' }}>
                            {unlocked
                              ? tl('unlocked', lang)
                              : `${tl('locked', lang)} ${missing} ${tl('pts_needed', lang)}`}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18,
                            fontWeight: 900,
                            color: unlocked ? 'var(--accent)' : 'var(--text-muted)' }}>
                            {r.points}
                          </span>
                          <span style={{ color: 'var(--text-muted)', fontSize: 10, marginLeft: 3 }}>pts</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Historique */}
              {client.history.length > 0 && (
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: 18, padding: '20px', marginBottom: 16 }}>
                  <p style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: 1,
                    textTransform: 'uppercase', marginBottom: 14 }}>{tl('history', lang)}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {client.history.map((h, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', padding: '8px 0',
                        borderBottom: i < client.history.length - 1
                          ? '1px solid var(--border-subtle)' : 'none',
                      }}>
                        <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
                          ✓ {h.replace(/\+\d+/, '').trim()}
                        </span>
                        <span style={{ color: 'var(--green)', fontWeight: 700, fontSize: 13 }}>
                          {h.match(/\+\d+/)?.[0] ?? ''} pts
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button onClick={() => { setClient(null); setCode(''); }}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)',
                  fontSize: 12, cursor: 'pointer', display: 'block',
                  textAlign: 'center', width: '100%', marginBottom: 16 }}>
                ← {tl('logout', lang)}
              </button>
            </div>
          )}

          {/* ── Pas encore de code ── */}
          {!client && (
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 16, padding: '20px 24px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13,
                fontWeight: 600, marginBottom: 6 }}>{tl('no_code', lang)}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: 12,
                lineHeight: 1.6, marginBottom: 16 }}>{tl('no_code_sub', lang)}</p>
              <IonButton color="primary" fill="outline" shape="round"
                onClick={() => setTab('booking')}>
                {tl('book_now', lang)} 🌴
              </IonButton>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}