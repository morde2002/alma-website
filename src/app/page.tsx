// Place this file at: src/app/page.tsx

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ALMA - All Ladies Martial Arts Academy | Women\'s Self-Defense & Martial Arts in Mombasa',
  description: 'Join Mombasa\'s premier women-only martial arts academy. Learn self-defense, Tong-Il Moo-Do, and build confidence with World Championship medalist Salma Ali Abdallah. Free trial class available.',
  keywords: 'women martial arts Mombasa, ladies self defense Kenya, Tong-Il Moo-Do Mombasa, women only martial arts, self defense classes Mombasa, ALMA academy',
  openGraph: {
    title: 'ALMA - All Ladies Martial Arts Academy',
    description: 'Empowering women through martial arts in Mombasa. World-class training in a safe, supportive environment.',
    images: ['/images/alma-og.jpg'],
  },
}

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}