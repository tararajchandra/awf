import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { sendSMS } from '@/lib/otp'

export async function GET(request: NextRequest) {
  // In a real application, you should protect this route with a secret key
  // e.g. if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) ...

  try {
    const now = new Date()
    
    // Fetch all active members who haven't completed their referrals
    const activeMembers = await prisma.member.findMany({
      where: {
        status: 'ACTIVE',
      },
      include: {
        _count: {
          select: { referrals: true }
        }
      }
    })

    const results = {
      deactivated: 0,
      remindersSent: 0,
    }

    for (const member of activeMembers) {
      // If they already have 2 or more referrals, they are safe
      if (member._count.referrals >= 2) {
        continue
      }

      const hoursSinceJoin = (now.getTime() - member.createdAt.getTime()) / (1000 * 60 * 60)

      if (hoursSinceJoin >= 72) {
        // Deactivate member
        await prisma.member.update({
          where: { id: member.id },
          data: { status: 'INACTIVE' }
        })
        results.deactivated++
      } 
      else if (hoursSinceJoin >= 48 && member.smsReminderCount < 2) {
        // Send 48h reminder
        const msg = `AWF Alert: Your activation time has been extended for another 24 hours. Please refer members to keep your ID active.`
        await sendSMS(member.mobile, msg)
        await prisma.member.update({
          where: { id: member.id },
          data: { smsReminderCount: 2 }
        })
        results.remindersSent++
      }
      else if (hoursSinceJoin >= 24 && member.smsReminderCount < 1) {
        // Send 24h reminder
        const msg = `AWF Alert: Your activation time has been extended for another 24 hours. Please refer members to keep your ID active.`
        await sendSMS(member.mobile, msg)
        await prisma.member.update({
          where: { id: member.id },
          data: { smsReminderCount: 1 }
        })
        results.remindersSent++
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Cron job executed successfully',
      results
    })

  } catch (error) {
    console.error('Cron check-referrals error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
