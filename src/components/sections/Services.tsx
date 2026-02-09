import { BentoGrid, BentoItem } from '../shared/BentoGrid';
import { GlassCard } from '../shared/GlassCard';

export const Services = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <section id="services" className="section-padding relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.services.title}</h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        {lang === 'sk'
                            ? 'Komplexné riešenia pre moderné podnikanie. Od auditu až po plnú automatizáciu.'
                            : 'Comprehensive solutions for modern business. From audit to full automation.'}
                    </p>
                </div>

                <BentoGrid>
                    {/* Tier 1: Audit */}
                    <BentoItem colSpan={2}>
                        <GlassCard className="h-full flex flex-col justify-between border-l-4 border-l-[var(--accent)]">
                            <div>
                                <div className="text-[var(--accent)] font-mono text-sm mb-2">01 // START</div>
                                <h3 className="text-2xl font-bold mb-2">{dict.services.items[0].title}</h3>
                                <p className="text-[var(--muted-foreground)] mb-4">{dict.services.items[0].desc}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[var(--card-border)] flex justify-between items-center">
                                <span className="text-sm font-bold">
                                    {lang === 'sk' ? 'Cena: 1,500€ - 3,000€' : 'Price: €1,500 - €3,000'}
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[rgba(20,184,166,0.1)] text-[var(--accent)]">
                                    {lang === 'sk' ? 'Fixná cena' : 'Fixed Price'}
                                </span>
                            </div>
                        </GlassCard>
                    </BentoItem>

                    {/* Trust Signal: ISO/Compliance */}
                    <BentoItem>
                        <GlassCard className="h-full bg-[rgba(99,102,241,0.05)] flex flex-col justify-center items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center mb-4 text-white font-bold text-xl">
                                ✓
                            </div>
                            <h4 className="font-bold mb-1">ISO/IEC 42001</h4>
                            <p className="text-xs text-[var(--muted-foreground)]">Aligned Management System</p>
                        </GlassCard>
                    </BentoItem>

                    {/* Tier 2: Pilot */}
                    <BentoItem>
                        <GlassCard className="h-full flex flex-col justify-between">
                            <div>
                                <div className="text-[var(--primary)] font-mono text-sm mb-2">02 // BUILD</div>
                                <h3 className="text-xl font-bold mb-2">{dict.services.items[1].title}</h3>
                                <p className="text-[var(--muted-foreground)] text-sm mb-4">{dict.services.items[1].desc}</p>
                            </div>
                            <div className="mt-4">
                                <span className="text-xs font-mono text-[var(--primary)]">
                                    {lang === 'sk' ? 'Dodanie: 4 týždne' : 'Delivery: 4 Weeks'}
                                </span>
                            </div>
                        </GlassCard>
                    </BentoItem>

                    {/* Tier 3: Enterprise */}
                    <BentoItem colSpan={2}>
                        <GlassCard className="h-full flex flex-col md:flex-row gap-6 items-center bg-gradient-to-r from-[rgba(99,102,241,0.1)] to-transparent">
                            <div className="flex-1">
                                <div className="text-[var(--foreground)] font-mono text-sm mb-2">03 // SCALE</div>
                                <h3 className="text-2xl font-bold mb-2">{dict.services.items[2].title}</h3>
                                <p className="text-[var(--muted-foreground)]">{dict.services.items[2].desc}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <button className="btn btn-primary text-sm">
                                    {lang === 'sk' ? 'Konzultovať' : 'Consult Enterprise'}
                                </button>
                            </div>
                        </GlassCard>
                    </BentoItem>
                </BentoGrid>
            </div>
        </section>
    );
};
