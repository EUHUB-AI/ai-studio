import { BentoGrid, BentoItem } from '../shared/BentoGrid';
import { GlassCard } from '../shared/GlassCard';
import Image from 'next/image';
import styles from '../../../public/assets/css/sections/Team.module.css';

export const Team = ({ lang, dict }: { lang: string, dict: any }) => {
    const photosByMemberName: Record<string, string> = {
        'Artashes A.': '/photos/artie1.png',
        'Mike G.': '/photos/mike1.png',
        'Kateryna H.': '/photos/katka1.png',
    };

    return (
        <section id="team" className={`${styles.section} section-padding relative`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.team.title}</h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        {dict.team.subtitle}
                    </p>
                </div>

                <BentoGrid>
                    {dict.team.members.map((member: any, index: number) => (
                        <BentoItem key={index}>
                            <GlassCard className="h-full flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg shadow-[var(--primary)]/20 border-2 border-[var(--primary)]">
                                    <Image
                                        src={photosByMemberName[member.name] || `/team-${index + 1}.png`}
                                        alt={member.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                        priority={index === 0}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-sm text-[var(--primary)] font-mono mb-4">{member.role}</p>
                                {member.url && (
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                        <a
                                            href={member.url}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className={styles.link}
                                        >
                                            {member.link || member.url}
                                        </a>
                                    </p>
                                )}
                            </GlassCard>
                        </BentoItem>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};
