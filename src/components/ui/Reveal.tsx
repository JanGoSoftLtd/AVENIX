import { useRef, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade'

interface Props {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
}

const hidden: Record<Direction, { opacity: number; x?: number; y?: number; scale?: number }> = {
  up: { opacity: 0, y: 24 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.94 },
  fade: { opacity: 0 },
}

/**
 * Animates content into view once. Only transform/opacity are animated (no layout shift).
 * Safety net: reduced-motion users (and browsers without IntersectionObserver)
 * see the content immediately, with no animation.
 */
export function Reveal({ children, delay = 0, direction = 'up', className }: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
  // Without IntersectionObserver the content would never reveal, so show it straight away.
  const unsupported = typeof IntersectionObserver === 'undefined'

  if (reduce || unsupported) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : hidden[direction]}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
