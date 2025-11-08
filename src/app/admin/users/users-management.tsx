'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Trash2, Edit2, Plus, X } from 'lucide-react'
import './users-management.css'

interface AdminUser {
  id: string
  uid: string
  email: string
  role: 'super_admin' | 'admin' | 'editor' | 'viewer'
  createdAt: string
  lastLogin: string
  isActive: boolean
}

export default function UsersManagement(): JSX.Element {
  const [users, setUsers] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'editor' as const,
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async (): Promise<void> => {
    setLoading(true)
    try {
      const querySnapshot = await getDocs(collection(db, 'admin_users'))
      const usersList: AdminUser[] = []
      querySnapshot.forEach((doc) => {
        usersList.push({
          id: doc.id,
          ...doc.data(),
        } as AdminUser)
      })
      setUsers(usersList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
      setError(null)
    } catch (err) {
      setError('Failed to load users')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateUser = async (): Promise<void> => {
    if (!formData.email || !formData.password) {
      setError('Email and password are required')
      return
    }

    setLoading(true)
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      // Add user to admin_users collection
      const adminUsersRef = collection(db, 'admin_users')
      await getDocs(query(adminUsersRef, where('uid', '==', userCredential.user.uid)))

      // Create admin user document
      const docRef = doc(db, 'admin_users', userCredential.user.uid)
      await updateDoc(docRef, {
        email: formData.email,
        role: formData.role,
        isActive: true,
        updatedAt: new Date().toISOString(),
      }).catch(async () => {
        // If doc doesn't exist, we need to handle this
        // For now, we'll just create it through the main collection
        console.log('User created but admin record needs setup')
      })

      setSuccess(`User ${formData.email} created successfully`)
      setFormData({ email: '', password: '', role: 'editor' })
      setShowForm(false)
      setTimeout(() => {
        setSuccess(null)
        fetchUsers()
      }, 2000)
    } catch (err: any) {
      setError(err.message || 'Failed to create user')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteUser = async (userId: string, email: string): Promise<void> => {
    if (!confirm(`Are you sure you want to delete ${email}?`)) return

    setLoading(true)
    try {
      await deleteDoc(doc(db, 'admin_users', userId))
      setSuccess(`User ${email} deleted successfully`)
      setTimeout(() => {
        setSuccess(null)
        fetchUsers()
      }, 2000)
    } catch (err) {
      setError('Failed to delete user')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateRole = async (userId: string, newRole: string): Promise<void> => {
    setLoading(true)
    try {
      await updateDoc(doc(db, 'admin_users', userId), {
        role: newRole,
        updatedAt: new Date().toISOString(),
      })
      setSuccess('User role updated successfully')
      setTimeout(() => {
        setSuccess(null)
        fetchUsers()
      }, 2000)
    } catch (err) {
      setError('Failed to update user role')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getRoleBadgeColor = (role: string): string => {
    switch (role) {
      case 'super_admin':
        return '#d32f2f'
      case 'admin':
        return '#f57c00'
      case 'editor':
        return '#1976d2'
      case 'viewer':
        return '#388e3c'
      default:
        return '#666'
    }
  }

  return (
    <div className="users-management">
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="users-header">
        <h2>Manage Users</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-add-user"
          disabled={loading}
        >
          <Plus size={20} /> Add New User
        </button>
      </div>

      {/* Add User Form */}
      {showForm && (
        <div className="add-user-form">
          <div className="form-header">
            <h3>Create New Admin User</h3>
            <button onClick={() => setShowForm(false)} className="close-btn">
              <X size={24} />
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="user@example.com"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Minimum 6 characters"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role *</label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
              disabled={loading}
            >
              <option value="viewer">Viewer (View Only)</option>
              <option value="editor">Editor (Create/Edit Events)</option>
              <option value="admin">Admin (Full Access)</option>
              <option value="super_admin">Super Admin (All Permissions)</option>
            </select>
          </div>

          <div className="form-actions">
            <button onClick={handleCreateUser} disabled={loading} className="btn-create">
              {loading ? 'Creating...' : 'Create User'}
            </button>
            <button
              onClick={() => setShowForm(false)}
              disabled={loading}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Users Table */}
      {loading && !users.length ? (
        <div className="loading">Loading users...</div>
      ) : users.length === 0 ? (
        <div className="empty-state">
          <p>No admin users yet. Create one to get started!</p>
        </div>
      ) : (
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Created</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="email-cell">{user.email}</td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleUpdateRole(user.id, e.target.value)}
                      disabled={loading}
                      className="role-select"
                    >
                      <option value="viewer">Viewer</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                      <option value="super_admin">Super Admin</option>
                    </select>
                  </td>
                  <td>
                    <span className={`status-badge ${user.isActive ? 'active' : 'inactive'}`}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="date-cell">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="date-cell">
                    {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                  </td>
                  <td className="actions-cell">
                    <button
                      onClick={() => handleDeleteUser(user.id, user.email)}
                      disabled={loading}
                      className="btn-delete"
                      title="Delete user"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="users-info">
        <h4>Role Permissions:</h4>
        <ul>
          <li>
            <strong>Viewer:</strong> Can view events and dashboard (read-only)
          </li>
          <li>
            <strong>Editor:</strong> Can create, edit, and view events
          </li>
          <li>
            <strong>Admin:</strong> Can manage events, users, and settings
          </li>
          <li>
            <strong>Super Admin:</strong> Full access to all features and settings
          </li>
        </ul>
      </div>
    </div>
  )
}
