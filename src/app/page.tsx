// Place this file at: src/app/page.tsx

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'

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