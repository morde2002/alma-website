// Place this file at: src/app/layout.tsx

import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALMA - All Ladies Martial Arts Academy',
  description: 'All Ladies Martial Arts Academy - Tong-Il Moo-Do. Empowering women through martial arts in Mombasa, Kenya. Trained by Kenya National Champion Salma Ali Abdallah.',
  keywords: 'martial arts, women martial arts, Tong-Il Moo-Do, Mombasa, Kenya, Salma Ali, self defense, women empowerment, GBV prevention',
  
  // Favicon and Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },

  // Open Graph (for social media sharing)
  openGraph: {
    title: 'ALMA - All Ladies Martial Arts Academy',
    description: 'Train with Kenya\'s National Champion. Women-only martial arts in Mombasa.',
    url: 'https://alma-mombasa.com',
    siteName: 'ALMA',
    images: [
      {
        url: '/images/og-image.jpg', // 1200x630px recommended
        width: 1200,
        height: 630,
        alt: 'ALMA - All Ladies Martial Arts Academy',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ALMA - All Ladies Martial Arts Academy',
    description: 'Train with Kenya\'s National Champion. Women-only martial arts in Mombasa.',
    images: ['/images/og-image.jpg'],
  },

  // Additional metadata
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#E91E8C',
  manifest: '/manifest.json', // For PWA (optional)
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags if needed */}
      </head>
      <body>{children}</body>
    </html>
  )
}