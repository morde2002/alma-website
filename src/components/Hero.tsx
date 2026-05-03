// Place this file at: src/components/Hero.tsx

import Link from 'next/link'
import Image from 'next/image'
import './Hero.css'

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">Founded by Kenya&apos;s National Champion</div>
            <h1 className="hero-title">Empower Yourself Through Martial Arts</h1>
            <p className="hero-description">
              Join Mombasa&apos;s premier women-only martial arts academy. Train with World Championship 
              Bronze Medalist Salma Ali Abdallah and build strength, confidence, and real self-defense skills.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">🥉</span>
                <span>World Championship Bronze Medalist</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏆</span>
                <span>5x Gold Medalist</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 36 24"
                    width="28"
                    height="19"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Kenya flag"
                  >
                    <rect width="36" height="6" fill="#000000" />
                    <rect y="6" width="36" height="2" fill="#FFFFFF" />
                    <rect y="8" width="36" height="8" fill="#BB0000" />
                    <rect y="16" width="36" height="2" fill="#FFFFFF" />
                    <rect y="18" width="36" height="6" fill="#006600" />
                    <ellipse cx="18" cy="12" rx="3.5" ry="6" fill="#FFFFFF" />
                    <ellipse cx="18" cy="12" rx="2.5" ry="5" fill="#BB0000" />
                    <ellipse cx="18" cy="12" rx="1" ry="3" fill="#000000" />
                    <line x1="13" y1="6" x2="23" y2="18" stroke="#FFFFFF" strokeWidth="0.7" />
                    <line x1="23" y1="6" x2="13" y2="18" stroke="#FFFFFF" strokeWidth="0.7" />
                  </svg>
                </span>
                <span>Kenya National Team Captain</span>
              </div>
            </div>

            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                Book Your First Class
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Meet Your Trainer
              </Link>
            </div>

            <div className="hero-info">
              <div className="info-box">
                <span className="info-label">Training Days</span>
                <span className="info-value">Mon - Fri</span>
              </div>
              <div className="info-box">
                <span className="info-label">Time</span>
                <span className="info-value">6:00 PM - 7:30 PM</span>
              </div>
              <div className="info-box">
                <span className="info-label">Location</span>
                <span className="info-value">Swahilipot Hub, Mombasa</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <Image 
              src="/images/salma-hero.jpg" 
              alt="Salma Ali Abdallah - Kenya National Champion" 
              width={500} 
              height={600}
              priority
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}