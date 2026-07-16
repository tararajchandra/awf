import { Metadata } from 'next'
import prisma from '@/lib/prisma'
import MembersTable from './MembersTable'

export const metadata: Metadata = {
  title: 'Admin - Members',
}

export default async function AdminMembersPage() {
  const members = await prisma.member.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: {
        select: { referrals: true }
      }
    }
  })

  // Format data for the client component
  const formattedMembers = members.map(m => ({
    id: m.id,
    memberId: m.memberId,
    fullName: m.fullName,
    mobile: m.mobile,
    status: m.status,
    createdAt: m.createdAt.toISOString(),
    referralCount: m._count.referrals
  }))

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold text-gray-900">Members Management</h1>
      </div>
      <MembersTable initialMembers={formattedMembers} />
    </div>
  )
}
