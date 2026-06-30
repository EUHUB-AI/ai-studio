'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { GlassCard } from '../../components/shared/GlassCard';
import styles from './infra.module.css';

// Reuses the main site's Formspree project so submissions work on deploy.
// Tagged with interest=infra-waitlist; swap for a dedicated form when ready.
const FORM_ID = 'xeelrddn';
const MIKE_LINKEDIN = 'https://www.linkedin.com/in/gordievsky/';

const SERVICES = [
  {
    title: 'Infrastructure migration',
    body: 'Cloud-to-cloud, on-prem to cloud, or data-centre exit — mapped, codified in Terraform/IaC, and cut over with minimal downtime.',
  },
  {
    title: 'DevSecOps pipelines',
    body: 'CI/CD with security as a gate, not an afterthought: SAST/DAST, SBOMs, secret and dependency scanning, and policy-as-code.',
  },
  {
    title: 'Platform & reliability (SRE)',
    body: 'Observability, autoscaling, and incident-ready operations — built for uptime and on-call sanity.',
  },
  {
    title: 'Compliance-ready by default',
    body: 'EU data residency, GDPR-aligned data flows, audit trails, and controls mapped to ISO 27001 / SOC 2 expectations.',
  },
];

const STEPS = [
  { n: '01', t: 'Assess', d: 'Map your estate, risks, and the migration path.' },
  { n: '02', t: 'Migrate', d: 'Codify and move workloads with IaC; zero-downtime cutover.' },
  { n: '03', t: 'Harden', d: 'Build security and compliance into the pipeline.' },
  { n: '04', t: 'Operate', d: 'Observability, SRE practices, and clean handover. You own it.' },
];

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

