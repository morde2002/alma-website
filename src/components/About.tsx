// Place this file at: src/components/About.tsx

import Link from 'next/link'
import Image from 'next/image'
import { Award, Shield } from 'lucide-react'
import './About.css'

interface Achievement {
  icon: JSX.Element
  title: string
  description: string
}

export default function About(): JSX.Element {
  const achievements: Achievement[] = [
    {
      icon: <Award size={20} />,
      title: "2019 World Championship Bronze Medalist",
      description: "Chung-Ju, South Korea"
    },
    {
      icon: <Award size={20} />,
      title: "Mashujaa Day 2024 Honoree",
      description: "Recognized by President William Ruto"
    },
    {
      icon: <Award size={20} />,
      title: "5x Gold Medalist",
      description: "Mombasa Open Championships"
    },
    {
      icon: <Shield size={20} />,
      title: "National Team Captain",
      description: "Kenya Ladies Tong-Il Moo-Do Team"
    }
  ]

  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <Image 
              src="/images/salma-portrait.jpg" 
              alt="Salma Ali Abdallah - World Championship Bronze Medalist" 
              width={450} 
              height={500}
              className="about-img"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <p className="overlay-title">Salma Ali Abdallah</p>
                <p className="overlay-subtitle">Kenya National Team Captain</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h2 className="section-title">Train with Kenya&apos;s Champion</h2>
            
            <p className="about-text">
              <strong>Salma Ali Abdallah</strong> is Kenya&apos;s leading female martial artist and captain 
              of the national Tong-Il Moo-Do ladies team. With a bronze medal from the 2019 World 
              Championships in South Korea and five gold medals from the Mombasa Open, Salma brings 
              world-class expertise to every session.
            </p>
            
            <p className="about-text">
              In 2024, Salma was honored on Mashujaa Day by President William Ruto for her outstanding 
              contribution to Kenyan sports. Beyond competition, she is passionate about empowering women 
              through martial arts and actively works to combat gender-based violence.
            </p>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary">
              Learn More About Salma
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}