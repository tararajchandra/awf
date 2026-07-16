export default function AboutSection() {
  return (
    <section id="about-us" className="bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-gold font-semibold uppercase tracking-[0.3em] mb-4">
            About AWF
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6">
            Compassion in Action for Every Community
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Anokha Welfare Foundation brings care, education, and medical support to underserved communities across the region. We build trust through transparency, long-term support, and empowering every member of the community.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <p className="text-3xl font-heading font-bold text-gray-900">250+</p>
              <p className="mt-2 text-gray-600">Lives Supported Yearly</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <p className="text-3xl font-heading font-bold text-gray-900">120+</p>
              <p className="mt-2 text-gray-600">Education Scholarships</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-gray-200">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Our Approach
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="space-y-2">
              <p className="font-semibold">Community-led programs</p>
              <p className="text-sm">We partner with local leaders to deliver culturally informed support.</p>
            </li>
            <li className="space-y-2">
              <p className="font-semibold">Sustainable care</p>
              <p className="text-sm">Our initiatives focus on lasting benefits, not temporary fixes.</p>
            </li>
            <li className="space-y-2">
              <p className="font-semibold">Open reporting</p>
              <p className="text-sm">Every contribution is tracked and shared with our members.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
