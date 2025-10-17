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
                <a href="mailto:info@alma-mombasa.com">info@alma-mombasa.com</a>
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
              <p>Monday, Wednesday, Friday</p>
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