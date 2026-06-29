import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true, // heading font carries the LCP <h1>
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false, // mono is used sparingly, off the critical path
});

const SKIP_LABEL: Record<string, string> = {
  en: "Skip to content",
  sk: "Preskočiť na obsah",
  de: "Zum Inhalt springen",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://euhub-ai.com"),
  title: {
    default: "EuHub AI | Strategic AI Implementation",
    template: "%s | EuHub AI",
  },
  description: "Your Strategic AI Implementation Partner in Central Europe. We engineer and deploy agentic AI systems.",
  openGraph: {
    type: "website",
    siteName: "EuHub AI",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "EuHub AI — Strategic AI Implementation" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

import { Providers } from "./providers";
import CookieConsent from "../components/consent/CookieConsent";

const DEFAULT_GTM_ID = "GTM-KMHTFB3N";
const configuredGtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const GTM_ID =
  configuredGtmId && configuredGtmId !== "GTM-YOUR_ID_HERE" && configuredGtmId.startsWith("GTM-")
    ? configuredGtmId
    : DEFAULT_GTM_ID;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <head>
        {/* Speed up the GTM connection (loaded afterInteractive) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Google Consent Mode v2 — defaults must run before GTM */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className={`${plusJakartaSans.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Skip-to-content link — first focusable element (WCAG 2.4.1) */}
        <a href="#main" className="skip-link">{SKIP_LABEL[locale] || SKIP_LABEL.en}</a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            title="Google Tag Manager"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          {children}
        </Providers>
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
