import React from 'react';
import { LANGUAGES } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function LanguageSwitcher({ lang, setLang }: Props) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      padding: '8px 18px',
      background: '#070f1c',
      borderBottom: '1px solid rgba(14,165,233,0.12)',
    }}>
      {LANGUAGES.map(({ code, flag, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            title={label}
            aria-label={`Switch to ${label}`}
            aria-pressed={active}
            style={{
              background: active ? 'rgba(14,165,233,0.15)' : 'transparent',
              border: `1px solid ${active ? '#0ea5e9' : 'transparent'}`,
              borderRadius: 6,
              padding: '5px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s',
              color: active ? '#e0f2fe' : '#4a6a8a',
              fontWeight: active ? 600 : 400,
              fontSize: 13,
            }}
            onMouseEnter={e => {
              if (!active) {
                (e.currentTarget as HTMLButtonElement).style.color = '#94c8e8';
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(14,165,233,0.07)';
              }
            }}
            onMouseLeave={e => {
              if (!active) {
                (e.currentTarget as HTMLButtonElement).style.color = '#4a6a8a';
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: 15, lineHeight: 1 }}>{flag}</span>
            <span style={{ fontSize: 12, letterSpacing: 0.5, fontWeight: active ? 700 : 400 }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
