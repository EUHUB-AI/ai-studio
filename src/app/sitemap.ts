import { MetadataRoute } from 'next'

const BASE_URL = 'https://euhub-ai.com'
const LOCALES = ['en', 'sk', 'de'] as const
const ROUTES = ['', '/privacy', '/terms', '/cookie'] as const

// Compliance pages currently available in EN + SK only (DE falls back to EN, so not listed)
const EN_SK_LOCALES = ['en', 'sk'] as const
const EN_SK_ROUTES = ['/ai-act', '/data-residency'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const standard = ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : 0.7,
    })),
  )

  const enSkOnly = EN_SK_ROUTES.flatMap((route) =>
    EN_SK_LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  )

  return [...standard, ...enSkOnly]
}
