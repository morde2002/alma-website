// Place this file at: src/components/CallToAction.tsx

import Link from 'next/link'
import './CallToAction.css'

export default function CallToAction(): JSX.Element {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container cta-container">
        <h2 className="cta-title">Ready to Begin Your Journey?</h2>
        <p className="cta-text">
          Join Mombasa's premier all-ladies martial arts academy and discover your inner strength. 
          Register today and take the first step towards empowerment.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn btn-primary">Register Now</Link>
          <Link href="/programs" className="btn btn-secondary">View Programs</Link>
        </div>
        <div className="cta-info">
          <p>Classes: Monday, Wednesday, Friday | 6:00 PM - 7:30 PM</p>
          <p>Location: Swahilipot Hub, Mombasa | Contact: +254 705 897 767</p>
        </div>
      </div>
    </section>
  )
}