import type { Metadata } from 'next';
import { InfraLanding } from './InfraLanding';

const BASE = 'https://infra.euhub-ai.com';
const TITLE = 'Infrastructure Migration & DevSecOps | EuHub AI';
const DESC =
  'Cloud migration and DevSecOps for the EU: infrastructure-as-code you own, security baked into every pipeline, EU data residency, and zero lock-in. Join the waitlist.';

export const metadata: Metadata = {
  title: { absolute: TITLE }, // skip the root "%s | EuHub AI" template (brand already present)
  description: DESC,
  alternates: { canonical: BASE },
  openGraph: { title: TITLE, description: DESC, url: BASE, images: ['/og.png'] },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export default function InfraPage() {
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
      <InfraLanding />
    </>
  );
}
