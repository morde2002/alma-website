// Place this file at: src/app/page.tsx

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import EventResults from '@/components/EventResults'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ladies Martial Arts Mombasa | Women\'s Self-Defense & Karate Classes Kenya - ALMA Academy',
  description: 'Join Mombasa\'s premier ladies martial arts academy. Women-only self-defense, karate, ladies fighting & Tong-Il Moo-Do classes with World Championship medalist Salma Ali Abdallah. Serving Mombasa, Kilifi, Kwale & Coast Region. Free trial available!',
  keywords: 'ladies martial arts, ladies martial arts Mombasa, ladies martial arts Kenya, female martial arts, ladies self defense, ladies karate, ladies self defense classes, women martial arts Mombasa, ladies fighting classes, women self defense Kenya, girls martial arts, ladies karate classes, female martial arts training, women karate Kenya, martial arts for ladies, self defense classes for women, ladies Tong-Il Moo-Do, women empowerment Mombasa, ladies martial arts Coast region, martial arts East Africa, women-only martial arts, ALMA Academy Mombasa, ladies self defense workshop',
  openGraph: {
    title: 'Ladies Martial Arts Mombasa | Women\'s Self-Defense & Karate - ALMA Academy',
    description: 'Premier ladies martial arts academy empowering women through self-defense, karate & Tong-Il Moo-Do training in Mombasa, Kenya. World-class coaching, women-only safe environment.',
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
        <EventResults />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}