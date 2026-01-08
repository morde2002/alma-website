// Place this file at: src/app/layout.tsx

import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://allladiestimd.com'), // Replace with your actual domain
  title: {
    default: 'ALMA - All Ladies Martial Arts Academy | Mombasa',
    template: '%s | ALMA'
  },
  description: 'Mombasa\'s premier ladies martial arts academy. Women-only self-defense, karate & Tong-Il Moo-Do training with World Championship medalist Salma Ali Abdallah. Serving Mombasa, Kilifi, Kwale & Coast Region, Kenya.',
  keywords: 'ladies martial arts, ladies martial arts Mombasa, ladies martial arts Kenya, female martial arts, women martial arts Mombasa, ladies self defense, ladies karate, women karate Kenya, girls martial arts, ladies fighting classes, women self defense Mombasa, self defense Kenya, ladies self defense classes, Tong-Il Moo-Do Kenya, women empowerment Mombasa, martial arts Coast region, ladies martial arts East Africa, women-only martial arts, ALMA Academy',
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
    title: 'ALMA - All Ladies Martial Arts Academy | Ladies Martial Arts Mombasa Kenya',
    description: 'Premier ladies martial arts academy empowering women through self-defense, karate & Tong-Il Moo-Do training in Mombasa, Kenya.',
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
    title: 'ALMA - All Ladies Martial Arts Academy | Ladies Martial Arts Mombasa Kenya',
    description: 'Premier ladies martial arts academy empowering women through self-defense, karate & Tong-Il Moo-Do training in Mombasa, Kenya.',
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Mombasa',
      },
      {
        '@type': 'City',
        name: 'Kilifi',
      },
      {
        '@type': 'City',
        name: 'Kwale',
      },
      {
        '@type': 'State',
        name: 'Coast Region',
      },
      {
        '@type': 'Country',
        name: 'Kenya',
      },
    ],
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
        name: 'Events',
        item: 'https://allladiestimd.com/events',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://allladiestimd.com/contact',
      },
    ],
  };

  // FAQ Schema for better SEO and featured snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can women learn martial arts in Mombasa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ALMA (All Ladies Martial Arts Academy) is Mombasa\'s premier ladies martial arts academy. We offer women-only self-defense, karate, and Tong-Il Moo-Do training at Swahilipot Hub in Mombasa. We serve students from Mombasa, Kilifi, Kwale, and across the Coast Region of Kenya.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ladies martial arts classes are available in Kenya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ALMA offers ladies martial arts classes including beginner ladies karate, intermediate training, ladies self-defense classes, ladies fighting techniques, and Tong-Il Moo-Do training. All programs are taught by World Championship medalist Salma Ali Abdallah in a women-only safe environment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a ladies self-defense class in Mombasa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! ALMA offers comprehensive ladies self-defense classes in Mombasa. Our women-only academy provides practical self-defense training, ladies karate, and martial arts skills taught by Kenya\'s National Team Captain and World Championship medalist. Free trial classes available.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does ladies martial arts training cost in Mombasa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ALMA offers affordable ladies martial arts training with a one-time registration fee of Kshs. 2,500 (includes uniform) and monthly training at Kshs. 1,500 for unlimited class access. We also offer a free trial class for new students.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who teaches ladies martial arts at ALMA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All ladies martial arts classes at ALMA are taught by Salma Ali Abdallah - Kenya\'s National Team Captain, World Championship Bronze Medalist, and 5-time Mombasa Open Gold Medalist. She brings world-class expertise to ladies martial arts training in Kenya.',
        },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}