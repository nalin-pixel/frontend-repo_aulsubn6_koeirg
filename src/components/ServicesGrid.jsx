const services = [
  {
    title: 'Valve Repair & Overhaul',
    desc: 'Complete teardown, machining, reassembly, and testing for gate, globe, ball, butterfly, and control valves.',
  },
  {
    title: 'Pressure & Leak Testing',
    desc: 'Hydrostatic and pneumatic testing with certified equipment and digital reports for traceability.',
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Planned maintenance programs to extend service life and reduce unplanned downtime.',
  },
  {
    title: 'Emergency Field Service',
    desc: 'Rapid mobilization technicians for onsite repair, troubleshooting, and commissioning 24/7.',
  },
  {
    title: 'Actuator Service',
    desc: 'Electrical, pneumatic, and hydraulic actuator repair, calibration, and tuning.',
  },
  {
    title: 'Instrumentation Support',
    desc: 'Positioners, limit switches, and instrumentation setup for precise control.',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2040]">Services</h2>
          <p className="mt-3 text-[#5A6675]">Industrial valve services designed for safety, uptime, and compliance.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow transition">
              <h3 className="text-lg font-semibold text-[#0D2040]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#5A6675]">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex text-sm font-semibold text-[#0D2040]">Request service →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
