import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { IonButton } from '@ionic/react';
import { REVIEWS } from '../data/data';
import ReviewCard from '../components/ReviewCard';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { T, t } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

interface Props {
  setTab: (id: string) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

// Icônes SVG inline — modernes, style ligne
const IconWave = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(14,165,233,0.55)" strokeWidth="1.4" strokeLinecap="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
  </svg>
);

const IconAnchor = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(14,165,233,0.45)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="8" x2="12" y2="21" />
    <path d="M5 12H2a10 10 0 0020 0h-3" />
  </svg>
);

const IconCompass = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(14,165,233,0.45)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
  </svg>
);

const IconSun = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(249,115,22,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export default function HomePage({ setTab, lang, setLang }: Props) {
  const [hRef, hInView] = useInView();

  const shimmerText: React.CSSProperties = {
    background: 'linear-gradient(90deg, #0ea5e9, #38bdf8, #7dd3fc, #0ea5e9)',
    backgroundSize: '200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'shimmer 3s linear infinite',
    fontStyle: 'italic',
  };

  const floatingIcons = [
    // Gauche
    { comp: <IconCompass />, x: '3%',  y: '20%', d: '0.8s' },
    { comp: <IconSun />,     x: '3%',  y: '62%', d: '2.1s' },
    // Droite — même positions Y
    { comp: <IconWave />,    x: '93%', y: '20%', d: '0s'   },
    { comp: <IconAnchor />,  x: '93%', y: '62%', d: '1.4s' },
  ];

  return (
    <div style={{ background: 'var(--bg-deep)', color: 'var(--text-primary)', overflowX: 'hidden' }}>

      {/* ── Logo ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 10, padding: '12px 20px',
        background: '#070f1c',
        borderBottom: '1px solid rgba(14,165,233,0.10)',
      }}>
        {/* Icône logo */}
        <div style={{
          width: 34, height: 34, borderRadius: 9, flexShrink: 0,
          background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(14,165,233,0.4)',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17l4-8 4 4 3-6 4 10" />
            <path d="M2 20h20" />
          </svg>
        </div>
        {/* Nom */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span style={{
            fontFamily: 'var(--font-serif)', fontWeight: 900,
            fontSize: 17, color: '#f0f9ff', letterSpacing: 0.3,
          }}>Djerba</span>
          <span style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 11, color: '#0ea5e9', letterSpacing: 1.2,
            textTransform: 'uppercase',
          }}>Activities</span>
        </div>
      </div>

      <LanguageSwitcher lang={lang} setLang={setLang} />

      {/* ── Hero ── */}
      <section style={{
        minHeight: '80vh', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '0 20px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 55% 40%, rgba(10,40,80,0.9) 0%, transparent 70%),
            linear-gradient(150deg, #060f1e 0%, #0a1e3a 55%, #060f1e 100%)
          `,
        }} />

        {/* Icônes SVG flottantes */}
        {floatingIcons.map((f, i) => (
          <div key={i} style={{
            position: 'absolute', left: f.x, top: f.y,
            animation: 'floatAnim 4s ease-in-out infinite',
            animationDelay: f.d, pointerEvents: 'none',
          }}>
            {f.comp}
          </div>
        ))}

        <div
          ref={hRef}
          style={{
            position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 720,
            opacity: hInView ? 1 : 0,
            transform: hInView ? 'none' : 'translateY(28px)',
            transition: 'all 0.9s cubic-bezier(.23,1,.32,1)',
          }}
        >
          {/* ✅ Badge location — simple texte, pas un bouton */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginBottom: 22,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="rgba(14,165,233,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{
              color: 'rgba(14,165,233,0.75)',
              fontSize: 11, letterSpacing: 3.5,
              textTransform: 'uppercase', fontWeight: 500,
            }}>
              {t(T.home.badge, lang).replace(/✦/g, '').trim()}
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="rgba(14,165,233,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(38px, 7vw, 72px)',
            lineHeight: 1.07, margin: '0 0 20px', fontWeight: 900,
          }}>
            <span style={{ color: 'var(--text-primary)' }}>{t(T.home.h1a, lang)} </span>
            <span style={shimmerText}>{t(T.home.h1b, lang)}</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>{t(T.home.h1c, lang)} </span>
            <span style={shimmerText}>{t(T.home.h1d, lang)}</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(13px, 1.8vw, 16px)',
            lineHeight: 1.85, maxWidth: 520, margin: '0 auto 36px', fontWeight: 300,
          }}>
            {t(T.home.subtitle, lang)}
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <IonButton
              color="primary" size="large" shape="round"
              onClick={() => setTab('activities')}
              style={{ '--box-shadow': '0 8px 24px rgba(14,165,233,0.3)' } as React.CSSProperties}
            >
              {t(T.home.cta1, lang)}
            </IonButton>
            <IonButton
              fill="outline" color="primary" size="large" shape="round"
              onClick={() => setTab('packages')}
            >
              {t(T.home.cta2, lang)}
            </IonButton>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div style={{
        background: 'linear-gradient(90deg, #080f1e, #0d1f35, #080f1e)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        padding: '28px 20px', gap: 12,
      }}>
        {[
          { v: '500+', l: t(T.home.stat_clients,    lang) },
          { v: '15+',  l: t(T.home.stat_activities, lang) },
          { v: '5★',   l: t(T.home.stat_rating,     lang) },
          { v: '24/7', l: t(T.home.stat_support,    lang) },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 900, color: 'var(--accent)',
            }}>{s.v}</div>
            <div style={{
              color: 'var(--text-muted)', fontSize: 10,
              letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 3,
            }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── Reviews ── */}
      <div style={{ padding: '60px 20px 80px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{
            color: 'var(--accent)', fontSize: 10,
            letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12,
          }}>
            {t(T.home.reviews_label, lang)}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 4vw, 40px)', color: 'var(--text-primary)',
          }}>
            {t(T.home.reviews_title, lang)}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              {t(T.home.reviews_title2, lang)}
            </span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 18,
        }}>
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {/* CTA bas de page */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <IonButton
            color="primary" size="large" shape="round"
            onClick={() => setTab('booking')}
            style={{ '--box-shadow': '0 8px 24px rgba(14,165,233,0.25)' } as React.CSSProperties}
          >
            📅 {t(T.nav.booking, lang)}
          </IonButton>
        </div>
      </div>
    </div>
  );
}
