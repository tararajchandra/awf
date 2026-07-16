'use client'

import { useState } from 'react'
import { CheckCircle, Send, User, Phone, Mail, ChevronDown, MessageSquare } from 'lucide-react'

type FormData = {
  fullName: string
  mobile: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const SUBJECTS = [
  'General Inquiry',
  'Membership',
  'Donation',
  'Emergency Help',
  'Partnership',
  'Other',
]

const INPUT_BASE =
  'w-full rounded-2xl border bg-white px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all duration-200'
const INPUT_VALID = 'border-gray-200 focus:border-gold focus:ring-gold'
const INPUT_ERROR = 'border-red-400 focus:border-red-500 focus:ring-red-400'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required'
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\s/g, ''))) {
      errs.mobile = 'Enter a valid 10-digit Indian mobile number'
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address'
    }
    if (!formData.subject) errs.subject = 'Please select a subject'
    if (!formData.message.trim()) errs.message = 'Message cannot be empty'
    else if (formData.message.trim().length < 10) errs.message = 'Message must be at least 10 characters'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ fullName: '', mobile: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const handleReset = () => {
    setSubmitted(false)
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-6 shadow-lg">
          <CheckCircle className="text-green-500" size={40} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-2 leading-relaxed">
          Thank you for reaching out to <span className="text-gold font-semibold">Anokha Welfare Foundation</span>.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Our team will get back to you within <strong>24 hours</strong> on your registered email or mobile.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-full hover:bg-orange transition-all duration-300 hover:scale-105 transform shadow-md"
        >
          <Send size={16} />
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="cf-fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Full Name <span className="text-orange">*</span>
        </label>
        <div className="relative">
          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="cf-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className={`${INPUT_BASE} pl-10 ${errors.fullName ? INPUT_ERROR : INPUT_VALID}`}
          />
        </div>
        {errors.fullName && <p className="text-red-500 text-xs mt-1.5">&#9888; {errors.fullName}</p>}
      </div>

      {/* Mobile Number */}
      <div>
        <label htmlFor="cf-mobile" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Mobile Number <span className="text-orange">*</span>
        </label>
        <div className="relative">
          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="cf-mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            maxLength={10}
            className={`${INPUT_BASE} pl-10 ${errors.mobile ? INPUT_ERROR : INPUT_VALID}`}
          />
        </div>
        {errors.mobile && <p className="text-red-500 text-xs mt-1.5">&#9888; {errors.mobile}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-orange">*</span>
        </label>
        <div className="relative">
          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`${INPUT_BASE} pl-10 ${errors.email ? INPUT_ERROR : INPUT_VALID}`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-1.5">&#9888; {errors.email}</p>}
      </div>

      {/* Subject Dropdown */}
      <div>
        <label htmlFor="cf-subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Subject <span className="text-orange">*</span>
        </label>
        <div className="relative">
          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <select
            id="cf-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${INPUT_BASE} appearance-none pr-10 cursor-pointer ${errors.subject ? INPUT_ERROR : INPUT_VALID} ${!formData.subject ? 'text-gray-400' : 'text-gray-800'}`}
          >
            <option value="" disabled>Select a subject</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s} className="text-gray-800">
                {s}
              </option>
            ))}
          </select>
        </div>
        {errors.subject && <p className="text-red-500 text-xs mt-1.5">&#9888; {errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-orange">*</span>
        </label>
        <div className="relative">
          <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you? Describe your query or concern..."
            className={`${INPUT_BASE} pl-10 resize-none ${errors.message ? INPUT_ERROR : INPUT_VALID}`}
          />
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1.5">&#9888; {errors.message}</p>}
        <p className="text-right text-xs text-gray-400 mt-1">{formData.message.length} characters</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gold text-white font-bold py-3.5 px-6 rounded-full hover:bg-orange transition-all duration-300 hover:scale-[1.02] transform shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending&#8230;
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  )
}
