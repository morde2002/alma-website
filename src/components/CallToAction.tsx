// Place this file at: src/components/CallToAction.tsx

import Link from 'next/link'
import { Calendar, Phone, Sparkles } from 'lucide-react'
import './CallToAction.css'

export default function CallToAction(): JSX.Element {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-content">
          
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join ALMA today and be part of Mombasa&apos;s premier women&apos;s martial arts community. 
            Your first class is FREE, no experience necessary!
          </p>

          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-large">
              <Calendar size={20} />
              Book Your FREE Trial Class
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-large">
              <Phone size={20} />
              Contact Us
            </Link>
          </div>

          <div className="cta-guarantee">
            <p className="guarantee-text">
              ✓ No long - term commitment required • ✓ Women-only environment • ✓ All skill levels welcome
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}