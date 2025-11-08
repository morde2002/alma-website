'use client'

import AdminNav from '@/components/AdminNav'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import { Activity } from 'lucide-react'
import '../dashboard/dashboard.css'
import './activity.css'

export default function ActivityPage(): JSX.Element {
  return (
    <ProtectedRoute requiredRole="viewer">
      <div className="admin-layout">
        <AdminNav />
        <main className="admin-main">
          <div className="admin-content">
            <div className="page-header-simple">
              <h1 className="page-title">Activity Logs</h1>
              <p className="page-subtitle">View admin actions and event changes</p>
            </div>

            <div className="coming-soon">
              <Activity size={64} />
              <h2>Activity Tracking</h2>
              <p>Monitor all admin activities:</p>
              <ul>
                <li>Event Creation & Updates</li>
                <li>User Access & Changes</li>
                <li>Theme Modifications</li>
                <li>Timestamps & User Info</li>
                <li>Activity Filtering & Search</li>
              </ul>
              <p className="coming-soon-note">This feature will be available soon!</p>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
