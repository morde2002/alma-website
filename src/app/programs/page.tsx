// Place this file at: src/app/programs/page.tsx

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Users, Award, Clock, Check } from 'lucide-react'
import './programs.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Martial Arts Programs for Women | ALMA Mombasa',
  description: 'Explore ALMA\'s martial arts programs: Beginner classes, advanced training, private sessions, and self-defense workshops. All women-only environment with expert instruction. Free trial available.',
  keywords: 'beginner martial arts women, self defense workshop Mombasa, private martial arts lessons, women fitness Mombasa, martial arts training programs',
  openGraph: {
    title: 'ALMA Training Programs',
    description: 'World-class martial arts training programs designed specifically for women. From beginners to advanced competitors.',
    images: ['/images/training-og.jpg'],
  },
}

export default function ProgramsPage(): JSX.Element {
  const programDetails = [
    {
      icon: <Users size={32} />,
      title: 'Beginner Training',
      duration: '3-6 months',
      level: "No experience required",
      description: 'Start your martial arts journey with comprehensive beginner training designed for women of all fitness levels.',
      curriculum: [
        'Basic stances and movements',
        'Fundamental striking techniques',
        'Self-defense fundamentals',
        'Basic blocking and parrying',
        'Introduction to forms (Hyungs)',
        'Flexibility and conditioning',
        'Martial arts etiquette and philosophy',
        'Confidence building exercises'
      ],
      outcomes: [
        'Build foundational martial arts skills',
        'Improve fitness and flexibility',
        'Gain practical self-defense knowledge',
        'Develop discipline and focus'
      ]
    },
    {
      icon: <Award size={32} />,
      title: 'Intermediate Training',
      duration: '6-12 months',
      level: 'Completed beginner level',
      description: 'Advance your skills with competitive training, complex techniques, and preparation for tournaments.',
      curriculum: [
        'Advanced striking combinations',
        'Sparring techniques and strategy',
        'Advanced forms and patterns',
        'Competition preparation',
        'Board breaking techniques',
        'Advanced self-defense scenarios',
        'Mental conditioning and focus',
        'Tournament rules and procedures'
      ],
      outcomes: [
        'Master advanced techniques',
        'Compete in regional tournaments',
        'Develop competitive mindset',
        'Progress toward black belt'
      ]
    },
    {
      icon: <Clock size={32} />,
      title: 'Private Sessions',
      duration: 'Flexible',
      level: 'All levels welcome',
      description: 'One-on-one personalized training with Salma Ali Abdallah, tailored to your specific goals and schedule.',
      curriculum: [
        'Customized training plan',
        'Personalized technique refinement',
        'Individual attention and feedback',
        'Flexible scheduling options',
        'Specific goal-oriented training',
        'Competition preparation (if desired)',
        'Form and technique perfection',
        'Accelerated skill development'
      ],
      outcomes: [
        'Rapid skill progression',
        'Personalized attention from champion',
        'Flexible training schedule',
        'Achieve specific martial arts goals'
      ]
    }
  ]

  return (
    <>
      <Header />
      <main>
        <section className="programs-hero">
          <div className="container">
            <h1 className="programs-hero-title">Training Programs</h1>
            <p className="programs-hero-subtitle">
              World-class martial arts training for women of all levels. From complete beginners to 
              aspiring champions, we have a program for you.
            </p>
          </div>
        </section>

        <section className="programs-detail-section section">
          <div className="container">
            {programDetails.map((program, index) => (
              <div key={index} className="program-detail-card">
                <div className="program-detail-header">
                  <div className="program-detail-icon">{program.icon}</div>
                  <div className="program-detail-info">
                    <h2 className="program-detail-title">{program.title}</h2>
                    <div className="program-meta">
                      <span className="meta-item">Duration: {program.duration}</span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">{program.level}</span>
                    </div>
                  </div>
                </div>

                <p className="program-detail-description">{program.description}</p>

                <div className="program-detail-grid">
                  <div className="curriculum-section">
                    <h3 className="detail-section-title">Curriculum</h3>
                    <ul className="detail-list">
                      {program.curriculum.map((item, idx) => (
                        <li key={idx}>
                          <Check size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="outcomes-section">
                    <h3 className="detail-section-title">What You will Achieve</h3>
                    <ul className="detail-list">
                      {program.outcomes.map((item, idx) => (
                        <li key={idx}>
                          <Check size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="programs-pricing-section section">
          <div className="container">
            <h2 className="section-title">Pricing</h2>
            <div className="pricing-cards">
              <div className="pricing-card-detail">
                <h3>Registration Fee</h3>
                <div className="price">Kshs. 2,500</div>
                <p className="price-note">One-time fee (includes uniform)</p>
              </div>
              <div className="pricing-card-detail">
                <h3>Monthly Training</h3>
                <div className="price">Kshs. 1,500</div>
                <p className="price-note">Unlimited class access</p>
              </div>
            </div>
            <p className="pricing-info-text">
              Special rates available for founding members. Private sessions are priced separately based on scheduling and goals.
            </p>
            <div className="pricing-cta">
              <Link href="/contact" className="btn btn-primary">
                Book Your FREE Trial Class
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}