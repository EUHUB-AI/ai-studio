'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { GlassCard } from '../../components/shared/GlassCard';
import styles from './infra.module.css';

// Dedicated Formspree form for the infra waitlist.
const FORM_ID = 'xzdlajdd';
const MIKE_LINKEDIN = 'https://www.linkedin.com/in/gordievsky/';
const LOCALES = ['en', 'sk', 'de'] as const;
type Locale = (typeof LOCALES)[number];

// Terminal/CI mockup stays in English (a real terminal) and is decorative.
const PIPELINE = [
  { mark: '✓', label: 'Discover', meta: '142 resources mapped' },
  { mark: '✓', label: 'Provision', meta: 'Terraform / IaC — 0 drift' },
  { mark: '⟳', label: 'Security', meta: 'SAST · SBOM · secrets scan', active: true },
  { mark: '✓', label: 'Deploy', meta: 'eu-central-1 · 0 critical vulns' },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[var(--primary)]">
      {children}
    </span>
  );
}

function WaitlistForm({ id, t }: { id: string; t: any }) {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return <p role="status" className="text-[var(--foreground)] font-medium">{t.success}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <div className="flex-1">
        <label htmlFor={id} className="sr-only">{t.emailLabel}</label>
        <input
          id={id}
          type="email"
          name="email"
          required
          placeholder={t.emailPlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none transition"
        />
        <input type="hidden" name="interest" value="infra-waitlist" />
        <ValidationError field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-lg px-6 py-3 font-semibold bg-[var(--primary)] text-[var(--on-primary)] shadow-[0_0_20px_var(--primary-glow)] transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {state.submitting ? t.submitting : t.submit}
      </button>
    </form>
  );
}

