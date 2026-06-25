'use client';

import { useEffect } from 'react';
import * as CC from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

// Map our consent categories onto Google Consent Mode v2 signals and push the update.
// (The denied-by-default state is set in app/layout.tsx before GTM loads.)
function syncConsentMode() {
  const granted = (cat: string) => (CC.acceptedCategory(cat) ? 'granted' : 'denied');
  const analytics = granted('analytics');
  const marketing = granted('marketing');

  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  const update = {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  };

  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', update);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(['consent', 'update', update]);
  }
}

const translations = {
  en: {
    consentModal: {
      title: 'We value your privacy',
      description:
        'We use strictly necessary cookies to run this site and, with your consent, cookies to measure traffic and improve our service. See our <a href="/en/cookie">Cookie Policy</a>.',
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Reject all',
      showPreferencesBtn: 'Manage preferences',
    },
    preferencesModal: {
      title: 'Cookie preferences',
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Reject all',
      savePreferencesBtn: 'Save preferences',
      closeIconLabel: 'Close',
      sections: [
        {
          title: 'Strictly necessary',
          description: 'Required for the website to function. Always on.',
          linkedCategory: 'necessary',
        },
        {
          title: 'Analytics',
          description: 'Help us understand how visitors use the site (e.g. Google Analytics).',
          linkedCategory: 'analytics',
        },
        {
          title: 'Marketing',
          description: 'Used to measure advertising and show relevant B2B ads (e.g. Meta Pixel).',
          linkedCategory: 'marketing',
        },
        {
          title: 'More information',
          description: 'For any questions, <a href="mailto:hello@euhub-ai.com">contact us</a>.',
        },
      ],
    },
  },
  sk: {
    consentModal: {
      title: 'Záleží nám na vašom súkromí',
      description:
        'Používame nevyhnutné súbory cookie na prevádzku stránky a s vaším súhlasom súbory cookie na meranie návštevnosti a zlepšovanie služby. Pozrite si naše <a href="/sk/cookie">Zásady používania súborov cookie</a>.',
      acceptAllBtn: 'Prijať všetko',
      acceptNecessaryBtn: 'Odmietnuť všetko',
      showPreferencesBtn: 'Spravovať predvoľby',
    },
    preferencesModal: {
      title: 'Predvoľby súborov cookie',
      acceptAllBtn: 'Prijať všetko',
      acceptNecessaryBtn: 'Odmietnuť všetko',
      savePreferencesBtn: 'Uložiť predvoľby',
      closeIconLabel: 'Zavrieť',
      sections: [
        {
          title: 'Nevyhnutné',
          description: 'Potrebné na fungovanie stránky. Vždy zapnuté.',
          linkedCategory: 'necessary',
        },
        {
          title: 'Analytické',
          description: 'Pomáhajú nám pochopiť, ako návštevníci používajú stránku (napr. Google Analytics).',
          linkedCategory: 'analytics',
        },
        {
          title: 'Marketingové',
          description: 'Slúžia na meranie reklamy a zobrazovanie relevantných B2B reklám (napr. Meta Pixel).',
          linkedCategory: 'marketing',
        },
        {
          title: 'Ďalšie informácie',
          description: 'V prípade otázok nás <a href="mailto:hello@euhub-ai.com">kontaktujte</a>.',
        },
      ],
    },
  },
  de: {
    consentModal: {
      title: 'Ihre Privatsphäre ist uns wichtig',
      description:
        'Wir verwenden unbedingt erforderliche Cookies, um diese Website zu betreiben, und – mit Ihrer Einwilligung – Cookies, um Zugriffe zu messen und unseren Service zu verbessern. Siehe unsere <a href="/de/cookie">Cookie-Richtlinie</a>.',
      acceptAllBtn: 'Alle akzeptieren',
      acceptNecessaryBtn: 'Alle ablehnen',
      showPreferencesBtn: 'Einstellungen verwalten',
    },
    preferencesModal: {
      title: 'Cookie-Einstellungen',
      acceptAllBtn: 'Alle akzeptieren',
      acceptNecessaryBtn: 'Alle ablehnen',
      savePreferencesBtn: 'Einstellungen speichern',
      closeIconLabel: 'Schließen',
      sections: [
        {
          title: 'Unbedingt erforderlich',
          description: 'Für den Betrieb der Website erforderlich. Immer aktiv.',
          linkedCategory: 'necessary',
        },
        {
          title: 'Analyse',
          description: 'Helfen uns zu verstehen, wie Besucher die Website nutzen (z. B. Google Analytics).',
          linkedCategory: 'analytics',
        },
        {
          title: 'Marketing',
          description: 'Dienen der Messung von Werbung und der Anzeige relevanter B2B-Werbung (z. B. Meta Pixel).',
          linkedCategory: 'marketing',
        },
        {
          title: 'Weitere Informationen',
          description: 'Bei Fragen <a href="mailto:hello@euhub-ai.com">kontaktieren Sie uns</a>.',
        },
      ],
    },
  },
};

export default function CookieConsent({ locale }: { locale: string }) {
  useEffect(() => {
    const lang = ['en', 'sk', 'de'].includes(locale) ? locale : 'en';

    CC.run({
      guiOptions: {
        consentModal: { layout: 'box wide', position: 'bottom left' },
        preferencesModal: { layout: 'box' },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {},
        marketing: {},
      },
      language: {
        default: lang,
        translations,
      },
      onFirstConsent: syncConsentMode,
      onConsent: syncConsentMode,
      onChange: syncConsentMode,
    });
  }, [locale]);

  return null;
}
