'use client'

import AdminNav from '@/components/AdminNav'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import { Palette } from 'lucide-react'
import '../dashboard/dashboard.css'
import './themes.css'

export default function ThemesPage(): JSX.Element {
  return (
    <ProtectedRoute requiredRole="editor">
      <div className="admin-layout">
        <AdminNav />
        <main className="admin-main">
          <div className="admin-content">
            <div className="page-header-simple">
              <h1 className="page-title">Theme Customizer</h1>
              <p className="page-subtitle">Customize your website colors and design</p>
            </div>

            <div className="coming-soon">
              <Palette size={64} />
              <h2>Design Customization</h2>
              <p>Customize your website theme with ease:</p>
              <ul>
                <li>Primary Brand Color</li>
                <li>Typography (Fonts & Sizes)</li>
                <li>Button Styles</li>
                <li>Background Colors</li>
                <li>Live Preview</li>
              </ul>
              <p className="coming-soon-note">This feature will be available soon!</p>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
