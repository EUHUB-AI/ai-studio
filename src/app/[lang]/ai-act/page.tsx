import type { Metadata } from 'next';
import { getDictionary } from '../../../get-dictionary';
import Header from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { LegalPage } from '../../../components/legal/LegalPage';

const BASE_URL = 'https://euhub-ai.com';

// This page is authored in EN + SK. For any other locale (e.g. DE), fall back to EN content.
async function getPage(lang: string) {
  const dict = await getDictionary(lang as 'en' | 'sk' | 'de');
  const page = dict.aiAct ?? (await getDictionary('en')).aiAct;
  return { dict, page };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { page } = await getPage(lang);

  return {
    title: page.title,
    alternates: {
      canonical: `${BASE_URL}/${lang}/ai-act`,
      languages: {
        'en': `${BASE_URL}/en/ai-act`,
        'sk': `${BASE_URL}/sk/ai-act`,
        'x-default': `${BASE_URL}/en/ai-act`,
      },
    },
  };
}

export default async function AiActPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { dict, page } = await getPage(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <LegalPage
        title={page.title}
        lastUpdated={page.lastUpdated}
        sections={page.sections}
        lang={lang}
        backHome={dict.legal?.backHome || 'Back to Home'}
      />
      <Footer lang={lang} dict={dict} />
    </>
  );
}
