'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Footer = ({ lang, dict }: { lang: string, dict: any }) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="border-t border-[var(--card-border)] bg-[var(--background)] pt-20 pb-10 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 w-full h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1">
                        <Link href={`/${lang}`} className="relative w-[120px] h-[48px] flex-shrink-0 block mb-6 transition-transform hover:scale-105">
                            <Image
                                src={mounted ? (resolvedTheme === 'dark' ? '/logo_dark.png' : '/logo_light.png') : '/logo_light.png'}
                                alt="EUHub-AI"
                                fill
                                sizes="120px"
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </Link>
                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed max-w-sm">
                            {dict.footer?.tagline || "We engineer and deploy agentic AI systems that eliminate operational bottlenecks for Central European enterprises."}
                        </p>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg tracking-wide">{dict.footer?.solutions || 'Solutions'}</h4>
                        <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                            <li><Link href={`/${lang}#diagnostic`} className="hover:text-[var(--primary)] transition-colors">{dict.nav?.diagnostic || 'The Diagnostic Audit'}</Link></li>
                            <li><Link href={`/${lang}#engineering`} className="hover:text-[var(--primary)] transition-colors">{dict.nav?.engineering || 'Bespoke Engineering'}</Link></li>
                            <li><Link href={`/${lang}#capabilities`} className="hover:text-[var(--primary)] transition-colors">{dict.nav?.capabilities || 'AI Capabilities'}</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg tracking-wide">{dict.footer?.company || 'Company'}</h4>
                        <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                            <li><Link href={`/${lang}#team`} className="hover:text-[var(--primary)] transition-colors">{dict.nav?.team || 'Leadership & Team'}</Link></li>
                            <li><Link href={`/${lang}#contact`} className="hover:text-[var(--primary)] transition-colors">{dict.nav?.contact || 'Initiate Consultation'}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg tracking-wide">{dict.nav?.contact || 'Contact'}</h4>
                        <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[var(--primary)]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </span>
                                <span>974 01, Banská Bystrica<br />Slovakia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[var(--primary)]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </span>
                                <a href="mailto:hello@euhub-ai.com" className="hover:text-[var(--primary)] transition-colors">hello@euhub-ai.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & GDPR */}
                <div className="border-t border-[var(--card-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[var(--muted-foreground)]">
                    <p>&copy; {new Date().getFullYear()} EUHub-AI. {dict.footer?.rights || 'All rights reserved.'}</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href={`/${lang}/privacy`} className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</Link>
                        <Link href={`/${lang}/terms`} className="hover:text-[var(--foreground)] transition-colors">Terms of Service</Link>
                        <Link href={`/${lang}/cookie`} className="hover:text-[var(--foreground)] transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
