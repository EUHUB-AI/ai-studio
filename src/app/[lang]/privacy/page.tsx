import { getDictionary } from '../../../get-dictionary';
import Header from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { LegalPage } from '../../../components/legal/LegalPage';

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "sk");

  return (
    <>
      <Header dict={dict} lang={lang} />
      <LegalPage
        title={dict.privacy.title}
        lastUpdated={dict.privacy.lastUpdated}
        sections={dict.privacy.sections}
        lang={lang}
      />
      <Footer lang={lang} dict={dict} />
    </>
  );
}
