// Place this file at: src/app/contact/ContactForm.tsx

'use client'
import { useState, useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './contact.css'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  program: string
}

export default function ContactForm(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    program: 'beginner'
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<string>('')
  
  const [emailValidation, setEmailValidation] = useState<{
    isValid: boolean | null
    message: string
    isChecking: boolean
  }>({
    isValid: null,
    message: '',
    isChecking: false
  })

  const [phoneValidation, setPhoneValidation] = useState<{
    isValid: boolean | null
    message: string
  }>({
    isValid: null,
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateEmail = async (email: string): Promise<void> => {
    if (!email) {
      setEmailValidation({ isValid: null, message: '', isChecking: false })
      return
    }

    if (!email.includes('@')) {
      setEmailValidation({
        isValid: false,
        message: 'Email must include @',
        isChecking: false
      })
      return
    }

    setEmailValidation({ isValid: null, message: '', isChecking: true })

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailValidation({
        isValid: false,
        message: 'Please enter a complete email address',
        isChecking: false
      })
      return
    }

    const disposableDomains = ['tempmail.com', 'guerrillamail.com', 'mailinator.com', '10minutemail.com', 'throwaway.email']
    const domain = email.split('@')[1]
    if (disposableDomains.includes(domain)) {
      setEmailValidation({
        isValid: false,
        message: 'Please use a permanent email address',
        isChecking: false
      })
      return
    }

    setTimeout(() => {
      setEmailValidation({
        isValid: true,
        message: 'Email looks good!',
        isChecking: false
      })
    }, 300)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const email = e.target.value
    setFormData({ ...formData, email })
    validateEmail(email)
  }

  const handlePhoneChange = (value: string, country: any): void => {
    setFormData({ ...formData, phone: value })
    
    if (!value || value.length === 0) {
      setPhoneValidation({ isValid: null, message: '' })
      return
    }

    const countryCode = country.dialCode
    const phoneWithoutCode = value.slice(countryCode.length)
    
    const phoneLengths: { [key: string]: number } = {
      'ke': 9,
      'us': 10,
      'gb': 10,
      'ug': 9,
      'tz': 9,
      'za': 9,
      'ng': 10,
      'gh': 9,
      'et': 9,
      'eg': 10,
    }

    const expectedLength = phoneLengths[country.countryCode] || 9

    if (phoneWithoutCode.length < expectedLength) {
      setPhoneValidation({
        isValid: false,
        message: `Phone number should be ${expectedLength} digits`
      })
    } else if (phoneWithoutCode.length > expectedLength) {
      setPhoneValidation({
        isValid: false,
        message: `Phone number should be ${expectedLength} digits (too long)`
      })
    } else {
      setPhoneValidation({
        isValid: true,
        message: 'Phone number is valid!'
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    
    if (emailValidation.isValid === false) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 3000)
      return
    }

    if (phoneValidation.isValid === false) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 3000)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setTimeout(() => {
          window.location.reload()
        }, 4000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-section">
            <h2 className="contact-info-title">Contact Information</h2>
            <p className="contact-info-text">
              We&apos;re here to answer any questions you may have. Reach out and we&apos;ll respond as soon as possible.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <Phone size={24} />
                </div>
                <div className="detail-content">
                  <h4>Phone</h4>
                  <a href="tel:+254705897767">+254 705 897 767</a>
                  <p className="detail-note">Call or WhatsApp</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <Mail size={24} />
                </div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <a href="mailto:allladiesmartialartsacademy@gmail.com">allladiesmartialartsacademy@gmail.com</a>
                  <p className="detail-note">We&apos;ll reply within 24 hours</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <MapPin size={24} />
                </div>
                <div className="detail-content">
                  <h4>Location</h4>
                  <a 
                    href="https://maps.google.com/?q=Swahilipot+Hub+Mombasa+Kenya" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Swahilipot Hub
                  </a>
                  <p className="detail-note">Mombasa, Kenya</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <Clock size={24} />
                </div>
                <div className="detail-content">
                  <h4>Training Hours</h4>
                  <p>Monday, Wednesday, Friday</p>
                  <p className="detail-note">6:00 PM - 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2 className="form-title">Book Your FREE Trial Class</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <div className="input-with-validation">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    required
                    placeholder="your.email@example.com"
                    className={emailValidation.isValid === false ? 'input-error' : emailValidation.isValid === true ? 'input-success' : ''}
                  />
                  {emailValidation.isChecking && (
                    <span className="validation-icon checking">⏳</span>
                  )}
                  {emailValidation.isValid === true && (
                    <span className="validation-icon success"><CheckCircle size={20} /></span>
                  )}
                  {emailValidation.isValid === false && (
                    <span className="validation-icon error"><XCircle size={20} /></span>
                  )}
                </div>
                {emailValidation.message && (
                  <p className={`validation-message ${emailValidation.isValid ? 'success' : 'error'}`}>
                    {emailValidation.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <div className="phone-input-wrapper">
                  <PhoneInput
                    country={'ke'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    searchPlaceholder="Search country..."
                    placeholder="700 000 000"
                    disableCountryCode={false}
                    countryCodeEditable={false}
                    disableDropdown={false}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      id: 'phone',
                      className: phoneValidation.isValid === false ? 'input-error' : phoneValidation.isValid === true ? 'input-success' : ''
                    }}
                    containerClass="phone-input-container"
                    inputClass="phone-input-field"
                    buttonClass="phone-input-button"
                    dropdownClass="phone-input-dropdown"
                    searchClass="phone-input-search"
                  />
                  {phoneValidation.isValid === true && (
                    <span className="phone-validation-icon success"><CheckCircle size={20} /></span>
                  )}
                  {phoneValidation.isValid === false && (
                    <span className="phone-validation-icon error"><XCircle size={20} /></span>
                  )}
                </div>
                {phoneValidation.message && (
                  <p className={`validation-message ${phoneValidation.isValid ? 'success' : 'error'}`}>
                    {phoneValidation.message}
                  </p>
                )}
                <p className="phone-note">Select your country and enter your phone number</p>
              </div>

              <div className="form-group">
                <label htmlFor="program">Program Interest</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="beginner">Beginner Training</option>
                  <option value="intermediate">Intermediate Training</option>
                  <option value="private">Private Sessions</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your goals or any questions you have..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-submit"
                disabled={isSubmitting || emailValidation.isValid === false || phoneValidation.isValid === false}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message-bottom">
                  <p>✓ Thank you! Your message has been sent successfully. We&apos;ll contact you soon to confirm your trial class.</p>
                  <p className="refresh-note">Refreshing page...</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message-bottom">
                  <p>✗ Something went wrong. Please try again or contact us directly at +254 705 897 767.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}