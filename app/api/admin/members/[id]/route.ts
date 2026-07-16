import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json()

    if (!status || !['ACTIVE', 'INACTIVE', 'PENDING'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status' },
        { status: 400 }
      )
    }

    const member = await prisma.member.update({
      where: { id: params.id },
      data: { status }
    })

    return NextResponse.json({
      success: true,
      message: 'Member status updated',
      data: member
    })
  } catch (error) {
    console.error('Update member error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
