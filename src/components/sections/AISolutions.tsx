import { GlassCard } from '../shared/GlassCard';

export const AISolutions = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <section id="ai-solutions" className="section-padding relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.aiSolutions.title}</h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        {dict.aiSolutions.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ gridAutoRows: '1fr' }}>
                    {dict.aiSolutions.solutions.map((solution: any, index: number) => {
                        const isGovernance = solution.stage === 'operate' && index === dict.aiSolutions.solutions.length - 1;
                        const isFirstInStage = index === 0 || dict.aiSolutions.solutions[index - 1].stage !== solution.stage;

                        return (
                            <div key={index}>
                                <GlassCard className={`h-full min-h-[280px] flex flex-col p-6 transition-all duration-300 group ${isGovernance
                                    ? 'border-[var(--card-border)] hover:border-[var(--muted-foreground)] bg-[rgba(0,0,0,0.2)]'
                                    : 'hover:border-[var(--primary)]'
                                    }`}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isGovernance
                                            ? 'bg-[var(--muted-foreground)] group-hover:scale-105'
                                            : 'bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] group-hover:scale-110'
                                            }`}>
                                            <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-xl font-bold mb-2 transition-colors ${isGovernance
                                                ? 'group-hover:text-[var(--foreground)]'
                                                : 'group-hover:text-[var(--primary)]'
                                                }`}>
                                                {solution.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed flex-1">
                                        {solution.description}
                                    </p>
                                    {!isGovernance && (
                                        <div className="mt-6 pt-4 border-t border-[var(--card-border)]">
                                            <a
                                                href="#contact"
                                                className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 group-hover:gap-3 duration-300"
                                            >
                                                {dict.common.learnMore}
                                                <span className="text-lg">→</span>
                                            </a>
                                        </div>
                                    )}
                                </GlassCard>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
