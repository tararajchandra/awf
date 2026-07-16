'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Scholarship Recipient',
    content: 'AWF helped me complete my education when my family couldn\'t afford it. Now I\'m a teacher giving back to my community.',
    avatar: 'RK',
  },
  {
    name: 'Priya Singh',
    role: 'Women Empowerment Program',
    content: 'The skills training transformed my life. I started my own tailoring business and now support my family independently.',
    avatar: 'PS',
  },
  {
    name: 'Dr. Arjun Patel',
    role: 'Health Camp Volunteer',
    content: 'AWF\'s commitment to rural healthcare is inspiring. The transparency and impact are unmatched in the NGO space.',
    avatar: 'AP',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold uppercase tracking-[0.3em] mb-3">Voices of Change</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900">
            Real stories from our community
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-[2rem] p-8 transition-all duration-300 border-2 ${
                activeIndex === index
                  ? 'border-gold bg-gold/5 shadow-lg'
                  : 'border-gray-200 hover:border-gold/50'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
