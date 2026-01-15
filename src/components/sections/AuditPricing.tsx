import { GlassCard } from '../shared/GlassCard';
import Link from 'next/link';

export const AuditPricing = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <section className="section-padding relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.audit.title}</h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        {dict.audit.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Starter Plan */}
                    <GlassCard className="h-full flex flex-col p-8 border-[var(--card-border)] hover:border-[var(--primary)] transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                            {dict.audit.starter.badge}
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">{dict.audit.starter.title}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-[var(--primary)]">{dict.audit.starter.price}</span>
                            </div>
                            <p className="text-sm text-[var(--muted-foreground)] mt-2">{dict.audit.starter.tag}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {dict.audit.starter.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-center gap-3 text-sm">
                                    <span className="text-[var(--primary)] font-bold">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="mailto:info@euhub-ai.com?subject=BRIEF%20AI%20AUDIT"
                            className="btn btn-outline w-full text-center py-3 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                        >
                            {dict.audit.starter.cta}
                        </Link>
                    </GlassCard>

                    {/* Professional Plan */}
                    <GlassCard className="h-full flex flex-col p-8 border-[var(--primary)] bg-[rgba(99,102,241,0.05)] transform md:-translate-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                {dict.audit.professional.badge}
                            </span>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">{dict.audit.professional.title}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-[var(--foreground)]">{dict.audit.professional.price}</span>
                            </div>
                            <p className="text-sm text-[var(--primary)] mt-2 font-medium">{dict.audit.professional.tag}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {dict.audit.professional.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-center gap-3 text-sm">
                                    <span className="text-[var(--primary)] font-bold">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="mailto:info@euhub-ai.com?subject=PROFESSIONAL%20AI%20AUDIT"
                            className="btn btn-primary w-full text-center py-3 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
                        >
                            {dict.audit.professional.cta}
                        </Link>
                    </GlassCard>

                    {/* Enterprise Plan */}
                    <GlassCard className="h-full flex flex-col p-8 border-[var(--card-border)] hover:border-[var(--primary)] transition-all duration-300">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">{dict.audit.enterprise.title}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-[var(--foreground)]">{dict.audit.enterprise.price}</span>
                            </div>
                            <p className="text-sm text-[var(--muted-foreground)] mt-2">{dict.audit.enterprise.tag}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {dict.audit.enterprise.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-center gap-3 text-sm">
                                    <span className="text-[var(--primary)] font-bold">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={`/${lang}#contact`}
                            className="btn btn-outline w-full text-center py-3 rounded-lg hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
                        >
                            {dict.audit.enterprise.cta}
                        </Link>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};
