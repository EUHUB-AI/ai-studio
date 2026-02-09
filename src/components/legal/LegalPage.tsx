import Link from 'next/link';

interface LegalSection {
  heading: string;
  content: string;
  subsections?: {
    subheading: string;
    content: string;
  }[];
}

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
  lang: string;
}

export const LegalPage = ({ title, lastUpdated, sections, lang }: LegalPageProps) => {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-[calc(var(--header-height)+2rem)] pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          {lastUpdated && (
            <p className="text-[var(--muted-foreground)]">{lastUpdated}</p>
          )}
        </div>

        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            href={`/${lang}`}
            className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
          >
            ← {lang === 'en' ? 'Back to Home' : 'Späť na Domov'}
          </Link>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                {section.heading}
              </h2>
              
              {/* Main content */}
              <div className="text-[var(--muted-foreground)] whitespace-pre-wrap leading-relaxed mb-4">
                {section.content}
              </div>

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="ml-4 space-y-4">
                  {section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx}>
                      <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                        {subsection.subheading}
                      </h3>
                      <div className="text-[var(--muted-foreground)] whitespace-pre-wrap leading-relaxed">
                        {subsection.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-[var(--card-border)] text-[var(--muted-foreground)] text-sm">
          <p>
            {lang === 'en'
              ? 'Disclaimer: This document is a comprehensive template based on EU and Slovak data protection laws. Please consult with a qualified legal professional to ensure full compliance with your specific business operations.'
              : 'Zväčšenie: Tento dokument je komplexná šablóna založená na zákonoch EÚ a Slovenskej republiky. Konzultujte si kvalifikovaného právneho poradcu, aby ste zaistili úplný súlad s vašimi konkrétnymi obchodnými operáciami.'}
          </p>
        </div>
      </div>
    </main>
  );
};
