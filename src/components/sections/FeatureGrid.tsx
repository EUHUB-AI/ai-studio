'use client';

import { GlassCard } from '../shared/GlassCard';
import { useState, useEffect } from 'react';

export const FeatureGrid = ({ lang, dict }: { lang: string, dict: any }) => {
    // Simulated chat messages for the AI Agent demo
    const [messages, setMessages] = useState<{ text: string, isBot: boolean }[]>([]);

    useEffect(() => {
        const sequence = [
            { text: dict.features?.demo?.msg1 || "Can you process the Q3 invoices for me?", isBot: false, delay: 1000 },
            { text: dict.features?.demo?.msg2 || "Processing 412 invoices. Validating against ERP...", isBot: true, delay: 2500 },
            { text: dict.features?.demo?.msg3 || "Done. 410 approved. 2 flagged for review.", isBot: true, delay: 4500 },
        ];

        let timeoutIds: NodeJS.Timeout[] = [];

        const runSequence = () => {
            setMessages([]);
            sequence.forEach((msg) => {
                const id = setTimeout(() => {
                    setMessages(prev => [...prev, { text: msg.text, isBot: msg.isBot }]);
                }, msg.delay);
                timeoutIds.push(id);
            });

            // Loop sequence
            const loopId = setTimeout(runSequence, 8000);
            timeoutIds.push(loopId);
        };

        runSequence();

        return () => {
            timeoutIds.forEach(clearTimeout);
        };
    }, []);

    const features = dict.features?.items || [
        { title: 'ERP/CRM Syncing', desc: 'Bidirectional sync with SAP, Salesforce, and internal databases.' },
        { title: 'Secure Vault', desc: 'On-premise or private cloud deployment. Military-grade isolation.' },
        { title: 'Real-time Analytics', desc: 'Live dashboards showing operational friction reduction and ROI.' },
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

                    {/* Main AI Agent Demo Card (Span 2 Cols, 2 Rows) */}
                    <GlassCard className="col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md transition-all duration-500 opacity-100 group-hover:[&:not(:hover)]:opacity-70 dark:group-hover:[&:not(:hover)]:opacity-40 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-[var(--card-hover)] overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

                        <div className="p-8 pb-0">
                            <h3 className="text-2xl font-bold mb-2">{dict.features?.agentTitle || 'Autonomous AI Assistants'}</h3>
                            <p className="text-[var(--muted-foreground)] max-w-md">
                                {dict.features?.agentDesc || 'Deploy agents that execute multi-step operations like invoice processing, tier-1 support, and data aggregation entirely on their own.'}
                            </p>
                        </div>

                        {/* Animated Chat Interface */}
                        <div className="mt-8 mx-8 mb-0 p-4 bg-white dark:bg-[#0D0E15] border-t border-l border-r border-slate-200 dark:border-[#2A2D3E] rounded-t-xl h-64 overflow-hidden relative shadow-[0_-5px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                            <div className="flex gap-2 mb-4 border-b border-slate-200 dark:border-[#2A2D3E] pb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/80"></div>
                            </div>
                            <div className="space-y-4 flex flex-col justify-end">
                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-[fade-in-up_0.3s_ease-out_forwards]`}>
                                        <div className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${msg.isBot ? 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-[#151722] dark:text-slate-300 dark:border-[#2A2D3E]' : 'bg-[var(--primary)] text-white dark:bg-[var(--primary)]/20 dark:border dark:border-[var(--primary)]/30'}`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {/* Typing indicator */}
                                {messages.length > 0 && messages.length < 3 && (
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
                            <div className="absolute top-12 left-0 w-full h-12 bg-gradient-to-b from-white dark:from-[#0D0E15] to-transparent"></div>
                        </div>

                        {/* Custom CSS for animation inline */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes fade-in-up {
                                0% { opacity: 0; transform: translateY(10px); }
                                100% { opacity: 1; transform: translateY(0); }
                            }
                        `}} />
                    </GlassCard>

                    {/* Standard Features */}
                    {features.map((feature: any, i: number) => (
                        <GlassCard key={i} className={`flex flex-col justify-between p-8 border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md transition-all duration-500 opacity-100 group-hover:[&:not(:hover)]:opacity-70 dark:group-hover:[&:not(:hover)]:opacity-40 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] hover:border-[rgba(123,97,255,0.3)] ${i === 2 ? 'md:col-span-2' : 'col-span-1'} ${i === 3 ? 'md:col-span-1' : ''} relative overflow-hidden`}>
                            {/* Decorative Background Elements to fill empty space */}
                            <div className="absolute -bottom-8 -right-8 opacity-5 text-black dark:text-white pointer-events-none">
                                {i === 0 && <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>}
                                {i === 1 && <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
                                {i === 2 && <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>}
                                {i === 3 && <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>}
                            </div>

                            <div className="relative z-10 w-12 h-12 rounded-lg bg-[var(--card-border)]/20 border border-[var(--card-border)] flex items-center justify-center mb-6 text-[var(--secondary)]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {i === 0 && <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>} {/* Activity */}
                                    {i === 1 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>} {/* Shield */}
                                    {i === 2 && <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></>} {/* Bar Chart */}
                                    {i === 3 && <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>} {/* File */}
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
