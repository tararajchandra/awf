import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  BookOpen,
  HeartHandshake,
  Stethoscope,
  Droplets,
  Baby,
  Users,
  TrendingUp,
  BadgeCheck,
  FileText,
} from 'lucide-react'
import Footer from '@/components/awf/footer'

export const metadata: Metadata = {
  title: 'Transparency Ledger | Anokha Welfare Foundation',
  description:
    'AWF\'s public transparency ledger — see every donation received, every project funded, and every impact achieved. Audited annually. 80G certified.',
  keywords: [
    'NGO transparency',
    'AWF ledger',
    'donation tracking',
    'fund utilization',
    'charity accountability India',
  ],
  openGraph: {
    title: 'Transparency Ledger | Anokha Welfare Foundation',
    description:
      'Full public accountability — donations, project funding, and verified impact numbers.',
    url: 'https://anokhawelfare.org/transparency',
  },
}

/* ─── Data ─── */

const IMPACT_STATS = [
  {
    value: '\u20B924,50,000',
    label: 'Total Donations Received',
    sublabel: 'This financial year',
    icon: TrendingUp,
    color: 'text-gold',
    bg: 'bg-gold/10',
  },
  {
    value: '847',
    label: 'Active Members',
    sublabel: 'Across Uttar Pradesh',
    icon: Users,
    color: 'text-orange',
    bg: 'bg-orange/10',
  },
  {
    value: '7',
    label: 'Projects Funded',
    sublabel: 'Actively running',
    icon: BadgeCheck,
    color: 'text-green-700',
    bg: 'bg-green-50',
  },
]

const PROJECTS = [
  {
    name: 'Old Age Home',
    icon: Home,
    raised: 320000,
    goal: 500000,
    color: 'from-gold to-amber-500',
  },
  {
    name: 'Education for Children',
    icon: BookOpen,
    raised: 480000,
    goal: 600000,
    color: 'from-orange to-amber-400',
  },
  {
    name: 'Widow Support',
    icon: HeartHandshake,
    raised: 210000,
    goal: 400000,
    color: 'from-pink-600 to-rose-400',
  },
  {
    name: 'Health & Hospitals',
    icon: Stethoscope,
    raised: 550000,
    goal: 800000,
    color: 'from-blue-600 to-sky-400',
  },
  {
    name: 'Water Treatment',
    icon: Droplets,
    raised: 180000,
    goal: 300000,
    color: 'from-cyan-600 to-teal-400',
  },
  {
    name: 'Orphanage',
    icon: Baby,
    raised: 240000,
    goal: 400000,
    color: 'from-purple-600 to-violet-400',
  },
  {
    name: 'Self-Help Groups',
    icon: Users,
    raised: 170000,
    goal: 300000,
    color: 'from-emerald-600 to-green-400',
  },
]

const RECENT_DONATIONS = [
  { donor: 'Anonymous', amount: 5000, project: 'Health & Hospitals', date: '12 Jul 2026' },
  { donor: 'Priya S.', amount: 2000, project: 'Education for Children', date: '11 Jul 2026' },
  { donor: 'Anonymous', amount: 10000, project: 'Old Age Home', date: '10 Jul 2026' },
  { donor: 'Ramesh K.', amount: 1000, project: 'Water Treatment', date: '09 Jul 2026' },
  { donor: 'Anonymous', amount: 3000, project: 'Orphanage', date: '08 Jul 2026' },
  { donor: 'Sunita M.', amount: 500, project: 'Widow Support', date: '07 Jul 2026' },
  { donor: 'Anonymous', amount: 7500, project: 'Health & Hospitals', date: '06 Jul 2026' },
  { donor: 'Arjun T.', amount: 2000, project: 'Self-Help Groups', date: '05 Jul 2026' },
  { donor: 'Anonymous', amount: 1000, project: 'Education for Children', date: '04 Jul 2026' },
  { donor: 'Kavita R.', amount: 5000, project: 'Old Age Home', date: '03 Jul 2026' },
]

