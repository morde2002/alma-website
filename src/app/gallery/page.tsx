// Place this file at: src/app/gallery/page.tsx

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Instagram, Camera } from 'lucide-react'
import './gallery.css'

export default function GalleryPage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <section className="gallery-hero">
          <div className="container">
            <h1 className="gallery-hero-title">Gallery</h1>
            <p className="gallery-hero-subtitle">
              Follow our journey as we build Mombasa&apos;s premier women&apos;s martial arts community
            </p>
          </div>
        </section>

        <section className="gallery-coming-soon section">
          <div className="container">
            <div className="coming-soon-content">
              <div className="coming-soon-icon">
                <Camera size={64} />
              </div>
              <h2 className="coming-soon-title">Gallery Coming Soon</h2>
              <p className="coming-soon-text">
                We&apos;re in our founding year and building an amazing community of empowered women. 
                Our gallery will be filled with training sessions, competitions, and memorable moments 
                as we grow together.
              </p>
              <p className="coming-soon-text">
                In the meantime, follow us on Instagram to see our latest updates, training highlights, 
                and behind-the-scenes moments!
              </p>

              <div className="instagram-cta">
                <a 
                  href="https://instagram.com/alladiesmartialiartsacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-instagram"
                >
                  <Instagram size={24} />
                  Follow Us on Instagram
                </a>
              </div>

              <div className="join-cta">
                <p className="join-text">
                  Want to be part of our story? Join ALMA and appear in our growing gallery!
                </p>
                <a href="/contact" className="btn btn-primary">
                  Book Your FREE Trial Class
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}