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
                <div className="group/steps flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 xl:gap-16">

                    {/* Left Steps */}
                    <div className="flex flex-col gap-10 lg:w-1/4 w-full">
                        {[steps[0], steps[1]].map((step) => (
                            <div key={step.num} className="group relative transition-all duration-500 opacity-100 group-hover/steps:[&:not(:hover)]:opacity-40 hover:scale-[1.02] border border-transparent hover:-translate-y-1 hover:bg-white dark:hover:bg-[rgba(255,255,255,0.02)] p-6 -mx-6 -my-4 rounded-2xl hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_30px_rgba(0,229,255,0.05)] hover:border-slate-100 dark:hover:border-[var(--card-border)] z-10 hover:z-30">
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-2xl font-mono font-bold text-[#94A3B8] dark:text-[var(--card-border)] group-hover:text-[var(--primary)] transition-colors">{step.num}</div>
                                        <h3 className="text-xl font-bold text-[#1A1C28] dark:text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-12">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Dashboard Mockup */}
                    <div className="lg:w-2/4 w-full relative perspective-1000 transition-all duration-500 opacity-100 group-hover/steps:[&:not(:hover)]:opacity-40 z-20 hover:z-40">
                        <GlassCard className="border-[var(--card-border)] bg-[rgba(13,14,21,0.8)] p-1 pb-0 overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.1)] rounded-xl relative">
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
                            <div className="p-0 flex h-[480px] bg-[rgba(10,11,16,0.95)] shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                {/* Cyber grid lines */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>

                                {/* Sidebar */}
                                <div className="w-16 md:w-48 border-r border-[#1e2333] bg-[#0d0f17] flex flex-col p-3 z-10 shrink-0">
                                    <div className="h-4 w-full max-w-[80px] bg-[#00E5FF] rounded mb-8 opacity-80 md:block hidden animate-pulse"></div>
                                    <div className="h-4 w-6 md:hidden bg-[#00E5FF] rounded mb-8 opacity-80 mx-auto animate-pulse"></div>
                                    <div className="space-y-4 flex-1">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className={`h-8 rounded flex items-center px-2 cursor-pointer transition-all ${i === 2 ? 'bg-[#00E5FF]/10 border-l-2 border-[#00E5FF]' : 'hover:bg-[#1e2333]/50'}`}>
                                                <div className={`w-4 h-4 rounded-sm shrink-0 ${i === 2 ? 'bg-[#00E5FF]' : 'bg-[#333]'} `}></div>
                                                <div className={`ml-3 h-2 rounded w-full max-w-[100px] md:block hidden ${i === 2 ? 'bg-[#00E5FF]/70' : 'bg-[#333]'}`}></div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Bottom sidebar settings */}
                                    <div className="h-8 rounded bg-[#1e2333]/30 flex items-center px-2 mt-auto">
                                        <div className="w-4 h-4 rounded-sm bg-[#444] shrink-0"></div>
                                        <div className="ml-3 h-2 rounded w-full max-w-[60px] md:block hidden bg-[#444]"></div>
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="flex-1 flex flex-col z-10 overflow-hidden">
                                    {/* Top Metric Ribbon */}
                                    <div className="h-12 border-b border-[#1e2333] bg-[#11131c] flex items-center px-4 md:px-6 gap-6 font-mono text-[10px] md:text-xs shrink-0">
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-500">STATUS:</span>
                                            <span className="text-[#00FF55] flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-[#00FF55] rounded-full animate-pulse"></div> HEALTHY</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-500">UPTIME:</span>
                                            <span className="text-white">99.99%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-500">LATENCY:</span>
                                            <span className="text-white text-shadow-glow">14ms</span>
                                        </div>
                                        <div className="flex items-center gap-2 ml-auto hidden xl:flex">
                                            <span className="text-slate-500">NODE:</span>
                                            <span className="text-[#00E5FF]">EU-CENTRAL-1</span>
                                        </div>
                                    </div>

                                    <div className="p-4 md:p-6 flex-1 flex flex-col gap-6 overflow-hidden">
                                        {/* Large Complex Chart Area */}
                                        <div className="flex-1 min-h-[160px] bg-[#0B0E14] border border-[#1e2333] rounded-lg p-4 relative overflow-hidden flex flex-col group hover:border-[#00E5FF]/30 transition-colors duration-500 shadow-inner">
                                            {/* Axis labels & gridlines */}
                                            <div className="absolute inset-0 p-4 pt-4 pb-8 pl-12 pointer-events-none flex flex-col justify-between">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="w-full h-px bg-[#333333] opacity-30"></div>
                                                ))}
                                            </div>
                                            <div className="absolute left-2 top-4 bottom-8 flex flex-col justify-between text-[9px] font-mono text-slate-600 pointer-events-none">
                                                <span>100k</span><span>75k</span><span>50k</span><span>25k</span>
                                            </div>
                                            <div className="absolute left-12 right-4 bottom-2 flex justify-between text-[9px] font-mono text-slate-600 pointer-events-none hidden sm:flex">
                                                <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
                                            </div>

                                            {/* Header */}
                                            <div className="flex justify-between items-start mb-2 relative z-10">
                                                <div>
                                                    <div className="text-[10px] font-mono text-slate-400 mb-1">DATA THROUGHPUT VOL {`{TB/s}`}</div>
                                                    <div className="text-xl md:text-2xl font-bold text-white flex items-end gap-2">
                                                        428.45 <span className="text-[10px] text-[#00FF55] mb-1.5">+12.4%</span>
                                                    </div>
                                                </div>
                                                <div className="h-6 w-16 md:w-20 bg-[#1e2333]/50 rounded text-[9px] font-mono text-center leading-6 text-slate-300 border border-[#2a3045]">7D AVG</div>
                                            </div>

                                            {/* Complex Chart SVG */}
                                            <div className="flex-1 relative mt-2 ml-2 sm:ml-8 mb-4">
                                                {/* Bar Chart Behind */}
                                                <div className="absolute inset-x-0 bottom-0 h-full flex items-end justify-between px-2 opacity-20">
                                                    {[40, 60, 30, 80, 50, 90, 70, 40, 60, 100, 80, 50, 70, 90, 65, 85].map((h, i) => (
                                                        <div key={i} className="w-1.5 sm:w-2 bg-[#00E5FF]" style={{ height: `${h}%` }}></div>
                                                    ))}
                                                </div>

                                                {/* Area Chart in Front */}
                                                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                    <defs>
                                                        <linearGradient id="cyberGrad" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
                                                            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.2" />
                                                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                                                        </linearGradient>
                                                        <linearGradient id="cyberLineGrad" x1="0" y1="0" x2="1" y2="0">
                                                            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.5" />
                                                            <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
                                                            <stop offset="100%" stopColor="#7B61FF" stopOpacity="1" />
                                                        </linearGradient>
                                                    </defs>
                                                    {/* Area */}
                                                    <path d="M0,100 L0,70 Q10,60 20,80 T40,40 T60,50 T80,20 T100,30 L100,100 Z" fill="url(#cyberGrad)" className="animate-[clipReveal_2s_ease-out_forwards]" />
                                                    {/* Line */}
                                                    <path d="M0,70 Q10,60 20,80 T40,40 T60,50 T80,20 T100,30" fill="none" stroke="url(#cyberLineGrad)" strokeWidth="2.5" className="animate-[drawChart_2s_ease-out_forwards] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                                                    {/* Data Points */}
                                                    <circle cx="20" cy="80" r="2" fill="#fff" className="animate-[fadeIn_2.2s_ease-out_forwards] drop-shadow-[0_0_4px_#00E5FF]" />
                                                    <circle cx="40" cy="40" r="2" fill="#fff" className="animate-[fadeIn_2.4s_ease-out_forwards] drop-shadow-[0_0_4px_#00E5FF]" />
                                                    <circle cx="60" cy="50" r="2" fill="#fff" className="animate-[fadeIn_2.6s_ease-out_forwards] drop-shadow-[0_0_4px_#00E5FF]" />
                                                    <circle cx="80" cy="20" r="3" fill="#fff" className="animate-[fadeIn_2.8s_ease-out_forwards] drop-shadow-[0_0_8px_#00E5FF]" />

                                                    {/* Tooltip Simulation on hover target point */}
                                                    <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" transform="translate(80, 20)">
                                                        <line x1="0" y1="0" x2="0" y2="80" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2,2" />
                                                        <rect x="-30" y="-20" width="60" height="15" rx="2" fill="#11131c" stroke="#00E5FF" strokeWidth="0.5" />
                                                        <text x="0" y="-10" fontSize="6" fill="#00E5FF" textAnchor="middle" fontFamily="monospace">92.4 TB/s</text>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Simulated Data Table */}
                                        <div className="h-40 bg-[#0B0E14] border border-[#1e2333] rounded-lg overflow-hidden flex flex-col shrink-0">
                                            <div className="grid grid-cols-4 lg:grid-cols-5 h-8 bg-[#11131c] items-center px-4 font-mono text-[9px] text-slate-500 uppercase border-b border-[#1e2333] shrink-0">
                                                <span>Process_ID</span>
                                                <span>Source_DB</span>
                                                <span className="hidden lg:block">Vector_Store</span>
                                                <span>Status</span>
                                                <span className="text-right">Latency</span>
                                            </div>
                                            <div className="flex-1 overflow-hidden relative">
                                                {/* Overlay gradient out the bottom to simulate endless rows */}
                                                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0B0E14] to-transparent z-10 pointer-events-none"></div>
                                                <div className="absolute w-full animate-[slideUp_15s_linear_infinite]">
                                                    {[
                                                        { id: "0x8F2A", db: "ERP_PROD_01", vs: "PGVector_EUC", status: "SYNCED", latency: "14ms", color: "#00FF55" },
                                                        { id: "0x3B99", db: "CRM_SALES", vs: "Qdrant_Auth", status: "INDEXING", latency: "45ms", color: "#F59E0B" },
                                                        { id: "0x1C44", db: "LEGACY_ARCH", vs: "Weaviate_M", status: "SYNCED", latency: "22ms", color: "#00FF55" },
                                                        { id: "0x9A12", db: "TICKET_SYS", vs: "Pinecone_2", status: "PENDING", latency: "---", color: "#3B82F6" },
                                                        { id: "0x5E55", db: "ERP_PROD_02", vs: "PGVector_EU2", status: "SYNCED", latency: "16ms", color: "#00FF55" },
                                                        { id: "0x2F11", db: "ANALYTICS", vs: "Qdrant_Clus", status: "SYNCED", latency: "18ms", color: "#00FF55" },
                                                        { id: "0x8F2A", db: "ERP_PROD_01", vs: "PGVector_EUC", status: "SYNCED", latency: "14ms", color: "#00FF55" },
                                                        { id: "0x3B99", db: "CRM_SALES", vs: "Qdrant_Auth", status: "INDEXING", latency: "41ms", color: "#F59E0B" },
                                                        { id: "0x1C44", db: "LEGACY_ARCH", vs: "Weaviate_M", status: "SYNCED", latency: "20ms", color: "#00FF55" },
                                                        { id: "0x9A12", db: "TICKET_SYS", vs: "Pinecone_2", status: "PENDING", latency: "---", color: "#3B82F6" },
                                                    ].map((row, i) => (
                                                        <div key={i} className="grid grid-cols-4 lg:grid-cols-5 h-8 items-center px-4 font-mono text-[9px] md:text-[10px] border-b border-[#1e2333]/50 hover:bg-[#1e2333] transition-colors cursor-default group">
                                                            <span className="text-[#00E5FF] group-hover:text-white transition-colors truncate pr-2">{row.id}</span>
                                                            <span className="text-slate-300 truncate pr-2">{row.db}</span>
                                                            <span className="text-slate-500 hidden lg:block truncate pr-2">{row.vs}</span>
                                                            <span className="flex items-center gap-1.5 truncate pr-2" style={{ color: row.color }}>
                                                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: row.color }}></div>
                                                                {row.status}
                                                            </span>
                                                            <span className="text-right text-slate-300">{row.latency}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <style dangerouslySetInnerHTML={{
                                __html: `
                                @keyframes drawChart {
                                    0% { stroke-dashoffset: 200; stroke-dasharray: 200; }
                                    100% { stroke-dashoffset: 0; stroke-dasharray: 200; }
                                }
                                @keyframes clipReveal {
                                    0% { clip-path: inset(0 100% 0 0); }
                                    100% { clip-path: inset(0 0 0 0); }
                                }
                                @keyframes fadeIn {
                                    0% { opacity: 0; transform: scale(0.5); }
                                    100% { opacity: 1; transform: scale(1); }
                                }
                                @keyframes slideUp {
                                    0% { transform: translateY(0); }
                                    100% { transform: translateY(-50%); }
                                }
                            `}} />
                        </GlassCard>

                        {/* Floating elements to add depth */}
                    </div>

                    {/* Right Steps */}
                    <div className="flex flex-col gap-10 lg:w-1/4 w-full">
                        {[steps[2], steps[3]].map((step) => (
                            <div key={step.num} className="group relative transition-all duration-500 opacity-100 group-hover/steps:[&:not(:hover)]:opacity-40 hover:scale-[1.02] border border-transparent hover:-translate-y-1 hover:bg-white dark:hover:bg-[rgba(255,255,255,0.02)] p-6 -mx-6 -my-4 rounded-2xl hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_30px_rgba(123,97,255,0.05)] hover:border-slate-100 dark:hover:border-[var(--card-border)] z-10 hover:z-30">
                                <div className="absolute inset-0 bg-gradient-to-l from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                <div className="relative text-left">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-2xl font-mono font-bold text-[#94A3B8] dark:text-[var(--card-border)] group-hover:text-[var(--secondary)] transition-colors">{step.num}</div>
                                        <h3 className="text-xl font-bold text-[#1A1C28] dark:text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-12 lg:pr-12">
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
