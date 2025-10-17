// Place this file at: src/components/WhyChooseUs.tsx

import { Shield, Heart, Trophy, Users } from 'lucide-react'
import './WhyChooseUs.css'

interface Reason {
  icon: JSX.Element
  title: string
  description: string
}

export default function WhyChooseUs(): JSX.Element {
  const reasons: Reason[] = [
    {
      icon: <Shield size={40} />,
      title: "Safe Environment",
      description: "An exclusive all-ladies space where women can train comfortably and confidently without judgment."
    },
    {
      icon: <Trophy size={40} />,
      title: "Expert Training",
      description: "Learn from Salma Ali, Kenya's national team captain and international medalist with years of experience."
    },
    {
      icon: <Heart size={40} />,
      title: "Holistic Approach",
      description: "Our training philosophy focuses on physical strength, mental peace, and disciplined character development."
    },
    {
      icon: <Users size={40} />,
      title: "Supportive Community",
      description: "Join a sisterhood of empowered women who motivate and support each other's growth journey."
    }
  ]

  return (
    <section className="why-section section">
      <div className="container">
        <h2 className="section-title">Why Choose ALMA</h2>
        <p className="section-subtitle">Experience the difference of training with Mombasa's premier all-ladies martial arts academy</p>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}