import { Metadata } from 'next'
import prisma from '@/lib/prisma'
import { Users, FileText, AlertTriangle, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Dashboard | AWF',
}

export default async function AdminDashboardPage() {
  const [totalMembers, activeMembers, totalNewsletters, pendingRequests] = await Promise.all([
    prisma.member.count(),
    prisma.member.count({ where: { status: 'ACTIVE' } }),
    prisma.newsletter.count(),
    prisma.emergencyReliefRequest.count({ where: { status: 'PENDING' } })
  ])

  const stats = [
    { title: 'Total Members', value: totalMembers, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Active Members', value: activeMembers, icon: Activity, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Pending Relief', value: pendingRequests, icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
    { title: 'Newsletters', value: totalNewsletters, icon: FileText, color: 'text-purple-600', bg: 'bg-purple-100' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`p-4 rounded-lg ${stat.bg} ${stat.color}`}>
                <Icon size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Could add recent activity here later */}
    </div>
  )
}
