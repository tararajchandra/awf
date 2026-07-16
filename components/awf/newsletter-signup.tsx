'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-[2rem] bg-white border-2 border-gold p-10 text-center shadow-lg">
        <p className="text-gold font-semibold uppercase tracking-[0.3em] mb-3">Stay Connected</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
          Join our monthly impact newsletter
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Get stories of change, financial transparency reports, and invitations to exclusive member events.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-full border-2 border-gray-300 px-6 py-4 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 text-gray-900"
          />
          <button
            type="submit"
            className="rounded-full bg-gold px-8 py-4 text-white font-bold hover:bg-opacity-90 transition-all duration-200 whitespace-nowrap"
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-6">
          We respect your privacy. Unsubscribe anytime. No spam, ever.
        </p>
      </div>
    </section>
  )
}
