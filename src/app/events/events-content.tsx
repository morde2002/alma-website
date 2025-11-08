'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, Trophy } from 'lucide-react'
import './events.css'

interface CountdownData {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function EventsContent(): JSX.Element {
  const [countdown, setCountdown] = useState<CountdownData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // Countdown timer
  useEffect(() => {
    const calculateCountdown = (): void => {
      const eventDate = new Date('2025-12-10T00:00:00').getTime()
      const now = new Date().getTime()
      const timeRemaining = eventDate - now

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

        setCountdown({ days, hours, minutes, seconds })
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateCountdown()
    setIsLoaded(true)

    const interval = setInterval(calculateCountdown, 1000)
    return () => clearInterval(interval)
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

        {/* Countdown Section */}
        <section className="countdown-section section">
          <div className="container">
            <h2 className="section-title">Time Until Championship</h2>
            <div className="countdown-display">
              <div className="countdown-box">
                <div className="countdown-value">{countdown.days}</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-divider">:</div>
              <div className="countdown-box">
                <div className="countdown-value">{String(countdown.hours).padStart(2, '0')}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-divider">:</div>
              <div className="countdown-box">
                <div className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-divider">:</div>
              <div className="countdown-box">
                <div className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</div>
                <div className="countdown-label">Seconds</div>
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
