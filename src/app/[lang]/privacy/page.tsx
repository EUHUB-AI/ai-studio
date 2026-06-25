import type { Metadata } from 'next';
import { getDictionary } from '../../../get-dictionary';
import Header from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { LegalPage } from '../../../components/legal/LegalPage';

const BASE_URL = 'https://euhub-ai.com';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'sk' | 'de');

  return {
    title: dict.privacy.title,
    alternates: {
      canonical: `${BASE_URL}/${lang}/privacy`,
      languages: {
        'en': `${BASE_URL}/en/privacy`,
        'sk': `${BASE_URL}/sk/privacy`,
        'de': `${BASE_URL}/de/privacy`,
        'x-default': `${BASE_URL}/en/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'sk' | 'de');

  return (
    <>
      <Header dict={dict} lang={lang} />
      <LegalPage
        title={dict.privacy.title}
        lastUpdated={dict.privacy.lastUpdated}
        sections={dict.privacy.sections}
        lang={lang}
        backHome={dict.legal?.backHome || 'Back to Home'}
      />
      <Footer lang={lang} dict={dict} />
    </>
  );
}
