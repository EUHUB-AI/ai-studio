'use client';

import { GlassCard } from '../shared/GlassCard';
import { useState, useEffect, useRef } from 'react';

type Role = 'manager' | 'dispatcher' | 'telemetry' | 'lokator' | 'finance' | 'driver';
type Msg = { role: Role; from: string; text: string };
type Scene = { id: string; title: string; messages: Msg[] };

// Hard-coded English fallback used when the dictionary lacks features.demo.scenes
const FALLBACK_SCENES: Scene[] = [
    { id: 'invoices', title: 'Invoice processing', messages: [
        { role: 'manager', from: 'You', text: 'Can you process the Q3 invoices?' },
        { role: 'finance', from: 'Finance', text: 'Processing 412 invoices. Validating against ERP…' },
        { role: 'finance', from: 'Finance', text: 'Done. 410 approved, 2 flagged for review.' },
    ]},
    { id: 'briefing', title: 'Morning briefing', messages: [
        { role: 'dispatcher', from: 'Dispatcher', text: '☕ Morning briefing — 40 trucks, 38 active trips. 3 decisions need you today.' },
        { role: 'dispatcher', from: 'Dispatcher', text: 'Overnight fuel anomaly on one truck · 2 invoices overdue (€3,240) · 1 unassigned load.' },
        { role: 'dispatcher', from: 'Dispatcher', text: 'I handled 32 routine trips myself. Coffee?' },
    ]},
    { id: 'fuel-fraud', title: 'Fuel-fraud catch', messages: [
        { role: 'telemetry', from: 'Telemetry', text: '⚠️ Truck TD118BA — 55 L/100km vs 30 norm at 02:15. Off-profile.' },
        { role: 'lokator', from: 'Locator', text: 'GPS × fuel-card × CMR: 18-min stop off-route, card drew +72 L, cargo unchanged.' },
        { role: 'finance', from: 'Finance', text: 'Estimated loss ≈ €600/month if it repeats.' },
        { role: 'dispatcher', from: 'Dispatcher', text: 'Above my mandate — escalating for your decision: block card / call driver?' },
    ]},
    { id: 'cold-chain', title: 'Cold-chain exception', messages: [
        { role: 'telemetry', from: 'Telemetry', text: '⚠️ Return-air +9.1°C for 7 min (limit +8°C) near Vienna.' },
        { role: 'dispatcher', from: 'Dispatcher', text: 'Calling the driver now. ETA unaffected — watching the temperature recover.' },
    ]},
    { id: 'theft', title: 'Cargo-theft alert', messages: [
        { role: 'lokator', from: 'Locator', text: '🚨 TD118BA — 22-min unplanned stop off the planned corridor.' },
        { role: 'dispatcher', from: 'Dispatcher', text: 'Risk: 18.5t chilled load. Contacting the driver.' },
        { role: 'driver', from: 'Driver', text: 'All good — mandatory EU 561 break. Trailer locked, seal intact.' },
        { role: 'lokator', from: 'Locator', text: 'Cross-checked: matches required rest, no door event. Cleared. ✅' },
    ]},
    { id: 'compliance', title: 'Compliance guard', messages: [
        { role: 'driver', from: 'Driver', text: 'Unloaded, CMR signed, temperature log clean.' },
        { role: 'finance', from: 'Finance', text: 'Invoice generated, €2,275.50, due in 21 days.' },
        { role: 'lokator', from: 'Locator', text: '⚠️ EU 561: 7h45m driven — both next loads would breach the daily limit. Rest 11h.' },
        { role: 'dispatcher', from: 'Dispatcher', text: 'Rest scheduled, books closed. No Friday call to accounting.' },
    ]},
    { id: 'weekend', title: 'Weekend autonomy', messages: [
        { role: 'dispatcher', from: 'Dispatcher', text: '🤖 Weekend mode — manager off. Holding first-line operations.' },
        { role: 'dispatcher', from: 'Dispatcher', text: '6 trips completed, 1 load auto-assigned within mandate, 1 false alarm cleared.' },
        { role: 'dispatcher', from: 'Dispatcher', text: 'Monday: one summary instead of 47 notifications.' },
    ]},
];

// Role-tinted accents for the sender label (dot + name) on agent bubbles
const ROLE_ACCENT: Record<Role, { dot: string; text: string }> = {
    manager: { dot: '', text: '' },
    dispatcher: { dot: 'bg-slate-400', text: 'text-slate-500 dark:text-slate-400' },
    telemetry: { dot: 'bg-amber-400', text: 'text-amber-600 dark:text-amber-400' },
    lokator: { dot: 'bg-sky-400', text: 'text-sky-600 dark:text-sky-400' },
    finance: { dot: 'bg-emerald-400', text: 'text-emerald-600 dark:text-emerald-400' },
    driver: { dot: 'bg-violet-400', text: 'text-violet-600 dark:text-violet-400' },
};

