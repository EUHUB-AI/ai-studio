import type { Metadata } from 'next';
import { getDictionary } from '../../get-dictionary';
import { Navbar } from '../../components/navigation/Navbar';
import { Hero } from '../../components/sections/Hero';
import { PainsSituations } from '../../components/sections/PainsSituations';
import { BespokeEngineering } from '../../components/sections/BespokeEngineering';
import { FeatureGrid } from '../../components/sections/FeatureGrid';
import { ICP } from '../../components/sections/ICP';
import { Process } from '../../components/sections/Process';
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
    openGraph: {
      title: dict.meta?.title,
      description: dict.meta?.description,
      url: `${BASE_URL}/${lang}`,
      locale: lang,
      images: ['/og.png'],
    },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'sk' | 'de');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'EuHub AI',
        legalName: 'Engineers-incubator s.r.o.',
        url: BASE_URL,
        logo: `${BASE_URL}/logo_dark.png`,
        email: 'hello@euhub-ai.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Horná 67',
          addressLocality: 'Banská Bystrica',
          postalCode: '974 01',
          addressCountry: 'SK',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'EuHub AI',
        publisher: { '@id': `${BASE_URL}/#organization` },
        inLanguage: lang,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar lang={lang} dict={dict} />
      <Hero lang={lang} dict={dict} />
      <PainsSituations lang={lang} dict={dict} />
      <BespokeEngineering lang={lang} dict={dict} />
      <FeatureGrid lang={lang} dict={dict} />
      <ICP lang={lang} dict={dict} />
      <Process lang={lang} dict={dict} />
      <Team lang={lang} dict={dict} />
      <Contact lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
