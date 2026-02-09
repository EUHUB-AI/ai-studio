'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = ({ lang }: { lang: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

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
        { code: 'sk', label: 'SK' }
    ];

    const currentLang = languages.find(l => l.code === lang);

    return (
        <div className={styles.container}>
            <button
                onClick={toggleDropdown}
                className={styles.trigger}
                aria-label="Select language"
            >
                <span>{currentLang?.label}</span>
                <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {languages.map((lang) => (
                        <Link
                            key={lang.code}
                            href={switchLang(lang.code)}
                            className={styles.option}
                            onClick={handleSelect}
                        >
                            {lang.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
