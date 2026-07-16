import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Anokha Welfare Foundation',
  description: 'Our commitment to protecting your privacy and data security.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-heading font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Anokha Welfare Foundation (AWF) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, postal address, and donation information.</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on pages.</li>
              <li><strong>Membership Information:</strong> Account credentials and membership tier details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>AWF uses the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Processing donations and membership registrations</li>
              <li>Sending updates about our programs and impact</li>
              <li>Improving our website and user experience</li>
              <li>Communicating with you regarding inquiries or support</li>
              <li>Complying with legal obligations and NGO regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">5. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners only when necessary to deliver our services (e.g., payment processors). All partners are bound by confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Unsubscribe from communications</li>
              <li>Opt-out of data collection for analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience. By using our site, you consent to our use of cookies. You can disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p>
              AWF reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> contact@anokhawelfare.org<br />
              <strong>Phone:</strong> +91 98765 43210
            </p>
          </section>

          <div className="border-t border-gray-300 pt-6 mt-8">
            <p className="text-gray-600 text-sm">
              Last updated: May 4, 2026. Effective date: May 1, 2026.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/" className="inline-block bg-gold text-white font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition">
            Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
