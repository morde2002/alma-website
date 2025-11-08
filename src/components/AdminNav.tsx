'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/lib/authContext'
import {
  Home,
  Calendar,
  Users,
  Palette,
  Activity,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'
import './AdminNav.css'

export default function AdminNav(): JSX.Element {
  const pathname = usePathname()
  const router = useRouter()
  const { logout, adminUser, isSuperAdmin } = useAuth()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleLogout = async (): Promise<void> => {
    try {
      await logout()
      router.push('/admin/login')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  const isActive = (path: string): boolean => {
    return pathname.startsWith(path)
  }

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  const closeMenu = (): void => {
    setIsOpen(false)
  }

  return (
    <nav className="admin-nav">
      <div className="admin-nav-container">
        <Link href="/admin/dashboard" className="admin-logo" onClick={closeMenu}>
          <div className="admin-logo-icon">🥋</div>
          <span className="admin-logo-text">ALMA Admin</span>
        </Link>

        <button className="admin-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`admin-nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link
              href="/admin/dashboard"
              className={`admin-nav-link ${isActive('/admin/dashboard') && !isActive('/admin/users') && !isActive('/admin/events') && !isActive('/admin/themes') && !isActive('/admin/activity') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/admin/events"
              className={`admin-nav-link ${isActive('/admin/events') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <Calendar size={20} />
              <span>Events</span>
            </Link>
          </li>

          {isSuperAdmin() && (
            <li>
              <Link
                href="/admin/users"
                className={`admin-nav-link ${isActive('/admin/users') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <Users size={20} />
                <span>Users</span>
              </Link>
            </li>
          )}

          <li>
            <Link
              href="/admin/themes"
              className={`admin-nav-link ${isActive('/admin/themes') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <Palette size={20} />
              <span>Theme</span>
            </Link>
          </li>

          <li>
            <Link
              href="/admin/activity"
              className={`admin-nav-link ${isActive('/admin/activity') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <Activity size={20} />
              <span>Activity</span>
            </Link>
          </li>
        </ul>

        <div className="admin-nav-footer">
          <div className="admin-user-info">
            <div className="admin-user-avatar">
              {adminUser?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="admin-user-details">
              <div className="admin-user-email">{adminUser?.email}</div>
              <div className="admin-user-role">{adminUser?.role?.replace('_', ' ')}</div>
            </div>
          </div>
          <button className="admin-logout-btn" onClick={handleLogout} title="Logout">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}
