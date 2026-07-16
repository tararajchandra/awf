import { Home, BookOpen, Heart, Stethoscope } from 'lucide-react'

const services = [
  {
    icon: Home,
    label: 'Old Age Home',
  },
  {
    icon: BookOpen,
    label: 'Education for Children',
  },
  {
    icon: Heart,
    label: 'Widow Donation',
  },
  {
    icon: Stethoscope,
    label: 'Health & Hospitals',
  },
]

export default function ServiceRow() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
              key={index}
              className="flex flex-col items-center justify-center py-8 border-b border-gray-200 last:border-b-0 lg:py-10 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
                {/* Icon */}
                <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-gold to-orange">
                  <Icon size={40} className="text-white" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <p className="text-center text-gray-800 font-semibold text-lg">
                  {service.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
