import { NextRequest, NextResponse } from 'next/server'
import { generateOTP, storeOTP, sendOTPSMS } from '@/lib/otp'
import { isValidIndianPhone } from '@/lib/validators'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, action } = body

    if (!phone || !isValidIndianPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    if (action === 'send') {
      const otp = generateOTP()
      storeOTP(phone, otp)
      const sent = await sendOTPSMS(phone, otp)
      
      if (!sent) {
        return NextResponse.json(
          { error: 'Failed to send OTP' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'OTP sent successfully',
        phone: phone.slice(-4), // return last 4 digits for display
      })
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    )
  } catch (error) {
    console.error('OTP error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
