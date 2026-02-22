import { GlassCard } from '../shared/GlassCard';

export const PainsSituations = ({ lang, dict }: { lang: string, dict: any }) => {
    // Default fallback content if dict isn't populated yet
    const situations = dict.diagnostic?.situations || [
        {
            pain: "Fragmented Data Silos causing delayed decision making.",
            mechanism: "We deploy retrieval-augmented generation (RAG) agents that index your entire internal knowledge base.",
            outcome: "Instant, secure data retrieval and cross-departmental alignment."
        },
        {
            pain: "Manual Customer Support failing to scale during peak hours.",
            mechanism: "Autonomous Level-1 support agents trained on your specific product parameters and tone of voice.",
            outcome: "24/7 resolution of 80% of tier-1 tickets with zero headcount increase."
        },
        {
            pain: "Inefficient internal workflows and bloated processes.",
            mechanism: "Agentic workflow automation that connects your existing ERP/CRM via custom API orchestration.",
            outcome: "Up to 40% reduction in manual data entry and operational friction."
        }
    ];

    return (
        <section id="diagnostic" className="relative py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 relative">
                    {/* Left Sticky Column */}
                    <div className="lg:w-1/3 relative">
                        <div className="sticky top-32 space-y-6">
                            <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase">
                                01 // {dict.diagnostic?.tag || 'The Diagnostic'}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                                {dict.diagnostic?.title || 'Mapping Pains to Autonomous Solutions'}
                            </h2>
                            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                                {dict.diagnostic?.description || 'We do not sell generic software. We audit your workflows and engineer specific AI mechanisms that eliminate your exact operational bottlenecks.'}
                            </p>

                            <div className="hidden lg:block w-16 h-1 mt-8 bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                        </div>
                    </div>

                    {/* Right Scrolling Column (Cards) */}
                    <div className="lg:w-2/3 space-y-8">
                        {situations.map((item: any, index: number) => (
                            <GlassCard
                                key={index}
                                className="group relative border-[var(--card-border)] bg-[rgba(21,23,34,0.4)] hover:bg-[rgba(21,23,34,0.8)] transition-all duration-500 hover:border-[var(--card-hover)] overflow-hidden"
                            >
                                {/* Card Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 p-2 sm:p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                        {/* Pain Point */}
                                        <div className="flex-1 min-w-[200px] bg-[rgba(13,14,21,0.6)] rounded-xl p-5 border border-dashed border-[#1e2333]/50 relative z-10 hover:border-[#F43F5E]/30 transition-colors">
                                            <div className="text-[10px] uppercase font-mono tracking-widest text-[var(--muted-foreground)] mb-2">{dict.diagnostic?.situationLabel || 'Situation // Pain'}</div>
                                            <div className="text-sm text-slate-300 font-medium">
                                                {item.pain}
                                            </div>
                                        </div>

                                        {/* Mechanism */}
                                        <div className="flex-1 min-w-[200px] bg-[rgba(13,14,21,0.6)] rounded-xl p-5 border border-[var(--primary)]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] relative z-10 hover:border-[var(--primary)]/50 transition-colors">
                                            <div className="text-[10px] uppercase font-mono tracking-widest text-[var(--primary)] mb-2">{dict.diagnostic?.mechanismLabel || 'Engineered Mechanism'}</div>
                                            <div className="text-sm text-white font-medium">
                                                {item.mechanism}
                                            </div>
                                        </div>

                                        {/* Outcome */}
                                        <div className="w-full sm:w-[180px] shrink-0 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-xl p-5 border border-[var(--secondary)]/20 flex flex-col justify-center items-center text-center relative z-10 hover:border-[var(--secondary)]/50 transition-colors">
                                            <div className="text-[10px] uppercase font-mono tracking-widest text-[var(--secondary)] mb-2">{dict.diagnostic?.deltaLabel || 'Projected Delta'}</div>
                                            <div className="text-[13px] text-slate-300 leading-tight">
                                                {item.outcome}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
