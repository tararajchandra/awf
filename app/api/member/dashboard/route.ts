import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const memberId = searchParams.get('memberId')

    if (!memberId) {
      return NextResponse.json(
        { success: false, error: 'Member ID is required' },
        { status: 400 }
      )
    }

    const member = await prisma.member.findUnique({
      where: { memberId },
      include: {
        referrals: {
          select: {
            status: true
          }
        }
      }
    })

    if (!member) {
      return NextResponse.json(
        { success: false, error: 'Member not found' },
        { status: 404 }
      )
    }

    // Calculate referrals stats
    let activeReferrals = 0
    let inactiveReferrals = 0

    member.referrals.forEach(ref => {
      if (ref.status === 'ACTIVE') activeReferrals++
      else if (ref.status === 'INACTIVE') inactiveReferrals++
      // Other statuses like PENDING can be ignored or grouped
    })

    return NextResponse.json({
      success: true,
      data: {
        memberId: member.memberId,
        fullName: member.fullName,
        mobile: member.mobile,
        email: member.email,
        status: member.status,
        photoUrl: member.photoUrl,
        createdAt: member.createdAt,
        stats: {
          totalReferrals: member.referrals.length,
          activeReferrals,
          inactiveReferrals
        }
      }
    })
  } catch (error) {
    console.error('Dashboard error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
