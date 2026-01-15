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
        <footer className="border-t border-[var(--card-border)] bg-[var(--background)] pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href={`/${lang}`} className="relative w-[100px] h-[42px] flex-shrink-0 block mb-4">
                            <Image
                                src={mounted ? (resolvedTheme === 'dark' ? '/logo_dark.png' : '/logo_light.png') : '/logo_light.png'}
                                alt="EU HUB AI"
                                fill
                                sizes="100px"
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </Link>
                        <p className="text-[var(--muted-foreground)] max-w-md">
                            {dict.footer?.tagline || "Your Strategic AI Implementation Partner in Central Europe."}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{dict.nav?.services || 'Services'}</h4>
                        <ul className="space-y-2 text-[var(--muted-foreground)]">
                            <li>
                                <Link href={`/${lang}/audit`} className="hover:text-[var(--primary)] text-[var(--primary)] font-medium">
                                    AI Audit
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/web-creation`} className="hover:text-[var(--primary)] transition-colors">
                                    {dict.footer.servicesList.webCreation}
                                </Link>
                            </li>
                            {/* <li>{dict.footer.servicesList.supportService}</li>
                            <li>{dict.footer.servicesList.security}</li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{dict.nav?.contact || 'Contact'}</h4>
                        <ul className="space-y-2 text-[var(--muted-foreground)]">
                            <li>974 01, Banská Bystrica, Slovakia</li>
                            <li><a href="mailto:hello@euhub-ai.com" className="hover:text-[var(--primary)]">hello@euhub-ai.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--card-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted-foreground)]">
                    <p>&copy; {new Date().getFullYear()} EuHub AI. {dict.terms.allRightsReserved}</p>
                    <div className="flex gap-6">
                        <Link href={`/${lang}/privacy`} className="hover:text-[var(--foreground)] transition-colors">{dict.terms.privacyLabel}</Link>
                        <Link href={`/${lang}/terms`} className="hover:text-[var(--foreground)] transition-colors">{dict.terms.termsLabel}</Link>
                        <Link href={`/${lang}/cookie`} className="hover:text-[var(--foreground)] transition-colors">{dict.terms.cookieLabel}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
