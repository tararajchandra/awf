import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Stethoscope,
  Building2,
  Pill,
  Calendar,
  MapPin,
  Users,
  Heart,
  ArrowRight,
  ChevronLeft,
  Sparkles,
  GraduationCap,
  Package,
  CheckCircle,
  Clock,
} from 'lucide-react'
import Footer from '@/components/awf/footer'

export const metadata: Metadata = {
  title: 'Health & Hospitals | Anokha Welfare Foundation',
  description:
    'AWF organises free health camps, partners with hospitals, enables medicine donations, and supports nursing education across Uttar Pradesh. 50+ camps conducted and counting.',
  keywords: [
    'AWF health camps',
    'free medical camp UP',
    'hospital partnership NGO',
    'medicine donation India',
    'nursing college support',
    'Anokha Welfare Foundation',
  ],
  openGraph: {
    title: 'Health & Hospitals | Anokha Welfare Foundation',
    description:
      '50+ free health camps, partner hospitals, and medicine drives bringing healthcare to remote communities across UP.',
    url: 'https://anokhawelfare.org/social-projects/health',
  },
}

const stats = [
  { icon: Stethoscope, num: '50+', label: 'Health Camps' },
  { icon: Building2, num: '4', label: 'Partner Hospitals' },
  { icon: Pill, num: '10,000+', label: 'Medicine Packets Donated' },
  { icon: Users, num: '15,000+', label: 'Patients Treated' },
]

const partnerHospitals = [
  {
    id: 'kgmu',
    name: 'King George\u2019s Medical University',
    location: 'Lucknow, UP',
    specialty: 'Multi-speciality referrals, OPD slots for AWF beneficiaries',
    icon: Building2,
  },
  {
    id: 'sn',
    name: 'Sarojini Naidu Community Hospital',
    location: 'Agra, UP',
    specialty: 'Maternal health, general surgery, free diagnostic tests',
    icon: Heart,
  },
  {
    id: 'bhu',
    name: 'BHU Sir Sunderlal Hospital',
    location: 'Varanasi, UP',
    specialty: 'Oncology support, geriatric care, ayurveda wing',
    icon: Stethoscope,
  },
  {
    id: 'ggm',
    name: 'Gandhi Gram Medical Centre',
    location: 'Kanpur, UP',
    specialty: 'Paediatrics, eye care camps, dental health drives',
    icon: Package,
  },
]

const upcomingCamps = [
  {
    date: '18 Jul 2026',
    day: 'Sat',
    location: 'Kakori Community Centre, Lucknow',
    district: 'Lucknow',
    services: 'Blood pressure, sugar screening, eye check-up, free medicines',
    slots: '200 patients',
  },
  {
    date: '02 Aug 2026',
    day: 'Sun',
    location: 'Phoolpur Gram Panchayat, Prayagraj',
    district: 'Prayagraj',
    services: 'Gynaecology, dental, orthopaedics, vaccination',
    slots: '250 patients',
  },
  {
    date: '16 Aug 2026',
    day: 'Sat',
    location: 'Ballia Urban PHC Campus, Ballia',
    district: 'Ballia',
    services: 'General OPD, TB screening, nutrition assessment, free diet kits',
    slots: '150 patients',
  },
  {
    date: '06 Sep 2026',
    day: 'Sun',
    location: 'Mathura Vrindavan Welfare Hall, Mathura',
    district: 'Mathura',
    services: 'Paediatric care, skin diseases, blood group testing, malaria survey',
    slots: '300 patients',
  },
]

const donationItems = [
  'Paracetamol strips (500mg, 650mg)',
  'ORS sachets and oral rehydration salts',
  'Antiseptic creams and wound dressings',
  'Anti-allergic and anti-histamine tablets',
  'Vitamin B-complex and iron supplements',
  'Disposable syringes and IV sets',
  'Blood sugar testing strips and lancets',
  'Surgical gloves and face masks (N95)',
]

