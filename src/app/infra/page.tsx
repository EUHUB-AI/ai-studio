import type { Metadata } from 'next';
import { getDictionary } from '../../get-dictionary';
import { InfraLanding } from './InfraLanding';

const BASE = 'https://infra.euhub-ai.com';

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary('en');
  const m = dict.infra?.meta || {};
  return {
    title: { absolute: m.title || 'Infrastructure Migration & DevSecOps | EuHub AI' },
    description: m.description,
    alternates: { canonical: BASE },
    openGraph: { title: m.title, description: m.description, url: BASE, images: ['/og.png'] },
    twitter: { card: 'summary_large_image', images: ['/og.png'] },
  };
}

export default async function InfraPage() {
  const [en, sk, de] = await Promise.all([
    getDictionary('en'),
    getDictionary('sk'),
    getDictionary('de'),
  ]);
  const dicts = { en: en.infra, sk: sk.infra, de: de.infra };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://euhub-ai.com/#organization',
        name: 'EuHub AI',
        legalName: 'Engineers-incubator s.r.o.',
        url: 'https://euhub-ai.com',
      },
      {
        '@type': 'Service',
        name: 'Infrastructure migration & DevSecOps',
        serviceType:
          'Cloud migration, DevSecOps pipelines, platform/SRE, and EU compliance-ready infrastructure',
        provider: { '@id': 'https://euhub-ai.com/#organization' },
        areaServed: { '@type': 'Place', name: 'European Union' },
        url: BASE,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InfraLanding dicts={dicts} />
    </>
  );
}
