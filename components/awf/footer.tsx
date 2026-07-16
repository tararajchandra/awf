import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-gold mb-3">
              AWF
            </h2>
            <p className="text-gray-300 mb-4">
              Anokha Welfare Foundation - Empowering those in need with truth and compassion.
            </p>
            <p className="text-sm text-gray-400">
              Trusted for Truth. Dedicated to service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#social-projects" className="text-gray-300 hover:text-gold transition-colors">
                  Social Projects
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-gold transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-gold">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gold bg-opacity-20 hover:bg-gold hover:bg-opacity-100 p-3 rounded-full transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* NGO Certification Badges */}
        <div className="border-t border-gray-700 pt-12 mb-8">
          <h3 className="text-lg font-heading font-bold mb-6 text-gold text-center">
            Certified & Verified
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-gray-800 p-4 rounded-lg mb-2 inline-block">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-sm text-gray-300">NGO Registered</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-4 rounded-lg mb-2 inline-block">
                <span className="text-2xl">🛡️</span>
              </div>
              <p className="text-sm text-gray-300">ISO Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-4 rounded-lg mb-2 inline-block">
                <span className="text-2xl">⭐</span>
              </div>
              <p className="text-sm text-gray-300">5-Star Rated</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Anokha Welfare Foundation. All rights reserved.
          </p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            {' '} | {' '}
            <a href="/terms-of-service" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