export default function HealthPage() {
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
            <Stethoscope size={40} className="text-gold" strokeWidth={1.5} />
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={16} className="text-gold" />
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">
              AWF Social Projects
            </span>
            <Sparkles size={16} className="text-gold" />
          </div>

          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Health &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Hospitals
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200">
            Quality healthcare should not be a privilege. AWF&apos;s health
            initiatives bring doctors, medicines, and diagnostics directly to
            communities that cannot afford or access hospitals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
            <Link
              href="#camps"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              View Upcoming Camps <ArrowRight size={18} />
            </Link>
            <Link
              href="#donate-medicines"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              Donate Medicines
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Partner Hospitals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Our Partners
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              Partnered <span className="text-gold">Hospitals</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              AWF has formal MOUs with these institutions to provide preferential
              access, reduced-cost treatment, and specialist consultations for
              AWF beneficiaries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {partnerHospitals.map((h) => {
              const Icon = h.icon
              return (
                <div
                  key={h.id}
                  className="group bg-white rounded-3xl p-7 border border-gold/10 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 transform transition-all duration-300 flex gap-5"
                >
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-gold to-orange flex items-center justify-center text-white group-hover:scale-110 transform transition-transform duration-300">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">
                      {h.name}
                    </h3>
                    <p className="flex items-center gap-1 text-gold text-xs font-medium mb-2">
                      <MapPin size={12} /> {h.location}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{h.specialty}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Health Camps */}
      <section id="camps" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Free for All
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              Upcoming <span className="text-gold">Health Camps</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              All camps are completely free of charge. No appointment needed
              &mdash; just bring a government-issued ID and arrive before noon.
            </p>
          </div>

          {/* Table — responsive card style on mobile */}
          <div className="overflow-x-auto rounded-3xl border border-gold/10 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gold to-orange text-white">
                  <th className="text-left px-6 py-4 font-semibold rounded-tl-3xl">Date</th>
                  <th className="text-left px-6 py-4 font-semibold">Location</th>
                  <th className="text-left px-6 py-4 font-semibold">Services Offered</th>
                  <th className="text-left px-6 py-4 font-semibold rounded-tr-3xl">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {upcomingCamps.map((camp, i) => (
                  <tr
                    key={camp.date}
                    className={`${
                      i % 2 === 0 ? 'bg-amber-50/50' : 'bg-white'
                    } hover:bg-gold/5 transition-colors duration-150`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-gold font-semibold">{camp.day}</span>
                        <span>{camp.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="flex items-start gap-1.5">
                        <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                        <span>{camp.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{camp.services}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 bg-gold/10 text-gold border border-gold/20 text-xs font-semibold px-3 py-1 rounded-full">
                        <Users size={12} /> {camp.slots}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-center text-xs text-gray-500">
            Camp schedules are subject to change. Follow our social media or call{' '}
            <span className="text-gold font-medium">+91-9876543210</span> for
            latest updates.
          </p>
        </div>
      </section>

      {/* Medicine Donation */}
      <section id="donate-medicines" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                Make a Difference
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-5">
                Donate <span className="text-gold">Medicines</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unused, non-expired medicines you have at home could save a life.
                AWF collects, verifies, and redistributes donated medicines
                through its health camps and partner clinics.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Medicines should have a minimum of 3 months remaining before the
                expiry date. Drop them at any AWF district office or arrange a
                pickup by calling our helpline.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-7 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Arrange a Pickup <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gold/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gold flex items-center justify-center text-white">
                  <Package size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  Currently Needed
                </h3>
              </div>
              <ul className="space-y-3">
                {donationItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nursing College / Education */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-gold/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '200+', label: 'Nursing Students Supported' },
                    { num: '3', label: 'Partner Colleges' },
                    { num: '85%', label: 'Placement Rate' },
                    { num: '40+', label: 'Trained Nurses Deployed' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white rounded-2xl p-5 text-center border border-gold/10 shadow-sm"
                    >
                      <p className="font-heading font-bold text-3xl text-gold">{s.num}</p>
                      <p className="text-gray-600 text-xs mt-1 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                Building Capacity
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-5">
                Nursing <span className="text-gold">Education Support</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                AWF believes that investing in healthcare workers is as important
                as treating patients. Through scholarships and partnerships with
                nursing institutions in Lucknow, Agra, and Varanasi, AWF
                sponsors nursing education for women from low-income households.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Graduates are preferentially placed at AWF-partnered hospitals
                and community clinics, ensuring the talent pipeline flows back
                into underserved regions.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Full or partial tuition scholarships for ANM &amp; GNM courses',
                  'Free hostel accommodation during training',
                  'Stipend for clinical internship period',
                  'Job placement support after certification',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <Clock size={16} className="text-gold flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-7 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Enquire About Nursing Scholarships <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-gold to-orange py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <GraduationCap size={40} className="mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
            Health is a Right, Not a Privilege
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Support AWF&apos;s health mission. Your donation funds a camp, equips a
            nurse, or puts medicine in the hands of someone who needs it today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 bg-white text-gold font-bold px-10 py-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg text-lg"
            >
              Donate Now <ArrowRight size={20} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:text-gold transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
