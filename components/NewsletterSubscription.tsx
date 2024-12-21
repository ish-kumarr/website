'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Check, Loader2, CircleCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    console.log('Newsletter subscription started')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setStatus('error')
    }
  }

  return (
    <div className="space-y-4 max-w-md mx-auto">
    
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 px-4 bg-white rounded-full border border-gray-200"
          required
          disabled={status === 'success'}
        />
        
        <motion.button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`
            w-full h-12 rounded-full relative overflow-hidden
            transition-all duration-300 ease-out
            ${status === 'success' 
              ? 'bg-green-500' 
              : status === 'error'
                ? 'bg-red-500'
                : 'bg-[#356bff]'}
          `}
        >
          <AnimatePresence mode="wait">
            {status === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Loader2 className="w-6 h-6 text-white animate-spin" />
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 flex items-center justify-center space-x-2"
              >
                <CircleCheck className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-base">Subscribed!</span>
              </motion.div>
            )}

            {(status === 'idle' || status === 'error') && (
              <motion.span
                key="text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-white font-medium text-base"
              >
                {status === 'error' ? 'Try Again' : 'Subscribe'}
              </motion.span>
            )}
          </AnimatePresence>

          <motion.div
            className="absolute inset-0"
            initial={{ backgroundPosition: '200% 0' }}
            animate={{ backgroundPosition: '0% 0' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        </motion.button>
      </form>
    </div>
  )
}

