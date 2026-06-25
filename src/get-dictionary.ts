import 'server-only'

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    sk: () => import('./dictionaries/sk.json').then((module) => module.default),
    de: () => import('./dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    // @ts-ignore
    return dictionaries[locale]?.() ?? dictionaries.en()
}
