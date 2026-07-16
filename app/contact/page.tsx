import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Youtube, Send, MessageCircle } from 'lucide-react'
import Footer from '@/components/awf/footer'
import ContactForm from '@/components/awf/contact-form'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Anokha Welfare Foundation',
  description:
    'Reach out to Anokha Welfare Foundation for general inquiries, donations, membership, emergency help, or partnerships. We are here for you — 9AM to 6PM IST, with a 24/7 emergency helpline.',
  keywords: [
    'AWF contact',
    'Anokha Welfare Foundation contact',
    'NGO helpline',
    'Prayagraj welfare',
    'donate NGO India',
  ],
  openGraph: {
    title: 'Contact Us | Anokha Welfare Foundation',
    description: 'We are here for you. Get in touch with AWF today.',
    url: 'https://anokhawelfare.org/contact',
  },
}

/* ─────────────────────────────────────── helpers ─────────────────────────── */

const contactCards = [
  {
    id: 'contact-card-phone',
    icon: Phone,
    title: 'Phone / Helpline',
    lines: [
      { label: 'Helpline', value: '+91-9876543210' },
      { label: 'Emergency', value: '+91-9876543211' },
    ],
    accent: 'from-gold/10 to-gold/5',
    iconBg: 'bg-gold',
    link: 'tel:+919876543210',
    linkLabel: 'Call Now',
  },
  {
    id: 'contact-card-email',
    icon: Mail,
    title: 'Email Us',
    lines: [
      { label: 'General', value: 'info@anokhawelfare.org' },
      { label: 'Support', value: 'help@anokhawelfare.org' },
    ],
    accent: 'from-orange/10 to-orange/5',
    iconBg: 'bg-orange',
    link: 'mailto:info@anokhawelfare.org',
    linkLabel: 'Send Email',
  },
  {
    id: 'contact-card-address',
    icon: MapPin,
    title: 'Our Address',
    lines: [
      { label: '', value: '12, Civil Lines,' },
      { label: '', value: 'Allahabad (Prayagraj),' },
      { label: '', value: 'Uttar Pradesh — 211001' },
    ],
    accent: 'from-amber-50 to-amber-100/40',
    iconBg: 'bg-amber-600',
    link: 'https://maps.google.com/?q=Civil+Lines+Prayagraj+Uttar+Pradesh',
    linkLabel: 'Get Directions',
  },
]

const officeHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM IST', isOpen: true },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM IST', isOpen: true },
  { day: 'Sunday', time: '10:00 AM – 2:00 PM IST', isOpen: true },
  { day: 'Emergency Helpline', time: '24 / 7 — Always Available', isOpen: true, highlight: true },
]

const socialLinks = [
  {
    id: 'social-youtube',
    label: 'YouTube',
    subLabel: 'Watch our impact stories',
    icon: Youtube,
    href: 'https://youtube.com/@anokhawelfare',
    bg: 'bg-[#FF0000]',
    textColor: 'text-white',
    hoverRing: 'hover:ring-[#FF0000]',
  },
  {
    id: 'social-telegram',
    label: 'Telegram',
    subLabel: 'Join our community channel',
    icon: Send,
    href: 'https://t.me/anokhawelfare',
    bg: 'bg-[#229ED9]',
    textColor: 'text-white',
    hoverRing: 'hover:ring-[#229ED9]',
  },
  {
    id: 'social-whatsapp',
    label: 'WhatsApp',
    subLabel: 'Chat with our support team',
    icon: MessageCircle,
    href: 'https://wa.me/919876543210',
    bg: 'bg-[#25D366]',
    textColor: 'text-white',
    hoverRing: 'hover:ring-[#25D366]',
  },
]

