'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Home,
  GraduationCap,
  Heart,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import Footer from '@/components/awf/footer'

// Moved metadata to layout.tsx or removed since this is a client component now.

const projects = [
  {
    id: 'old-age-home',
    icon: Home,
    title: 'Old Age Home',
    description:
      'Providing a safe, dignified, and loving environment for elders who need shelter, medical attention, and community in their golden years.',
    impact: '120+ Residents Supported',
    href: '/social-projects/old-age-home',
    gradient: 'from-amber-50 to-orange-50',
    iconBg: 'bg-gold',
    delay: '',
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education for Children',
    description:
      'Breaking the cycle of poverty through scholarships, book drives, libraries, and after-school mentoring programmes for underprivileged students.',
    impact: '500+ Students Empowered',
    href: '/social-projects/education',
    gradient: 'from-yellow-50 to-amber-50',
    iconBg: 'bg-orange',
    delay: 'animate-delay-100',
  },
  {
    id: 'widow-support',
    icon: Heart,
    title: 'Widow Support Program',
    description:
      'Restoring hope and financial independence for widowed women through livelihood skills, emotional support, and community-led self-help groups.',
    impact: '200+ Beneficiaries Reached',
    href: '/social-projects/widow-support',
    gradient: 'from-rose-50 to-orange-50',
    iconBg: 'bg-gold',
    delay: 'animate-delay-200',
  },
  {
    id: 'health',
    icon: Stethoscope,
    title: 'Health & Hospitals',
    description:
      'Organising free health camps, partnering with hospitals, and enabling medicine donations to bring quality healthcare to remote communities.',
    impact: '50+ Health Camps Conducted',
    href: '/social-projects/health',
    gradient: 'from-green-50 to-amber-50',
    iconBg: 'bg-orange',
    delay: 'animate-delay-300',
  },
]

export default function SocialProjectsPage() {
  const [showReliefModal, setShowReliefModal] = useState(false)
  const [reliefForm, setReliefForm] = useState({ referralMemberId: '', reason: '' })
  const [reliefLoading, setReliefLoading] = useState(false)
  const [reliefMessage, setReliefMessage] = useState({ text: '', type: '' })

  const handleReliefSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setReliefLoading(true)
    setReliefMessage({ text: '', type: '' })

    try {
      const res = await fetch('/api/emergency-relief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reliefForm)
      })
      const data = await res.json()
      
      if (res.ok && data.success) {
        setReliefMessage({ text: 'Your request has been submitted successfully.', type: 'success' })
        setReliefForm({ referralMemberId: '', reason: '' })
        setTimeout(() => {
          setShowReliefModal(false)
          setReliefMessage({ text: '', type: '' })
        }, 3000)
      } else {
        setReliefMessage({ text: data.error || 'Failed to submit request', type: 'error' })
      }
    } catch (error) {
      setReliefMessage({ text: 'An error occurred. Please try again.', type: 'error' })
    } finally {
      setReliefLoading(false)
    }
  }

  return (
    <main className="bg-cream min-h-screen font-body">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="mesh-bg absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold opacity-10 blur-3xl" />
          <div className="mesh-bg absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-orange opacity-10 blur-3xl" />
          <div className="mesh-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-gold opacity-5 blur-2xl" />
        </div>

        <svg
          aria-hidden="true"
          className="absolute right-0 top-0 h-full opacity-5 text-gold"
          viewBox="0 0 400 800"
          fill="currentColor"
        >
          <polygon points="400,0 400,800 200,400" />
          <polygon points="400,0 300,200 350,0" opacity="0.5" />
        </svg>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <Sparkles size={18} className="text-gold" />
            <span className="text-gold font-semibold uppercase tracking-[0.3em] text-sm">
              Anokha Welfare Foundation
            </span>
            <Sparkles size={18} className="text-gold" />
          </div>

          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Our Social{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">
              Projects
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200">
            From sheltering elders to educating tomorrow&apos;s leaders, AWF&apos;s
            flagship programmes are on the ground &mdash; measured, transparent, and
            driven by community trust across Uttar Pradesh and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-gold/40"
            >
              Explore Projects <ArrowRight size={18} />
            </Link>
            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              Donate Now
            </Link>
            <button
              onClick={() => setShowReliefModal(true)}
              className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-red-500/40"
            >
              Request Emergency Relief
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Relief Modal */}
      {showReliefModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setShowReliefModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Emergency Relief</h3>
            <p className="text-gray-600 mb-6 text-sm">Please provide a valid Referral Member ID and your reason for requesting funds.</p>
            
            <form onSubmit={handleReliefSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Referral Member ID *</label>
                <input 
                  type="text"
                  required
                  value={reliefForm.referralMemberId}
                  onChange={e => setReliefForm({...reliefForm, referralMemberId: e.target.value})}
                  placeholder="e.g. AWF-2024-XXXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Fund *</label>
                <textarea 
                  required
                  rows={4}
                  value={reliefForm.reason}
                  onChange={e => setReliefForm({...reliefForm, reason: e.target.value})}
                  placeholder="Please describe the emergency situation..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none"
                />
              </div>
              
              {reliefMessage.text && (
                <div className={`p-3 rounded-lg text-sm font-medium ${reliefMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {reliefMessage.text}
                </div>
              )}

              <button 
                type="submit"
                disabled={reliefLoading}
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition disabled:bg-gray-400"
              >
                {reliefLoading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Stats bar */}
      <section className="bg-gradient-to-r from-gold to-orange py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: '120+', label: 'Elders Cared For' },
            { num: '500+', label: 'Children Educated' },
            { num: '200+', label: 'Widows Supported' },
            { num: '50+', label: 'Health Camps Held' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-3xl sm:text-4xl">{s.num}</p>
              <p className="text-white/80 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project cards 2x2 */}
      <section
        id="projects"
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 leading-tight">
              Four Pillars of{' '}
              <span className="text-gold">Compassionate Action</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Each project is carefully designed, locally managed, and
              independently audited &mdash; so every rupee reaches those who need it
              most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <article
                  key={project.id}
                  className={`group relative rounded-3xl bg-gradient-to-br ${project.gradient} border border-gold/10 p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transform transition-all duration-300 animate-slide-up ${project.delay}`}
                >
                  <div
                    className={`inline-flex items-center justify-center h-16 w-16 rounded-2xl ${project.iconBg} text-white mb-6 shadow-md group-hover:scale-110 transform transition-transform duration-300`}
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-white border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full mb-7 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    {project.impact}
                  </div>

                  <div>
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg transform transition-all duration-300"
                      aria-label={`Learn more about ${project.title}`}
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 h-24 w-24 rounded-br-3xl bg-gold/5"
                  />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles size={32} className="text-gold mx-auto mb-4" />
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Whether you volunteer, donate, or spread the word &mdash; every act of
            kindness ripples outward. Be part of AWF&apos;s story of change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Donate Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
