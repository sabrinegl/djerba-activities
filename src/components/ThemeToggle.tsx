import type { Theme } from '../hooks/useTheme';

interface Props {
  theme: Theme;
  toggleTheme: () => void;
}

const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4.5" />
    <line x1="12" y1="1.5" x2="12" y2="3.8" />
    <line x1="12" y1="20.2" x2="12" y2="22.5" />
    <line x1="4.2" y1="4.2" x2="5.9" y2="5.9" />
    <line x1="18.1" y1="18.1" x2="19.8" y2="19.8" />
    <line x1="1.5" y1="12" x2="3.8" y2="12" />
    <line x1="20.2" y1="12" x2="22.5" y2="12" />
    <line x1="4.2" y1="19.8" x2="5.9" y2="18.1" />
    <line x1="18.1" y1="5.9" x2="19.8" y2="4.2" />
  </svg>
);

const IconMoon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
  </svg>
);

export default function ThemeToggle({ theme, toggleTheme }: Props) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer de thème"
      style={{
        position: 'fixed',
        bottom: 90,
        right: 16,
        zIndex: 999,
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-mid)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent)',
        cursor: 'pointer',
        boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
        transition: 'background 0.3s, transform 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
}