/* ─────────────────────────────────────── page ────────────────────────────── */

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">

      {/* ══════════════════════════════════════════════════════════════════════
          1. PAGE HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        {/* Polygon mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="hero-mesh" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke="#C87000" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-mesh)" />
          </svg>
          {/* Gold gradient blobs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold opacity-10 blur-3xl mesh-bg" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-orange opacity-10 blur-3xl mesh-bg" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <p className="inline-block text-gold font-semibold uppercase tracking-[0.35em] text-sm mb-5 px-4 py-2 rounded-full border border-gold/30 bg-gold/5">
            Anokha Welfare Foundation
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Touch
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
            We are here for you
          </p>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Whether you want to volunteer, donate, partner, or need emergency welfare assistance — our team is always ready to help.
          </p>
          {/* Breadcrumb */}
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Contact</span>
          </nav>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. CONTACT CARDS ROW
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon
              return (
                <div
                  key={card.id}
                  id={card.id}
                  className={`animate-slide-up animate-delay-${(i + 1) * 100} group relative rounded-3xl bg-gradient-to-br ${card.accent} border border-white/80 shadow-lg hover:shadow-2xl p-8 hover:scale-[1.03] transform transition-all duration-300 overflow-hidden`}
                >
                  {/* Subtle background circle */}
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/30 group-hover:scale-110 transition-transform duration-500" />

                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${card.iconBg} text-white shadow-md mb-5`}>
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>

                  <ul className="space-y-1.5 mb-6">
                    {card.lines.map((line, j) => (
                      <li key={j} className="text-gray-700 text-sm">
                        {line.label && (
                          <span className="font-semibold text-gray-500 mr-1">{line.label}:</span>
                        )}
                        {line.value}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={card.link}
                    target={card.link.startsWith('http') ? '_blank' : undefined}
                    rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:text-orange transition-colors group/link"
                  >
                    {card.linkLabel}
                    <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. TWO-COLUMN: FORM + MAP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">Write To Us</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Fill in the form below and our dedicated team will respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: Contact Form ─────────────────────────────────────── */}
            <div className="rounded-3xl bg-cream border border-gray-100 shadow-xl p-8 sm:p-10 animate-slide-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg">Contact Form</h3>
                  <p className="text-gray-400 text-xs">All fields marked * are required</p>
                </div>
              </div>
              <ContactForm />
            </div>

            {/* ── RIGHT: Map ────────────────────────────────────────────── */}
            <div className="animate-slide-right flex flex-col gap-6">
              {/* Styled map wrapper */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative">
                {/* Header bar */}
                <div className="bg-gray-900 px-5 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-full px-4 py-1 text-gray-400 text-xs flex items-center gap-2">
                    <MapPin size={10} className="text-gold" />
                    maps.google.com — Prayagraj, Uttar Pradesh
                  </div>
                </div>

                {/* Google Maps iframe */}
                <div className="relative h-[360px] w-full bg-gray-100">
                  <iframe
                    title="AWF Office Location — Prayagraj, Uttar Pradesh"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57849.46462804285!2d81.83005!3d25.44586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb3b6b64e313%3A0xe38a8e9dd52e9c3f!2sCivil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  {/* Gold pin overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gold shadow-lg border-4 border-white flex items-center justify-center">
                        <MapPin size={16} className="text-white" strokeWidth={2} />
                      </div>
                      <div className="w-3 h-3 bg-gold rotate-45 mx-auto -mt-1.5 shadow" />
                    </div>
                  </div>
                </div>

                {/* Address bar below map */}
                <div className="bg-gray-900 px-5 py-4 flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">Anokha Welfare Foundation</p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      12, Civil Lines, Allahabad (Prayagraj), Uttar Pradesh — 211001
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Civil+Lines+Prayagraj+211001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex-shrink-0 bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-orange transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </div>

              {/* Quick contact card beneath map */}
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-lg border border-gray-700">
                <p className="text-gold font-heading font-bold text-sm uppercase tracking-widest mb-4">Quick Connect</p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gold rounded-xl px-4 py-3 transition-all duration-300 group"
                  >
                    <Phone size={16} className="text-gold group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-white text-xs font-semibold group-hover:text-white">Helpline</p>
                      <p className="text-gray-400 text-[10px] group-hover:text-white/80">+91-98765 43210</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-[#25D366] rounded-xl px-4 py-3 transition-all duration-300 group"
                  >
                    <MessageCircle size={16} className="text-[#25D366] group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-white text-xs font-semibold">WhatsApp</p>
                      <p className="text-gray-400 text-[10px] group-hover:text-white/80">Chat Now</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@anokhawelfare.org"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-orange rounded-xl px-4 py-3 transition-all duration-300 group col-span-2"
                  >
                    <Mail size={16} className="text-orange group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-white text-xs font-semibold">Email</p>
                      <p className="text-gray-400 text-[10px] group-hover:text-white/80">info@anokhawelfare.org</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. OFFICE HOURS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">Availability</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900">
              Office Hours
            </h2>
            <p className="text-gray-500 mt-4">
              Visit us at our Prayagraj office or reach out during working hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {officeHours.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-2xl px-6 py-5 shadow-sm border transition-all duration-300 hover:scale-[1.02] transform ${
                  item.highlight
                    ? 'bg-gradient-to-r from-gold to-orange border-transparent text-white shadow-gold/30 shadow-lg'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.highlight ? 'bg-white/20' : 'bg-cream'}`}>
                    <Clock size={18} className={item.highlight ? 'text-white' : 'text-gold'} />
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${item.highlight ? 'text-white' : 'text-gray-800'}`}>
                      {item.day}
                    </p>
                    {item.highlight && (
                      <p className="text-white/80 text-xs mt-0.5">Emergency assistance available</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-sm ${item.highlight ? 'text-white' : 'text-gold'}`}>
                    {item.time}
                  </p>
                  <div className={`inline-flex items-center gap-1 mt-1 text-[10px] font-semibold uppercase tracking-wider ${item.highlight ? 'text-white/80' : 'text-green-600'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${item.highlight ? 'bg-white animate-pulse' : 'bg-green-500 animate-pulse'}`} />
                    {item.highlight ? 'Always On' : 'Open'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IST note */}
          <p className="text-center text-gray-400 text-xs mt-6">
            All times shown in <strong>Indian Standard Time (IST, UTC+5:30)</strong>. Public holidays may vary.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. SOCIAL LINKS ROW
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">Stay Connected</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white">
              Follow AWF Online
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">
              Stay updated with our latest welfare programs, success stories, and community initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`animate-slide-up animate-delay-${(i + 1) * 100} group flex flex-col items-center text-center rounded-3xl bg-gray-800 border border-gray-700 hover:border-transparent p-8 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:ring-2 ring-offset-2 ring-offset-gray-900 ${social.hoverRing}`}
                  aria-label={`Follow AWF on ${social.label}`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${social.bg} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={social.textColor} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-white font-heading font-bold text-xl mb-1">{social.label}</h3>
                  <p className="text-gray-400 text-sm mb-5">{social.subLabel}</p>
                  <span className={`inline-block ${social.bg} ${social.textColor} text-xs font-bold px-4 py-2 rounded-full group-hover:opacity-90 transition-opacity`}>
                    Follow on {social.label}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Tagline */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Empowering those in need.{' '}
              <span className="text-gold font-semibold">Trusted for Truth.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
      <Footer />
    </div>
  )
}
