import type { Metadata } from 'next'
import EventsContent from './events-content'

export const metadata: Metadata = {
  title: 'MOMBASA OPEN TONG-IL MOO-DO CHAMPIONSHIP 2025 | ALMA Academy Kenya',
  description: 'Join the premier martial arts championship in East Africa! Mombasa Open Tong-Il Moo-Do Championship Dec 10-23, 2025. Elite athletes, international competition, multiple divisions. Register now at ALMA Academy.',
  keywords: 'Mombasa Open Championship 2025, Tong-Il Moo-Do Championship, martial arts championship Kenya, East Africa championship, international martial arts competition, Mombasa martial arts event, championship registration, ALMA Academy events, women martial arts championship, martial arts competition Mombasa',
  openGraph: {
    title: 'MOMBASA OPEN TONG-IL MOO-DO CHAMPIONSHIP 2025',
    description: 'Premier martial arts championship in East Africa featuring elite athletes and international competition. December 10-23, 2025 in Mombasa.',
    url: 'https://allladiestimd.com/events',
    images: ['/images/tongilmoodo2025.jpg'],
  },
}

export default function EventsPage(): JSX.Element {
  return <EventsContent />
}
