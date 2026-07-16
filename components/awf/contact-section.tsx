'use client'

import { useState } from 'react'

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="contact" className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <p className="text-gold font-semibold uppercase tracking-[0.3em] mb-4">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6">
            Reach AWF leadership and support teams
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Send us a message or connect through our regional offices. We reply to every inquiry within 24 hours.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <p className="font-semibold text-gray-900 mb-2">Email</p>
              <p className="text-gray-600 text-sm">contact@anokhawelfare.org</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <p className="font-semibold text-gray-900 mb-2">Phone</p>
              <p className="text-gray-600 text-sm">+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-gray-200">
          {submitted && (
            <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
              <p className="font-semibold">Thank you! Your message has been sent successfully.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full rounded-2xl border px-4 py-3 focus:ring-2 focus:ring-opacity-20 transition ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-gold'
                }`}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-2xl border px-4 py-3 focus:ring-2 focus:ring-opacity-20 transition ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-gold'
                }`}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help"
                className={`w-full rounded-2xl border px-4 py-3 focus:ring-2 focus:ring-opacity-20 transition ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-gold'
                }`}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold px-6 py-3 text-white font-bold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

