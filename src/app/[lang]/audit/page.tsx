import { getDictionary } from '../../../get-dictionary';
import { Navbar } from '../../../components/navigation/Navbar';
import { AuditPricing } from '../../../components/sections/AuditPricing';
import { Footer } from '../../../components/layout/Footer';

export default async function AuditPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as "en" | "sk");

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-white pt-[var(--header-height)]">
            <Navbar lang={lang} dict={dict} />
            <AuditPricing lang={lang} dict={dict} />
            <Footer lang={lang} dict={dict} />
        </main>
    );
}
