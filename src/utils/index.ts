import { linkSlugs } from '../data'

export const calcMove = (slug: string) => `-${linkSlugs.indexOf(slug) * 100}%`
