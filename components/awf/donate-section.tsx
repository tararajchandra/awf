export default function DonateSection() {
  return (
    <section id="donate" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-r from-gold via-orange to-gold p-10 text-white shadow-2xl overflow-hidden">
        <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
          <div className="relative z-10">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 opacity-90">
              Donate with confidence
            </p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              Give today and change tomorrow.
            </h2>
            <p className="text-lg leading-relaxed max-w-xl mb-8 opacity-90">
              Every gift helps fund medical aid, education, and emergency relief for families who need it most. Join us with a one-time donation or become a sustaining partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 font-bold px-8 py-4 hover:bg-gray-100 transition"
              >
                Become a Member
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white bg-transparent text-white font-bold px-8 py-4 hover:bg-white hover:text-gray-900 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-md border border-white/20 shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-4">Donation Transparency</h3>
            <ul className="space-y-4 text-white/90 text-sm">
              <li>Funds are allocated directly to field programs and member support.</li>
              <li>Monthly impact reports are shared with every donor.</li>
              <li>100% secure payment processing through trusted partners.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
