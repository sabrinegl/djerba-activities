import StarRow from './StarRow';
import { t } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

interface Review {
  name: string;
  flag: string;
  text: Record<Lang, string>;
  stars: number;
}

const FLAG_COLOR: Record<string, { bg: string; color: string; country: string }> = {
  '🇫🇷': { bg: '#1d4ed8', color: '#fff', country: 'FR' },
  '🇩🇿': { bg: '#15803d', color: '#fff', country: 'DZ' },
  '🇧🇪': { bg: '#b91c1c', color: '#fff', country: 'BE' },
  '🇩🇪': { bg: '#1f2937', color: '#f59e0b', country: 'DE' },
  '🇬🇧': { bg: '#1e3a5f', color: '#fff', country: 'UK' },
  '🇷🇺': { bg: '#7f1d1d', color: '#fff', country: 'RU' },
  '🇹🇳': { bg: '#991b1b', color: '#fff', country: 'TN' },
};

const VERIFIED: Record<Lang, string> = {
  fr: 'Client vérifié ✓', en: 'Verified client ✓', de: 'Verifizierter Kunde ✓',
  ru: 'Проверенный клиент ✓', it: 'Cliente verificato ✓',
};

interface Props {
  review: Review;
  lang: Lang;
}

export default function ReviewCard({ review: r, lang }: Props) {
  const flagInfo = FLAG_COLOR[r.flag] ?? { bg: 'var(--accent)', color: '#fff', country: '??' };
  const initial = r.name.trim().charAt(0).toUpperCase();

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16, padding: '22px',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-strong)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px var(--accent-glow)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <StarRow n={r.stars} />

      <p style={{
        color: 'var(--text-secondary)', fontSize: 13,
        lineHeight: 1.75, fontStyle: 'italic', margin: 0, flex: 1,
      }}>
        "{t(r.text, lang)}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%',
            background: flagInfo.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 16, color: flagInfo.color,
            fontFamily: 'var(--font-serif)',
          }}>
            {initial}
          </div>
          <div style={{
            position: 'absolute', bottom: -2, right: -4,
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 4, padding: '1px 4px',
            fontSize: 8, fontWeight: 700,
            color: 'var(--text-muted)', letterSpacing: 0.5,
          }}>
            {flagInfo.country}
          </div>
        </div>

        <div>
          <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 13 }}>
            {r.name}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: 11 }}>
            {VERIFIED[lang] ?? VERIFIED.fr}
          </div>
        </div>
      </div>
    </div>
  );
}