export function InfraLanding({ dicts }: { dicts: Record<Locale, any> }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [lang, setLang] = useState<Locale>('en');

  // Restore theme + language; fall back to the browser language on first visit.
  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem('infra-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme);
      const savedLang = window.localStorage.getItem('infra-lang') as Locale | null;
      if (savedLang && LOCALES.includes(savedLang)) setLang(savedLang);
      else {
        const nav = (navigator.language || 'en').slice(0, 2) as Locale;
        if (LOCALES.includes(nav)) setLang(nav);
      }
    } catch {}
  }, []);

  const toggleTheme = () => setTheme((prev) => {
    const next = prev === 'light' ? 'dark' : 'light';
    try { window.localStorage.setItem('infra-theme', next); } catch {}
    return next;
  });

  const changeLang = (l: Locale) => {
    setLang(l);
    try { window.localStorage.setItem('infra-lang', l); } catch {}
  };

  const t = dicts[lang] || dicts.en;
  const logo = theme === 'light' ? '/logo_light.webp' : '/logo_dark.webp';

  return (
    <div className={`${styles.shell} ${theme === 'light' ? styles.light : styles.dark} font-sans selection:bg-[var(--primary)] selection:text-[var(--on-primary)]`}>
      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 glass border-b border-[var(--card-border)] backdrop-blur-md">
        <div className="container mx-auto px-4 h-[var(--header-height)] flex items-center justify-between gap-4">
          <a href="https://euhub-ai.com" className="flex items-center gap-2 flex-shrink-0" aria-label="EuHub AI">
            <span className="relative w-[112px] h-[36px] block">
              <Image src={logo} alt="EuHub AI" fill sizes="112px" style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--primary)]">/ Infra</span>
          </a>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2 text-xs font-bold" role="group" aria-label="Language">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => changeLang(l)}
                  aria-current={lang === l ? 'true' : undefined}
                  className={`tracking-widest transition-colors ${lang === l ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              className="w-9 h-9 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)] hover:border-[var(--primary)] transition"
            >
              <span aria-hidden>{theme === 'light' ? '☾' : '☀'}</span>
            </button>
            <a href="#waitlist" className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-semibold bg-[var(--primary)] text-[var(--on-primary)] shadow-[0_0_18px_var(--primary-glow)] hover:-translate-y-0.5 transition">
              {t.nav.waitlist}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden pt-20 pb-24">
          <div aria-hidden className={`absolute inset-0 -z-10 ${styles.heroGlow}`} />
          <div aria-hidden className={`absolute inset-0 -z-10 ${styles.gridLines}`} />
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[var(--foreground)]">
                {t.hero.titleLead}{' '}
                <span className={styles.gradientText}>{t.hero.titleAccent}</span>
              </h1>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              <div id="waitlist" className="pt-2 scroll-mt-24">
                <WaitlistForm id="email-hero" t={t.hero} />
                <p className="text-xs text-[var(--muted-foreground)] mt-2">{t.hero.note}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href="mailto:hello@euhub-ai.com?subject=infra.euhub-ai.com" className="rounded-full px-6 py-3 font-semibold border border-[var(--muted-foreground)] text-[var(--foreground)] hover:border-[var(--foreground)] transition">
                  {t.hero.secondaryCta}
                </a>
                <span className="font-mono text-xs text-[var(--muted-foreground)]">{t.hero.trust}</span>
              </div>
            </div>

            {/* Terminal / CI mockup — dark in both themes, like a real terminal */}
            <div className="lg:col-span-5 hidden lg:block" aria-hidden>
              <div className="rounded-xl border border-[#2A2D3E] bg-[#0D0E15] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2D3E]">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-mono text-[11px] text-slate-400">{t.hero.terminalCaption}</span>
                </div>
                <div className="p-5 font-mono text-sm space-y-3">
                  <div className="text-slate-400">$ infra migrate --plan</div>
                  {PIPELINE.map((p) => (
                    <div key={p.label} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-slate-200">
                        <span className={p.active ? `text-[#00E5FF] ${styles.pulse} animate-pulse` : 'text-[#00E5FF]'}>{p.mark}</span>
                        {p.label}
                      </span>
                      <span className="text-slate-500 text-xs">{p.meta}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-3 border-t border-[#2A2D3E] flex items-center justify-between">
                    <span className="text-slate-400 text-xs">status</span>
                    <span className="text-[#00FF55] text-xs">{t.hero.terminalStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- What we do ---------- */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3">
                {t.services.title}
              </h2>
            </div>
            <div role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.services.items.map((s: any) => (
                <GlassCard
                  key={s.title}
                  role="listitem"
                  className="p-8 border border-[var(--card-border)] bg-[var(--card-bg)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40"
                >
                  <h3 className="text-xl font-bold text-[var(--foreground)]">{s.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mt-3">{s.body}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <Eyebrow>{t.process.eyebrow}</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3">
                {t.process.title}
              </h2>
            </div>
            <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.process.steps.map((s: any, i: number) => (
                <div role="listitem" key={s.t} className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]">
                  <div className="font-mono text-2xl font-bold text-[var(--primary)]">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mt-3">{s.t}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mt-2">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- The expert ---------- */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <Eyebrow>{t.expert.eyebrow}</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3">
                {t.expert.title}
              </h2>
            </div>
            <GlassCard className="p-8 border border-[var(--card-border)] bg-[var(--card-bg)] flex flex-col sm:flex-row gap-8 items-start">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[var(--card-border)] flex-shrink-0">
                <Image src="/photos/mike1.webp" alt={t.expert.name} fill sizes="112px" className="object-cover object-top" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">{t.expert.name}</h3>
                <p className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mt-1">{t.expert.role}</p>
                <p className="text-[var(--muted-foreground)] leading-relaxed mt-4 max-w-xl">{t.expert.bio}</p>
                <a
                  href={MIKE_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.expert.connect} — ${t.expert.name}`}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--primary)] hover:underline"
                >
                  {t.expert.connect}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 md:p-14 text-center max-w-3xl mx-auto">
              <Eyebrow>{t.cta.eyebrow}</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3 mb-4">
                {t.cta.title}
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-xl mx-auto">{t.cta.body}</p>
              <div className="flex justify-center">
                <WaitlistForm id="email-final" t={t.hero} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-[var(--card-border)]">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted-foreground)]">
          <p>&copy; {new Date().getFullYear()} EuHub AI — Engineers-incubator s.r.o.</p>
          <div className="flex items-center gap-6">
            <a href="https://euhub-ai.com" className="hover:text-[var(--foreground)] transition">{t.footerLinks.back}</a>
            <a href="https://euhub-ai.com/en/privacy" className="hover:text-[var(--foreground)] transition">{t.footerLinks.privacy}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
