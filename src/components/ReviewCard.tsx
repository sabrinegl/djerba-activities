import StarRow from './StarRow';

interface Review {
  name: string;
  flag: string;
  text: string;
  stars: number;
}

// Couleur d'avatar selon le drapeau/pays
const FLAG_COLOR: Record<string, { bg: string; color: string; country: string }> = {
  '🇫🇷': { bg: '#1d4ed8', color: '#fff', country: 'FR' },
  '🇩🇿': { bg: '#15803d', color: '#fff', country: 'DZ' },
  '🇧🇪': { bg: '#b91c1c', color: '#fff', country: 'BE' },
  '🇩🇪': { bg: '#1f2937', color: '#f59e0b', country: 'DE' },
  '🇬🇧': { bg: '#1e3a5f', color: '#fff', country: 'UK' },
  '🇷🇺': { bg: '#7f1d1d', color: '#fff', country: 'RU' },
  '🇹🇳': { bg: '#991b1b', color: '#fff', country: 'TN' },
};

interface Props {
  review: Review;
}

export default function ReviewCard({ review: r }: Props) {
  const flagInfo = FLAG_COLOR[r.flag] ?? { bg: '#0ea5e9', color: '#fff', country: '??' };
  // Initiale du prénom
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
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(14,165,233,0.4)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(14,165,233,0.08)';
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
        "{r.text}"
      </p>

      {/* Avatar + nom */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Cercle avec initiale + badge pays */}
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
          {/* Badge pays en bas à droite */}
          <div style={{
            position: 'absolute', bottom: -2, right: -4,
            background: '#0d1f35',
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
            Client vérifié ✓
          </div>
        </div>
      </div>
    </div>
  );
}
