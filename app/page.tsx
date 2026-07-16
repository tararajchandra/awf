import Hero from '@/components/awf/hero'
import AboutSection from '@/components/awf/about'
import ImpactStats from '@/components/awf/impact-stats'
import SocialProjects from '@/components/awf/social-projects'
import ServiceRow from '@/components/awf/service-row'
import MembershipCards from '@/components/awf/membership-cards'
import MembershipLogin from '@/components/awf/membership-login'
import Testimonials from '@/components/awf/testimonials'
import DonateSection from '@/components/awf/donate-section'
import FAQ from '@/components/awf/faq'
import NewsletterSignup from '@/components/awf/newsletter-signup'
import ContactSection from '@/components/awf/contact-section'
import Footer from '@/components/awf/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Impact Stats */}
      <ImpactStats />

      {/* Social Projects */}
      <SocialProjects />

      {/* Service Row */}
      <ServiceRow />

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="membership">
        <div className="flex-1">
          {/* Membership Cards */}
          <MembershipCards />
        </div>

        {/* Sidebar Login Widget */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="sticky top-24">
            <MembershipLogin />
          </div>
        </aside>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Donate Section */}
      <DonateSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
