import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { referralMemberId, reason } = await request.json()

    if (!referralMemberId || !reason) {
      return NextResponse.json(
        { success: false, error: 'Member ID and Reason are required' },
        { status: 400 }
      )
    }

    // Verify the member exists
    const member = await prisma.member.findUnique({
      where: { memberId: referralMemberId }
    })

    if (!member) {
      return NextResponse.json(
        { success: false, error: 'Invalid Referral Member ID' },
        { status: 404 }
      )
    }

    // Create the relief request
    const reliefRequest = await prisma.emergencyReliefRequest.create({
      data: {
        referralMemberId,
        reason,
        status: 'PENDING'
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Emergency relief request submitted successfully',
      data: reliefRequest
    })
  } catch (error) {
    console.error('Emergency relief request error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
