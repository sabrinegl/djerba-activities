import { useState, useRef, useEffect } from 'react';
import type { Activity } from '../data/data';
import { IonButton } from '@ionic/react';
import React from 'react';

interface Props {
  activity: Activity;
  index: number;
  onBook?: (activity: Activity) => void; // ✅ callback to trigger booking
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

export default function ActivityCard({ activity: a, index: i, onBook, bookLabel = 'Réserver →' }: Props) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#07121F',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hov ? '#D6B25E' : 'rgba(214,178,94,.15)'}`,
        transition: 'all .35s ease',
        transform: inView ? (hov ? 'translateY(-8px) scale(1.02)' : 'scale(1)') : 'translateY(30px)',
        opacity: inView ? 1 : 0,
        transitionDelay: `${i * 0.07}s`,
        boxShadow: hov ? '0 18px 40px rgba(0,0,0,.35)' : '0 6px 18px rgba(0,0,0,.15)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
        <img src={a.img} alt={a.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hov ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 55%)',
        }} />
      </div>

      {/* Body */}
      <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          margin: '0 0 6px', color: '#fff', fontSize: 15,
          fontFamily: "'Playfair Display', serif",
        }}>
          {a.title}
        </h3>
        <p style={{
          margin: '0 0 14px', color:'#CBD5E1',
          fontSize: 12.5, lineHeight: 1.6, flex: 1,
        }}>
          {a.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{
              color: '#38BDF8', fontWeight: 800, fontSize: 17,
              fontFamily: "'Playfair Display', serif",
            }}>
              {a.price}
            </span>
            <span style={{ color: '#94A3B8', fontSize: 11, marginLeft: 4 }}>
              {a.unit}
            </span>
          </div>

          {/* ✅ Clicking this button triggers the booking flow directly */}
          <IonButton
            size="small"
            fill="outline"
            style={{
                '--border-color':'#D6B25E',
                '--color':'#D6B25E',
                '--border-radius':'22px'
            } as React.CSSProperties}
            onClick={(e) => {
              e.stopPropagation(); // prevent card click bubbling
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
