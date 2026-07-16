import { Metadata } from 'next'
import prisma from '@/lib/prisma'
import ReliefTable from './ReliefTable'

export const metadata: Metadata = {
  title: 'Admin - Emergency Relief Requests',
}

export default async function AdminEmergencyReliefPage() {
  const requests = await prisma.emergencyReliefRequest.findMany({
    orderBy: { createdAt: 'desc' }
  })

  // We manually lookup member names for each request to show in the table
  const memberIds = requests.map(r => r.referralMemberId)
  const members = await prisma.member.findMany({
    where: { memberId: { in: memberIds } },
    select: { memberId: true, fullName: true, mobile: true }
  })
  
  const memberMap = new Map(members.map(m => [m.memberId, m]))

  const formattedRequests = requests.map(r => {
    const member = memberMap.get(r.referralMemberId)
    return {
      id: r.id,
      referralMemberId: r.referralMemberId,
      reason: r.reason,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
      memberName: member?.fullName || 'Unknown',
      memberMobile: member?.mobile || 'Unknown',
    }
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold text-gray-900">Emergency Relief Requests</h1>
      </div>
      <ReliefTable initialRequests={formattedRequests} />
    </div>
  )
}

