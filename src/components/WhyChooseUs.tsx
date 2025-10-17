// Place this file at: src/components/WhyChooseUs.tsx

import { Shield, Trophy, Target, Users, Sparkles, Heart } from 'lucide-react'
import './WhyChooseUs.css'

interface Benefit {
  icon: JSX.Element
  title: string
  description: string
}

export default function WhyChooseUs(): JSX.Element {
  const benefits: Benefit[] = [
    {
      icon: <Shield size={28} />,
      title: "Women-Only Safe Space",
      description: "Train in a comfortable, judgment-free environment designed exclusively for women. Build confidence without intimidation."
    },
    {
      icon: <Trophy size={28} />,
      title: "Learn from a Champion",
      description: "Train directly with Salma Ali Abdallah, Kenya's National Team Captain and World Championship Bronze Medalist."
    },
    {
      icon: <Target size={28} />,
      title: "Real Self-Defense Skills",
      description: "Master practical self-defense techniques for real-world situations. Empower yourself with skills that matter."
    },
    {
      icon: <Users size={28} />,
      title: "Founding Community",
      description: "Join our founding members and help build Mombasa's premier women's martial arts community from the ground up."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Path to Competition",
      description: "Aspire to compete? Access training for regional, national, and international Tong-Il Moo-Do championships."
    },
    {
      icon: <Heart size={28} />,
      title: "Holistic Empowerment",
      description: "Beyond physical training, build mental strength, discipline, and inner peace through martial arts philosophy."
    }
  ]

  return (
    <section className="why-section section">
      <div className="container">
        <h2 className="section-title">Why Train at ALMA?</h2>
        <p className="section-subtitle">
          More than martial arts, a movement for women&apos;s empowerment in Mombasa
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}