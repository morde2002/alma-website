// Place this file at: src/app/layout.tsx

import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALMA - All Ladies Martial Arts Academy',
  description: 'All Ladies Martial Arts Academy - Tong-Il Moo-Do. Empowering women through martial arts in Mombasa, Kenya. Trainer: Salma Ali',
  keywords: 'martial arts, women martial arts, Tong-Il Moo-Do, Mombasa, Kenya, Salma Ali, self defense',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}