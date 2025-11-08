'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import AdminNav from '@/components/AdminNav'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import { db } from '@/lib/firebase'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { ArrowLeft } from 'lucide-react'
import '../../../dashboard/dashboard.css'
import '../../events.css'

interface Event {
  id: string
  title: string
  year: number
  startDate: string
  endDate: string
  location: string
  description: string
  imageUrl: string
  locationDescription?: string
  connectionText?: string
}

export default function EditEventPage(): JSX.Element {
  const params = useParams()
  const router = useRouter()
  const eventId = params.id as string
  const year = params.year as string

  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState<Event | null>(null)

  useEffect(() => {
    const fetchEvent = async (): Promise<void> => {
      try {
        const docRef = doc(db, 'events', eventId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const eventData = { id: docSnap.id, ...docSnap.data() } as Event
          setEvent(eventData)
          setFormData(eventData)
        } else {
          setError('Event not found')
        }
      } catch (err) {
        console.error('Error fetching event:', err)
        setError('Failed to load event')
      } finally {
        setLoading(false)
      }
    }

    if (eventId) {
      fetchEvent()
    }
  }, [eventId])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (!formData) return
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'year' ? parseInt(value) : value,
    })
  }

  const handleSave = async (): Promise<void> => {
    if (!formData) return

    if (!formData.title || !formData.year || !formData.startDate || !formData.endDate || !formData.location || !formData.description) {
      setError('Please fill in all required fields')
      return
    }

    setSaving(true)
    try {
      const docRef = doc(db, 'events', eventId)
      await updateDoc(docRef, {
        title: formData.title,
        year: formData.year,
        startDate: formData.startDate,
        endDate: formData.endDate,
        location: formData.location,
        description: formData.description,
        imageUrl: formData.imageUrl,
        locationDescription: formData.locationDescription || '',
        connectionText: formData.connectionText || '',
        updatedAt: serverTimestamp(),
      })

      setSuccess(true)
      setError(null)
      setTimeout(() => {
        router.push('/admin/events')
      }, 2000)
    } catch (err) {
      console.error('Error updating event:', err)
      setError('Failed to update event')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <ProtectedRoute requiredRole="editor">
        <div className="admin-layout">
          <AdminNav />
          <main className="admin-main">
            <div className="admin-content">
              <div className="loading">Loading event...</div>
            </div>
          </main>
        </div>
      </ProtectedRoute>
    )
  }

  if (!formData) {
    return (
      <ProtectedRoute requiredRole="editor">
        <div className="admin-layout">
          <AdminNav />
          <main className="admin-main">
            <div className="admin-content">
              <div className="error-message">{error || 'Event not found'}</div>
            </div>
          </main>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute requiredRole="editor">
      <div className="admin-layout">
        <AdminNav />
        <main className="admin-main">
          <div className="admin-content">
            <button onClick={() => router.back()} className="back-button" style={{ marginBottom: '1rem' }}>
              <ArrowLeft size={20} />
              Back to Events
            </button>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">✓ Event updated successfully! Redirecting...</div>}

            <div style={{ marginBottom: '2rem' }}>
              <h1 className="page-title">Edit Event</h1>
              <p className="page-subtitle">Update event details</p>
            </div>

            <div style={{ maxWidth: '900px', backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              {/* Basic Info Section */}
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Basic Information</h2>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Event Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Event title"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Year *</label>
                    <input
                      type="number"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Dates & Location Section */}
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Dates & Location</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Start Date *</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>End Date *</label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Mombasa, Kenya"
                  />
                </div>
              </div>

              {/* Description Section */}
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Description</h2>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Event Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-input"
                    rows={5}
                    placeholder="Describe your event..."
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Image URL *</label>
                  <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="https://..."
                  />
                  <small style={{ color: '#666' }}>To change the image, re-create the event with the wizard</small>
                </div>
              </div>

              {/* Optional Customization Section */}
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Optional Customization</h2>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Location Description (Optional)</label>
                  <textarea
                    name="locationDescription"
                    value={formData.locationDescription || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    rows={3}
                    placeholder="Custom venue description..."
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>About This Championship (Optional)</label>
                  <textarea
                    name="connectionText"
                    value={formData.connectionText || ''}
                    onChange={handleInputChange}
                    className="form-input"
                    rows={4}
                    placeholder="Custom championship description..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => router.push('/admin/events')}
                  style={{
                    padding: '0.875rem 1.5rem',
                    backgroundColor: '#e0e0e0',
                    color: '#333',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  style={{
                    padding: '0.875rem 1.5rem',
                    backgroundColor: '#e91e8c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    fontWeight: '600',
                    opacity: saving ? 0.7 : 1,
                  }}
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
