import { getDictionary } from '../../get-dictionary';
import { Navbar } from '../../components/navigation/Navbar';
import { Hero } from '../../components/sections/Hero';
import { ValueProposition } from '../../components/sections/ValueProposition';
import { Services } from '../../components/sections/Services';

import { Team } from '../../components/sections/Team';
import { Contact } from '../../components/sections/Contact';
import { Footer } from '../../components/layout/Footer';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "sk");

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Navbar lang={lang} dict={dict} />
      <Hero lang={lang} dict={dict} />
      <Services lang={lang} dict={dict} />
      <Team lang={lang} dict={dict} />
      <Contact lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
