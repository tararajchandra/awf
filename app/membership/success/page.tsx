import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Download, Mail, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Membership Confirmed | Anokha Welfare Foundation',
  description: 'Your AWF membership registration is complete.',
}

export default function MembershipSuccessPage({
  searchParams,
}: {
  searchParams: { memberId?: string }
}) {
  const memberId = searchParams.memberId || 'AWF-2024-XXXXX'

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-6">
            <CheckCircle size={48} className="text-green-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
            Congratulations!
          </h1>
          <p className="text-xl text-gray-600">
            Your AWF membership is now active
          </p>
        </div>

        {/* Member ID Card */}
        <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12 mb-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm uppercase tracking-wider">Your Member ID</p>
            <p className="text-4xl font-bold text-gold font-heading mt-2">{memberId}</p>
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <p className="text-center text-gray-700 mb-4">
              Your digital ID card has been generated and will be sent to your email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gold text-white rounded-full font-bold hover:bg-opacity-90 transition">
                <Download size={20} />
                Download ID Card
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gold text-gold rounded-full font-bold hover:bg-gold/5 transition">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Check Your Email</p>
                  <p className="text-sm text-gray-600">
                    Welcome email with membership certificate sent to your inbox
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Member Dashboard</p>
                  <p className="text-sm text-gray-600">
                    Access your dashboard to view benefits and updates
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Connect with Community</p>
                  <p className="text-sm text-gray-600">
                    Join our member group and stay updated on projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-50 border border-blue-200 rounded-[2rem] p-8 text-center mb-8">
          <h3 className="font-bold text-gray-900 mb-2">Questions?</h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help with any queries about your membership.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition"
          >
            <Mail size={20} />
            Contact Support
          </Link>
        </div>

        {/* Return to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="text-gold font-bold hover:text-opacity-80 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
