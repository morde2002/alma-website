// Place this file at: src/components/Footer.tsx

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import './Footer.css'

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <Image 
                src="/images/footer-logo.png" 
                alt="ALMA Logo" 
                width={60} 
                height={60}
              />
              <h3>ALMA</h3>
            </div>
            <p className="footer-tagline">The Triad of Strength, Peace & Discipline</p>
            <p className="footer-desc">
              Empowering women through Tong-Il Moo-Do martial arts in Mombasa, Kenya.
            </p>
            <div className="social-links">
              <a 
                href="https://instagram.com/alladiesmartialiartsacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/alladiesmartialiartsacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@allladiesmartialarts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.37z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About ALMA</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="contact-info">
              <li>
                <Phone size={18} />
                <a href="tel:+254705897767">+254 705 897 767</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:allladiesmartialartsacademy@gmail.com">allladiesmartialartsacademy@gmail.com</a>
              </li>
              <li>
                <MapPin size={18} />
                <a 
                  href="https://maps.google.com/?q=Swahilipot+Hub+Mombasa+Kenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Swahilipot Hub<br />Mombasa, Kenya
                </a>
              </li>
            </ul>
            <div className="training-hours">
              <h5>Training Hours</h5>
              <p>Monday to Friday</p>
              <p>6:00 PM - 7:30 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} All Ladies Martial Arts Academy. All rights reserved.</p>
          <p className="footer-credit">
            Designed by{' '}
            <a 
              href="https://xeleratedtech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="credit-link"
            >
              Xelerated Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}