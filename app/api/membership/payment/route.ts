import { NextRequest, NextResponse } from 'next/server'
import { createRazorpayOrder, createRazorpaySubscription } from '@/lib/razorpay'
import { generateMemberId } from '@/lib/validators'
import prisma from '@/lib/prisma'

// Get membership tier pricing
export async function GET(request: NextRequest) {
  try {
    const tiers = {
      MEMBER: {
        name: 'Join as a Member',
        price: 25100, // ₹251 in paise
        benefits: ['Digital ID Card', 'Foundation newsletters', 'Project updates'],
        razorpayPlanId: 'member_annual',
        color: 'gold',
      },
    }

    return NextResponse.json({ success: true, tiers })
  } catch (error) {
    console.error('Error fetching tiers:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Create payment order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const tier = body.selectedTier || body.tier
    const phone = body.mobile || body.phone
    const email = body.email
    
    // In the future you might support more tiers
    if (!tier) {
      return NextResponse.json(
        { error: 'Invalid membership tier' },
        { status: 400 }
      )
    }

    const memberId = generateMemberId()

    // Create a subscription
    const subscription: any = await createRazorpaySubscription(
      'member_annual',
      email,
      phone,
      12
    )

    // Look up the referring member if referralId is provided
    let referredByInternalId = null
    if (body.referralId) {
      const refMember = await prisma.member.findUnique({
        where: { memberId: body.referralId }
      })
      if (refMember) {
        referredByInternalId = refMember.id
      }
    }

    // Save Member as PENDING
    await prisma.member.create({
      data: {
        memberId,
        fullName: body.fullName || '',
        mobile: phone,
        email: email || '',
        idType: body.idType1 || 'AADHAAR',
        idFileUrl: body.idFile1Url || '',
        photoUrl: body.photoFileUrl || '',
        address: JSON.stringify(body.address || {}),
        bankDetails: JSON.stringify(body.bankDetails || {}),
        memberTier: tier,
        referredById: referredByInternalId,
        status: 'PENDING',
        razorpaySubscriptionId: subscription.id,
      }
    })

    return NextResponse.json({
      success: true,
      subscription,
      memberId,
    })
  } catch (error) {
    console.error('Payment creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    )
  }
}
