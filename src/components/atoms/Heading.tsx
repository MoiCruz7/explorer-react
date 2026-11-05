import type { ReactNode } from 'react'

type HeadingLevel = 1 | 2 | 3

interface HeadingProps {
  level: HeadingLevel
  children: ReactNode
  className?: string
}

const STYLES: Record<HeadingLevel, string> = {
  1: 'font-heading text-4xl font-bold text-papel',
  2: 'font-heading text-xl font-semibold text-papel',
  3: 'font-body text-lg text-papel',
}

export function Heading({ level, children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as const

  return <Tag className={`${STYLES[level]} ${className}`.trim()}>{children}</Tag>
}