'use client'

import { useEffect, useState } from 'react'
import AdminNav from '@/components/AdminNav'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import { db } from '@/lib/firebase'
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore'
import { Calendar, Users, LogOut, Activity } from 'lucide-react'
import Link from 'next/link'
import './dashboard.css'

interface Event {
  id: string
  title: string
  year: number
  startDate: string
}

interface DashboardStats {
  totalEvents: number
  eventsThisYear: number
  totalAdmins: number
  recentActivities: number
}

export default function AdminDashboardPage(): JSX.Element {
  const [stats, setStats] = useState<DashboardStats>({
    totalEvents: 0,
    eventsThisYear: 0,
    totalAdmins: 0,
    recentActivities: 0,
  })
  const [recentEvents, setRecentEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchDashboardData = async (): Promise<void> => {
      try {
        // Fetch all events
        const eventsQuery = query(collection(db, 'events'))
        const eventsSnapshot = await getDocs(eventsQuery)
        const allEvents = eventsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[]

        // Fetch admin users
        const adminsQuery = query(collection(db, 'admin_users'))
        const adminsSnapshot = await getDocs(adminsQuery)

        // Fetch activity logs
        const activityQuery = query(
          collection(db, 'activity_logs'),
          orderBy('timestamp', 'desc'),
          limit(50)
        )
        const activitySnapshot = await getDocs(activityQuery)

        const currentYear = new Date().getFullYear()
        const eventsThisYear = allEvents.filter((e) => e.year === currentYear).length

        setStats({
          totalEvents: allEvents.length,
          eventsThisYear,
          totalAdmins: adminsSnapshot.size,
          recentActivities: activitySnapshot.size,
        })

        // Get 5 most recent events
        setRecentEvents(allEvents.slice(0, 5))
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  return (
    <ProtectedRoute>
      <div className="admin-layout">
        <AdminNav />
        <main className="admin-main">
          <div className="admin-content">
            <div className="dashboard-header">
              <h1 className="dashboard-title">Dashboard</h1>
              <p className="dashboard-subtitle">Welcome to ALMA Admin System</p>
            </div>

            {loading ? (
              <div className="loading">Loading dashboard...</div>
            ) : (
              <>
                {/* Stats Grid */}
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon">
                      <Calendar size={24} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{stats.totalEvents}</div>
                      <div className="stat-label">Total Events</div>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon">
                      <Calendar size={24} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{stats.eventsThisYear}</div>
                      <div className="stat-label">Events This Year</div>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon">
                      <Users size={24} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{stats.totalAdmins}</div>
                      <div className="stat-label">Admin Users</div>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon">
                      <Activity size={24} />
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">{stats.recentActivities}</div>
                      <div className="stat-label">Recent Activities</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                  <h2 className="section-title">Quick Actions</h2>
                  <div className="actions-grid">
                    <Link href="/admin/events" className="action-card">
                      <Calendar size={32} />
                      <h3>Manage Events</h3>
                      <p>Add, edit, or delete events</p>
                    </Link>
                    <Link href="/admin/users" className="action-card">
                      <Users size={32} />
                      <h3>Manage Users</h3>
                      <p>Control admin access</p>
                    </Link>
                    <Link href="/admin/themes" className="action-card">
                      <Calendar size={32} />
                      <h3>Customize Theme</h3>
                      <p>Change colors and design</p>
                    </Link>
                    <Link href="/admin/activity" className="action-card">
                      <Activity size={32} />
                      <h3>View Activity Logs</h3>
                      <p>Track admin actions</p>
                    </Link>
                  </div>
                </div>

                {/* Recent Events */}
                {recentEvents.length > 0 && (
                  <div className="recent-events">
                    <h2 className="section-title">Recent Events</h2>
                    <div className="events-list">
                      {recentEvents.map((event) => (
                        <div key={event.id} className="event-item">
                          <div className="event-info">
                            <h4 className="event-name">{event.title}</h4>
                            <p className="event-date">{event.year}</p>
                          </div>
                          <Link
                            href={`/admin/events/${event.year}`}
                            className="event-link"
                          >
                            Edit →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
