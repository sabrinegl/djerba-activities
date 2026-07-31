import { useState, useCallback } from 'react';
import type { Lang } from '../i18n/translations';

const STORAGE_KEY = 'djerba_lang';

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && ['fr', 'en', 'de', 'ru', 'it'].includes(stored)) return stored;
    const browser = navigator.language.slice(0, 2) as Lang;
    if (['fr', 'en', 'de', 'ru', 'it'].includes(browser)) return browser;
  } catch { /* SSR or privacy mode */ }
  return 'fr';
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  }, []);

  return { lang, setLang };
}
