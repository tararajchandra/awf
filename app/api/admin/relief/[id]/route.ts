import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json()

    if (!status || !['PENDING', 'APPROVED', 'REJECTED'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status' },
        { status: 400 }
      )
    }

    const reliefRequest = await prisma.emergencyReliefRequest.update({
      where: { id: params.id },
      data: { status }
    })

    return NextResponse.json({
      success: true,
      message: 'Relief request status updated',
      data: reliefRequest
    })
  } catch (error) {
    console.error('Update relief error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
