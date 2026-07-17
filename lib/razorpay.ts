import Razorpay from 'razorpay'

const razorpayInstance = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'dummy_test_key_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_test_key_secret',
})

export const razorpay = razorpayInstance

// Create a subscription for recurring membership
export async function createRazorpaySubscription(
  planId: string,
  customerEmail: string,
  customerPhone: string,
  totalCount: number = 12 // for annual plan (12 months)
) {
  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id: planId,
      customer_notify: 1,
      quantity: 1,
      total_count: totalCount,
    } as any)
    return subscription
  } catch (error) {
    console.error('Razorpay subscription error:', error)
    throw error
  }
}

// Create a one-time payment order for lifetime membership
export async function createRazorpayOrder(
  amount: number, // in paise
  receipt: string,
  notes: Record<string, any>
) {
  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt,
      notes,
    })
    return order
  } catch (error) {
    console.error('Razorpay order error:', error)
    throw error
  }
}

// Fetch payment details from Razorpay
export async function getRazorpayPayment(paymentId: string) {
  try {
    const payment = await razorpay.payments.fetch(paymentId)
    return payment
  } catch (error) {
    console.error('Error fetching payment:', error)
    throw error
  }
}

// Verify payment signature (server-side)
export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const crypto = require('crypto')
  const secret = process.env.RAZORPAY_KEY_SECRET || ''
  
  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(`${orderId}|${paymentId}`)
  const computedSignature = hmac.digest('hex')
  
  return computedSignature === signature
}
