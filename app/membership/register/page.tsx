import type { Metadata } from 'next'
import MembershipRegistrationForm from '@/components/awf/membership-registration-form'

export const metadata: Metadata = {
  title: 'Join AWF Membership | Anokha Welfare Foundation',
  description: 'Register for AWF membership and choose your tier. Secure payment with Razorpay.',
}

export default function MembershipPage() {
  return <MembershipRegistrationForm />
}
