// Place this file at: src/app/layout.tsx

import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://allladiestimd.com'), // Replace with your actual domain
  title: {
    default: 'ALMA - All Ladies Martial Arts Academy | Mombasa',
    template: '%s | ALMA'
  },
  description: 'Mombasa\'s premier women-only martial arts academy. Learn self-defense and Tong-Il Moo-Do with World Championship medalist Salma Ali Abdallah.',
  keywords: 'ALMA, All Ladies Martial Arts Academy, women martial arts Mombasa, self defense Kenya, Tong-Il Moo-Do, women empowerment',
  authors: [{ name: 'ALMA - All Ladies Martial Arts Academy' }],
  creator: 'ALMA',
  publisher: 'ALMA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://allladiestimd.com',
    siteName: 'ALMA - All Ladies Martial Arts Academy',
    title: 'ALMA - All Ladies Martial Arts Academy',
    description: 'Empowering women through martial arts in Mombasa, Kenya.',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'ALMA - All Ladies Martial Arts Academy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALMA - All Ladies Martial Arts Academy',
    description: 'Empowering women through martial arts in Mombasa, Kenya.',
    images: ['/images/alma-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'vXTWICcGv4IZuuSMhRKG9g23h02XP_VH9gAM7GJFzyw', // Add your Google Search Console verification code
  },
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