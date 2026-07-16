import { Globe, Leaf, ShieldCheck, Sparkles } from 'lucide-react'

const projects = [
  {
    icon: Globe,
    title: 'Rural Education',
    description: 'Scholarships, school supplies, and tutoring for children in remote communities.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Agriculture',
    description: 'Training and seed support to help families grow food and income locally.',
  },
  {
    icon: ShieldCheck,
    title: 'Health Camps',
    description: 'Mobile clinics, vaccinations, and awareness camps for vulnerable areas.',
  },
  {
    icon: Sparkles,
    title: 'Women Empowerment',
    description: 'Skills workshops and small-business support for women-led households.',
  },
]

export default function SocialProjects() {
  return (
    <section id="social-projects" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold uppercase tracking-[0.3em] mb-3">Social Projects</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900">
            Work that transforms lives
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div key={project.title} className="rounded-[2rem] border border-gray-200 p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
