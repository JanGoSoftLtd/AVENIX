import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

interface SectionProps {
  children: ReactNode
  id?: string
  tone?: 'light' | 'white' | 'dark'
  className?: string
}

export function Section({ children, id, tone = 'light', className = '' }: SectionProps) {
  const bg = tone === 'dark' ? 'bg-indigo-deep text-white' : tone === 'white' ? 'bg-white' : 'bg-surface'
  return (
    <section id={id} className={`${bg} py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

interface HeadingProps {
  eyebrow?: string
  title: string
  text?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
}

export function SectionHeading({ eyebrow, title, text, tone = 'light', align = 'left', as: Tag = 'h2' }: HeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? 'text-lavender' : 'text-violet-dark'}`}>{eyebrow}</p>
      )}
      <Tag className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${dark ? '!text-white' : ''}`}>{title}</Tag>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/75' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}

/** Compact header for inner pages. */
export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden bg-indigo-deep pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet/30 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading as="h1" tone="dark" eyebrow={eyebrow} title={title} text={text} />
        {children}
      </Container>
    </header>
  )
}
