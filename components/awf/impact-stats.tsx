export default function ImpactStats() {
  const stats = [
    {
      number: '2,500+',
      label: 'Lives Impacted',
      description: 'Since our founding in 2015',
    },
    {
      number: '450+',
      label: 'Students Supported',
      description: 'Active scholarships and mentoring',
    },
    {
      number: '85%',
      label: 'Success Rate',
      description: 'Scholarship students complete higher education',
    },
    {
      number: '40+',
      label: 'Health Camps',
      description: 'Free medical services annually',
    },
  ]

  return (
    <section className="bg-gradient-to-r from-gold via-orange to-gold text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold">
            Our Impact at a Glance
          </h2>
          <p className="text-white/90 text-lg mt-4">
            Measurable change driven by community trust and member support
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-[1.5rem] bg-white/10 backdrop-blur-md p-8 text-center border border-white/20"
            >
              <p className="text-5xl font-heading font-bold mb-2">{stat.number}</p>
              <p className="font-semibold text-lg mb-2">{stat.label}</p>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
