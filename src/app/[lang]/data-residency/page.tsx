import { getDictionary } from '../../../get-dictionary';
import Header from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { LegalPage } from '../../../components/legal/LegalPage';

export default async function DataResidencyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "sk");

  return (
    <>
      <Header dict={dict} lang={lang} />
      <LegalPage
        title={dict.dataResidency.title}
        lastUpdated={dict.dataResidency.lastUpdated}
        sections={dict.dataResidency.sections}
        lang={lang}
      />
      <Footer lang={lang} dict={dict} />
    </>
  );
}
