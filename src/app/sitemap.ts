import { MetadataRoute } from 'next'

const BASE_URL = 'https://euhub-ai.com'
const LOCALES = ['en', 'sk'] as const
const ROUTES = ['', '/privacy', '/terms', '/cookie'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.7,
    })),
  )
}
