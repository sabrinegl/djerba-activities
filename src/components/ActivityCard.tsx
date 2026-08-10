import { useState, useRef, useEffect } from 'react';
import type { Activity } from '../data/data';
import { IonButton } from '@ionic/react';
import React from 'react';
import { t } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

interface Props {
  activity: Activity;
  index: number;
  lang: Lang;
  onBook?: (activity: Activity) => void;
  bookLabel?: string;
}

function useInView(threshold = 0.1) {
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

export default function ActivityCard({ activity: a, index: i, lang, onBook, bookLabel = 'Réserver →' }: Props) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--bg-card)',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hov ? 'var(--accent)' : 'var(--border-subtle)'}`,
        transition: 'all .35s ease',
        transform: inView ? (hov ? 'translateY(-8px) scale(1.02)' : 'scale(1)') : 'translateY(30px)',
        opacity: inView ? 1 : 0,
        transitionDelay: `${i * 0.07}s`,
        boxShadow: hov ? '0 18px 40px rgba(0,0,0,.25)' : '0 6px 18px rgba(0,0,0,.10)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
        <img src={a.img} alt={t(a.title, lang)}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hov ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)',
        }} />
      </div>

      <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          margin: '0 0 6px', color: 'var(--text-primary)', fontSize: 15,
          fontFamily: 'var(--font-serif)',
        }}>
          {t(a.title, lang)}
        </h3>
        <p style={{
          margin: '0 0 14px', color: 'var(--text-secondary)',
          fontSize: 12.5, lineHeight: 1.6, flex: 1,
        }}>
          {t(a.desc, lang)}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{
              color: 'var(--accent)', fontWeight: 800, fontSize: 17,
              fontFamily: 'var(--font-serif)',
            }}>
              {t(a.price, lang)}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 11, marginLeft: 4 }}>
              {t(a.unit, lang)}
            </span>
          </div>

          <IonButton
            size="small"
            fill="outline"
            style={{
                '--border-color': 'var(--accent)',
                '--color': 'var(--accent)',
                '--border-radius': '22px'
            } as React.CSSProperties}
            onClick={(e) => {
              e.stopPropagation();
              if (onBook) onBook(a);
            }}
          >
            {bookLabel}
          </IonButton>
        </div>
      </div>
    </div>
  );
}