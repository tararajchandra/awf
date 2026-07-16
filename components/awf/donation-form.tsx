'use client'

import { useState } from 'react'
import { ShieldCheck, CreditCard, Lock } from 'lucide-react'

type DonationType = 'emergency' | 'verified' | 'project'

interface DonationFormProps {
  initialType?: DonationType
}

const PRESET_AMOUNTS = [500, 1000, 2000, 5000]

const PROJECT_OPTIONS = [
  { value: 'old-age-home', label: 'Old Age Home' },
  { value: 'education', label: 'Education for Children' },
  { value: 'widow-support', label: 'Widow Support' },
  { value: 'health', label: 'Health & Hospitals' },
  { value: 'water-treatment', label: 'Water Treatment' },
  { value: 'orphanage', label: 'Orphanage' },
]

const TYPE_LABELS: Record<DonationType, { label: string; color: string; ring: string; bg: string }> = {
  emergency: {
    label: 'Emergency Help',
    color: 'text-orange',
    ring: 'ring-orange',
    bg: 'bg-orange/10',
  },
  verified: {
    label: 'ID Verified Donation',
    color: 'text-gold',
    ring: 'ring-gold',
    bg: 'bg-gold/10',
  },
  project: {
    label: 'Project Specific',
    color: 'text-amber-900',
    ring: 'ring-amber-800',
    bg: 'bg-amber-900/10',
  },
}

