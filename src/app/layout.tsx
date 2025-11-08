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
  // Schema markup for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ALMA - All Ladies Martial Arts Academy',
    alternateName: ['ALMA', 'All Ladies Martial Arts Academy', 'All Ladies Martial Arts'],
    description: 'Women-only martial arts academy in Mombasa led by World Championship medalist Salma Ali Abdallah',
    url: 'https://allladiestimd.com',
    logo: 'https://allladiestimd.com/images/logo.jpg',
    image: 'https://allladiestimd.com/images/logo.jpg',
    sameAs: [
      'https://www.instagram.com',
      'https://www.facebook.com',
      'https://www.twitter.com',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'sw'],
      email: 'contact@allladiestimd.com',
      areaServed: ['KE', 'ZA'],
    },
  };

  // Schema markup for Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://allladiestimd.com',
    name: 'ALMA - All Ladies Martial Arts Academy',
    description: 'Mombasa\'s premier women-only martial arts academy. Learn self-defense, Tong-Il Moo-Do with World Championship medalist Salma Ali Abdallah.',
    image: 'https://allladiestimd.com/images/logo.jpg',
    url: 'https://allladiestimd.com',
    telephone: '+254',
    email: 'contact@allladiestimd.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Swahilipot Hub',
      addressLocality: 'Mombasa',
      addressRegion: 'Coast',
      postalCode: '80100',
      addressCountry: 'KE',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mombasa',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-4.0435',
      longitude: '39.6682',
    },
    sameAs: [
      'https://www.instagram.com',
      'https://www.facebook.com',
    ],
    priceRange: 'KES1500-KES2500',
  };

  // Schema markup for BreadcrumbList (for site navigation)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://allladiestimd.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://allladiestimd.com/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Programs',
        item: 'https://allladiestimd.com/programs',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://allladiestimd.com/contact',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Schema.org structured data markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}