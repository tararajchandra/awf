'use client'

import { useState } from 'react'

type MemberType = {
  id: string
  memberId: string
  fullName: string
  mobile: string
  status: string
  createdAt: string
  referralCount: number
}

export default function MembersTable({ initialMembers }: { initialMembers: MemberType[] }) {
  const [members, setMembers] = useState(initialMembers)
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const toggleStatus = async (id: string, currentStatus: string) => {
    setLoadingId(id)
    const newStatus = currentStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'

    try {
      const res = await fetch(`/api/admin/members/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setMembers(members.map(m => m.id === id ? { ...m, status: newStatus } : m))
      } else {
        alert(data.error || 'Failed to update status')
      }
    } catch (error) {
      alert('An error occurred while updating status')
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <th className="p-4 font-semibold">Join Date</th>
              <th className="p-4 font-semibold">Member</th>
              <th className="p-4 font-semibold">Referrals</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map(member => (
              <tr key={member.id} className="hover:bg-gray-50 transition">
                <td className="p-4 text-sm text-gray-600 align-middle">
                  {new Date(member.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4 align-middle">
                  <div className="font-semibold text-gray-900">{member.fullName}</div>
                  <div className="text-sm text-gray-500">{member.memberId}</div>
                  <div className="text-sm text-gray-500">{member.mobile}</div>
                </td>
                <td className="p-4 align-middle text-gray-600 font-medium">
                  {member.referralCount}
                </td>
                <td className="p-4 align-middle">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                    ${member.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 
                      member.status === 'INACTIVE' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {member.status.toLowerCase()}
                  </span>
                </td>
                <td className="p-4 align-middle text-right">
                  <button
                    onClick={() => toggleStatus(member.id, member.status)}
                    disabled={loadingId === member.id}
                    className={`px-3 py-1 text-sm font-semibold rounded-lg transition-colors
                      ${member.status === 'ACTIVE' 
                        ? 'text-red-600 hover:bg-red-50 border border-red-200' 
                        : 'text-green-600 hover:bg-green-50 border border-green-200'}
                      disabled:opacity-50`}
                  >
                    {loadingId === member.id ? 'Loading...' : member.status === 'ACTIVE' ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {members.length === 0 && (
          <div className="p-8 text-center text-gray-500">No members found.</div>
        )}
      </div>
    </div>
  )
}
