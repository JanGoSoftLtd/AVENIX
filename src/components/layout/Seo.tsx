import { useEffect } from 'react'
import { SITE_URL, SITE_NAME } from '@/lib/site'

interface Props {
  title: string
  description: string
  path: string
  noindex?: boolean
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Updates document metadata per route (title, description, canonical, Open Graph, Twitter). */
export function Seo({ title, description, path, noindex }: Props) {
  useEffect(() => {
    const full = path === '/' ? `${SITE_NAME} | ${title}` : `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    document.title = full
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', full)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', full)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url
  }, [title, description, path, noindex])
  return null
}
