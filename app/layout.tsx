import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Career Discovery',
  description: 'Find your perfect university abroad facilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <div 
          className="absolute top-0 left-0 right-0 h-[500px] -z-10 overflow-hidden"
        >
          <div
            className="absolute inset-0 animate-fastest-aura"
            style={{
              background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.7) 0%, rgba(59, 130, 246, 1) 30%, rgba(37, 99, 235, 1) 70%, rgba(147, 197, 253, 1) 100%)',
              opacity: 0.9
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 80%)',
            }}
          />
        </div>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

