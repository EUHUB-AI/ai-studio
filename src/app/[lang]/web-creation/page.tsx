import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { getDictionary } from '../../../get-dictionary';

export default async function WebCreationPage({ params }: { params: { lang: string } }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-white">
            <Navbar lang={lang} dict={dict} />
            <div className="pt-[var(--header-height)]">
                <ValueProposition lang={lang} dict={dict} />
            </div>
            <Footer lang={lang} dict={dict} />
        </main>
    );
}
