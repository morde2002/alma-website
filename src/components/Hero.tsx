// Place this file at: src/components/Hero.tsx

import Link from 'next/link'
import Image from 'next/image'
import './Hero.css'

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Empower Yourself Through Martial Arts</h1>
          <p className="hero-subtitle">Join Mombasa's premier all-ladies martial arts academy</p>
          <p className="hero-tagline">The Triad of Strength, Peace & Discipline</p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">Register Now</Link>
            <Link href="/about" className="btn btn-secondary">Learn More</Link>
          </div>
          <div className="hero-info">
            <div className="info-item">
              <p className="info-label">Training Days</p>
              <p className="info-value">Mon, Wed, Fri</p>
            </div>
            <div className="info-item">
              <p className="info-label">Time</p>
              <p className="info-value">6:00 PM - 7:30 PM</p>
            </div>
            <div className="info-item">
              <p className="info-label">Location</p>
              <p className="info-value">Swahilipot Hub</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <Image 
            src="/images/salma-hero.jpg" 
            alt="Salma Ali in action" 
            width={500} 
            height={600}
            priority
            className="hero-img"
          />
        </div>
      </div>
    </section>
  )
}