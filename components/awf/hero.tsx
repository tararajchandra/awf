'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-gray-100 to-cream flex items-center justify-center overflow-hidden">
      {/* Animated Polygon Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full mesh-bg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="#D4D4D4" strokeWidth="2" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#mesh)" />
          <circle cx="200" cy="150" r="80" fill="#E0D4C8" opacity="0.2" />
          <circle cx="1000" cy="600" r="100" fill="#C87000" opacity="0.1" />
          <circle cx="600" cy="700" r="60" fill="#E05A00" opacity="0.1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Logo Image */}
        <div className="flex justify-center mb-4">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-full shadow-2xl border-4 border-gold flex items-center justify-center overflow-hidden">
             <Image src="/logo.jpeg" alt="AWF Logo" fill className="object-contain scale-[1.3] brightness-[1.1] contrast-[1.05]" priority />
          </div>
        </div>
        {/* Logo */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-gold via-orange to-gold bg-clip-text text-transparent">
            AWF
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-heading text-gray-800 mb-8 italic leading-relaxed">
          Empowering Those in Need. Trusted for Truth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#membership"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Become a Member
          </a>
          <a
            href="#donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange text-white font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Direct Donation
          </a>
        </div>
      </div>
    </section>
  )
}