export const FeatureGrid = ({ lang, dict }: { lang: string, dict: any }) => {
    const scenes: Scene[] = (dict.features?.demo?.scenes && dict.features.demo.scenes.length)
        ? dict.features.demo.scenes
        : FALLBACK_SCENES;

    // Animation state
    const [sceneIndex, setSceneIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(0);
    const [typing, setTyping] = useState(false);
    const [reduced, setReduced] = useState(false);
    const [onScreen, setOnScreen] = useState(true);

    const chatRef = useRef<HTMLDivElement>(null);

    // Honour prefers-reduced-motion
    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduced(mq.matches);
        const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    // Pause the loop when the card is offscreen
    useEffect(() => {
        const el = chatRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;
        const obs = new IntersectionObserver(
            ([entry]) => setOnScreen(entry.isIntersecting),
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Drive one scene per effect run; advancing sceneIndex re-triggers the effect.
    // All timers are tracked locally and cleared on cleanup (no leaks on unmount).
    useEffect(() => {
        if (!onScreen) return;
        const scene = scenes[sceneIndex];
        if (!scene) return;

        const timers: ReturnType<typeof setTimeout>[] = [];
        const next = () => setSceneIndex((i) => (i + 1) % scenes.length);

        if (reduced) {
            // Reduced motion: show the full transcript statically, cross-fade on a slow timer.
            setTyping(false);
            setVisibleCount(scene.messages.length);
            timers.push(setTimeout(next, 5000));
        } else {
            setVisibleCount(0);
            setTyping(scene.messages.length > 0);

            const PACE = 4; // 4× slower presentation — more time to read each step
            let acc = 0;
            scene.messages.forEach((m, idx) => {
                // per-message delay scaled to text length, then slowed by PACE
                acc += Math.min(1400, Math.max(900, 700 + m.text.length * 9)) * PACE;
                const at = acc;
                timers.push(setTimeout(() => {
                    setVisibleCount(idx + 1);
                    setTyping(idx + 1 < scene.messages.length);
                }, at));
            });

            // hold at the end of the scene, then advance + loop
            timers.push(setTimeout(next, acc + 2000 * PACE));
        }

        return () => timers.forEach(clearTimeout);
    }, [sceneIndex, reduced, onScreen, scenes]);

    const scene = scenes[sceneIndex];

    const features = dict.features?.items || [
        { title: 'ERP/CRM Syncing', desc: 'Bidirectional sync with SAP, Salesforce, and internal databases.' },
        { title: 'Secure Vault', desc: 'Isolated single-tenant deployment in your own environment (on-premise or private cloud): encryption in transit and at rest, role-based access control, and full audit trails.' },
        { title: 'Automated Reporting', desc: 'Generate board-ready audit reports instantaneously.' }
    ];

    return (
        <section id="capabilities" className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 block">
                        03 // {dict.features?.tag || 'Capabilities'}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {dict.features?.title || 'Engineered For Enterprise'}
                    </h2>
                </div>

                {/* Bento Box Grid */}
                <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] relative z-10">

                    {/* Main AI Agent Demo Card (Span 2 Cols, full height) */}
                    <GlassCard className="col-span-1 md:col-span-2 md:row-span-3 flex flex-col justify-between border border-[#E2E8F0] dark:border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md transition-all duration-300 opacity-100 group-hover:[&:not(:hover)]:opacity-50 dark:group-hover:[&:not(:hover)]:opacity-30 hover:scale-[1.02] hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] overflow-hidden relative">

                        <div className="p-8 pb-0">
                            <h3 className="text-2xl font-bold mb-2">{dict.features?.agentTitle || 'Autonomous AI Assistants'}</h3>
                            <p className="text-[var(--muted-foreground)] max-w-md">
                                {dict.features?.agentDesc || 'Deploy agents that execute multi-step operations like invoice processing, tier-1 support, and data aggregation entirely on their own.'}
                            </p>
                            <p className="mt-3 text-sm text-[var(--muted-foreground)] max-w-md">
                                {dict.features?.demo?.attribution || 'Real scenes from our autonomous fleet-ops product,'}{' '}
                                <a
                                    href="https://lkw-control.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-0.5 font-semibold text-[var(--primary)] hover:underline"
                                >
                                    LKW-Control
                                    <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-y-px">
                                        <path d="M7 17L17 7M17 7H8M17 7v9" />
                                    </svg>
                                </a>
                            </p>
                        </div>

                        {/* Animated Chat Interface */}
                        <div ref={chatRef} className="mt-8 mx-8 mb-0 p-4 bg-white dark:bg-[#0D0E15] border-t border-l border-r border-slate-200 dark:border-[#2A2D3E] rounded-t-xl flex-1 min-h-[16rem] overflow-hidden relative flex flex-col shadow-[0_-5px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                            {/* Window chrome: traffic lights · address (lkw-control.com) · scene title pill */}
                            <div className="flex items-center gap-2 mb-3 border-b border-slate-200 dark:border-[#2A2D3E] pb-3 relative z-20">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/80"></div>
                                {/* Faux address bar — brands every frame as the real LKW-Control product */}
                                <span aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 dark:text-slate-500 pointer-events-none select-none">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="5" y="11" width="14" height="10" rx="2" />
                                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                    </svg>
                                    lkw-control.com
                                </span>
                                <span className="ml-auto text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 dark:bg-[#151722] dark:text-slate-400 border border-slate-200 dark:border-[#2A2D3E]">
                                    {scene?.title}
                                </span>
                            </div>

                            {/* Message list */}
                            <div
                                aria-live="polite"
                                key={reduced ? scene?.id : undefined}
                                className={`flex-1 overflow-hidden flex flex-col justify-end space-y-3 ${reduced ? 'animate-[scene-fade_0.8s_ease-out]' : ''}`}
                            >
                                {scene?.messages.slice(0, visibleCount).map((msg, i) => {
                                    const isManager = msg.role === 'manager';
                                    const accent = ROLE_ACCENT[msg.role] || ROLE_ACCENT.dispatcher;
                                    return (
                                        <div key={i} className={`flex flex-col ${isManager ? 'items-end' : 'items-start'} animate-[fade-in-up_0.3s_ease-out_forwards]`}>
                                            {!isManager && (
                                                <div className="flex items-center gap-1.5 mb-1 px-1">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`}></span>
                                                    <span className={`text-[11px] font-medium ${accent.text}`}>{msg.from}</span>
                                                </div>
                                            )}
                                            <div className={`px-4 py-2 rounded-lg max-w-[80%] text-sm break-words ${isManager
                                                ? 'bg-[#0E434C] text-white dark:bg-[#093035] dark:border dark:border-[#0E434C] dark:text-white'
                                                : 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-[#151722] dark:text-white dark:border-[#2A2D3E]'}`}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Typing indicator */}
                                {!reduced && typing && (
                                    <div className="flex justify-start animate-pulse">
                                        <div className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 dark:bg-[#151722] dark:border-[#2A2D3E]">
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Fade out top of chat */}
                            <div className="absolute top-12 left-0 w-full h-12 bg-gradient-to-b from-white dark:from-[#0D0E15] to-transparent pointer-events-none z-10"></div>
                        </div>

                        {/* Custom CSS for animation inline */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes fade-in-up {
                                0% { opacity: 0; transform: translateY(10px); }
                                100% { opacity: 1; transform: translateY(0); }
                            }
                            @keyframes scene-fade {
                                0% { opacity: 0; }
                                100% { opacity: 1; }
                            }
                        `}} />
                    </GlassCard>

                    {/* Standard Features */}
                    {features.map((feature: any, i: number) => (
                        <GlassCard key={i} className={`flex flex-col justify-between p-8 border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md transition-all duration-300 opacity-100 group-hover:[&:not(:hover)]:opacity-50 dark:group-hover:[&:not(:hover)]:opacity-30 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] hover:border-[#00E5FF]/40 col-span-1 relative overflow-hidden`}>
                            {/* Decorative Background Elements to fill empty space */}
                            <div aria-hidden="true" className="absolute -bottom-8 -right-8 opacity-5 text-black dark:text-white pointer-events-none">
                                {i === 0 && <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>}
                                {i === 1 && <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
                                {i === 2 && <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>}
                            </div>

                            <div className="relative z-10 w-12 h-12 rounded-lg bg-[var(--card-border)]/20 border border-[var(--card-border)] flex items-center justify-center mb-6 text-[var(--secondary)]">
                                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {i === 0 && <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>} {/* Activity */}
                                    {i === 1 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>} {/* Shield */}
                                    {i === 2 && <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>} {/* File (Automated Reporting) */}
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </GlassCard>
                    ))}

                </div>
            </div>
        </section>
    );
};
