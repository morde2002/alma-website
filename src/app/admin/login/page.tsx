'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/authContext'
import { LogIn } from 'lucide-react'
import './admin-login.css'

export default function AdminLoginPage(): JSX.Element {
  const router = useRouter()
  const { login, loading: authLoading, error: authError, user } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // Redirect if already logged in
  if (!authLoading && user) {
    router.push('/admin/dashboard')
    return <></>
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      router.push('/admin/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  if (authLoading) {
    return (
      <div className="login-container">
        <div className="login-loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <LogIn size={32} />
            </div>
            <h1 className="login-title">ALMA Admin</h1>
            <p className="login-subtitle">Event Management System</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {(error || authError) && (
              <div className="login-error">
                {error || authError}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@allladiestimd.com"
                required
                disabled={loading}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={loading}
                className="form-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="login-button"
            >
              {loading ? 'Logging in...' : 'Login to Admin'}
            </button>
          </form>

          <div className="login-footer">
            <p className="login-help-text">
              Forgot your password? Contact your super administrator.
            </p>
            <Link href="/" className="login-back-link">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
