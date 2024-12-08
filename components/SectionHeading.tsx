'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  badge?: string
  title: string
  highlightedWord: string
  subtitle: string
}

export default function SectionHeading({
  badge,
  title,
  highlightedWord,
  subtitle
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      {badge && (
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 mb-6">
          <span className="text-sm font-medium text-primary">{badge}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        {title}{' '}
        <motion.span
          className="inline-block gradient-text"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{ 
            duration: 5, 
            ease: 'linear', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        >
          {highlightedWord}
        </motion.span>
      </h2>
      <p className="text-xl text-muted-foreground">
        {subtitle}
      </p>
    </div>
  )
}

