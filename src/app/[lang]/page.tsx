import type { Metadata } from 'next';
import { getDictionary } from '../../get-dictionary';
import { Navbar } from '../../components/navigation/Navbar';
import { Hero } from '../../components/sections/Hero';
import { PainsSituations } from '../../components/sections/PainsSituations';
import { BespokeEngineering } from '../../components/sections/BespokeEngineering';
import { FeatureGrid } from '../../components/sections/FeatureGrid';
import { Team } from '../../components/sections/Team';
import { Contact } from '../../components/sections/Contact';
import { Footer } from '../../components/layout/Footer';

const BASE_URL = 'https://euhub-ai.com';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'sk' | 'de');

  return {
    title: dict.meta?.title,
    description: dict.meta?.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        'en': `${BASE_URL}/en`,
        'sk': `${BASE_URL}/sk`,
        'de': `${BASE_URL}/de`,
        'x-default': `${BASE_URL}/en`,
      },
    },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'sk' | 'de');

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
