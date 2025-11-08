'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import './UpcomingEvent.css'

interface CountdownData {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function UpcomingEvent(): JSX.Element {
  const [countdown, setCountdown] = useState<CountdownData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    // Event start date: December 10, 2025
    const eventDate = new Date('2025-12-10T00:00:00').getTime()

    const calculateCountdown = (): void => {
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

  if (!isLoaded) return <></>

  return (
    <section className="upcoming-event-section section">
      <div className="container">
        <h2 className="section-title">Upcoming Event</h2>
        <p className="section-subtitle">
          Be part of a championship experience
        </p>

        <div className="event-preview-card">
          <div className="event-preview-image">
            <Image
              src="/images/tongilmoodo2025.jpg"
              alt="Mombasa Open Tong-Il Moo-Do International Martial Arts Championship 2025"
              width={400}
              height={300}
              className="event-img"
            />
            <div className="event-badge">CHAMPIONSHIP</div>
          </div>

          <div className="event-preview-content">
            <h3 className="event-title">
              Mombasa Open Tong-Il Moo-Do International Martial Arts Championship 2025
            </h3>

            <div className="event-dates">
              <div className="date-item">
                <Calendar size={20} />
                <span>December 10 – December 23, 2025</span>
              </div>
            </div>

            <div className="countdown-container">
              <h4 className="countdown-label">Countdown to Championship</h4>
              <div className="countdown">
                <div className="countdown-item">
                  <span className="countdown-number">{countdown.days}</span>
                  <span className="countdown-unit">Days</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{String(countdown.hours).padStart(2, '0')}</span>
                  <span className="countdown-unit">Hours</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{String(countdown.minutes).padStart(2, '0')}</span>
                  <span className="countdown-unit">Minutes</span>
                </div>
              </div>
            </div>

            <p className="event-description">
              Join competitors from across East Africa for the prestigious Mombasa Open Championship.
              A celebration of skill, dedication, and the martial arts spirit.
            </p>

            <div className="event-cta">
              <Link href="/events" className="btn btn-primary">
                View Full Event Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
