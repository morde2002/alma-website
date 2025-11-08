'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, UserRole } from './authContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole
}

export function ProtectedRoute({
  children,
  requiredRole,
}: ProtectedRouteProps): JSX.Element {
  const router = useRouter()
  const { user, adminUser, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user || !adminUser) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <p>Unauthorized access</p>
      </div>
    )
  }

  // Check if user has required role
  if (requiredRole) {
    const roleHierarchy: Record<UserRole, number> = {
      super_admin: 4,
      admin: 3,
      editor: 2,
      viewer: 1,
    }

    if (roleHierarchy[adminUser.role] < roleHierarchy[requiredRole]) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <p>You do not have permission to access this page</p>
        </div>
      )
    }
  }

  return <>{children}</>
}