export default function DonationForm({ initialType = 'verified' }: DonationFormProps) {
  const [donationType, setDonationType] = useState<DonationType>(initialType)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [project, setProject] = useState<string>('')
  const [donorName, setDonorName] = useState<string>('')
  const [pan, setPan] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  const effectiveAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount

  function handleAmountClick(amount: number) {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  function handleCustomAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, '')
    setCustomAmount(val)
    setSelectedAmount(null)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  const { color, ring, bg } = TYPE_LABELS[donationType]

  return (
    <section
      id="donation-form"
      className="bg-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gold/20"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 ${bg} ${color}`}
          >
            {TYPE_LABELS[donationType].label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 leading-tight">
            Complete Your Donation
          </h2>
          <p className="mt-2 text-gray-500 font-body">
            Every rupee you give is tracked, verified, and put to work immediately.
          </p>
        </div>

        {/* Donation Type Tabs */}
        <div className="flex rounded-xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
          {(Object.keys(TYPE_LABELS) as DonationType[]).map((type) => (
            <button
              key={type}
              id={`tab-${type}`}
              type="button"
              onClick={() => setDonationType(type)}
              className={`flex-1 py-3 text-xs sm:text-sm font-semibold font-body transition-all duration-200 ${
                donationType === type
                  ? `${TYPE_LABELS[type].bg} ${TYPE_LABELS[type].color} border-b-2 ${TYPE_LABELS[type].ring}`
                  : 'text-gray-500 hover:bg-cream'
              }`}
            >
              {TYPE_LABELS[type].label}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className={`bg-cream rounded-2xl p-6 sm:p-8 shadow-lg ring-1 ${ring}/30`}
          noValidate
        >
          {/* Preset Amounts */}
          <fieldset className="mb-6">
            <legend className="text-sm font-semibold text-gray-700 mb-3 font-body tracking-wide">
              Choose an Amount
            </legend>
            <div className="grid grid-cols-4 gap-3 mb-3">
              {PRESET_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  id={`amount-${amt}`}
                  onClick={() => handleAmountClick(amt)}
                  className={`py-3 rounded-xl text-sm font-bold font-body transition-all duration-200 border-2 ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-gold text-white border-gold shadow-md scale-105'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gold hover:text-gold'
                  }`}
                >
                  &#8377;{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-bold text-lg select-none">
                &#8377;
              </span>
              <input
                id="custom-amount"
                type="text"
                inputMode="numeric"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full pl-9 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none bg-white font-body text-gray-800 placeholder:text-gray-400 transition-colors"
              />
            </div>
          </fieldset>

          {/* Project Selector */}
          {donationType === 'project' && (
            <div className="mb-5">
              <label
                htmlFor="project-select"
                className="block text-sm font-semibold text-gray-700 mb-2 font-body"
              >
                Select a Project <span className="text-orange">*</span>
              </label>
              <select
                id="project-select"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                required={donationType === 'project'}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none bg-white font-body text-gray-800 transition-colors appearance-none cursor-pointer"
              >
                <option value="">— Choose a project —</option>
                {PROJECT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Donor Name */}
          <div className="mb-5">
            <label
              htmlFor="donor-name"
              className="block text-sm font-semibold text-gray-700 mb-2 font-body"
            >
              Your Name{' '}
              <span className="text-gray-400 font-normal text-xs">(optional)</span>
            </label>
            <input
              id="donor-name"
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none bg-white font-body text-gray-800 placeholder:text-gray-400 transition-colors"
            />
          </div>

          {/* PAN */}
          <div className="mb-5">
            <label
              htmlFor="pan-number"
              className="block text-sm font-semibold text-gray-700 mb-2 font-body"
            >
              PAN Number{' '}
              <span className="text-gray-400 font-normal text-xs">
                (optional &mdash; required for 80G receipt)
              </span>
            </label>
            <input
              id="pan-number"
              type="text"
              placeholder="ABCDE1234F"
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              maxLength={10}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none bg-white font-body text-gray-800 placeholder:text-gray-400 transition-colors uppercase tracking-widest"
            />
            {donationType === 'verified' && (
              <p className="mt-1.5 text-xs text-gold font-body">
                &#127885; You are eligible for an 80G tax exemption certificate.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-7">
            <label
              htmlFor="donor-message"
              className="block text-sm font-semibold text-gray-700 mb-2 font-body"
            >
              Leave a Message{' '}
              <span className="text-gray-400 font-normal text-xs">(optional)</span>
            </label>
            <textarea
              id="donor-message"
              rows={3}
              placeholder="A note of encouragement or dedication..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none bg-white font-body text-gray-800 placeholder:text-gray-400 transition-colors resize-none"
            />
          </div>

          {/* Amount Summary */}
          {effectiveAmount && effectiveAmount > 0 ? (
            <div className="flex items-center justify-between bg-gold/10 border border-gold/30 rounded-xl px-5 py-3 mb-6">
              <span className="text-sm text-gray-600 font-body font-medium">Donation Total</span>
              <span className="text-xl font-heading font-bold text-gold">
                &#8377;{effectiveAmount.toLocaleString('en-IN')}
              </span>
            </div>
          ) : null}

          {/* Proceed to Pay */}
          <button
            id="proceed-to-pay"
            type="submit"
            disabled={!effectiveAmount || effectiveAmount <= 0}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-orange text-white font-heading font-bold text-xl tracking-wide shadow-lg hover:scale-[1.02] hover:shadow-xl transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {submitted
              ? '\u2713 Thank You! Redirecting...'
              : `Proceed to Pay${effectiveAmount && effectiveAmount > 0 ? ` \u20B9${effectiveAmount.toLocaleString('en-IN')}` : ''}`}
          </button>

          {/* Razorpay Badge */}
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-xs font-body">
            <Lock size={12} className="text-gray-400" />
            <span>100% Secured by</span>
            <span className="font-bold text-[#2D9CDB] tracking-tight">Razorpay</span>
            <ShieldCheck size={13} className="text-green-500" />
          </div>
          <div className="flex items-center justify-center gap-4 mt-3">
            <CreditCard size={16} className="text-gray-300" />
            <span className="text-gray-300 text-xs font-body">UPI &middot; Cards &middot; Net Banking &middot; Wallets</span>
          </div>
        </form>
      </div>
    </section>
  )
}
