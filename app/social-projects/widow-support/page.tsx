import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart,
  IndianRupee,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  Sparkles,
} from 'lucide-react'
import Footer from '@/components/awf/footer'
import WidowSupportForm from '@/components/awf/widow-support-form'

export const metadata: Metadata = {
  title: 'Widow Support Program | Anokha Welfare Foundation',
  description:
    'AWF\u2019s Widow Support Programme provides financial aid, livelihood skills, emotional support and self-help groups for 200+ widowed women across Uttar Pradesh. Apply online.',
  keywords: [
    'AWF widow support',
    'widow welfare NGO India',
    'widowed women Uttar Pradesh',
    'livelihood skills for women',
    'self-help groups UP',
    'Anokha Welfare Foundation',
  ],
  openGraph: {
    title: 'Widow Support Program | Anokha Welfare Foundation',
    description:
      'Financial aid, skills training, and community for 200+ widowed women across UP.',
    url: 'https://anokhawelfare.org/social-projects/widow-support',
  },
}

const pillars = [
  {
    id: 'financial',
    icon: IndianRupee,
    title: 'Financial Aid',
    description:
      'Monthly stipends and one-time emergency grants to help widows cover essential living costs \u2014 rent, food, medicine, and children\u2019s education fees.',
  },
  {
    id: 'livelihood',
    icon: Briefcase,
    title: 'Livelihood Skills',
    description:
      'Vocational training in tailoring, organic farming, handicrafts, incense-making, and computer literacy \u2014 equipping women with marketable, income-generating skills.',
  },
  {
    id: 'emotional',
    icon: Heart,
    title: 'Emotional Support',
    description:
      'Group counselling sessions, peer support circles, and access to trained community psychologists who help women process grief and rebuild confidence.',
  },
  {
    id: 'shg',
    icon: Users,
    title: 'Self-Help Groups',
    description:
      'AWF facilitates women-led SHGs where members pool savings, access micro-credit, and collectively pursue business ventures under formal supervision.',
  },
]

const eligibility = [
  'Widow residing in Uttar Pradesh (other states considered on a case-by-case basis)',
  'Annual household income below \u20b91,80,000',
  'No existing government widow pension scheme cover (or documented shortfall)',
  'Children aged 18 or below in the household (priority; not mandatory)',
  'Aadhaar-linked bank account for direct benefit transfer',
  'Willingness to participate in skills or counselling sessions',
]

const steps = [
  {
    num: 1,
    title: 'Fill the Application Form',
    desc: 'Complete the form below or visit any AWF district office. Our field worker can assist in person.',
  },
  {
    num: 2,
    title: 'Document Verification',
    desc: 'Husband\u2019s death certificate, income proof, and Aadhaar are collected by our team within 5 working days.',
  },
  {
    num: 3,
    title: 'Home Visit & Assessment',
    desc: 'A trained AWF community officer visits to understand the household situation and specific needs.',
  },
  {
    num: 4,
    title: 'Approval & Onboarding',
    desc: 'Approved beneficiaries are enrolled in a tailored support plan within 2 weeks of the home visit.',
  },
  {
    num: 5,
    title: 'Ongoing Support',
    desc: 'Monthly check-ins, group sessions, and quarterly reviews ensure the programme remains relevant and impactful.',
  },
]

export default function WidowSupportPage() {
  return (
    <main className="bg-cream min-h-screen font-body">
      {/* Breadcrumb */}
      <div className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/social-projects"
            className="inline-flex items-center gap-1 text-gold text-sm hover:text-orange transition-colors"
          >
            <ChevronLeft size={16} /> Back to Social Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="mesh-bg absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold opacity-10 blur-3xl" />
          <div className="mesh-bg absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange opacity-10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gold/20 border border-gold/30 mx-auto mb-6 animate-fade-in">
            <Heart size={40} className="text-gold" strokeWidth={1.5} />
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={16} className="text-gold" />
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">
              AWF Social Projects
            </span>
            <Sparkles size={16} className="text-gold" />
          </div>

          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Widow{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Support Program
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200">
            200+ women have found financial independence, emotional resilience,
            and community through AWF&apos;s Widow Support Programme. No woman
            should face loss alone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
            <Link
              href="#apply-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Apply for Support <ArrowRight size={18} />
            </Link>
            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              Donate to the Cause
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gradient-to-r from-gold to-orange py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: '200+', label: 'Beneficiaries' },
            { num: '18', label: 'SHG Groups' },
            { num: '12', label: 'Skill Centres' },
            { num: '5', label: 'Districts Active' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-3xl sm:text-4xl">{s.num}</p>
              <p className="text-white/80 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Programme Overview
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              Four Pillars of <span className="text-gold">Healing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.id}
                  className="group bg-white rounded-3xl p-8 border border-gold/10 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 transform transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gold text-white mb-5 group-hover:scale-110 transform transition-transform duration-300">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Who Can Apply
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              Eligibility <span className="text-gold">Criteria</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 sm:p-10 border border-gold/10">
            <ul className="space-y-4">
              {eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 italic">
              * AWF reserves the right to make exceptions for extreme hardship cases outside the above criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Application steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              The Journey
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              Application <span className="text-gold">Process</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/20 hidden sm:block" />

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-gold to-orange flex items-center justify-center text-white font-heading font-bold text-lg shadow-md z-10">
                    {step.num}
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gold/10 shadow-sm flex-1 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive application form — client component */}
      <WidowSupportForm />

      <Footer />
    </main>
  )
}
