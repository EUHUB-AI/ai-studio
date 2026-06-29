'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = ({ lang }: { lang: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on Escape or outside click (disclosure pattern)
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
        const onClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('mousedown', onClick);
        return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
    }, [isOpen]);

    const switchLang = (newLang: string) => {
        if (!pathname) return `/${newLang}`;
        const segments = pathname.split('/');
        segments[1] = newLang;
        return segments.join('/');
    };

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = () => setIsOpen(false);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'sk', label: 'SK' },
        { code: 'de', label: 'DE' },
    ];

    const currentLang = languages.find(l => l.code === lang);

    return (
        <div className={styles.container} ref={containerRef}>
            <button
                onClick={toggleDropdown}
                className={styles.trigger}
                aria-label="Select language"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span>{currentLang?.label}</span>
                <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {languages.map((language) => (
                        <Link
                            key={language.code}
                            href={switchLang(language.code)}
                            className={styles.option}
                            onClick={handleSelect}
                            aria-current={language.code === lang ? 'true' : undefined}
                        >
                            {language.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
