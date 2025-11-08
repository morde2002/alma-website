'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

export type UserRole = 'super_admin' | 'admin' | 'editor' | 'viewer'

export interface AdminUser {
  uid: string
  email: string
  role: UserRole
  createdAt: string
  lastLogin: string
  isActive: boolean
}

interface AuthContextType {
  user: User | null
  adminUser: AdminUser | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isSuperAdmin: () => boolean
  isAdmin: () => boolean
  canEdit: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        // Fetch admin user data from Firestore
        try {
          const adminDoc = await getDoc(doc(db, 'admin_users', firebaseUser.uid))
          if (adminDoc.exists()) {
            setAdminUser(adminDoc.data() as AdminUser)
          } else {
            // User is logged in but not an admin
            setAdminUser(null)
          }
        } catch (err) {
          console.error('Error fetching admin user:', err)
          setError('Failed to load admin data')
        }
      } else {
        setUser(null)
        setAdminUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email: string, password: string): Promise<void> => {
    setError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
      setError(err.message || 'Login failed')
      throw err
    }
  }

  const logout = async (): Promise<void> => {
    setError(null)
    try {
      await firebaseSignOut(auth)
      setUser(null)
      setAdminUser(null)
    } catch (err: any) {
      setError(err.message || 'Logout failed')
      throw err
    }
  }

  const isSuperAdmin = (): boolean => {
    return adminUser?.role === 'super_admin'
  }

  const isAdmin = (): boolean => {
    return adminUser?.role === 'super_admin' || adminUser?.role === 'admin'
  }

  const canEdit = (): boolean => {
    return (
      adminUser?.role === 'super_admin' ||
      adminUser?.role === 'admin' ||
      adminUser?.role === 'editor'
    )
  }

  const value: AuthContextType = {
    user,
    adminUser,
    loading,
    error,
    login,
    logout,
    isSuperAdmin,
    isAdmin,
    canEdit,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
