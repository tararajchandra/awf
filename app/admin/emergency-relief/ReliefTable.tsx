'use client'

import { useState } from 'react'

type ReliefRequest = {
  id: string
  referralMemberId: string
  reason: string
  status: string
  createdAt: string
  memberName: string
  memberMobile: string
}

export default function ReliefTable({ initialRequests }: { initialRequests: ReliefRequest[] }) {
  const [requests, setRequests] = useState(initialRequests)
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const updateStatus = async (id: string, newStatus: string) => {
    if (!confirm(`Are you sure you want to mark this request as ${newStatus}?`)) return
    
    setLoadingId(id)

    try {
      const res = await fetch(`/api/admin/relief/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setRequests(requests.map(r => r.id === id ? { ...r, status: newStatus } : r))
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
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Member Details</th>
              <th className="p-4 font-semibold w-1/3">Reason for Fund</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requests.map(request => (
              <tr key={request.id} className="hover:bg-gray-50 transition">
                <td className="p-4 text-sm text-gray-600 align-top">
                  {new Date(request.createdAt).toLocaleDateString()}<br/>
                  <span className="text-xs text-gray-400">{new Date(request.createdAt).toLocaleTimeString()}</span>
                </td>
                <td className="p-4 align-top">
                  <div className="font-semibold text-gray-900">{request.memberName}</div>
                  <div className="text-sm text-gray-500">{request.referralMemberId}</div>
                  <div className="text-sm text-gray-500">{request.memberMobile}</div>
                </td>
                <td className="p-4 align-top">
                  <p className="text-gray-700 whitespace-pre-wrap text-sm">{request.reason}</p>
                </td>
                <td className="p-4 align-top">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                    ${request.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 
                      request.status === 'APPROVED' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {request.status.toLowerCase()}
                  </span>
                </td>
                <td className="p-4 align-top text-right space-y-2 flex flex-col items-end">
                  {request.status === 'PENDING' && (
                    <>
                      <button
                        onClick={() => updateStatus(request.id, 'APPROVED')}
                        disabled={loadingId === request.id}
                        className="w-24 px-3 py-1 text-sm font-semibold rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition disabled:opacity-50"
                      >
                        {loadingId === request.id ? '...' : 'Approve'}
                      </button>
                      <button
                        onClick={() => updateStatus(request.id, 'REJECTED')}
                        disabled={loadingId === request.id}
                        className="w-24 px-3 py-1 text-sm font-semibold rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition disabled:opacity-50"
                      >
                        {loadingId === request.id ? '...' : 'Reject'}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {requests.length === 0 && (
          <div className="p-8 text-center text-gray-500">No emergency relief requests found.</div>
        )}
      </div>
    </div>
  )
}
