// Place this file at: src/app/about/page.tsx

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Target, Heart, Trophy } from 'lucide-react'
import './about.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Salma Ali Abdallah | World Championship Medalist & Ladies Martial Arts Coach Mombasa Kenya',
  description: 'Meet Salma Ali Abdallah - Kenya\'s National Team Captain, World Championship Bronze Medalist, and founder of ALMA ladies martial arts academy. Expert ladies martial arts instructor, self-defense coach, and women\'s fitness trainer in Mombasa empowering female athletes across Kenya and East Africa.',
  keywords: 'Salma Ali Abdallah, ladies martial arts coach, ladies martial arts instructor Mombasa, Tong-Il Moo-Do champion Kenya, ladies self defense coach, women martial arts instructor, female martial arts coach, Kenya national team captain martial arts, World Championship medalist Kenya, ladies karate instructor, women empowerment Mombasa, martial arts mentor women, female champion coach, Mombasa Open gold medalist, ladies martial arts academy founder, women-only academy founder',
  openGraph: {
    title: 'Salma Ali Abdallah - ALMA Founder & World Championship Ladies Martial Arts Coach',
    description: 'World Championship Bronze Medalist | Kenya National Team Captain | 5x Mombasa Open Gold Medalist | Empowering women through world-class ladies martial arts training.',
    url: 'https://allladiestimd.com/about',
    images: ['/images/salma-about.jpg'],
  },
}

export default function AboutPage(): JSX.Element {
  const achievements = [
    {
      year: '2019',
      title: 'World Championship Bronze Medal',
      description: 'Competed in Chung-Ju, South Korea and won bronze medal for Kenya'
    },
    {
      year: '2024',
      title: 'Mashujaa Day Recognition',
      description: 'Honored by President William Ruto for contribution to Kenyan sports'
    },
    {
      year: '2013-2024',
      title: '5x Mombasa Open Gold Medals',
      description: 'Multiple gold medals at Africas largest martial arts championship'
    },
    {
      year: 'Current',
      title: 'National Team Captain',
      description: 'Leading Kenya Ladies Tong-Il Moo-Do National Team'
    }
  ]

  const values = [
    {
      icon: <Target size={28} />,
      title: 'Empowerment',
      description: 'Building confident, strong women through martial arts training'
    },
    {
      icon: <Heart size={28} />,
      title: 'Safety',
      description: 'Creating a safe, supportive environment for all women'
    },
    {
      icon: <Trophy size={28} />,
      title: 'Excellence',
      description: 'World-class training from a proven champion'
    },
    {
      icon: <Award size={28} />,
      title: 'Community',
      description: "Building Mombasa's premier women's martial arts family"
    }
  ]

  return (
    <>
      <Header />
      <main>
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-grid">
              <div className="about-hero-content">
                <h1 className="about-hero-title">Meet Salma Ali Abdallah</h1>
                <p className="about-hero-subtitle">
                  Kenya&apos;s National Champion & World Championship Bronze Medalist
                </p>
                <p className="about-hero-text">
                  From training grounds in Mombasa to the world stage in South Korea, Salma&apos;s journey 
                  represents dedication, excellence, and the power of martial arts to transform lives. 
                  Now, she&apos;s bringing that same world-class training to empower women across Mombasa.
                </p>
              </div>
              <div className="about-hero-image">
                <Image 
                  src="/images/salma-about.jpg" 
                  alt="Salma Ali Abdallah" 
                  width={500} 
                  height={600}
                  className="about-img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section section">
          <div className="container">
            <h2 className="section-title">The Journey</h2>
            <p className="section-subtitle">
              From local champion to international medalist
            </p>

            <div className="timeline">
              {achievements.map((achievement, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{achievement.year}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{achievement.title}</h3>
                    <p className="timeline-description">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="values-section section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide ALMA and our training philosophy
            </p>

            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mission-section section">
          <div className="container">
            <div className="mission-content">
              <h2 className="mission-title">Why ALMA?</h2>
              <p className="mission-text">
                All Ladies Martial Arts Academy (ALMA) was founded with a clear mission: to empower
                women through martial arts training. In a women-only environment, students build not
                just physical strength and self-defense skills, but also confidence, discipline, and
                mental resilience.
              </p>
              <p className="mission-text">
                Training under a world championship medalist and national team captain, our students
                gain access to expertise rarely found outside elite athletic programs. Whether your
                goal is <Link href="/programs" style={{color: 'inherit', textDecoration: 'underline'}}>self-defense, fitness, competition, or personal growth</Link>, ALMA provides the
                foundation for success.
              </p>
              <p className="mission-text">
                Beyond the dojo, ALMA is committed to combating gender-based violence through practical
                self-defense training and building a supportive community where women lift each other up.
              </p>
              <div className="mission-cta">
                <Link href="/contact" className="btn btn-primary">
                  Join Our Community
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