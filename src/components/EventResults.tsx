'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trophy, Award, ArrowRight } from 'lucide-react'
import './EventResults.css'

export default function EventResults(): JSX.Element {
  return (
    <section className="event-results-section section">
      <div className="container">
        <h2 className="section-title">Championship Success</h2>
        <p className="section-subtitle">
          Celebrating ALMA&apos;s achievements at the Mombasa Open Championship 2025
        </p>

        <div className="results-preview-card">
          <div className="results-preview-image">
            <Image
              src="/images/zahra-khamis.png"
              alt="Zahra Khamis - ALMA Bronze Medalist"
              width={400}
              height={500}
              className="results-img"
            />
            <div className="results-badge">
              <Trophy size={20} />
              <span>DOUBLE BRONZE MEDALIST</span>
            </div>
          </div>

          <div className="results-preview-content">
            <div className="achievement-tag">ALMA RISING STAR</div>

            <h3 className="results-title">
              Zahra Khamis Wins TWO Bronze Medals
            </h3>

            <div className="achievement-summary">
              <div className="achievement-item">
                <Award size={24} style={{ color: '#CD7F32' }} />
                <div>
                  <strong>December 15, 2025</strong>
                  <p>12th Mombasa Open Tong-Il Moo-Do Championship</p>
                </div>
              </div>
            </div>

            <p className="results-description">
              Under the expert coaching of ALMA founder and World Championship medalist
              <strong> Salma Ali Abdallah</strong>, Zahra Khamis earned two bronze medals in the
              junior female sparring category (ages 6-13), showcasing the world-class training
              available at ALMA.
            </p>

            <div className="results-highlight-box">
              <Trophy size={28} style={{ color: '#E91E8C' }} />
              <p>
                Kenya dominated the championship, with our national team completing a clean sweep
                of the podium in multiple divisions.
              </p>
            </div>

            <div className="results-cta">
              <Link href="/events#zahra-spotlight" className="btn btn-primary">
                Read Zahra&apos;s Full Story
                <ArrowRight size={20} />
              </Link>
              <Link href="/programs" className="btn btn-secondary">
                Train Like a Champion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
