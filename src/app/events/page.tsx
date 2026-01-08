import type { Metadata } from 'next'
import EventsContent from './events-content'

export const metadata: Metadata = {
  title: 'Zahra Khamis Wins Bronze Medals - MOMBASA OPEN 2025 | Coached by Salma Ali | ALMA Kenya',
  description: 'Zahra Khamis wins TWO Bronze Medals at the 12th Mombasa Open Tong-Il Moo-Do Championship 2025! Trained by World Champion Salma Ali Abdallah at ALMA Academy. Kenya dominates East Africa martial arts championship. December 15, 2025.',
  keywords: 'Zahra Khamis, Zahra Khamis bronze medal, Zahra Khamis martial arts, Salma Ali Abdallah, Salma Ali coach, ALMA Academy, Mombasa Open Championship 2025, Tong-Il Moo-Do Championship Kenya, ladies martial arts Kenya, women martial arts championship, Kenya bronze medal, Mombasa martial arts, junior female sparring Kenya, martial arts champions Kenya',
  openGraph: {
    title: 'Zahra Khamis Wins Two Bronze Medals - Trained by Salma Ali at ALMA',
    description: 'ALMA rising star Zahra Khamis wins TWO bronze medals at Mombasa Open Championship 2025. Coached by World Champion Salma Ali Abdallah.',
    url: 'https://allladiestimd.com/events',
    images: ['/images/zahra-khamis.png'],
  },
}

// Structured data for Zahra Khamis, Salma Ali, and the championship article
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // Person schema for Zahra Khamis
    {
      '@type': 'Person',
      '@id': 'https://allladiestimd.com/events#zahra-khamis',
      name: 'Zahra Khamis',
      image: 'https://allladiestimd.com/images/zahra-khamis.png',
      description: 'Rising martial arts champion and double bronze medalist at the 12th Mombasa Open Tong-Il Moo-Do Championship 2025. Junior female sparring competitor trained by World Champion Salma Ali Abdallah at ALMA Academy.',
      affiliation: {
        '@type': 'Organization',
        name: 'ALMA Academy - All Ladies Martial Arts',
        url: 'https://allladiestimd.com'
      },
      award: [
        'Bronze Medal - 12th Mombasa Open Tong-Il Moo-Do Championship 2025 (Female Sparring 6-13 years)',
        'Bronze Medal - 12th Mombasa Open Tong-Il Moo-Do Championship 2025 (Female Sparring 6-13 years)'
      ],
      knowsAbout: ['Martial Arts', 'Tong-Il Moo-Do', 'Sparring', 'Self Defense'],
      coach: {
        '@id': 'https://allladiestimd.com/events#salma-ali-abdallah'
      }
    },
    // Person schema for Salma Ali Abdallah
    {
      '@type': 'Person',
      '@id': 'https://allladiestimd.com/events#salma-ali-abdallah',
      name: 'Salma Ali Abdallah',
      jobTitle: 'Martial Arts Coach and Founder',
      description: 'World Championship bronze medalist, 5-time Mombasa Open gold medalist, and Captain of Kenya National Martial Arts Team. Founder and head coach at ALMA Academy, specializing in women\'s martial arts training.',
      affiliation: {
        '@type': 'Organization',
        name: 'ALMA Academy - All Ladies Martial Arts',
        url: 'https://allladiestimd.com'
      },
      award: [
        'World Championship Bronze Medal - Tong-Il Moo-Do',
        '5x Gold Medalist - Mombasa Open Championship',
        'Captain - Kenya National Martial Arts Team'
      ],
      knowsAbout: ['Martial Arts', 'Tong-Il Moo-Do', 'Coaching', 'Self Defense', 'Women\'s Martial Arts'],
      alumniOf: 'World Tong-Il Moo-Do Championships',
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Martial Arts Coach',
        skills: 'Tong-Il Moo-Do, Self Defense Training, Competition Coaching, Women\'s Empowerment'
      }
    },
    // Article schema for the championship results
    {
      '@type': 'Article',
      '@id': 'https://allladiestimd.com/events#mombasa-open-2025',
      headline: 'Zahra Khamis Wins Two Bronze Medals at Mombasa Open Championship 2025',
      description: 'ALMA rising star Zahra Khamis wins TWO bronze medals at the 12th Mombasa Open Tong-Il Moo-Do Championship. Trained by World Champion Salma Ali Abdallah, Zahra competed against international athletes from across East Africa.',
      image: 'https://allladiestimd.com/images/zahra-khamis.png',
      datePublished: '2025-12-15',
      dateModified: '2025-12-23',
      author: {
        '@id': 'https://allladiestimd.com/events#salma-ali-abdallah'
      },
      publisher: {
        '@type': 'Organization',
        name: 'ALMA Academy',
        logo: {
          '@type': 'ImageObject',
          url: 'https://allladiestimd.com/logo.png'
        }
      },
      mainEntityOfPage: 'https://allladiestimd.com/events',
      about: [
        {
          '@type': 'Event',
          name: '12th Mombasa Open Tong-Il Moo-Do International Martial Arts Championship 2025',
          startDate: '2025-12-10',
          endDate: '2025-12-23',
          location: {
            '@type': 'Place',
            name: 'Mombasa',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Mombasa',
              addressCountry: 'Kenya'
            }
          }
        }
      ],
      mentions: [
        { '@id': 'https://allladiestimd.com/events#zahra-khamis' },
        { '@id': 'https://allladiestimd.com/events#salma-ali-abdallah' }
      ]
    }
  ]
}

export default function EventsPage(): JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EventsContent />
    </>
  )
}
