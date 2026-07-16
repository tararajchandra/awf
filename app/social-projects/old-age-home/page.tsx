import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  Users,
  MapPin,
  Clock,
  Heart,
  HeartHandshake,
  Star,
  ArrowRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import Footer from '@/components/awf/footer'

export const metadata: Metadata = {
  title: 'Old Age Home | Anokha Welfare Foundation',
  description:
    'AWF\u2019s Old Age Home provides shelter, dignity, medical care, and community to 120+ elders across Uttar Pradesh. Learn how to support, volunteer, or sponsor a resident.',
  keywords: [
    'old age home UP',
    'elder care India',
    'senior shelter Uttar Pradesh',
    'AWF old age home',
    'volunteer elder care',
    'sponsor elderly',
  ],
  openGraph: {
    title: 'Old Age Home | Anokha Welfare Foundation',
    description:
      'Dignity and care for every elder. AWF\u2019s Old Age Home offers 24/7 shelter, meals, and medical support.',
    url: 'https://anokhawelfare.org/social-projects/old-age-home',
  },
}

const stats = [
  { icon: Users, num: '120+', label: 'Residents' },
  { icon: Heart, num: '15+', label: 'Dedicated Staff' },
  { icon: MapPin, num: '5', label: 'Districts Covered' },
  { icon: Clock, num: '24/7', label: 'Round-the-Clock Care' },
]

const supportCards = [
  {
    id: 'volunteer',
    icon: HeartHandshake,
    title: 'Volunteer With Us',
    description:
      'Spend time with our residents \u2014 read to them, teach a skill, or simply share a conversation. Your presence is a gift.',
    cta: 'Sign Up to Volunteer',
    href: '/#contact',
  },
  {
    id: 'donate',
    icon: Star,
    title: 'Make a Donation',
    description:
      'Every contribution funds meals, medicines, and comfort items. Even a small gift sustains an elder\u2019s dignity for another day.',
    cta: 'Donate Now',
    href: '/#donate',
  },
  {
    id: 'sponsor',
    icon: ShieldCheck,
    title: 'Sponsor a Resident',
    description:
      'Fully sponsor an elder\u2019s monthly care for \u20b92,500/month. Receive regular updates and know exactly who you are helping.',
    cta: 'Become a Sponsor',
    href: '/#contact',
  },
]

const testimonials = [
  {
    id: 'rama',
    name: 'Rama Devi, 78',
    location: 'Agra, UP',
    quote:
      'I lost my husband and both my children moved abroad. I thought I had no one left. AWF took me in three years ago \u2014 now I have friends, hot meals every day, and a nurse who knows my name. I feel human again.',
    since: 'Resident since 2022',
  },
  {
    id: 'shyam',
    name: 'Shyam Lal, 83',
    location: 'Varanasi, UP',
    quote:
      'My knees gave out after decades of farming. My family could not cope. The staff here never rush me, never make me feel like a burden. The doctor visits every week. I sleep peacefully for the first time in years.',
    since: 'Resident since 2021',
  },
]

export default function OldAgeHomePage() {
  return (
    <main className="bg-cream min-h-screen font-body">
      {/* Back breadcrumb */}
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
            <Home size={40} className="text-gold" strokeWidth={1.5} />
          </div>

          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
            <Sparkles size={16} className="text-gold" />
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">
              AWF Social Projects
            </span>
            <Sparkles size={16} className="text-gold" />
          </div>

          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Old Age{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Home
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200">
            Every elder deserves to spend their final years with warmth, dignity,
            and love. AWF&apos;s Old Age Home is a sanctuary where no one is left
            alone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Donate to This Cause <ArrowRight size={18} />
            </Link>
            <Link
              href="#support"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              How to Support
            </Link>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-gradient-to-r from-gold to-orange py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <Icon size={24} className="text-white/80" />
                <p className="font-heading font-bold text-3xl sm:text-4xl">{s.num}</p>
                <p className="text-white/80 text-sm">{s.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Our Mission
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Caring for Those Who{' '}
              <span className="text-gold">Cared for Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gold/10 shadow-sm">
              <Stethoscope size={32} className="text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Medical &amp; Health</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Resident doctors and nurses provide weekly health check-ups,
                medication management, physiotherapy sessions, and emergency
                medical coordination with partner hospitals.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gold/10 shadow-sm">
              <Heart size={32} className="text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Emotional Wellbeing</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Trained counsellors, group activity sessions, cultural
                celebrations, and regular family interaction programmes ensure
                every resident feels valued and connected.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gold/10 shadow-sm">
              <Home size={32} className="text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Safe &amp; Dignified Shelter</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Clean, accessible rooms with proper beds, attached bathrooms,
                nutritious meals three times a day, and leisure spaces designed
                for comfort and mobility.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gold/10 shadow-sm">
              <Users size={32} className="text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Community &amp; Belonging</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Festivals, bhajan sessions, storytelling circles, and craft
                workshops create a rich community life where residents form
                genuine friendships and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Get Involved
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              How to <span className="text-gold">Support</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              There are many ways to make a difference in the lives of our
              beloved elders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.id}
                  className="group rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-gold/10 p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10 transform transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gold text-white mb-5 mx-auto group-hover:scale-110 transform transition-transform duration-300">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.description}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:scale-105 transform transition-all duration-300"
                  >
                    {card.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Resident Stories
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              Voices from Our <span className="text-gold">Home</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.id}
                className="bg-white rounded-3xl p-8 border border-gold/10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-6 text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-orange flex items-center justify-center text-white font-heading font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gold text-xs">{t.location} &bull; {t.since}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-gold to-orange py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
            Be Their Guardian Angel
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            A single sponsorship covers an elder&apos;s meals, medicines, and monthly
            care &mdash; for just &#8377;2,500 per month. Change a life today.
          </p>
          <Link
            href="/#donate"
            className="inline-flex items-center gap-2 bg-white text-gold font-bold px-10 py-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg text-lg"
          >
            Donate Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
