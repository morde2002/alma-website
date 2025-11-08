'use client'

import AdminNav from '@/components/AdminNav'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import EventWizard from '../event-wizard'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import '../../dashboard/dashboard.css'

export default function NewEventPage(): JSX.Element {
  return (
    <ProtectedRoute requiredRole="editor">
      <div className="admin-layout">
        <AdminNav />
        <main className="admin-main">
          <div className="admin-content">
            <Link href="/admin/events" className="back-button">
              <ArrowLeft size={20} />
              Back to Events
            </Link>

            <div style={{ marginBottom: '2rem' }}>
              <h1 className="form-title">Create New Event</h1>
              <p className="form-subtitle">
                Follow the simple step-by-step wizard below to create your event
              </p>
            </div>

            <EventWizard />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
