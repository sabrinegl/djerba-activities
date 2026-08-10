import React from 'react';
import { IonButton } from '@ionic/react';
import { PACKS } from '../data/data';
import type { Pack } from '../data/data';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { T, t } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
  onBookPack: (pack: Pack) => void;
}

export default function PackagesPage({ lang, setLang, onBookPack }: Props) {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100%' }}>
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div style={{ padding: '24px 18px 20px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>

          <p style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: 4,
            textTransform: 'uppercase', marginBottom: 8 }}>
            {t(T.packages.label, lang)}
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px,4vw,44px)', color: 'var(--text-primary)', marginBottom: 8 }}>
            {t(T.packages.title, lang)}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              {t(T.packages.title2, lang)}
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: 14 }}>
            {t(T.packages.subtitle, lang)}
          </p>

          <div style={{ display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {PACKS.map((p, i) => (
              <div key={i}
                style={{
                  background: 'var(--bg-card)', borderRadius: 18,
                  border: '1px solid var(--border-mid)',
                  padding: '26px 22px', position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px var(--accent-glow)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}>

                {t(p.badge, lang) && (
                  <span style={{
                    position: 'absolute', top: 14, right: 14,
                    background: 'var(--accent)', color: '#000',
                    fontSize: 9, fontWeight: 800,
                    padding: '3px 10px', borderRadius: 20,
                  }}>{t(p.badge, lang)}</span>
                )}

                <h3 style={{ fontFamily: 'var(--font-serif)',
                  fontSize: 22, color: 'var(--text-primary)', marginBottom: 4 }}>{t(p.name, lang)}</h3>

                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-serif)',
                    fontSize: 36, fontWeight: 900, color: 'var(--accent)' }}>{p.price}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 5 }}>
                    {t(T.packages.per_person, lang)}
                  </span>
                </div>

                <div style={{ marginBottom: 22, flex: 1 }}>
                  {(p.features[lang] ?? p.features.fr).map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8,
                      marginBottom: 8, color: 'var(--text-secondary)', fontSize: 13 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>{f}
                    </div>
                  ))}
                </div>

                <IonButton
                  expand="block"
                  fill={i === 1 ? 'solid' : 'outline'}
                  color="primary"
                  shape="round"
                  onClick={() => onBookPack(p)}
                  style={{ '--border-radius': '25px' } as React.CSSProperties}>
                  {t(T.packages.book_pack, lang)}
                </IonButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}