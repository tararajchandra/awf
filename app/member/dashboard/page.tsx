'use client'

import { useEffect, useState } from 'react'
import MembershipLogin from '@/components/awf/membership-login'
import { UserCircle, Users, CheckCircle, XCircle } from 'lucide-react'

export default function MemberDashboard() {
  const [memberId, setMemberId] = useState<string | null>(null)
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedId = localStorage.getItem('awf_member_id')
    if (storedId) {
      setMemberId(storedId)
      fetchDashboard(storedId)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchDashboard = async (id: string) => {
    try {
      const res = await fetch(`/api/member/dashboard?memberId=${id}`)
      const data = await res.json()
      if (res.ok && data.success) {
        setDashboardData(data.data)
      } else {
        // Handle invalid or deactivated session
        localStorage.removeItem('awf_member_id')
        setMemberId(null)
      }
    } catch (error) {
      console.error('Error fetching dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('awf_member_id')
    setMemberId(null)
    setDashboardData(null)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p>Loading dashboard...</p></div>
  }

  // If not logged in, show login form
  if (!memberId || !dashboardData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream to-white py-12 px-4">
        <div className="max-w-md mx-auto">
          <MembershipLogin onSuccess={(id) => {
            localStorage.setItem('awf_member_id', id)
            setMemberId(id)
            setLoading(true)
            fetchDashboard(id)
          }} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-gold flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-gold overflow-hidden flex items-center justify-center flex-shrink-0">
              {dashboardData.photoUrl ? (
                <img src={dashboardData.photoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <UserCircle size={64} className="text-gray-400" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{dashboardData.fullName}</h1>
              <p className="text-gold font-semibold">{dashboardData.memberId}</p>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  dashboardData.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 
                  dashboardData.status === 'INACTIVE' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {dashboardData.status}
                </span>
                <span>•</span>
                <span>Joined {new Date(dashboardData.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition"
          >
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Referrals</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.totalReferrals}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Active Referrals</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.activeReferrals}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-lg">
              <XCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Inactive Referrals</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.inactiveReferrals}</p>
            </div>
          </div>
        </div>

        {/* Referral Status Warning (if needed) */}
        {dashboardData.status === 'ACTIVE' && dashboardData.stats.activeReferrals < 2 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-yellow-800 font-bold mb-1">Action Required!</h3>
            <p className="text-sm text-yellow-700">
              You currently have {dashboardData.stats.activeReferrals} active referrals. 
              You need a total of 2 active referrals within 72 hours of joining to keep your membership active.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
