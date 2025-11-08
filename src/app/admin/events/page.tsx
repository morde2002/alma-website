'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import AdminNav from '@/components/AdminNav'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import { db } from '@/lib/firebase'
import { collection, query, getDocs, orderBy, deleteDoc, doc } from 'firebase/firestore'
import { Plus, Calendar, ChevronRight, Trash2 } from 'lucide-react'
import '../dashboard/dashboard.css'
import './events.css'

interface Event {
  id: string
  title: string
  year: number
  startDate: string
  endDate: string
}

interface EventsByYear {
  [year: number]: Event[]
}

export default function EventsPage(): JSX.Element {
  const [eventsByYear, setEventsByYear] = useState<EventsByYear>({})
  const [years, setYears] = useState<number[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const fetchEvents = async (): Promise<void> => {
    try {
      const eventsQuery = query(collection(db, 'events'), orderBy('year', 'desc'))
      const snapshot = await getDocs(eventsQuery)

      const grouped: EventsByYear = {}
      const uniqueYears: number[] = []

      snapshot.docs.forEach((doc) => {
        const event = { id: doc.id, ...doc.data() } as Event
        if (!grouped[event.year]) {
          grouped[event.year] = []
          uniqueYears.push(event.year)
        }
        grouped[event.year].push(event)
      })

      setEventsByYear(grouped)
      setYears(uniqueYears.sort((a, b) => b - a))
      if (uniqueYears.length > 0) {
        setSelectedYear(uniqueYears[0])
      }
      setError(null)
    } catch (err) {
      console.error('Error fetching events:', err)
      setError('Failed to load events')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const handleDeleteEvent = async (eventId: string, eventTitle: string): Promise<void> => {
    if (!confirm(`Are you sure you want to delete "${eventTitle}"? This action cannot be undone.`)) {
      return
    }

    setLoading(true)
    try {
      await deleteDoc(doc(db, 'events', eventId))
      setSuccess(`Event "${eventTitle}" has been deleted successfully`)
      setTimeout(() => setSuccess(null), 3000)
      await fetchEvents()
    } catch (err) {
      console.error('Error deleting event:', err)
      setError('Failed to delete event. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProtectedRoute requiredRole="editor">
      <div className="admin-layout">
        <AdminNav />
        <main className="admin-main">
          <div className="admin-content">
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <div className="events-header">
              <div>
                <h1 className="page-title">Events</h1>
                <p className="page-subtitle">Manage championship events by year</p>
              </div>
              <Link href="/admin/events/new" className="btn-add-event">
                <Plus size={20} />
                <span>Add New Event</span>
              </Link>
            </div>

            {loading ? (
              <div className="loading">Loading events...</div>
            ) : years.length === 0 ? (
              <div className="no-events">
                <Calendar size={48} />
                <h2>No Events Yet</h2>
                <p>Start by creating your first event</p>
                <Link href="/admin/events/new" className="btn-add-event">
                  <Plus size={20} />
                  Add Event
                </Link>
              </div>
            ) : (
              <div className="events-container">
                {/* Year Tabs */}
                <div className="year-tabs">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`year-tab ${selectedYear === year ? 'active' : ''}`}
                    >
                      {year}
                    </button>
                  ))}
                  <Link href="/admin/events/new" className="year-tab-add">
                    <Plus size={18} />
                  </Link>
                </div>

                {/* Events for Selected Year */}
                {selectedYear && (
                  <div className="year-events">
                    <h2 className="year-title">{selectedYear} Events</h2>
                    <div className="events-list">
                      {eventsByYear[selectedYear]?.length > 0 ? (
                        eventsByYear[selectedYear].map((event) => (
                          <div key={event.id} className="event-card">
                            <div className="event-card-content">
                              <h3 className="event-card-title">{event.title}</h3>
                              <div className="event-card-dates">
                                <span className="date-badge">{event.startDate}</span>
                                <span className="date-separator">to</span>
                                <span className="date-badge">{event.endDate}</span>
                              </div>
                            </div>
                            <div className="event-card-actions">
                              <Link
                                href={`/admin/events/${selectedYear}/${event.id}`}
                                className="event-card-action"
                                title="Edit event"
                              >
                                <ChevronRight size={20} />
                              </Link>
                              <button
                                onClick={() => handleDeleteEvent(event.id, event.title)}
                                disabled={loading}
                                className="event-card-delete"
                                title="Delete event"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="no-year-events">
                          <p>No events for {selectedYear}</p>
                          <Link href={`/admin/events/new?year=${selectedYear}`} className="btn-add-event">
                            <Plus size={18} />
                            Add Event
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
