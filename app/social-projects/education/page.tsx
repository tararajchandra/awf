import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap,
  BookOpen,
  Library,
  Users,
  School,
  Award,
  Lightbulb,
  ArrowRight,
  ChevronLeft,
  Sparkles,
  Star,
  Clock,
} from 'lucide-react'
import Footer from '@/components/awf/footer'

export const metadata: Metadata = {
  title: 'Education for Children | Anokha Welfare Foundation',
  description:
    'AWF\u2019s Education programme supports 500+ underprivileged children with scholarships, libraries, book drives and after-school mentoring across Uttar Pradesh.',
  keywords: [
    'AWF education',
    'scholarship NGO India',
    'education for children UP',
    'book donation drive',
    'after school support NGO',
    'Anokha Welfare Foundation',
  ],
  openGraph: {
    title: 'Education for Children | Anokha Welfare Foundation',
    description:
      'Scholarships, libraries, and mentoring for 500+ underprivileged children across Uttar Pradesh.',
    url: 'https://anokhawelfare.org/social-projects/education',
  },
}

const stats = [
  { icon: Users, num: '500+', label: 'Students Supported' },
  { icon: School, num: '12', label: 'Partner Schools' },
  { icon: Award, num: '80+', label: 'Scholarships Awarded' },
  { icon: Library, num: '3', label: 'Community Libraries' },
]

const programs = [
  {
    id: 'scholarship',
    icon: Award,
    title: 'Scholarship Programme',
    description:
      'Merit-cum-need scholarships covering school fees, uniforms, stationery, and examination costs for students from Class 1 through graduation. Recipients are selected through a transparent process with community oversight.',
    tag: 'Flagship',
    color: 'bg-gold',
  },
  {
    id: 'books',
    icon: BookOpen,
    title: 'Book Donation Drive',
    description:
      'Annual collection of gently used textbooks, notebooks, and reference materials distributed free of cost before each academic year. Last drive collected over 8,000 books across 12 schools.',
    tag: 'Annual',
    color: 'bg-orange',
  },
  {
    id: 'library',
    icon: Library,
    title: 'Community Library Portal',
    description:
      'Three fully stocked libraries in Lucknow, Agra, and Varanasi serving as safe study hubs. Open 6 days a week with curated sections for children, science, and vernacular literature.',
    tag: 'Always Open',
    color: 'bg-gold',
  },
  {
    id: 'afterschool',
    icon: Lightbulb,
    title: 'After-School Support',
    description:
      'Volunteer tutors and retired teachers provide free evening coaching in Maths, Science, and English for Classes 5\u201310, helping students catch up and build confidence.',
    tag: 'Every Weekday',
    color: 'bg-orange',
  },
]

export default function EducationPage() {
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
            <GraduationCap size={40} className="text-gold" strokeWidth={1.5} />
          </div>

          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
            <Sparkles size={16} className="text-gold" />
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">
              AWF Social Projects
            </span>
            <Sparkles size={16} className="text-gold" />
          </div>

          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Education for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Children
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200">
            Education is the most powerful passport out of poverty. AWF removes
            every barrier standing between a child and their dream &mdash;
            financially, academically, and emotionally.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
            <Link
              href="#apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Apply for Scholarship <ArrowRight size={18} />
            </Link>
            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              Fund an Education
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Our Programmes
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              How We <span className="text-gold">Educate</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              AWF&apos;s education initiatives are multi-layered &mdash; targeting
              financial, material, and academic barriers simultaneously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((prog) => {
              const Icon = prog.icon
              return (
                <div
                  key={prog.id}
                  className="group bg-white rounded-3xl p-8 border border-gold/10 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10 transform transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-2xl ${prog.color} text-white group-hover:scale-110 transform transition-transform duration-300`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-xl text-gray-900">{prog.title}</h3>
                        <span className="bg-gold/10 text-gold text-xs font-semibold px-2 py-0.5 rounded-full border border-gold/20">
                          {prog.tag}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{prog.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Bright Futures
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900">
              Student <span className="text-gold">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Sharma, 17',
                loc: 'Lucknow',
                quote: 'The AWF scholarship paid my Class 12 fees. I scored 94% and am now pursuing Science in college. I want to become a doctor.',
                year: 'Scholarship Recipient 2023',
              },
              {
                name: 'Rahul Verma, 14',
                loc: 'Agra',
                quote: 'The after-school maths coaching helped me go from failing to topping my class. My teacher says I have a gift for numbers.',
                year: 'After-School Tutee 2024',
              },
              {
                name: 'Sunita Yadav, 15',
                loc: 'Varanasi',
                quote: 'I borrowed 40 books from the AWF library last year. Reading opened my mind. I now write short stories and want to be a journalist.',
                year: 'Library Regular Since 2022',
              },
            ].map((s) => (
              <blockquote
                key={s.name}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-7 border border-gold/10"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed mb-5">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gold to-orange flex items-center justify-center text-white font-heading font-bold">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
                    <p className="text-gold text-xs">{s.loc} &bull; {s.year}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Apply for Scholarship CTA */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gold/20 border border-gold/30 mx-auto mb-6">
            <Clock size={30} className="text-gold" strokeWidth={1.5} />
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Apply for a Scholarship
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Applications are open every April and September. Students from
            Classes 6 to 12 studying in government or aided schools in Uttar
            Pradesh are eligible to apply.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Required documents: school ID, income certificate, last year&apos;s
            marksheet, and a guardian&apos;s Aadhaar copy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Contact Us to Apply <ArrowRight size={18} />
            </Link>
            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              Fund a Scholarship
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
