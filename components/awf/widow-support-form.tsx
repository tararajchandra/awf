'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle,
  Phone,
  MapPin,
  User,
  Send,
  Loader2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const districts = [
  'Lucknow', 'Agra', 'Varanasi', 'Kanpur', 'Prayagraj',
  'Mathura', 'Aligarh', 'Moradabad', 'Gorakhpur', 'Other',
]

export default function WidowSupportForm() {
  const [form, setForm] = useState({ name: '', mobile: '', district: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((res) => setTimeout(res, 1500))
    setStatus('success')
  }

  return (
    <section id="apply-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <Sparkles size={28} className="text-gold mx-auto mb-3" />
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-3">
            Apply for Support
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Fill in your basic details and our field team will reach out within
            48 hours to guide you through the full process.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white/10 border border-gold/30 rounded-3xl p-10 text-center">
            <CheckCircle size={48} className="text-gold mx-auto mb-4" />
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              Application Received!
            </h3>
            <p className="text-gray-300">
              Our team will contact you within 48 hours on the mobile number
              provided. Thank you for trusting AWF.
            </p>
          </div>
        ) : (
          <form
            id="widow-support-application-form"
            onSubmit={handleSubmit}
            className="bg-white/5 border border-gold/20 rounded-3xl p-8 sm:p-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="ws-name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name *
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                />
                <input
                  id="ws-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Sita Devi"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label
                htmlFor="ws-mobile"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mobile Number *
              </label>
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                />
                <input
                  id="ws-mobile"
                  type="tel"
                  required
                  pattern="[6-9][0-9]{9}"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="9876543210"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                />
              </div>
            </div>

            {/* District */}
            <div>
              <label
                htmlFor="ws-district"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                District *
              </label>
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                />
                <select
                  id="ws-district"
                  required
                  value={form.district}
                  onChange={(e) => setForm({ ...form, district: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition appearance-none"
                >
                  <option value="" className="bg-gray-900">Select your district</option>
                  {districts.map((d) => (
                    <option key={d} value={d} className="bg-gray-900">{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-orange text-white font-semibold py-4 rounded-xl hover:scale-[1.02] transform transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Submitting&hellip;
                </>
              ) : (
                <>
                  Submit Application <Send size={18} />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-500">
              Your information is kept strictly confidential and used only for
              AWF programme coordination.
            </p>
          </form>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/#donate"
            className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-7 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300 text-sm"
          >
            Donate to the Widow Support Fund <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
