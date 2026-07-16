import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, BadgeCheck, FolderOpen, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react'
import Footer from '@/components/awf/footer'
import DonationForm from '@/components/awf/donation-form'

export const metadata: Metadata = {
  title: 'Donate | Anokha Welfare Foundation',
  description:
    'Support AWF\'s mission to uplift underserved communities in India. Donate to emergency relief, verified causes, or specific projects. 80G certified, fully transparent.',
  keywords: [
    'donate NGO India',
    '80G donation',
    'AWF donate',
    'Anokha Welfare Foundation donation',
    'charity India',
    'humanitarian giving',
  ],
  openGraph: {
    title: 'Donate to Anokha Welfare Foundation',
    description: 'Your donation funds real change — old age homes, education, healthcare, and more.',
    url: 'https://anokhawelfare.org/donate',
  },
}

const DONATION_TYPES = [
  {
    id: 'emergency',
    icon: Zap,
    title: 'Emergency Help',
    description:
      'Rapid-response funding for medical crises, natural disasters, and urgent humanitarian needs. Donations are deployed within 24 hours.',
    accent: 'border-orange',
    iconBg: 'bg-orange/10',
    iconColor: 'text-orange',
    tag: 'Urgent Response',
    tagBg: 'bg-orange/10 text-orange',
  },
  {
    id: 'verified',
    icon: BadgeCheck,
    title: 'ID Verified Donation',
    description:
      'Authenticate your identity and receive an official 80G tax exemption certificate. Full donor record maintained for audit purposes.',
    accent: 'border-gold',
    iconBg: 'bg-gold/10',
    iconColor: 'text-gold',
    tag: '80G Tax Benefit',
    tagBg: 'bg-gold/10 text-gold',
  },
  {
    id: 'project',
    icon: FolderOpen,
    title: 'Project Specific',
    description:
      'Choose exactly where your money goes — education, health, water, orphanage, or more. Track its progress on our transparency ledger.',
    accent: 'border-amber-800',
    iconBg: 'bg-amber-900/10',
    iconColor: 'text-amber-800',
    tag: 'Directed Impact',
    tagBg: 'bg-amber-900/10 text-amber-800',
  },
]

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    title: '80G Tax Benefit',
    description:
      'Donations are eligible for tax deductions under Section 80G of the Income Tax Act. We issue official receipts.',
    color: 'text-gold',
    bg: 'bg-gold/10',
  },
  {
    icon: TrendingUp,
    title: 'Full Transparency',
    description:
      'Every rupee is tracked on our public ledger. Fund utilization reports are published quarterly.',
    color: 'text-orange',
    bg: 'bg-orange/10',
  },
  {
    icon: BadgeCheck,
    title: 'Verified NGO',
    description:
      'AWF is FCRA compliant, registered under the Societies Registration Act, and ISO certified.',
    color: 'text-green-700',
    bg: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Direct Impact',
    description:
      'No middlemen. Your donation reaches the beneficiary through our member-verified distribution chain.',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
  },
]

export default function DonatePage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        {/* Decorative polygon mesh */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #C87000 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E05A00 0%, transparent 45%)',
          }}
        />
        {/* Floating circles */}
        <div
          aria-hidden="true"
          className="absolute top-10 right-10 w-64 h-64 rounded-full border border-gold/20 animate-float-mesh"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full border border-orange/10 animate-float-mesh"
          style={{ animationDelay: '3s' }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold tracking-widest uppercase mb-6 animate-fade-in">
            <Heart size={14} className="fill-gold" />
            Empowering Those in Need
          </span>

          <h1 className="font-heading font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-tight animate-slide-up">
            Make a Difference
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Today
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg sm:text-xl font-body max-w-2xl mx-auto animate-slide-up animate-delay-200">
            Your donation changes lives &mdash; from elderly homes and orphaned children to clean
            water and widow support across Uttar Pradesh.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-300">
            <a
              href="#donation-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-orange text-white font-heading font-bold text-lg rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <Heart size={18} className="fill-white" />
              Donate Now
            </a>
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold/50 text-gold font-heading font-semibold text-lg rounded-full hover:bg-gold/10 transition-all duration-300"
            >
              View Transparency Ledger
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: '&#8377;24.5L+', label: 'Raised This Year' },
              { value: '847', label: 'Active Members' },
              { value: '7', label: 'Projects Funded' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-heading font-bold text-gold"
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                />
                <div className="text-xs sm:text-sm text-gray-400 font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donation Type Cards ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-gray-900">
              Choose How You Want to Give
            </h2>
            <p className="mt-3 text-gray-500 font-body text-lg max-w-xl mx-auto">
              Three ways to donate &mdash; each with full accountability and impact tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {DONATION_TYPES.map((type, idx) => {
              const Icon = type.icon
              return (
                <a
                  key={type.id}
                  href="#donation-form"
                  className={`group block bg-white rounded-2xl p-7 shadow-md border-t-4 ${type.accent} hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 animate-slide-up`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  aria-label={`Donate via ${type.title}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${type.iconBg} mb-5 group-hover:scale-110 transform transition-transform duration-200`}
                  >
                    <Icon size={24} className={type.iconColor} />
                  </div>
                  <span
                    className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${type.tagBg} mb-3`}
                  >
                    {type.tag}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    {type.description}
                  </p>
                  <div className={`mt-5 text-sm font-semibold font-body ${type.iconColor} flex items-center gap-1`}>
                    Donate this way
                    <span className="group-hover:translate-x-1 transform transition-transform duration-200 inline-block">
                      &rarr;
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Interactive Donation Form (client component) ── */}
      <DonationForm />

      {/* ── Why Donate to AWF ── */}
      <section className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-gray-900">
              Why Donate to AWF?
            </h2>
            <p className="mt-3 text-gray-500 font-body text-lg max-w-xl mx-auto">
              Trusted by hundreds of donors and backed by certified governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_CARDS.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transform transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.bg} mb-4`}
                  >
                    <Icon size={22} className={card.color} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Transparency Promise ── */}
      <section className="bg-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            aria-hidden="true"
            className="w-16 h-1 bg-gradient-to-r from-gold to-orange mx-auto rounded-full mb-8"
          />
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-5">
            Our Transparency Promise
          </h2>
          <p className="text-gray-300 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            AWF maintains a fully public financial ledger. Every donation is logged, every
            expenditure is recorded, and annual accounts are audited by an independent CA firm.
            You can verify where every rupee goes &mdash; no exceptions.
          </p>
          <p className="text-gray-400 font-body text-base mb-10">
            &ldquo;Trusted for Truth&rdquo; is not just our tagline &mdash; it is our legal
            commitment.
          </p>
          <Link
            href="/transparency"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-orange text-white font-heading font-bold text-lg rounded-full shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <TrendingUp size={18} />
            View Full Transparency Ledger
          </Link>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: '&#128196;',
                title: 'Quarterly Reports',
                desc: 'Detailed fund utilization published every quarter.',
              },
              {
                icon: '&#9989;',
                title: 'Annual Audit',
                desc: 'Independently audited accounts every financial year.',
              },
              {
                icon: '&#128274;',
                title: 'FCRA Compliant',
                desc: 'Foreign Contribution Regulation Act compliant since inception.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl p-5 border border-gray-700"
              >
                <div
                  className="text-2xl mb-3"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <h4 className="font-heading font-bold text-white text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
