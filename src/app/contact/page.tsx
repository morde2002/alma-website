import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/app/contact/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact ALMA | Book Your Free Trial Class in Mombasa',
  description: 'Get in touch with ALMA to book your FREE trial martial arts class. Located at Swahilipot Hub, Mombasa. Train with World Championship medalist Salma Ali Abdallah. Classes Monday, Wednesday, Friday.',
  keywords: 'book martial arts class Mombasa, free trial martial arts, contact ALMA, Swahilipot Hub martial arts, women self defense Mombasa contact',
  openGraph: {
    title: 'Contact ALMA - Book Your Free Trial',
    description: 'Ready to start your martial arts journey? Contact us to book your free trial class today.',
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
              Ready to start your martial arts journey? Book your FREE trial class or reach out with any questions.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}