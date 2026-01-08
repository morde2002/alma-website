'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, Trophy } from 'lucide-react'
import './events.css'

export default function EventsContent(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(true)

    // Handle scroll to anchor after page loads
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  const eventHighlights = [
    {
      icon: <Trophy size={32} />,
      title: 'International Competition',
      description: 'Competitors from across East Africa'
    },
    {
      icon: <Users size={32} />,
      title: 'Elite Athletes',
      description: 'Multiple weight categories and skill levels'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Two Weeks of Competition',
      description: 'Semifinals and finals throughout the period'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Mombasa Venue',
      description: 'East Africa\'s premier martial arts championship'
    }
  ]

  if (!isLoaded) return <></>

  return (
    <>
      <Header />
      <main>
        {/* Event Hero Section */}
        <section className="event-hero">
          <div className="container">
            <div className="event-hero-grid">
              <div className="event-hero-content">
                <h1 className="event-hero-title">
                  MOMBASA OPEN TONG-IL MOO-DO INTERNATIONAL MARTIAL ARTS CHAMPIONSHIP 2025
                </h1>
                <p className="event-hero-subtitle">
                  A Celebration of Excellence, Skill, and the Martial Arts Spirit
                </p>
                <p className="event-hero-text">
                  Two weeks of intense competition featuring preliminaries, semifinals, and finals across multiple weight categories and skill levels. This premier championship brings together the finest martial artists from across East Africa to celebrate the Tong-Il Moo-Do tradition.
                </p>
                <div className="event-quick-info">
                  <div className="quick-info-item">
                    <Calendar size={20} />
                    <span>December 10 – December 23, 2025</span>
                  </div>
                  <div className="quick-info-item">
                    <MapPin size={20} />
                    <span>Mombasa, Kenya</span>
                  </div>
                </div>
              </div>
              <div className="event-hero-image">
                <Image
                  src="/images/tongilmoodo2025.jpg"
                  alt="MOMBASA OPEN TONG-IL MOO-DO INTERNATIONAL MARTIAL ARTS CHAMPIONSHIP 2025"
                  width={600}
                  height={700}
                  className="event-hero-img"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Championship Results Section */}
        <section className="results-section section">
          <div className="container">
            <h2 className="section-title">Championship Results</h2>
            <p className="section-subtitle">
              The 12th Mombasa Open Tong-Il Moo-Do Championship concluded successfully on December 23, 2025
            </p>
            <div className="results-summary">
              <div className="result-highlight">
                <Trophy size={48} style={{ color: '#E91E8C' }} />
                <h3>Kenya Dominates Championship</h3>
                <p>
                  Kenya&apos;s national team, Jasiri, delivered an outstanding performance, completing a clean sweep
                  of the podium in multiple categories including the Female Sparring (6-13 years) division.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zahra Khamis Spotlight Section */}
        <section id="zahra-spotlight" className="zahra-section section">
          <div className="container">
            <div className="zahra-grid">
              <div className="zahra-image-wrapper">
                <Image
                  src="/images/zahra-khamis.png"
                  alt="Zahra Khamis - Bronze Medalist at Mombasa Open Championship 2025"
                  width={500}
                  height={600}
                  className="zahra-image"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="zahra-content">
                <div className="zahra-badge">ALMA Rising Star</div>
                <h2 className="zahra-title">Zahra Khamis</h2>
                <h3 className="zahra-subtitle">Double Bronze Medalist</h3>

                <div className="achievement-highlight">
                  <Trophy size={32} style={{ color: '#CD7F32' }} />
                  <div>
                    <p className="achievement-date">December 15, 2025</p>
                    <p className="achievement-text">
                      Zahra Khamis shone at the 12th Mombasa Open Tong-Il Moo-Do Championship,
                      earning <strong>TWO Bronze Medals</strong> in the junior female sparring category (ages 6-13).
                    </p>
                  </div>
                </div>

                <div className="zahra-story">
                  <h4>A Rising Champion&apos;s Journey</h4>
                  <p>
                    Under the expert coaching of ALMA founder and World Championship medalist
                    <strong> Salma Ali Abdallah</strong>, Zahra has blossomed into one of Kenya&apos;s most
                    promising young martial artists. Her double bronze medal achievement at the prestigious
                    Mombasa Open Championship showcases the world-class training and mentorship available
                    at ALMA.
                  </p>
                  <p>
                    Competing against international athletes at the Aga Khan Academy Multi-Purpose Hall,
                    Zahra demonstrated exceptional skill, discipline, and the fighting spirit that defines
                    ALMA&apos;s training philosophy. Her success contributed to Kenya&apos;s dominant performance,
                    with the national team completing a clean sweep of the podium in the female sparring division.
                  </p>
                  <p>
                    Zahra&apos;s achievement is a testament to what dedicated young women can accomplish with
                    proper training, expert mentorship, and a supportive community. At ALMA, we&apos;re proud
                    to nurture the next generation of champions while empowering women through martial arts.
                  </p>
                </div>

                <div className="zahra-cta">
                  <h4>Train Like a Champion</h4>
                  <p>
                    Learn from the same World Championship coach who trained Zahra Khamis to become
                    a double medalist. Whether you&apos;re a beginner or aspiring competitor, ALMA provides
                    the expert coaching and supportive environment to help you reach your full potential.
                  </p>
                  <div className="cta-buttons">
                    <Link href="/programs" className="btn btn-primary">
                      View Training Programs
                    </Link>
                    <Link href="/contact" className="btn btn-secondary">
                      Start Your Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="highlights-section section">
          <div className="container">
            <h2 className="section-title">Why Attend?</h2>
            <p className="section-subtitle">
              Experience one of East Africa&apos;s premier martial arts championships
            </p>
            <div className="highlights-grid">
              {eventHighlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="event-details-section section">
          <div className="container">
            <h2 className="section-title">Event Details</h2>
            <div className="details-grid">
              <div className="detail-card">
                <h3 className="detail-title">Event Dates</h3>
                <p className="detail-content">
                  December 10 – December 23, 2025
                </p>
                <p className="detail-description">
                  Two weeks of intense competition featuring preliminaries, semifinals, and finals.
                </p>
              </div>
              <div className="detail-card">
                <h3 className="detail-title">Location</h3>
                <p className="detail-content">
                  Mombasa, Kenya
                </p>
                <p className="detail-description">
                  Hosted at the premier sports facilities in the heart of East Africa&apos;s martial arts community.
                </p>
              </div>
              <div className="detail-card">
                <h3 className="detail-title">Competition Categories</h3>
                <p className="detail-content">
                  Multiple Divisions
                </p>
                <p className="detail-description">
                  Competitors compete across various weight categories and skill levels to ensure fair competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ALMA Connection Section */}
        <section className="alma-connection-section section">
          <div className="container">
            <div className="connection-content">
              <h2 className="connection-title">ALMA & The Championship</h2>
              <p className="connection-text">
                The Mombasa Open Championship is a defining event in the Tong-Il Moo-Do calendar and a showcase
                for Kenya&apos;s elite athletes. As the captain of Kenya&apos;s National Team and a 5x gold medalist,
                Salma Ali Abdallah has been instrumental in bringing world-class competitive training to ALMA.
              </p>
              <p className="connection-text">
                Our intermediate training program is specifically designed to prepare dedicated students for
                competitive participation in championships like the Mombasa Open. Whether you aspire to compete
                on the international stage or simply want to experience elite-level training, ALMA provides the
                coaching, community, and support you need.
              </p>
              <div className="connection-cta">
                <Link href="/programs" className="btn btn-primary">
                  Explore Competitive Training
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Train With Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
