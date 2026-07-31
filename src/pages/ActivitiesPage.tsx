import { useState } from 'react';
import type { Activity } from '../data/data';
import { ACTIVITIES } from '../data/data';
import ActivityCard from '../components/ActivityCard';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { T, t } from '../i18n/translations';
import type { Lang } from '../i18n/translations';
import React from 'react';

interface Props {
  onBook: (activity: Activity) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

const FILTER_KEYS = ['Tous', 'Mer', 'Désert', 'Gastronomie', 'Mobilité'];

const FILTER_LABELS: Record<string, Record<Lang, string>> = {
  Tous:        { fr: 'Tous',        en: 'All',          de: 'Alle',        ru: 'Все',         it: 'Tutti'       },
  Mer:         { fr: 'Mer',         en: 'Sea',          de: 'Meer',        ru: 'Море',        it: 'Mare'        },
  Désert:      { fr: 'Désert',      en: 'Desert',       de: 'Wüste',       ru: 'Пустыня',     it: 'Deserto'     },
  Gastronomie: { fr: 'Gastronomie', en: 'Gastronomy',   de: 'Gastronomie', ru: 'Гастрономия', it: 'Gastronomia' },
  Mobilité:    { fr: 'Mobilité',    en: 'Mobility',     de: 'Mobilität',   ru: 'Транспорт',   it: 'Mobilità'    },
};

export default function ActivitiesPage({ onBook, lang, setLang }: Props) {
  const [filter, setFilter] = useState('Tous');

  const filtered = filter === 'Tous'
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.category === filter);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100%' }}>
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div style={{ padding: '24px 18px 20px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>

          <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 4,
            textTransform: 'uppercase', marginBottom: 8 }}>
            {t(T.activities.label, lang)}
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px,4vw,44px)', color: 'var(--text-primary)', marginBottom: 28 }}>
            {t(T.activities.title, lang)}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              {t(T.activities.title2, lang)}
            </span>
          </h2>

          {/* ── Custom filter pills ── */}
          <div style={{
            display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32,
          }}>
            {FILTER_KEYS.map(fk => {
              const active = filter === fk;
              return (
                <button
                  key={fk}
                  onClick={() => setFilter(fk)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '8px 16px',
                    background: active ? '#0ea5e9' : 'rgba(14,165,233,0.07)',
                    border: `1px solid ${active ? '#0ea5e9' : 'rgba(14,165,233,0.18)'}`,
                    borderRadius: 99,
                    cursor: 'pointer',
                    color: active ? '#000' : '#94a3b8',
                    fontWeight: active ? 700 : 400,
                    fontSize: 13,
                    transition: 'all 0.2s',
                    boxShadow: active ? '0 4px 14px rgba(14,165,233,0.25)' : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(14,165,233,0.45)';
                      (e.currentTarget as HTMLButtonElement).style.color = '#e0f2fe';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(14,165,233,0.18)';
                      (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8';
                    }
                  }}
                >
                  <span>{FILTER_LABELS[fk][lang]}</span>
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 20,
          }}>
            {filtered.map((a, i) => (
              <ActivityCard
                key={a.id}
                activity={a}
                index={i}
                onBook={onBook}
                bookLabel={t(T.activities.book_btn, lang)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
