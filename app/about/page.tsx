import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Target,
  Eye,
  Gem,
  ShieldCheck,
  Award,
  BadgeCheck,
  Globe,
  Quote,
  CalendarDays,
  CheckCircle2,
  Users,
  HeartHandshake,
} from 'lucide-react'
import Footer from '@/components/awf/footer'

/* ─────────────────────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'About Us | Anokha Welfare Foundation',
  description:
    'Learn about the Anokha Welfare Foundation — our founding story, philosophy, leadership, and milestones since 2018. An FCRA-compliant, 80G-certified NGO rooted in truth and service across Uttar Pradesh, India.',
  keywords: [
    'About AWF',
    'Anokha Welfare Foundation',
    'NGO India',
    'FCRA compliant NGO',
    '80G certified charity',
    'Uttar Pradesh NGO',
    'humanitarian organization',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anokhawelfare.org/about',
    title: 'About Us | Anokha Welfare Foundation',
    description:
      'Empowering Those in Need. Trusted for Truth. Discover AWF\'s story, mission, and the people driving change since 2018.',
    siteName: 'Anokha Welfare Foundation',
  },
}

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
const philosophyCards = [
  {
    id: 'mission',
    icon: Target,
    title: 'Our Mission',
    body: 'To uplift marginalised communities across India by providing access to education, healthcare, shelter, and sustainable livelihoods — with radical transparency and zero-tolerance for corruption.',
  },
  {
    id: 'vision',
    icon: Eye,
    title: 'Our Vision',
    body: 'A society where every child learns, every elder is dignified, every widow thrives, and clean water flows into every home — a future built on truth, equity, and compassion.',
  },
  {
    id: 'values',
    icon: Gem,
    title: 'Our Values',
    body: 'Truth · Integrity · Compassion · Inclusivity · Accountability. We believe genuine welfare can only be built on an honest foundation — "Be truth, we are for truth soul."',
  },
]

const trustees = [
  {
    id: 'trustee-1',
    name: 'Mohd. Azhar Khan',
    title: 'Founder & Chairman',
    initials: 'MA',
  },
  {
    id: 'trustee-2',
    name: 'Rahul Sharma',
    title: 'Managing Trustee',
    initials: 'RS',
  },
  {
    id: 'trustee-3',
    name: 'Sunita Devi',
    title: 'Trustee — Women & Child Welfare',
    initials: 'SD',
  },
  {
    id: 'trustee-4',
    name: 'Dr. Vijay Mishra',
    title: 'Trustee — Health & Medical Affairs',
    initials: 'VM',
  },
]

const credentials = [
  { id: 'cred-1', icon: BadgeCheck, label: 'Registered NGO', sub: 'Govt. of India' },
  { id: 'cred-2', icon: ShieldCheck, label: 'FCRA Compliant', sub: 'Foreign Contributions' },
  { id: 'cred-3', icon: Award, label: '80G Certified', sub: 'Tax Exemption' },
  { id: 'cred-4', icon: Globe, label: 'ISO Certified', sub: 'Quality Standards' },
]

const timeline = [
  {
    id: 'tl-2018',
    year: '2018',
    title: 'Foundation Established',
    desc: 'AWF was registered in Uttar Pradesh, born from a grassroots vision to serve the forgotten — elders, widows, orphans, and daily-wage workers.',
  },
  {
    id: 'tl-2019',
    year: '2019',
    title: 'First Old Age Home Launched',
    desc: 'Our inaugural Vriddhashram opened its doors in Lucknow, providing shelter, meals, and dignified care for 30 senior citizens.',
  },
  {
    id: 'tl-2020',
    year: '2020',
    title: 'Education Program Initiated',
    desc: 'Launched "Shiksha Ki Roshni," reaching 250 underprivileged children with free tutoring, stationery kits, and school enrollment drives.',
  },
  {
    id: 'tl-2021',
    year: '2021',
    title: 'Health Camps & Hospital Tie-ups',
    desc: 'Organised 18 free health camps covering 3,000+ beneficiaries. Partnered with district hospitals to fast-track access for AWF members.',
  },
  {
    id: 'tl-2022',
    year: '2022',
    title: '500+ Active Members',
    desc: 'The AWF family crossed the 500-member mark with Self-Help Groups, widow support circles, and Water Treatment initiatives scaling rapidly.',
  },
  {
    id: 'tl-2023',
    year: '2023',
    title: 'Expanded to 10 Districts',
    desc: 'Operations spread across Lucknow, Agra, Varanasi, Kanpur, Prayagraj, Bareilly, Gorakhpur, Aligarh, Moradabad & Meerut.',
  },
  {
    id: 'tl-2024',
    year: '2024',
    title: 'Digital Platform Launch',
    desc: 'Launched AWF\'s online membership portal, transparent donation tracking, and the first-ever virtual Religious Harmony summit.',
  },
]

/* ─────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream font-body">

      {/* ══════════════════════════════════════════
          1. PAGE HERO — animated polygon mesh
      ══════════════════════════════════════════ */}
      <section
        id="about-hero"
        className="relative overflow-hidden bg-gray-900 text-white py-28 sm:py-36 px-4 sm:px-6 lg:px-8"
      >
        {/* Polygon mesh SVG background */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
          {/* Large ambient glow */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gold opacity-10 blur-[120px] mesh-bg" />
          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-orange opacity-10 blur-[100px] mesh-bg" style={{ animationDelay: '4s' }} />

          {/* SVG polygon mesh */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="about-hero-mesh" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 0 L40 20 L80 0 L80 80 L40 60 L0 80Z" fill="none" stroke="#C87000" strokeWidth="0.6" />
                <circle cx="40" cy="40" r="1.5" fill="#C87000" />
                <circle cx="0" cy="0" r="1" fill="#E05A00" />
                <circle cx="80" cy="80" r="1" fill="#E05A00" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-hero-mesh)" />
          </svg>

          {/* Floating decorative polygons */}
          <svg className="absolute top-10 right-[10%] w-32 h-32 opacity-30 mesh-bg" viewBox="0 0 100 100" style={{ animationDelay: '2s' }}>
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#C87000" strokeWidth="1.5" />
          </svg>
          <svg className="absolute bottom-10 left-[8%] w-24 h-24 opacity-20 mesh-bg" viewBox="0 0 100 100" style={{ animationDelay: '6s' }}>
            <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" fill="none" stroke="#E05A00" strokeWidth="1.5" />
          </svg>
          <svg className="absolute top-1/2 left-[5%] w-16 h-16 opacity-15 mesh-bg" viewBox="0 0 100 100" style={{ animationDelay: '3s' }}>
            <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#C87000" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 bg-gold bg-opacity-20 border border-gold border-opacity-40 rounded-full px-5 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-gold text-sm font-body font-medium tracking-widest uppercase">
              Our Story
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up animate-delay-100">
            About{' '}
            <span className="bg-gradient-to-r from-gold via-yellow-400 to-orange bg-clip-text text-transparent">
              Anokha Welfare
            </span>{' '}
            Foundation
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
            Since 2018, AWF has carried one unwavering commitment — serving the most vulnerable
            communities across India with truth, dignity, and measurable impact.
          </p>

          {/* Tagline */}
          <div className="mt-8 animate-slide-up animate-delay-300">
            <span className="inline-block text-gold font-heading text-2xl sm:text-3xl italic font-semibold">
              "Empowering Those in Need. Trusted for Truth."
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex justify-center animate-fade-in animate-delay-400">
            <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. FOUNDATION STORY — 2-column layout
      ══════════════════════════════════════════ */}
      <section id="foundation-story" className="bg-cream py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-14">
            <span className="block w-10 h-px bg-gold" />
            <span className="text-gold text-sm font-body font-medium tracking-widest uppercase">
              How It Began
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — founding story text */}
            <div className="animate-slide-left">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Born from a <span className="text-gold">Call to Conscience</span>
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  The Anokha Welfare Foundation was established in <strong>2018</strong> in
                  the heartland of <strong>Uttar Pradesh</strong>, India — a state of extraordinary
                  cultural heritage and, equally, of deep social inequity. What began as a small
                  circle of concerned citizens quickly evolved into a registered, nationally
                  recognised welfare organisation.
                </p>
                <p>
                  Our founders witnessed first-hand the neglect of elders left without shelter,
                  children deprived of education, widows stripped of social standing, and villages
                  surviving on unsafe water. They resolved that <em>compassion without action</em> is
                  merely sentiment — and AWF was born to bridge that gap.
                </p>
                <p>
                  Guided by the principle <strong>"Be truth, we are for truth soul"</strong>, every
                  programme AWF runs is underpinned by radical transparency: no inflated statistics,
                  no invisible funds, no empty promises. Our donors, members, and beneficiaries
                  deserve nothing less than the whole truth.
                </p>
                <p>
                  Today, AWF operates across <strong>10 districts</strong> of Uttar Pradesh,
                  serving 500+ active members, running old age homes, education drives, health
                  camps, widow support groups, water treatment plants, and orphanages — with a
                  growing national footprint.
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '2018', label: 'Founded' },
                  { value: '10+', label: 'Districts' },
                  { value: '500+', label: 'Members' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-xl p-4 text-center border border-gold border-opacity-20 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-gold">{s.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — styled quote / callout box */}
            <div className="animate-slide-right">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 shadow-2xl overflow-hidden">
                {/* Decorative polygon - top right */}
                <div className="absolute -top-8 -right-8 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 100 100">
                    <polygon points="50,5 95,50 50,95 5,50" fill="#C87000" />
                  </svg>
                </div>
                {/* Decorative polygon - bottom left */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 opacity-10">
                  <svg viewBox="0 0 100 100">
                    <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="#E05A00" />
                  </svg>
                </div>

                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-gold bg-opacity-20 border border-gold border-opacity-40 flex items-center justify-center mb-6">
                  <Quote size={22} className="text-gold" />
                </div>

                {/* Tagline */}
                <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-4">
                  "Be truth,<br />
                  <span className="text-gold">we are for</span><br />
                  truth soul."
                </blockquote>

                <p className="text-gray-400 text-sm mb-8">— The founding philosophy of AWF</p>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This is not just a slogan. It is the operating code that governs every rupee
                    spent, every programme run, and every life touched by AWF. Truth is our
                    accountability framework, our brand identity, and our moral compass.
                  </p>

                  {/* Bullet credentials */}
                  <ul className="space-y-3">
                    {[
                      'FCRA-compliant, 80G-certified donations',
                      'Audited financials published annually',
                      'Member-led governance structure',
                      'Zero-overhead pledge on designated funds',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Accent card */}
              <div className="mt-5 bg-gradient-to-r from-gold to-orange rounded-xl p-5 flex items-center gap-4">
                <HeartHandshake size={28} className="text-white flex-shrink-0" />
                <p className="text-white font-body text-sm sm:text-base font-medium leading-snug">
                  Serving elders, children, widows, orphans, and communities in need —
                  with no exceptions and no hidden agendas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. PHILOSOPHY — Mission, Vision, Values
      ══════════════════════════════════════════ */}
      <section id="philosophy" className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold bg-opacity-10 rounded-full px-5 py-2 mb-4">
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-gold text-sm font-body font-medium tracking-widest uppercase">Philosophy</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Rooted in <span className="text-gold">Purpose</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Our Mission, Vision, and Values form the unchanging north star that guides every
              decision, programme, and partnership at AWF.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {philosophyCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={card.id}
                  id={card.id}
                  className="group relative bg-cream rounded-2xl p-8 border border-gold border-opacity-20 hover:border-opacity-60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold to-orange opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />

                  {/* Decorative polygon */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <svg viewBox="0 0 100 100">
                      <polygon points="50,5 95,50 50,95 5,50" fill="#C87000" />
                    </svg>
                  </div>

                  {/* Icon */}
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-orange flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={26} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {card.body}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-gold to-orange transition-all duration-500 rounded-b-2xl" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. TRUSTEES / LEADERSHIP
      ══════════════════════════════════════════ */}
      <section id="leadership" className="bg-cream py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold bg-opacity-10 rounded-full px-5 py-2 mb-4">
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-gold text-sm font-body font-medium tracking-widest uppercase">Leadership</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Trustees <span className="text-gold">Behind AWF</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              Our board of trustees brings decades of combined experience in social work,
              healthcare, education, and community development.
            </p>
          </div>

          {/* Trustee grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustees.map((trustee, idx) => (
              <div
                key={trustee.id}
                id={trustee.id}
                className="group bg-white rounded-2xl p-6 text-center border border-gold border-opacity-10 hover:border-opacity-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Avatar placeholder */}
                <div className="relative mx-auto mb-5 w-20 h-20">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-gold border-opacity-30 group-hover:border-opacity-80 group-hover:scale-105 transition-all duration-300" />
                  {/* Gold gradient circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gold via-yellow-500 to-orange flex items-center justify-center shadow-lg">
                    <span className="font-heading text-white text-xl font-bold">{trustee.initials}</span>
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                </div>

                {/* Name & title */}
                <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-gold transition-colors duration-300 leading-tight mb-1">
                  {trustee.name}
                </h3>
                <p className="text-gray-500 text-sm leading-snug">{trustee.title}</p>

                {/* Gold underline on hover */}
                <div className="mt-4 mx-auto h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-gold to-orange transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Team stat */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-gold border-opacity-20 rounded-full px-6 py-3 shadow-sm">
              <Users size={18} className="text-gold" />
              <span className="text-gray-700 text-sm font-body">
                Supported by <strong>500+ active volunteers</strong> across Uttar Pradesh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. LEGAL CREDENTIALS — horizontal badges
      ══════════════════════════════════════════ */}
      <section id="credentials" className="bg-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
              Verified &amp; <span className="text-gold">Compliant</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Every credential here is publicly verifiable. AWF operates with full legal compliance.
            </p>
          </div>

          {/* Badge grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {credentials.map((cred) => {
              const Icon = cred.icon
              return (
                <div
                  key={cred.id}
                  id={cred.id}
                  className="group flex flex-col items-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gold hover:border-opacity-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-default"
                >
                  <div className="w-12 h-12 rounded-full bg-gold bg-opacity-10 border border-gold border-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-heading text-base font-semibold leading-tight">
                      {cred.label}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">{cred.sub}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Badge strip */}
          <div className="mt-10 border-t border-gray-700 pt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-center">
            {['Registered NGO', 'FCRA Compliant', '80G Certified', 'ISO Certified'].map((badge) => (
              <span
                key={badge}
                className="text-gold text-sm font-body font-semibold tracking-wide uppercase flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. TIMELINE — vertical milestones
      ══════════════════════════════════════════ */}
      <section id="timeline" className="bg-cream py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold bg-opacity-10 rounded-full px-5 py-2 mb-4">
              <CalendarDays size={16} className="text-gold" />
              <span className="text-gold text-sm font-body font-medium tracking-widest uppercase">Our Journey</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Seven Years of <span className="text-gold">Impact</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              From a single old age home to a multi-district welfare network — every milestone
              is a testament to truth in action.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-orange to-gold opacity-30" />

            <div className="space-y-10 sm:space-y-12">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Content card */}
                    <div
                      className={`
                        relative pl-16 sm:pl-0 w-full
                        sm:w-[calc(50%-2rem)]
                        ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}
                      `}
                    >
                      <div className="group bg-white rounded-2xl p-6 border border-gold border-opacity-10 hover:border-opacity-40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                        {/* Year pill */}
                        <div
                          className={`inline-flex items-center gap-1.5 bg-gradient-to-r from-gold to-orange text-white text-xs font-bold rounded-full px-3 py-1 mb-3 font-body tracking-wide ${
                            isEven ? 'sm:ml-auto sm:flex sm:justify-end' : ''
                          }`}
                        >
                          <CalendarDays size={12} />
                          {item.year}
                        </div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gold transition-colors duration-300 mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Centre dot */}
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 z-10 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gold to-orange shadow-lg border-2 border-white ring-2 ring-gold ring-opacity-30" />
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CTA — Join Our Mission
      ══════════════════════════════════════════ */}
      <section id="about-cta" className="relative overflow-hidden bg-gray-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background effects */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold opacity-10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-orange opacity-10 blur-[80px]" />
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="cta-mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30 L30 0 L60 30 L30 60Z" fill="none" stroke="#C87000" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-mesh)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-gold bg-opacity-20 border border-gold border-opacity-40 flex items-center justify-center mb-6">
            <HeartHandshake size={30} className="text-gold" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Join Our{' '}
            <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            Whether you volunteer, donate, or become a member — every act of participation amplifies
            AWF's ability to deliver real, lasting change across India's most underserved communities.
          </p>
          <p className="text-gray-400 text-sm mb-10 italic font-heading">
            "Be truth, we are for truth soul." — AWF Founding Philosophy
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              id="about-cta-member"
              href="/membership"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-body font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg min-w-[200px] justify-center"
            >
              <Users size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Become a Member
            </Link>

            <Link
              id="about-cta-donate"
              href="/#donate"
              className="group inline-flex items-center gap-2 bg-transparent text-gold border-2 border-gold font-body font-semibold px-8 py-4 rounded-full hover:bg-gold hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg min-w-[200px] justify-center"
            >
              <HeartHandshake size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Donate Now
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-gray-500 text-xs tracking-wide">
            80G Tax Benefits Available &bull; FCRA Compliant &bull; Fully Audited
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
