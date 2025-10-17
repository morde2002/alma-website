// Place this file at: src/components/Programs.tsx

import Link from 'next/link'
import { Users, Clock, DollarSign, Award } from 'lucide-react'
import './Programs.css'

interface ProgramFeature {
  title: string
  description: string
  features: string[]
  icon: JSX.Element
}

interface PricingInfo {
  label: string
  amount: string
}

export default function Programs(): JSX.Element {
  const programs: ProgramFeature[] = [
    {
      title: "Beginner Training",
      description: "Perfect for those starting their martial arts journey. Learn fundamental techniques, basic forms, and self-defense skills in a supportive environment.",
      features: [
        "Basic Tong-Il Moo-Do techniques",
        "Fundamental stances and movements",
        "Introduction to self-defense",
        "Fitness and flexibility training"
      ],
      icon: <Users size={32} />
    },
    {
      title: "Intermediate Training",
      description: "For students ready to advance their skills. Focus on advanced techniques, competitive training, and deeper martial arts philosophy.",
      features: [
        "Advanced forms and patterns",
        "Sparring techniques",
        "Competition preparation",
        "Mental discipline training"
      ],
      icon: <Award size={32} />
    },
    {
      title: "Private Sessions",
      description: "One-on-one personalized training tailored to your specific goals. Available for all skill levels with flexible scheduling.",
      features: [
        "Personalized training plan",
        "Flexible scheduling",
        "Individual attention",
        "Faster skill progression"
      ],
      icon: <Clock size={32} />
    }
  ]

  const pricing: PricingInfo[] = [
    { label: 'Membership Fee', amount: 'Kshs. 2,500' },
    { label: 'Monthly Fee', amount: 'Kshs. 1,500' }
  ]

  return (
    <section className="programs-section section">
      <div className="container">
        <h2 className="section-title">Our Training Programs</h2>
        <p className="section-subtitle">Choose the program that fits your goals and schedule</p>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
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

        <div className="pricing-info">
          {pricing.map((price, index) => (
            <div key={index} className="pricing-card">
              <DollarSign size={24} className="pricing-icon" />
              <div className="pricing-details">
                <p className="pricing-label">{price.label}</p>
                <p className="pricing-amount">{price.amount}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-cta">
          <Link href="/programs" className="btn btn-primary">View Full Programs</Link>
          <Link href="/contact" className="btn btn-secondary">Register Now</Link>
        </div>
      </div>
    </section>
  )
}