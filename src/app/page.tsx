// Place this file at: src/app/page.tsx

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import UpcomingEvent from '@/components/UpcomingEvent'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ALMA - All Ladies Martial Arts Academy | Women\'s Martial Arts & Self-Defense in Mombasa, Kenya',
  description: 'Join Mombasa\'s premier women-only martial arts academy. Learn self-defense, Tong-Il Moo-Do, fitness training & women empowerment with World Championship medalist Salma Ali Abdallah. Affordable classes, free trial available.',
  keywords: 'women martial arts Mombasa, ladies martial arts Kenya, self defense women, Tong-Il Moo-Do Mombasa, women fitness training, women empowerment Mombasa, ladies self defense classes, women-only academy Kenya, martial arts for women, Salma Ali champion, ALMA academy, self defense workshop Mombasa, women martial arts beginner, ladies martial arts intermediate',
  openGraph: {
    title: 'ALMA - All Ladies Martial Arts Academy | Women\'s Empowerment Through Martial Arts',
    description: 'Empowering women through martial arts, fitness & self-defense training in Mombasa. World-class coaching from a World Championship medalist. Women-only safe environment.',
    url: 'https://allladiestimd.com',
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
        <UpcomingEvent />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}