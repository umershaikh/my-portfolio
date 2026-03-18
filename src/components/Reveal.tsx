import { type PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type AnimationVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  variant?: AnimationVariant
  duration?: number
}>

const variants = {
  'fade-up': { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  'fade-down': { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  'fade-left': { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  'fade-right': { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 } },
  blur: {
    initial: { opacity: 0, filter: 'blur(12px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'fade-up',
  duration = 0.6,
}: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const v = variants[variant]

  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
