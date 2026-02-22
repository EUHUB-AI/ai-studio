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
  const renderContent = (content: string) => {
    // Regex for [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    // Regex for emails
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    const parts = [];
    let lastIndex = 0;
    let match;

    // We'll do a simple split and search approach for simplicity
    // First, find all matches for both regexes and sort them by index
    const matches: { index: number; length: number; type: 'link' | 'email'; data: any }[] = [];

    let m;
    while ((m = linkRegex.exec(content)) !== null) {
      matches.push({ index: m.index, length: m[0].length, type: 'link', data: { text: m[1], url: m[2] } });
    }
    while ((m = emailRegex.exec(content)) !== null) {
      // Avoid matching emails that are already part of a markdown link
      const alreadyMatched = matches.some(prev => m!.index >= prev.index && m!.index < prev.index + prev.length);
      if (!alreadyMatched) {
        matches.push({ index: m.index, length: m[0].length, type: 'email', data: { email: m[1] } });
      }
    }

    matches.sort((a, b) => a.index - b.index);

    matches.forEach((match) => {
      // Add preceding text
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }

      if (match.type === 'link') {
        parts.push(
          <Link
            key={match.index}
            href={match.data.url}
            className="text-[var(--primary)] hover:underline transition-all"
          >
            {match.data.text}
          </Link>
        );
      } else if (match.type === 'email') {
        parts.push(
          <a
            key={match.index}
            href={`mailto:${match.data.email}`}
            className="text-[var(--primary)] hover:underline transition-all"
          >
            {match.data.email}
          </a>
        );
      }

      lastIndex = match.index + match.length;
    });

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

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
                {renderContent(section.content)}
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
                        {renderContent(subsection.content)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};
