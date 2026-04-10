'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = ({ lang, dict }: { lang: string, dict: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Helper to switch language in the current URL path
    const switchLang = (newLocale: string) => {
        if (!pathname) return `/${newLocale}`;
        const segments = pathname.split('/');
        segments[1] = newLocale; // Replace the locale segment
        return segments.join('/');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--card-border)] backdrop-blur-md">
            <div className="container mx-auto px-4 h-[var(--header-height)] flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${lang}`} className="relative w-[120px] h-[48px] flex-shrink-0 block transition-transform hover:scale-105">
                    <Image
                        src={mounted ? (resolvedTheme === 'dark' ? '/logo_dark.png' : '/logo_light.png') : '/logo_light.png'}
                        alt="EUHub-AI"
                        fill
                        sizes="120px"
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href={`/${lang}#diagnostic`} className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors tracking-wide">
                        {dict.nav?.diagnostic || 'The Diagnostic'}
                    </Link>
                    <Link href={`/${lang}#engineering`} className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors tracking-wide">
                        {dict.nav?.engineering || 'Bespoke Engineering'}
                    </Link>
                    <Link href={`/${lang}#capabilities`} className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors tracking-wide">
                        {dict.nav?.capabilities || 'Capabilities'}
                    </Link>

                    {/* Language Switcher & Theme Toggle & CTA */}
                    <div className="flex items-center gap-6 ml-6 border-l border-[var(--card-border)] pl-6">
                        <div className="flex items-center gap-3">
                            <Link href={switchLang('en')} className={`text-xs font-bold tracking-widest ${lang === 'en' ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}>EN</Link>
                            <span className="text-[var(--card-border)]">|</span>
                            <Link href={switchLang('sk')} className={`text-xs font-bold tracking-widest ${lang === 'sk' ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}>SK</Link>
                        </div>
                        <ThemeToggle />
                        <Link href={`/${lang}#contact`} className="btn btn-primary text-sm py-2 w-[190px] text-center inline-flex justify-center">
                            {dict.nav?.contact || 'Initiate Audit'}
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-[var(--foreground)]" onClick={toggleMenu} aria-label="Toggle Menu">
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-b border-[var(--card-border)] p-6 shadow-2xl">
                    <div className="flex flex-col gap-6 text-center">
                        <Link href={`/${lang}#diagnostic`} onClick={toggleMenu} className="text-lg font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                            {dict.nav?.diagnostic || 'The Diagnostic'}
                        </Link>
                        <Link href={`/${lang}#engineering`} onClick={toggleMenu} className="text-lg font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                            {dict.nav?.engineering || 'Bespoke Engineering'}
                        </Link>
                        <Link href={`/${lang}#capabilities`} onClick={toggleMenu} className="text-lg font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                            {dict.nav?.capabilities || 'Capabilities'}
                        </Link>
                        <Link href={`/${lang}#contact`} onClick={toggleMenu} className="btn btn-primary mx-auto w-[190px] text-center inline-flex justify-center">
                            {dict.nav?.contact || 'Initiate Audit'}
                        </Link>
                        <div className="flex justify-center items-center gap-6 mt-4 pt-6 border-t border-[var(--card-border)]">
                            <Link href={switchLang('en')} className={`font-bold ${lang === 'en' ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)]'}`}>EN</Link>
                            <ThemeToggle />
                            <Link href={switchLang('sk')} className={`font-bold ${lang === 'sk' ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)]'}`}>SK</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
