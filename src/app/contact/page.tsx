import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/app/contact/ContactForm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact ALMA | Book FREE Trial Martial Arts Class in Mombasa, Kenya',
  description: 'Register for your FREE trial martial arts class at ALMA. Reach out to book women\'s self-defense training, beginner martial arts lessons, or ask about our programs. Located at Swahilipot Hub, Mombasa. Train with World Championship medalist Salma Ali Abdallah.',
  keywords: 'contact ALMA academy, book martial arts class Mombasa, register trial class, martial arts contact Mombasa, free martial arts trial, Swahilipot Hub contact, women martial arts registration Kenya, self defense class signup, martial arts enrollment Mombasa, how to join martial arts academy, register self defense training, book coaching session',
  openGraph: {
    title: 'Contact ALMA | Register for FREE Trial Class Today',
    description: 'Ready to join ALMA? Book your free trial class, explore our women-only martial arts programs, or get in touch with any questions. Expert coaching from World Championship medalist.',
    url: 'https://allladiestimd.com/contact',
    images: ['/images/contact-og.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="contact-hero">
          <div className="container">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Ready to start your martial arts journey? Book your FREE trial class or reach out with any questions. Explore our <Link href="/programs" style={{color: 'inherit', textDecoration: 'underline'}}>training programs</Link> or <Link href="/about" style={{color: 'inherit', textDecoration: 'underline'}}>learn more about our trainer</Link>.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}