function WaitlistForm({ id, compact }: { id: string; compact?: boolean }) {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <p role="status" className="text-[var(--foreground)] font-medium">
        ✓ You&rsquo;re on the list — we&rsquo;ll be in touch when infra.euhub-ai.com goes live.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${compact ? '' : 'max-w-md'}`}>
      <div className="flex-1">
        <label htmlFor={id} className="sr-only">Work email</label>
        <input
          id={id}
          type="email"
          name="email"
          required
          placeholder="you@company.com"
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
        {state.submitting ? 'Joining…' : 'Get early access'}
      </button>
    </form>
  );
}

export function InfraLanding() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('infra-theme') : null;
    if (saved === 'dark' || saved === 'light') setTheme(saved);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'light' ? 'dark' : 'light';
      try { window.localStorage.setItem('infra-theme', next); } catch {}
      return next;
    });
  };

  return (
    <div className={`${styles.shell} ${theme === 'light' ? styles.light : styles.dark} font-sans selection:bg-[var(--primary)] selection:text-[var(--on-primary)]`}>
      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 glass border-b border-[var(--card-border)] backdrop-blur-md">
        <div className="container mx-auto px-4 h-[var(--header-height)] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold tracking-tight text-[var(--foreground)]">EuHub AI</span>
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--primary)]">/ Infra</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="https://euhub-ai.com" className="hidden sm:inline text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition">euhub-ai.com&nbsp;↗</a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              className="w-9 h-9 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)] hover:border-[var(--primary)] transition"
            >
              <span aria-hidden>{theme === 'light' ? '☾' : '☀'}</span>
            </button>
            <a href="#waitlist" className="rounded-full px-5 py-2 text-sm font-semibold bg-[var(--primary)] text-[var(--on-primary)] shadow-[0_0_18px_var(--primary-glow)] hover:-translate-y-0.5 transition">
              Join the waitlist
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden">
          <div aria-hidden className={`absolute inset-0 -z-10 ${styles.heroGlow}`} />
          <div aria-hidden className={`absolute inset-0 -z-10 ${styles.gridLines}`} />
          <div className="container mx-auto px-4 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <Eyebrow>Infrastructure migration · DevSecOps</Eyebrow>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[var(--foreground)]">
                Migrate with confidence.{' '}
                <span className={styles.gradientText}>Secure by design.</span>
              </h1>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                We move your workloads to the cloud and bake security into every pipeline — infrastructure-as-code you own,
                EU data residency, and zero lock-in. Architected by a senior DevOps engineer, not handed to juniors.
              </p>

              <div id="waitlist" className="pt-2 scroll-mt-24">
                <WaitlistForm id="email-hero" />
                <p className="text-xs text-[var(--muted-foreground)] mt-2">
                  Be first when infra.euhub-ai.com goes live. No spam, ever.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href="mailto:hello@euhub-ai.com?subject=infra.euhub-ai.com" className="rounded-full px-6 py-3 font-semibold border border-[var(--muted-foreground)] text-[var(--foreground)] hover:border-[var(--foreground)] transition">
                  Book a call with Mike&nbsp;→
                </a>
                <span className="font-mono text-xs text-[var(--muted-foreground)]">
                  EU data residency · IaC you own · No vendor lock-in
                </span>
              </div>
            </div>

            {/* Terminal / CI mockup — dark in both themes, like a real terminal */}
            <div className="lg:col-span-5 hidden lg:block" aria-hidden>
              <div className="rounded-xl border border-[#2A2D3E] bg-[#0D0E15] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2D3E]">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-mono text-[11px] text-slate-400">infra · migration pipeline</span>
                </div>
                <div className="p-5 font-mono text-sm space-y-3">
                  <div className="text-slate-400">$ infra migrate --plan</div>
                  {PIPELINE.map((p) => (
                    <div key={p.label} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-slate-200">
                        <span className={`${p.active ? `text-[#00E5FF] ${styles.pulse} animate-pulse` : 'text-[#00E5FF]'}`}>{p.mark}</span>
                        {p.label}
                      </span>
                      <span className="text-slate-500 text-xs">{p.meta}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-3 border-t border-[#2A2D3E] flex items-center justify-between">
                    <span className="text-slate-400 text-xs">status</span>
                    <span className="text-[#00FF55] text-xs">migration ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- What we do ---------- */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mb-12">
            <Eyebrow>01 // What we do</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3">
              Infrastructure, migrated and hardened.
            </h2>
          </div>
          <div role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
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
        </section>

        {/* ---------- How it works ---------- */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mb-12">
            <Eyebrow>02 // How it works</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3">
              A migration path you can see end to end.
            </h2>
          </div>
          <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div role="listitem" key={s.n} className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]">
                <div className="font-mono text-2xl font-bold text-[var(--primary)]">{s.n}</div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mt-3">{s.t}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- The expert ---------- */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mb-12">
            <Eyebrow>03 // Who</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3">
              Led by a DevOps Architect.
            </h2>
          </div>
          <GlassCard className="p-8 border border-[var(--card-border)] bg-[var(--card-bg)] flex flex-col sm:flex-row gap-8 items-start">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[var(--card-border)] flex-shrink-0">
              <Image src="/photos/mike1.webp" alt="Mike G." fill sizes="112px" className="object-cover object-top" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Mike G.</h3>
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--primary)] mt-1">DevOps Architect</p>
              <p className="text-[var(--muted-foreground)] leading-relaxed mt-4 max-w-xl">
                Years building and securing cloud platforms across AWS, GCP, and Azure, Kubernetes, and Terraform.
                He leads every infrastructure engagement personally — your migration is architected, not outsourced to juniors.
              </p>
              <a
                href={MIKE_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Mike G. on LinkedIn (opens in a new tab)"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--primary)] hover:underline"
              >
                Connect on LinkedIn
                <span aria-hidden>→</span>
              </a>
            </div>
          </GlassCard>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="container mx-auto px-4 py-24">
          <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 md:p-14 text-center max-w-3xl mx-auto">
            <Eyebrow>04 // Early access</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-3 mb-4">
              infra.euhub-ai.com is launching soon.
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-xl mx-auto">
              Join the waitlist for early access to EU-grade infrastructure migration and DevSecOps.
            </p>
            <div className="flex justify-center">
              <WaitlistForm id="email-final" />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-[var(--card-border)]">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted-foreground)]">
          <p>&copy; {new Date().getFullYear()} EuHub AI — Engineers-incubator s.r.o.</p>
          <div className="flex items-center gap-6">
            <a href="https://euhub-ai.com" className="hover:text-[var(--foreground)] transition">← Back to euhub-ai.com</a>
            <a href="https://euhub-ai.com/en/privacy" className="hover:text-[var(--foreground)] transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
