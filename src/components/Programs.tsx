// Place this file at: src/components/Programs.tsx

import Link from 'next/link'
import { Users, Award, Clock } from 'lucide-react'
import './Programs.css'

interface Program {
  title: string
  description: string
  features: string[]
  icon: JSX.Element
  highlight?: string
}

export default function Programs(): JSX.Element {
  const programs: Program[] = [
    {
      title: "Beginner Training",
      description: "Perfect for those starting their martial arts journey. Learn self-defense, build confidence, and develop fitness in a supportive women-only environment.",
      features: [
        "Self-defense fundamentals",
        "Basic Tong-Il Moo-Do techniques",
        "Fitness and flexibility training",
        "Confidence building exercises"
      ],
      icon: <Users size={28} />,
      highlight: "FREE Trial Available"
    },
    {
      title: "Intermediate Training",
      description: "Advance your skills with competitive training and deeper martial arts mastery. Prepare for regional and international competitions.",
      features: [
        "Advanced forms and patterns",
        "Sparring and competition techniques",
        "Path to championships",
        "Mental discipline and strategy"
      ],
      icon: <Award size={28} />
    },
    {
      title: "Private Sessions",
      description: "One-on-one personalized training with Kenya's national champion. Tailored to your specific goals with flexible scheduling.",
      features: [
        "Personalized training plan",
        "Flexible scheduling options",
        "Individual attention from Salma",
        "Accelerated skill development"
      ],
      icon: <Clock size={28} />
    }
  ]

  return (
    <section className="programs-section section">
      <div className="container">
        <h2 className="section-title">Training Programs</h2>
        <p className="section-subtitle">
          Choose your path to strength, confidence, and self-defense mastery
        </p>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              {program.highlight && (
                <div className="program-badge">{program.highlight}</div>
              )}
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <ul className="program-features">
                {program.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-box">
          <h3 className="pricing-title">Investment in Your Empowerment</h3>
          <div className="pricing-details">
            <div className="pricing-item">
              <span className="pricing-label">Registration Fee</span>
              <span className="pricing-amount">Kshs. 2,500</span>
            </div>
            <div className="pricing-item">
              <span className="pricing-label">Monthly Training</span>
              <span className="pricing-amount">Kshs. 1,500</span>
            </div>
          </div>
          <p className="pricing-note">
            Special founding member rates available for early joiners
          </p>
        </div>

        <div className="programs-cta">
          <Link href="/contact" className="btn btn-primary">
            Book Your FREE Trial Class
          </Link>
        </div>
      </div>
    </section>
  )
}