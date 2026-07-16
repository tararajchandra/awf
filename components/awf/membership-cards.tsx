import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const membershipTiers = [
  {
    id: 'MEMBER',
    name: 'Join as a Member',
    featured: true,
    price: 251,
    period: 'per year',
    description: 'Join for a good cause',
    benefits: [
      'Digital ID Card',
      'Foundation newsletters',
      'Project updates',
      'Community access',
      'Priority support',
    ],
    color: 'gold',
  },
]

export default function MembershipCards() {
  return (
    <section className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-center mb-4 text-gray-900">
          Membership
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Become a part of our community
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border-4 border-gold bg-white shadow-2xl"
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-gold text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">{tier.description}</p>

                {/* Pricing */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-heading font-bold text-gold">
                      ₹{tier.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600 text-sm">{tier.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check size={18} className="text-gold flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/membership/register"
                  className={`w-full py-3 px-4 rounded-full font-bold transition-all duration-200 inline-flex items-center justify-center gap-2 ${
                    tier.featured
                      ? 'bg-gold text-white hover:bg-opacity-90 shadow-lg'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Become a Member
                  <ArrowRight size={18} />
                </Link>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your membership includes secure payment processing via Razorpay and instant digital ID card generation. 
            Have any questions? <Link href="/#contact" className="text-gold font-bold hover:underline">Contact us</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
