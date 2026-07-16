import { Metadata } from 'next'
import prisma from '@/lib/prisma'
import NewsletterManager from './NewsletterManager'

export const metadata: Metadata = {
  title: 'Admin - Newsletters',
}

export default async function AdminNewslettersPage() {
  const newsletters = await prisma.newsletter.findMany({
    orderBy: { createdAt: 'desc' }
  })

  const formattedNewsletters = newsletters.map(n => ({
    id: n.id,
    title: n.title,
    fileUrl: n.fileUrl,
    createdAt: n.createdAt.toISOString()
  }))

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold text-gray-900">Newsletters Management</h1>
      </div>
      <NewsletterManager initialNewsletters={formattedNewsletters} />
    </div>
  )
}
