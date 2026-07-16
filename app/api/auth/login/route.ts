import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    // Simple lookup by memberId or mobile
    const member = await prisma.member.findFirst({
      where: {
        OR: [
          { memberId: username },
          { mobile: username },
        ]
      }
    })

    if (!member) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    if (member.status === 'INACTIVE') {
      return NextResponse.json({ 
        success: false, 
        error: 'Your membership is inactive because you did not complete 2 referrals within 72 hours. Please contact admin.' 
      }, { status: 403 })
    }

    // Since password logic isn't built yet, we accept any password for valid members for demonstration
    // In production, you would verify a hashed password here.
    return NextResponse.json({ success: true, memberId: member.memberId })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
