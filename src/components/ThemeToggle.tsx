import type { Theme } from '../hooks/useTheme';

interface Props {
  theme: Theme;
  toggleTheme: () => void;
}

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
        fontSize: 20,
        cursor: 'pointer',
        boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
        transition: 'background 0.3s, transform 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}