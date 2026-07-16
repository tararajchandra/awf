'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How are donations used?',
    answer: 'All donations are allocated directly to our field programs—education scholarships, healthcare camps, and community support. We share monthly impact reports with every donor.',
  },
  {
    question: 'What are the membership benefits?',
    answer: 'Members get voting rights on foundation initiatives, priority access to events, quarterly impact reports, and the satisfaction of supporting sustained change in underserved communities.',
  },
  {
    question: 'Can I volunteer with AWF?',
    answer: 'Yes! We welcome volunteers for health camps, education programs, and administrative support. Contact us at contact@anokhawelfare.org to discuss opportunities.',
  },
  {
    question: 'Is AWF registered as an NGO?',
    answer: 'Yes, AWF is fully registered as an NGO and certified with ISO standards. We maintain complete financial transparency and publish annual reports on our website.',
  },
  {
    question: 'How can I make a regular donation?',
    answer: 'You can set up monthly recurring donations through our membership tiers. Each tier includes quarterly impact updates and recognition in our annual report.',
  },
  {
    question: 'Which regions does AWF operate in?',
    answer: 'We currently operate in 5 states with a focus on rural and semi-urban areas. Each program is led by local coordinators who understand community needs deeply.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold uppercase tracking-[0.3em] mb-3">Frequently Asked</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900">
            Questions & Answers
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[2rem] border-2 border-gray-200 overflow-hidden bg-white transition-all duration-300 hover:border-gold"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-cream transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
