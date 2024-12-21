import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Discovery: Find Your Perfect Career Path',
  description:
    'Career Discovery is the ultimate guide for ages 13 to 20, empowering young minds to navigate the complex world of career choices, explore their options, make informed decisions, and excel in their professional journeys.',
  keywords: [
    'career discovery',
    'career path',
    'career guidance',
    'career assessment',
    'student career',
    'university abroad',
    'career exploration',
    'teen career',
    'professional journey',
  ],
  authors: [{ name: 'Career Discovery' }],
  openGraph: {
    title: 'Career Discovery: Find Your Perfect Career Path',
    description:
      'Career Discovery is the ultimate guide for ages 13 to 20, empowering young minds to navigate the complex world of career choices, explore their options, make informed decisions, and excel in their professional journeys.',
    url: 'https://thecareerdiscovery.com',
    siteName: 'Career Discovery',
    images: [
      {
        url: '/android-chrome-512x512.png', // Use a large, clear image
        width: 512,
        height: 512,
        alt: 'Career Discovery Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Discovery: Find Your Perfect Career Path',
    description:
      'Career Discovery is the ultimate guide for ages 13 to 20, empowering young minds to navigate the complex world of career choices, explore their options, make informed decisions, and excel in their professional journeys.',
    images: {
        url: '/android-chrome-512x512.png',
        alt: 'Career Discovery Logo',
    },
    site: '@thecareerdiscovery',
  },
   icons: {
    icon: [
      '/favicon.ico',
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
              background:
                'linear-gradient(135deg, rgba(250, 204, 21, 0.7) 0%, rgba(59, 130, 246, 1) 30%, rgba(37, 99, 235, 1) 70%, rgba(147, 197, 253, 1) 100%)',
              opacity: 0.9,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 80%)',
            }}
          />
        </div>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
