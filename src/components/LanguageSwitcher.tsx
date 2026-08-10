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
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border-subtle)',
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
              background: active ? 'var(--accent-dim)' : 'transparent',
              border: `1px solid ${active ? 'var(--accent)' : 'transparent'}`,
              borderRadius: 6,
              padding: '5px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s',
              color: active ? 'var(--text-primary)' : 'var(--text-muted)',
              fontWeight: active ? 600 : 400,
              fontSize: 13,
            }}
            onMouseEnter={e => {
              if (!active) {
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-hover)';
              }
            }}
            onMouseLeave={e => {
              if (!active) {
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
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