import { useState } from 'react';
import React from 'react';
import { IonApp } from '@ionic/react';
import { useLanguage } from './hooks/useLanguage';
import HomePage from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import PackagesPage from './pages/PackagesPage';
import BookingPage from './pages/BookingPage';
import PackageBookingPage from './pages/PackageBookingPage';
import ReviewPage from './pages/ReviewPage';
import RewardsPage from './pages/RewardsPage';
import type { Activity, Pack } from './data/data';
import './theme.css';

const TABS = [
  { id: 'home',       label: 'Accueil'   },
  { id: 'activities', label: 'Activités' },
  { id: 'packages',   label: 'Formules'  },
  { id: 'booking',    label: 'Réserver'  },
  { id: 'rewards',    label: 'Rewards'   },
  { id: 'review',     label: 'Avis'      },
];

const TAB_LABELS: Record<string, Record<string, string>> = {
  home:       { fr: 'Accueil',   en: 'Home',       de: 'Start',       ru: 'Главная',     it: 'Home'        },
  activities: { fr: 'Activités', en: 'Activities', de: 'Aktivitäten', ru: 'Активности',  it: 'Attività'    },
  packages:   { fr: 'Formules',  en: 'Packages',   de: 'Pakete',      ru: 'Пакеты',      it: 'Pacchetti'   },
  booking:    { fr: 'Réserver',  en: 'Book',       de: 'Buchen',      ru: 'Бронировать', it: 'Prenota'     },
  rewards:    { fr: 'Points',    en: 'Rewards',    de: 'Punkte',      ru: 'Награды',     it: 'Premi'       },
  review:     { fr: 'Avis',      en: 'Review',     de: 'Bewertung',   ru: 'Отзыв',       it: 'Recensione'  },
};

const TAB_ICONS: Record<string, React.ReactElement> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  ),
  activities: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  packages: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  booking: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth={2.5} />
    </svg>
  ),
  rewards: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  review: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
    </svg>
  ),
};

export default function App() {
  const { lang, setLang } = useLanguage();
  const [tab, setTabState]              = useState('home');
  const [preselected, setPreselected]   = useState<Activity | null>(null);
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);

  const navigateTo = (id: string) => setTabState(id);

  const handleBook = (activity: Activity) => {
    setPreselected(activity);
    setTabState('booking');
  };

  const handleBookPack = (pack: Pack) => {
    setSelectedPack(pack);
    setTabState('pack-booking');
  };

  const renderPage = () => {
    switch (tab) {
      case 'home':
        return <HomePage setTab={navigateTo} lang={lang} setLang={setLang} />;
      case 'activities':
        return <ActivitiesPage onBook={handleBook} lang={lang} setLang={setLang} />;
      case 'packages':
        return <PackagesPage onBookPack={handleBookPack} lang={lang} setLang={setLang} />;
      case 'booking':
        return (
          <BookingPage
            preselected={preselected}
            onClearPreselected={() => setPreselected(null)}
            lang={lang}
            setLang={setLang}
          />
        );
      case 'pack-booking':
        return selectedPack ? (
          <PackageBookingPage
            pack={selectedPack}
            onBack={() => setTabState('packages')}
            lang={lang}
            setLang={setLang}
          />
        ) : null;
      case 'rewards':
        return <RewardsPage lang={lang} setLang={setLang} setTab={navigateTo} />;
      case 'review':
        return <ReviewPage lang={lang} setLang={setLang} />;
      default:
        return <HomePage setTab={navigateTo} lang={lang} setLang={setLang} />;
    }
  };

  const activeTabBar = tab === 'pack-booking' ? 'packages' : tab;

  return (
    <IonApp>
      <div style={{
        display: 'flex', flexDirection: 'column',
        height: '100vh', background: 'var(--bg-deep)', overflow: 'hidden',
      }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {renderPage()}
        </div>

        {/* ── Bottom Tab Bar ── */}
        <div style={{
          background: '#070f1c',
          borderTop: '1px solid rgba(14,165,233,0.12)',
          display: 'flex', flexShrink: 0, zIndex: 50,
          padding: '8px 4px',
          paddingBottom: 'calc(8px + env(safe-area-inset-bottom))',
          gap: 2,
        }}>
          {TABS.map(tabItem => {
            const active = activeTabBar === tabItem.id;
            return (
              <button
                key={tabItem.id}
                onClick={() => navigateTo(tabItem.id)}
                style={{
                  flex: 1,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: 4,
                  padding: '7px 2px',
                  background: active ? 'rgba(14,165,233,0.10)' : 'transparent',
                  border: `1px solid ${active ? 'rgba(14,165,233,0.22)' : 'transparent'}`,
                  borderRadius: 12,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(.23,1,.32,1)',
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (!active)
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(14,165,233,0.05)';
                }}
                onMouseLeave={e => {
                  if (!active)
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                }}
              >
                <div style={{
                  stroke: active ? '#0ea5e9' : '#3a5a7a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  filter: active ? 'drop-shadow(0 0 4px rgba(14,165,233,0.45))' : 'none',
                  transition: 'all 0.25s',
                }}>
                  {TAB_ICONS[tabItem.id]}
                </div>
                <span style={{
                  fontSize: 8, letterSpacing: 0.4, textTransform: 'uppercase',
                  fontWeight: active ? 700 : 400,
                  color: active ? '#0ea5e9' : '#3a5a7a',
                  transition: 'color 0.25s', whiteSpace: 'nowrap',
                }}>
                  {TAB_LABELS[tabItem.id]?.[lang] ?? tabItem.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </IonApp>
  );
}
