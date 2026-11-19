interface LogoProps {
  className?: string
  tone?: 'dark' | 'light'
}

/** Original AVENIX mark: a geometric "A" built from two strokes with a rising accent node. */
export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#24104F" />
      <path d="M11 30 20 9l9 21" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6 23.5h10.8" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
      <circle cx="30.5" cy="10" r="3" fill="#8B5CF6" />
    </svg>
  )
}

export function Logo({ className = '', tone = 'dark' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span
        className={`font-display text-xl font-bold tracking-[0.18em] ${tone === 'dark' ? 'text-navy' : 'text-white'}`}
      >
        AVENIX
      </span>
    </span>
  )
}
