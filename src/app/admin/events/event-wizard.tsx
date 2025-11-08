'use client'

import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { uploadImageToCloudinary } from '@/lib/cloudinary'
import Image from 'next/image'
import { ChevronRight, ChevronLeft, Upload } from 'lucide-react'
import './event-wizard.css'

interface Highlight {
  icon_type: 'users' | 'calendar' | 'mappin' | 'trophy'
  title: string
  description: string
}

interface EventFormData {
  title: string
  year: number
  startDate: string
  endDate: string
  location: string
  description: string
  imageUrl: string
  imageFile?: File
  // Optional customization fields
  highlights?: Highlight[]
  locationDescription?: string
  connectionText?: string
}

export default function EventWizard(): JSX.Element {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    year: new Date().getFullYear(),
    startDate: '',
    endDate: '',
    location: '',
    description: '',
    imageUrl: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) : value,
    }))
  }

  const handleImageSelect = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show preview immediately
    const reader = new FileReader()
    reader.onload = (event) => {
      setPreviewImageUrl(event.target?.result as string)
    }
    reader.readAsDataURL(file)

    // Upload to Cloudinary
    setUploading(true)
    try {
      const result = await uploadImageToCloudinary(file)
      setFormData((prev) => ({
        ...prev,
        imageUrl: result.secure_url,
      }))
      setError(null)
    } catch (err) {
      setError('Failed to upload image. Please try again.')
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (): Promise<void> => {
    if (
      !formData.title ||
      !formData.year ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.location ||
      !formData.description ||
      !formData.imageUrl
    ) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)
    try {
      await addDoc(collection(db, 'events'), {
        ...formData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      setSuccess(true)
      setTimeout(() => {
        window.location.href = '/admin/events'
      }, 2000)
    } catch (err) {
      setError('Failed to create event. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const isStep1Valid = formData.title && formData.year
  const isStep2Valid =
    formData.startDate && formData.endDate && formData.location
  const isStep3Valid = formData.description && formData.imageUrl
  const allValid = isStep1Valid && isStep2Valid && isStep3Valid

  return (
    <div className="event-wizard">
      {success && (
        <div className="success-message">
          ✓ Event created successfully! Redirecting...
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {/* Step Indicator */}
      <div className="step-indicator">
        {[1, 2, 3, 4, 5, 6].map((s) => (
          <div key={s} className={`step ${step === s ? 'active' : ''}`}>
            {s}
          </div>
        ))}
      </div>

      <div className="wizard-container">
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="step-content">
            <h2>Step 1: Basic Information</h2>
            <p className="step-description">
              Let&apos;s start with the event title and year
            </p>

            <div className="form-group">
              <label htmlFor="title">Event Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Mombasa Open Championship"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year *</label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-hint">
              These details will appear at the top of your event page
            </div>
          </div>
        )}

        {/* Step 2: Dates & Location */}
        {step === 2 && (
          <div className="step-content">
            <h2>Step 2: When & Where</h2>
            <p className="step-description">
              Set the event dates and location
            </p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">Start Date *</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">End Date *</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Mombasa, Kenya"
                className="form-input"
              />
            </div>

            <div className="form-hint">
              The countdown timer will start from your event date
            </div>
          </div>
        )}

        {/* Step 3: Description & Image */}
        {step === 3 && (
          <div className="step-content">
            <h2>Step 3: Description & Image</h2>
            <p className="step-description">
              Add a compelling description and promotional image
            </p>

            <div className="form-group">
              <label htmlFor="description">Event Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your event, what makes it special..."
                rows={5}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Event Image *</label>
              <div className="image-upload-area">
                {previewImageUrl || formData.imageUrl ? (
                  <div className="image-preview">
                    <Image
                      src={previewImageUrl || formData.imageUrl}
                      alt="Event preview"
                      width={300}
                      height={400}
                      style={{ objectFit: 'contain' }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewImageUrl(null)
                        setFormData((prev) => ({ ...prev, imageUrl: '' }))
                      }}
                      className="remove-image-btn"
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <label className="upload-label">
                    <Upload size={32} />
                    <span>Click to upload image</span>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageSelect}
                      disabled={uploading}
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
                {uploading && <div className="uploading">Uploading...</div>}
              </div>
            </div>

            <div className="form-hint">
              Upload a high-quality promotional image (JPG, PNG)
            </div>
          </div>
        )}

        {/* Step 4: Preview */}
        {step === 4 && (
          <div className="step-content">
            <h2>Step 4: Preview</h2>
            <p className="step-description">
              This is how your event will look on the website
            </p>

            <div className="preview-container">
              <div className="preview-card">
                <div className="preview-image">
                  {formData.imageUrl && (
                    <Image
                      src={formData.imageUrl}
                      alt={formData.title}
                      width={300}
                      height={400}
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </div>
                <div className="preview-content">
                  <h3>{formData.title}</h3>
                  <p className="preview-meta">
                    {formData.year} | {formData.startDate} to{' '}
                    {formData.endDate}
                  </p>
                  <p className="preview-location">{formData.location}</p>
                  <p className="preview-description">{formData.description}</p>
                </div>
              </div>

              <div className="preview-note">
                ✓ Title, dates, location, description, and image preview
                <br />
                ✓ Your event is ready to publish
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Optional Customization */}
        {step === 5 && (
          <div className="step-content">
            <h2>Step 5: Optional Customization</h2>
            <p className="step-description">
              Add custom highlights and descriptions (all fields are optional)
            </p>

            <div className="form-group">
              <label htmlFor="locationDescription">Location Description (Optional)</label>
              <textarea
                id="locationDescription"
                name="locationDescription"
                value={formData.locationDescription || ''}
                onChange={(e) => setFormData({ ...formData, locationDescription: e.target.value })}
                placeholder="Describe the venue and location in detail..."
                rows={3}
                className="form-input"
              />
              <small>This will replace the default location description</small>
            </div>

            <div className="form-group">
              <label htmlFor="connectionText">About This Championship (Optional)</label>
              <textarea
                id="connectionText"
                name="connectionText"
                value={formData.connectionText || ''}
                onChange={(e) => setFormData({ ...formData, connectionText: e.target.value })}
                placeholder="Tell the story about why this championship is important..."
                rows={4}
                className="form-input"
              />
              <small>This will replace the default ALMA & Championship section</small>
            </div>

            <div className="form-hint">
              These fields are optional. Leave them blank to use default content.
            </div>
          </div>
        )}

        {/* Step 6: Confirmation */}
        {step === 6 && (
          <div className="step-content">
            <h2>Ready to Publish?</h2>
            <p className="step-description">
              Click the button below to publish your event to the website
            </p>

            <div className="confirmation-checklist">
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Event title: <strong>{formData.title}</strong></span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Year: <strong>{formData.year}</strong></span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Dates: <strong>{formData.startDate} to {formData.endDate}</strong></span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Location: <strong>{formData.location}</strong></span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Image uploaded</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-publish"
            >
              {loading ? 'Publishing...' : 'Publish Event'}
            </button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="wizard-navigation">
        <button
          onClick={() => setStep((prev) => (prev > 1 ? (prev - 1) as 1 | 2 | 3 | 4 | 5 | 6 : 1))}
          disabled={step === 1}
          className="btn-nav btn-prev"
        >
          <ChevronLeft size={20} /> Previous
        </button>

        <div className="nav-info">
          Step {step} of 6
        </div>

        {step < 6 && (
          <button
            onClick={() => {
              if (step === 1 && !isStep1Valid) {
                setError('Please fill in all fields')
                return
              }
              if (step === 2 && !isStep2Valid) {
                setError('Please fill in all fields')
                return
              }
              if (step === 3 && !isStep3Valid) {
                setError('Please fill in all fields')
                return
              }
              setStep((prev) => (prev < 6 ? (prev + 1) as 1 | 2 | 3 | 4 | 5 | 6 : 6))
              setError(null)
            }}
            disabled={uploading}
            className="btn-nav btn-next"
          >
            {uploading ? 'Uploading...' : 'Next'} {!uploading && <ChevronRight size={20} />}
          </button>
        )}

        {step === 6 && (
          <button
            onClick={handleSubmit}
            disabled={loading || !allValid}
            className="btn-nav btn-publish-nav"
          >
            {loading ? 'Publishing...' : 'Publish'} ✓
          </button>
        )}
      </div>
    </div>
  )
}
