'use client';

import { GlassCard } from '../shared/GlassCard';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = ({ lang, dict }: { lang: string, dict: any }) => {
    const [state, handleSubmit] = useForm("xwveprkv");

    return (
        <section id="contact" className="section-padding">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {dict.cta.title}
                        </h2>
                        <p className="text-[var(--muted-foreground)] text-lg mb-8">
                            {lang === 'sk'
                                ? 'Nečakajte, kým vás predbehne konkurencia. Získajte audit vašej infraštruktúry a zistite, kde strácate peniaze.'
                                : 'Don\'t let the competition outpace you. Get an audit of your infrastructure and find out where you are losing money.'}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[rgba(20,184,166,0.1)] flex items-center justify-center text-[var(--accent)]">
                                    ✉
                                </div>
                                <div>
                                    <div className="font-bold">Email</div>
                                    <a href="mailto:hello@euhub.sk" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">hello@euhub.sk</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[rgba(20,184,166,0.1)] flex items-center justify-center text-[var(--accent)]">
                                    📍
                                </div>
                                <div>
                                    <div className="font-bold">{lang === 'sk' ? 'Lokácia' : 'Location'}</div>
                                    <span className="text-[var(--muted-foreground)]">974 01, Banská Bystrica, Slovakia (EU)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <GlassCard className="border-[var(--accent)] border-opacity-30">
                        <h3 className="text-xl font-bold mb-4">
                            {lang === 'sk' ? 'Získajte Audit Zadarmo' : 'Get a Free Audit'}
                        </h3>
                        {state.succeeded ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-[rgba(20,184,166,0.1)] text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                    ✓
                                </div>
                                <h4 className="text-xl font-bold mb-2">
                                    {lang === 'sk' ? 'Ďakujeme!' : 'Thank you!'}
                                </h4>
                                <p className="text-[var(--muted-foreground)]">
                                    {lang === 'sk'
                                        ? 'Vaša správa bola odoslaná. Čoskoro sa vám ozveme.'
                                        : 'Your message has been sent. We will be in touch shortly.'}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-[var(--muted-foreground)]">
                                        {lang === 'sk' ? 'Meno' : 'Name'}
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-2 rounded-lg bg-[rgba(0,0,0,0.2)] border border-[var(--card-border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-[var(--muted-foreground)]">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 rounded-lg bg-[rgba(0,0,0,0.2)] border border-[var(--card-border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-[var(--muted-foreground)]">
                                        {lang === 'sk' ? 'Správa' : 'Message'}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg bg-[rgba(0,0,0,0.2)] border border-[var(--card-border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                                    ></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                                <button type="submit" disabled={state.submitting} className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                                    {state.submitting
                                        ? (lang === 'sk' ? 'Odosielam...' : 'Sending...')
                                        : dict.cta.button}
                                </button>
                            </form>
                        )}
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};
