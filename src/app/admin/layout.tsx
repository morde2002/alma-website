import { AuthProvider } from '@/lib/authContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ALMA Admin - Event Management',
  description: 'Admin dashboard for managing ALMA events and users',
  robots: 'noindex, nofollow',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