function formatINR(amount: number) {
  return '\u20B9' + amount.toLocaleString('en-IN')
}

function percent(raised: number, goal: number) {
  return Math.min(Math.round((raised / goal) * 100), 100)
}

/* ─── Page ─── */

export default function TransparencyPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 40%, #C87000 0%, transparent 50%), radial-gradient(circle at 25% 70%, #E05A00 0%, transparent 45%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-8 left-8 w-72 h-72 rounded-full border border-gold/20 animate-float-mesh"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-0 w-96 h-96 rounded-full border border-orange/10 animate-float-mesh"
          style={{ animationDelay: '4s' }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold tracking-widest uppercase mb-6 animate-fade-in">
            <BadgeCheck size={14} />
            Verified &amp; Audited
          </span>

          <h1 className="font-heading font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-tight animate-slide-up">
            Our Transparency
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Ledger
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg sm:text-xl font-body max-w-2xl mx-auto animate-slide-up animate-delay-200">
            Every rupee donated, every project funded, every life touched &mdash; documented
            publicly and audited independently. No exceptions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-300">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-orange text-white font-heading font-bold text-lg rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              Donate Now
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold/50 text-gold font-heading font-semibold text-lg rounded-full hover:bg-gold/10 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ── Impact Summary ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-gray-900">
              Total Impact Summary
            </h2>
            <p className="mt-3 text-gray-500 font-body text-lg">
              Financial Year 2025&ndash;26
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {IMPACT_STATS.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center animate-slide-up border border-gray-100"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${stat.bg} mb-5`}
                  >
                    <Icon size={26} className={stat.color} />
                  </div>
                  <div className={`text-4xl sm:text-5xl font-heading font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-800 font-heading font-semibold text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 font-body text-sm">{stat.sublabel}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Project Funding Progress ── */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-gray-900">
              Project Funding Progress
            </h2>
            <p className="mt-3 text-gray-500 font-body text-lg">
              Annual funding goals and current progress for each active project.
            </p>
          </div>

          <div className="space-y-6">
            {PROJECTS.map((project, idx) => {
              const Icon = project.icon
              const pct = percent(project.raised, project.goal)
              return (
                <div
                  key={project.name}
                  className="bg-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 animate-slide-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100">
                        <Icon size={20} className="text-gray-600" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-gray-900">
                        {project.name}
                      </h3>
                    </div>
                    <span
                      className={`text-sm font-bold font-body px-3 py-1 rounded-full ${
                        pct >= 80
                          ? 'bg-green-50 text-green-700'
                          : pct >= 50
                          ? 'bg-gold/10 text-gold'
                          : 'bg-orange/10 text-orange'
                      }`}
                    >
                      {pct}% funded
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${project.color} transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${project.name} funding progress`}
                    />
                  </div>

                  <div className="flex justify-between text-sm font-body text-gray-500">
                    <span>
                      Raised:{' '}
                      <span className="font-semibold text-gray-800">
                        {formatINR(project.raised)}
                      </span>
                    </span>
                    <span>
                      Goal:{' '}
                      <span className="font-semibold text-gray-800">
                        {formatINR(project.goal)}
                      </span>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-orange text-white font-heading font-bold text-lg rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Fund a Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recent Donations Feed ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-gray-900">
              Recent Donations
            </h2>
            <p className="mt-3 text-gray-500 font-body text-lg">
              Last 10 contributions &mdash; anonymized to protect donor privacy.
            </p>
          </div>

          {/* Table — desktop */}
          <div className="hidden sm:block bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <table className="w-full" aria-label="Recent donations table">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-body tracking-widest uppercase text-gray-300">
                    Donor
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-body tracking-widest uppercase text-gray-300">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-body tracking-widest uppercase text-gray-300">
                    Project
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold font-body tracking-widest uppercase text-gray-300">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_DONATIONS.map((donation, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-cream transition-colors duration-150 animate-fade-in"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <td className="px-6 py-4 font-body text-gray-800 font-medium">
                      <span className="flex items-center gap-2">
                        <span className="inline-flex w-8 h-8 rounded-full bg-gold/20 text-gold text-xs font-bold items-center justify-center">
                          {donation.donor === 'Anonymous' ? '?' : donation.donor[0]}
                        </span>
                        {donation.donor}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-heading font-bold text-gold text-lg">
                      {formatINR(donation.amount)}
                    </td>
                    <td className="px-6 py-4 font-body text-gray-600 text-sm">
                      {donation.project}
                    </td>
                    <td className="px-6 py-4 text-right font-body text-gray-400 text-sm">
                      {donation.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile */}
          <div className="sm:hidden space-y-4">
            {RECENT_DONATIONS.map((donation, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 font-body font-medium text-gray-800">
                    <span className="inline-flex w-8 h-8 rounded-full bg-gold/20 text-gold text-xs font-bold items-center justify-center">
                      {donation.donor === 'Anonymous' ? '?' : donation.donor[0]}
                    </span>
                    {donation.donor}
                  </span>
                  <span className="font-heading font-bold text-gold text-lg">
                    {formatINR(donation.amount)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-body text-gray-400">
                  <span>{donation.project}</span>
                  <span>{donation.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audit Statement Certificate ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Certificate box */}
          <div className="relative bg-cream rounded-3xl p-8 sm:p-12 border-4 border-double border-gold/50 shadow-2xl overflow-hidden">
            {/* Corner decoration */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-24 h-24 border-r-0 border-b-0 border-4 border-gold/30 rounded-br-none rounded-tl-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 w-24 h-24 border-l-0 border-t-0 border-4 border-gold/30 rounded-tl-none rounded-br-3xl pointer-events-none"
            />

            <div className="text-center relative z-10">
              {/* Seal */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold to-orange text-white mb-6 shadow-xl">
                <FileText size={28} />
              </div>

              <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 font-body">
                Certificate of Audit
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
                Independently Audited
              </h2>

              <p className="text-gray-600 font-body text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
                This is to certify that the accounts of{' '}
                <strong className="text-gray-900">Anokha Welfare Foundation</strong> are audited
                annually by an independent Chartered Accountant firm as required under the
                Societies Registration Act and FCRA regulations.
              </p>

              <p className="text-gray-500 font-body text-sm mb-8">
                The financial statements for FY 2025&ndash;26 are prepared in accordance with
                applicable accounting standards and have been found to be{' '}
                <span className="font-semibold text-green-700">
                  true, fair, and free of material misstatement.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="text-center">
                  <div className="w-24 h-px bg-gray-400 mx-auto mb-2" />
                  <p className="text-xs font-body text-gray-500 tracking-wide uppercase">
                    Auditor&apos;s Signature
                  </p>
                </div>
                <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                <div className="text-center">
                  <div className="w-24 h-px bg-gray-400 mx-auto mb-2" />
                  <p className="text-xs font-body text-gray-500 tracking-wide uppercase">
                    Secretary, AWF
                  </p>
                </div>
              </div>

              {/* Certification badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { label: '80G Certified', color: 'bg-gold/10 text-gold border-gold/30' },
                  { label: 'FCRA Compliant', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                  { label: 'ISO Certified', color: 'bg-green-50 text-green-700 border-green-200' },
                  { label: 'NGO Registered', color: 'bg-purple-50 text-purple-700 border-purple-200' },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold font-body border ${badge.color}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 font-body text-sm mt-6">
            For audit reports or financial queries, contact{' '}
            <a
              href="mailto:accounts@anokhawelfare.org"
              className="text-gold hover:underline"
            >
              accounts@anokhawelfare.org
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-300 font-body text-lg mb-8">
            Your contribution is safe, transparent, and impactful &mdash; every single time.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-gold to-orange text-white font-heading font-bold text-xl rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
