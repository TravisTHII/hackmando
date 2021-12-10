export const calcMove = (slug: string) => {
  const slugs = ['about', 'projects', 'contact']
  return -(slugs.indexOf(slug) * 100)
}
