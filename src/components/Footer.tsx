// Place this file at: src/components/Footer.tsx

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import './Footer.css'

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Image 
                src="/images/logo.png" 
                alt="ALMA Logo" 
                width={80} 
                height={80}
              />
              <h3>ALMA</h3>
            </div>
            <p className="footer-tagline">The Triad of Strength, Peace & Discipline</p>
            <p className="footer-desc">Empowering women through Tong-Il Moo-Do martial arts in Mombasa, Kenya.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/achievements">Achievements</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <Phone size={18} />
                <span>+254 705 897 767</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Swahilipot Hub, Mombasa</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@alma-mombasa.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a 
                href="https://instagram.com/alladiesmartialiartsacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com/alladiesmartialiartsacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="training-schedule">
              <h5>Training Days</h5>
              <p>Monday, Wednesday, Friday</p>
              <p>6:00 PM - 7:30 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} All Ladies Martial Arts Academy. All rights reserved.</p>
          <p>Designed with passion for empowerment</p>
        </div>
      </div>
    </footer>
  )
}