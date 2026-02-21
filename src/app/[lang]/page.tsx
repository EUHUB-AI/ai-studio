import { getDictionary } from '../../get-dictionary';
import { Navbar } from '../../components/navigation/Navbar';
import { Hero } from '../../components/sections/Hero';
import { PainsSituations } from '../../components/sections/PainsSituations';
import { BespokeEngineering } from '../../components/sections/BespokeEngineering';
import { FeatureGrid } from '../../components/sections/FeatureGrid';
import { Team } from '../../components/sections/Team';
import { Contact } from '../../components/sections/Contact';
import { Footer } from '../../components/layout/Footer';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "sk");

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-[var(--background)]">
      <Navbar lang={lang} dict={dict} />
      <Hero lang={lang} dict={dict} />
      <PainsSituations lang={lang} dict={dict} />
      <BespokeEngineering lang={lang} dict={dict} />
      <FeatureGrid lang={lang} dict={dict} />
      <Team lang={lang} dict={dict} />
      <Contact lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
