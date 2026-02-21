import { GlassCard } from '../shared/GlassCard';

export const BespokeEngineering = ({ lang, dict }: { lang: string, dict: any }) => {
    // Default fallback content
    const steps = dict.engineering?.steps || [
        {
            num: "01",
            title: "Data Ingestion",
            desc: "Secure connection to your internal databases, ERP, or CRM via compliant API bridges."
        },
        {
            num: "02",
            title: "Model Tuning",
            desc: "Training foundational LLMs strictly on your operational data and brand guidelines."
        },
        {
            num: "03",
            title: "Workflow Orchestration",
            desc: "Designing logic trees where AI agents autonomously trigger and resolve multi-step tasks."
        },
        {
            num: "04",
            title: "Deployment & Scale",
            desc: "Containerized deployment of your custom web-app with 99.9% guaranteed uptime."
        }
    ];

    return (
        <section id="engineering" className="relative py-32 bg-[var(--background)] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[var(--primary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 block">
                        02 // {dict.engineering?.tag || 'Bespoke Engineering'}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {dict.engineering?.title || 'The Deployment Mechanism'}
                    </h2>
                </div>

                {/* 3-Column Layout: Left Steps -> Center Dashboard -> Right Steps */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 xl:gap-16">

                    {/* Left Steps */}
                    <div className="flex flex-col gap-10 lg:w-1/4 w-full">
                        {[steps[0], steps[1]].map((step) => (
                            <div key={step.num} className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-md"></div>
                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-2xl font-mono font-bold text-[var(--card-border)] group-hover:text-[var(--primary)] transition-colors">{step.num}</div>
                                        <h3 className="text-xl font-bold">{step.title}</h3>
                                    </div>
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed pl-12">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Dashboard Mockup */}
                    <div className="lg:w-2/4 w-full relative perspective-1000">
                        <GlassCard className="border-[var(--card-border)] bg-[rgba(13,14,21,0.8)] p-1 pb-0 overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.1)] rounded-xl relative z-20">
                            {/* Browser/OS Header */}
                            <div className="bg-[rgba(255,255,255,0.03)] p-3 flex items-center gap-2 border-b border-[var(--card-border)]">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="ml-4 flex-1 bg-[rgba(0,0,0,0.3)] h-6 rounded border border-[var(--card-border)] flex items-center justify-center">
                                    <span className="text-[10px] font-mono text-[var(--muted-foreground)]">euhub-ai.local/enterprise-dashboard</span>
                                </div>
                            </div>

                            {/* Dashboard Body */}
                            <div className="p-6 grid grid-cols-4 gap-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgMjBoMjBNMjAgMHYyMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]">
                                {/* Sidebar */}
                                <div className="col-span-1 space-y-3">
                                    <div className="h-2 w-16 bg-[var(--primary)] rounded mb-6 opacity-80 animate-pulse"></div>
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`h-8 rounded ${i === 2 ? 'bg-[var(--primary)]/20 border border-[var(--primary)]/30' : 'bg-[var(--card-border)]/50 hover:bg-[var(--card-border)] transition-colors'}`}></div>
                                    ))}
                                </div>

                                {/* Main Content Area */}
                                <div className="col-span-3 space-y-4">
                                    {/* Top Widget Row */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-24 bg-[rgba(255,255,255,0.02)] border border-[var(--card-border)] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/10 to-transparent -translate-y-full group-hover:animate-[scanline_1.5s_linear_infinite]" style={{ animationDelay: `${i * 0.2}s` }}></div>
                                                <div className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-[var(--primary)]/60' : i === 2 ? 'bg-[var(--secondary)]/60' : 'bg-[var(--accent)]/60'} animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }}></div>
                                                <div className="space-y-2 relative z-10">
                                                    <div className="h-2 w-8 bg-[var(--muted-foreground)]/50 rounded"></div>
                                                    <div className={`h-4 rounded ${i === 1 ? 'bg-[var(--primary)] animate-[barPulse1_3s_ease-in-out_infinite]' : i === 2 ? 'bg-[var(--secondary)] animate-[barPulse2_4s_ease-in-out_infinite]' : 'bg-[var(--accent)] animate-[barPulse3_2.5s_ease-in-out_infinite]'} origin-left`}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Large Chart/Graph Area */}
                                    <div className="h-40 bg-[rgba(255,255,255,0.02)] border border-[var(--card-border)] rounded-lg p-4 relative overflow-hidden group hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                                        <div className="h-3 w-32 bg-[var(--muted-foreground)]/50 rounded mb-4"></div>
                                        {/* Abstract Chart SVG */}
                                        <svg className="absolute bottom-0 left-0 w-full h-24" preserveAspectRatio="none" viewBox="0 0 100 100">
                                            <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="url(#grad)" opacity="0.3" className="animate-[clipReveal_4s_ease-out_forwards]" />
                                            <path d="M0,50 Q25,20 50,60 T100,30" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="150" strokeDashoffset="150" className="animate-[drawChart_4s_ease-out_forwards]" />
                                            <defs>
                                                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <style dangerouslySetInnerHTML={{
                                __html: `
                                @keyframes drawChart {
                                    0% { stroke-dashoffset: 150; }
                                    100% { stroke-dashoffset: 0; }
                                }
                                @keyframes clipReveal {
                                    0% { clip-path: inset(0 100% 0 0); }
                                    100% { clip-path: inset(0 0 0 0); }
                                }
                                @keyframes barPulse1 {
                                    0%, 100% { width: 60%; }
                                    50% { width: 85%; }
                                }
                                @keyframes barPulse2 {
                                    0%, 100% { width: 80%; }
                                    50% { width: 50%; }
                                }
                                @keyframes barPulse3 {
                                    0%, 100% { width: 40%; }
                                    50% { width: 70%; }
                                }
                                @keyframes scanline {
                                    0% { transform: translateY(-100%); opacity: 0; }
                                    50% { opacity: 1; }
                                    100% { transform: translateY(100%); opacity: 0; }
                                }
                            `}} />
                        </GlassCard>

                        {/* Floating elements to add depth */}
                        <div className="absolute -right-6 top-1/4 w-24 h-24 bg-[var(--secondary)]/20 backdrop-blur-3xl rounded-full border border-[var(--secondary)]/30 animate-pulse z-30"></div>
                        <div className="absolute -left-8 bottom-1/4 w-16 h-16 bg-[var(--primary)]/20 backdrop-blur-3xl rounded-full border border-[var(--primary)]/30 animate-pulse delay-700 z-30"></div>
                    </div>

                    {/* Right Steps */}
                    <div className="flex flex-col gap-10 lg:w-1/4 w-full">
                        {[steps[2], steps[3]].map((step) => (
                            <div key={step.num} className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-transparent to-[var(--secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-md"></div>
                                <div className="relative text-left lg:text-right">
                                    <div className="flex items-center lg:flex-row-reverse gap-4 mb-3">
                                        <div className="text-2xl font-mono font-bold text-[var(--card-border)] group-hover:text-[var(--secondary)] transition-colors">{step.num}</div>
                                        <h3 className="text-xl font-bold">{step.title}</h3>
                                    </div>
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed lg:pr-12 pl-12 lg:pl-0">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
