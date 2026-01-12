import { GlassCard } from '../shared/GlassCard';

export const Hero = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-[calc(var(--header-height)+2rem)] pb-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)] opacity-20 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent)] opacity-10 blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-[var(--primary)] text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                        </span>
                        {lang === 'sk' ? 'Prijímame nových klientov pre Q1 2026' : 'Accepting new clients for Q1 2026'}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                        {dict.hero.title}
                    </h1>

                    <p className="text-xl text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                        {dict.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                            {dict.hero.cta}
                        </a>
                        <a href="#services" className="px-8 py-4 rounded-full border border-[var(--card-border)] hover:bg-[var(--card-hover)] transition-colors text-center font-medium">
                            {lang === 'sk' ? 'Naše služby' : 'Our Services'}
                        </a>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <GlassCard className="relative z-10 border-[var(--card-border)] bg-[rgba(11,17,32,0.8)]">
                        <div className="flex items-center justify-between mb-6 border-b border-[var(--card-border)] pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-xs text-[var(--muted-foreground)] font-mono">system_status.log</div>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between">
                                <span className="text-[var(--muted-foreground)]">Running Audit...</span>
                                <span className="text-[var(--accent)]">Done (0.4s)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[var(--muted-foreground)]">Identifying Bottlenecks...</span>
                                <span className="text-[var(--accent)]">Found 3</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[var(--muted-foreground)]">Optimizing Workflow...</span>
                                <span className="text-[var(--primary)]">In Progress</span>
                            </div>

                            <div className="mt-8 p-4 rounded bg-[rgba(0,0,0,0.3)] border border-[var(--card-border)]">
                                <div className="text-[var(--muted-foreground)] mb-2">// ROI Projection</div>
                                <div className="flex items-end gap-2">
                                    <div className="text-3xl font-bold text-[var(--foreground)]">+40%</div>
                                    <div className="text-sm text-[var(--accent)] mb-1">Efficiency</div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Decorative elements behind card */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--primary)] rounded-full blur-[60px] opacity-40"></div>
                </div>
            </div>
        </section>
    );
};
