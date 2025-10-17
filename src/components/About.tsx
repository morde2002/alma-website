// Place this file at: src/components/About.tsx

import Link from 'next/link'
import Image from 'next/image'
import './About.css'

interface StatItem {
  number: string
  label: string
}

export default function About(): JSX.Element {
  const stats: StatItem[] = [
    { number: '5+', label: 'Years Training' },
    { number: '100+', label: 'Students Trained' },
    { number: 'Multiple', label: 'Awards Won' }
  ]

  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <Image 
              src="/images/salma-portrait.jpg" 
              alt="Salma Ali - ALMA Founder" 
              width={450} 
              height={500}
              className="about-img"
            />
            <div className="image-badge">
              <p className="badge-title">Trainer</p>
              <p className="badge-name">Salma Ali</p>
              <p className="badge-subtitle">Kenya National Team Captain</p>
            </div>
          </div>

          <div className="about-content">
            <h2 className="section-title">About ALMA</h2>
            <p className="about-text">
              All Ladies Martial Arts Academy (ALMA) is Mombasa's premier martial arts training center 
              dedicated exclusively to empowering women through the discipline of Tong-Il Moo-Do, 
              a Korean martial art that unifies body and mind.
            </p>
            <p className="about-text">
              Founded by Salma Ali Abdallah, Kenya's ladies team captain and international bronze medalist, 
              ALMA provides a safe, supportive environment where women of all ages and skill levels can 
              develop strength, confidence, and self-defense capabilities.
            </p>
            <p className="about-text">
              Our training philosophy centers on The Triad of Strength, Peace, and Discipline, ensuring 
              that every student grows not just physically, but mentally and spiritually as well.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <p className="stat-number">{stat.number}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}