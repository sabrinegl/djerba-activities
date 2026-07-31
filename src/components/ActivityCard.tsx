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
        background: '#0e1a0e',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hov ? '#C9A84C' : 'rgba(201,168,76,0.12)'}`,
        transition: 'all 0.4s cubic-bezier(.23,1,.32,1)',
        transform: inView ? (hov ? 'translateY(-5px)' : 'none') : 'translateY(30px)',
        opacity: inView ? 1 : 0,
        transitionDelay: `${i * 0.07}s`,
        boxShadow: hov ? '0 14px 40px rgba(201,168,76,0.13)' : 'none',
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
        <span style={{
          position: 'absolute', top: 10, right: 10,
          background: 'rgba(201,168,76,0.9)', color: '#000',
          fontSize: 9, fontWeight: 800, padding: '3px 9px',
          borderRadius: 20, letterSpacing: 1, textTransform: 'uppercase',
        }}>
          {a.tag}
        </span>
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
          margin: '0 0 14px', color: '#6a8a6a',
          fontSize: 12.5, lineHeight: 1.6, flex: 1,
        }}>
          {a.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{
              color: '#C9A84C', fontWeight: 800, fontSize: 17,
              fontFamily: "'Playfair Display', serif",
            }}>
              {a.price}
            </span>
            <span style={{ color: '#4a6a4a', fontSize: 11, marginLeft: 4 }}>
              {a.unit}
            </span>
          </div>

          {/* ✅ Clicking this button triggers the booking flow directly */}
          <IonButton
            size="small"
            fill={hov ? 'solid' : 'outline'}
            color="warning"
            style={{ '--border-radius': '20px', fontSize: 11 } as React.CSSProperties}
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
