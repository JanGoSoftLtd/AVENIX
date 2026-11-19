import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight'

const styles: Record<Variant, string> = {
  primary: 'bg-violet text-white hover:bg-violet-dark shadow-sm shadow-violet/30',
  secondary: 'bg-white text-navy border border-line hover:border-violet hover:text-violet-dark',
  light: 'bg-white text-indigo-deep hover:bg-lavender/20',
  outlineLight: 'border border-white/30 text-white hover:bg-white/10',
}

interface Props {
  children: ReactNode
  variant?: Variant
  to?: string
  href?: string
  arrow?: boolean
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export function Button({ children, variant = 'primary', to, href, arrow, className = '', type = 'button', disabled, onClick }: Props) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  )
  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href) return <a href={href} className={cls}>{content}</a>
  return <button type={type} disabled={disabled} onClick={onClick} className={cls}>{content}</button>
}
