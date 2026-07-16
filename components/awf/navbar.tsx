'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, UserCircle } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/social-projects', label: 'Social Projects' },
    { href: '/membership', label: 'Membership' },
    { href: '/donate', label: 'Donate' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 py-2">
              <Image src="/logo.jpeg" alt="AWF Logo" width={80} height={80} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium text-sm transition-all duration-200 pb-1 border-b-2 ${
                  isActive(link.href)
                    ? 'text-gold border-gold'
                    : 'text-gray-700 hover:text-gold border-transparent hover:border-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Login CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/member/dashboard"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:scale-105 transform shadow-sm"
            >
              <UserCircle size={16} />
              Member Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="text-gold hover:text-orange transition-colors p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-cream text-gold font-semibold'
                    : 'text-gray-700 hover:bg-cream hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/member/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 mt-3 w-full justify-center py-3 px-4 bg-gold text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              <UserCircle size={18} />
              Member Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
