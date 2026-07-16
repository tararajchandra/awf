'use client'

import { useState } from 'react'

interface LoginProps {
  onSuccess?: (memberId: string) => void
}

export default function MembershipLogin({ onSuccess }: LoginProps = {}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleLogin = async () => {
    setError('')
    setSuccess(false)
    
    if (!username || !password) {
      setError('Please enter username and password')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      const data = await res.json()
      
      if (res.ok && data.success) {
        setSuccess(true)
        if (onSuccess) {
          onSuccess(data.memberId)
        } else {
          window.location.href = '/member/dashboard'
        }
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gold">
      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
        Member Login
      </h3>

      <div className="space-y-4">
        {/* Username Input */}
        <div>
          <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Member ID or Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">Login successful! Redirecting...</p>}

        {/* Login Button */}
        <button 
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-gold text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 mt-6 disabled:bg-gray-400"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>

      {/* Footer Links */}
      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600 mb-2">
          Don't have an account?{' '}
          <a href="#" className="text-gold font-semibold hover:underline">
            Register here
          </a>
        </p>
        <a href="#" className="text-gold font-semibold hover:underline">
          Forgot password?
        </a>
      </div>
    </div>
  )
}
