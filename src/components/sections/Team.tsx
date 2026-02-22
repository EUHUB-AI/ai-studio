import { GlassCard } from '../shared/GlassCard';
import Image from 'next/image';

export const Team = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <section id="team" className="section-padding relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.team?.title || "Meet Our Experts"}</h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        {dict.team?.subtitle || "The brains behind your strategic AI implementation."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {dict.team?.members?.map((member: any, index: number) => (
                        <GlassCard key={index} className="flex flex-col items-center text-center p-8 bg-[var(--card-bg)] border-[var(--card-border)] hover:bg-[var(--card-hover)] transition-colors duration-300 group">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shrink-0 self-center flex mx-auto">
                                <Image
                                    src={`/team-${index + 1}.png`}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover grayscale transition-[filter] duration-300 ease-in-out group-hover:grayscale-0"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-sm text-[var(--primary)] font-mono mb-4 min-h-[40px] flex items-center justify-center">{member.role}</p>

                            <a
                                href={member.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto text-sm text-[var(--primary)]/70 hover:text-[var(--primary)] transition-colors underline-offset-4 hover:underline"
                            >
                                {member.link}
                            </a>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
