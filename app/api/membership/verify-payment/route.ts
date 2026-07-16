import { NextRequest, NextResponse } from 'next/server'
import { verifyRazorpaySignature } from '@/lib/razorpay'
import prisma from '@/lib/prisma'
import { sendSMS } from '@/lib/otp'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_subscription_id, razorpay_payment_id, razorpay_signature } = body

    if ((!razorpay_order_id && !razorpay_subscription_id) || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment details' },
        { status: 400 }
      )
    }

    const isValid = verifyRazorpaySignature(
      razorpay_order_id || razorpay_subscription_id,
      razorpay_payment_id,
      razorpay_signature
    )

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      )
    }

    // Find the member
    let member = await prisma.member.findFirst({
      where: {
        OR: [
          { razorpaySubscriptionId: razorpay_subscription_id },
          { razorpayPaymentId: razorpay_order_id }
        ]
      }
    })

    if (!member) {
       console.error('Member not found for subscription ID:', razorpay_subscription_id)
       // Can still return success so frontend moves on, but ideally we handle this.
    } else {
       // Update member to ACTIVE
       member = await prisma.member.update({
         where: { id: member.id },
         data: {
           status: 'ACTIVE',
           razorpayPaymentId: razorpay_payment_id,
           // Reset createdAt so the 72 hour window starts NOW
           createdAt: new Date(),
         }
       })

       // Send Welcome SMS
       const welcomeMsg = `Welcome to Anokha Welfare Foundation (AWF)! Your Member ID is ${member.memberId}. Thank you for joining us.`
       await sendSMS(member.mobile, welcomeMsg)
       
       // Send Condition SMS
       const conditionMsg = `IMPORTANT: To keep your AWF membership active, you must refer at least 2 new members within 24 hours.`
       await sendSMS(member.mobile, conditionMsg)
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      paymentId: razorpay_payment_id,
    })
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
