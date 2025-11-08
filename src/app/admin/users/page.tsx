'use client'

import AdminNav from '@/components/AdminNav'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import UsersManagement from './users-management'
import '../dashboard/dashboard.css'
import './users.css'

export default function UsersPage(): JSX.Element {
  return (
    <ProtectedRoute requiredRole="super_admin">
      <div className="admin-layout">
        <AdminNav />
        <main className="admin-main">
          <div className="admin-content">
            <UsersManagement />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
