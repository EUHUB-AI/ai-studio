export const ValueProposition = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <section className="section-padding relative bg-gradient-to-b from-[var(--background)] to-[rgba(99,102,241,0.02)]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    {/* Headline with gradient */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                            {dict.valueProposition.headline}
                        </span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-[var(--foreground)] font-medium leading-relaxed">
                        {dict.valueProposition.subheadline}
                    </p>

                    {/* Body text */}
                    <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto pt-4">
                        {dict.valueProposition.body}
                    </p>

                    {/* Decorative element */}
                    <div className="pt-8 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
