import { Wrench, ShieldCheck, Activity, Clock, Settings, Gauge } from 'lucide-react'

const services = [
  {
    title: 'Valve Repair & Overhaul',
    desc: 'Complete teardown, machining, reassembly, and testing for gate, globe, ball, butterfly, and control valves.',
    icon: Wrench,
    bullets: ['OEM-spec tolerances', 'Material verification', 'Final torque & witness'],
  },
  {
    title: 'Pressure & Leak Testing',
    desc: 'Hydrostatic and pneumatic testing with certified equipment and digital reports for traceability.',
    icon: Gauge,
    bullets: ['Hydrostatic / pneumatic', 'Seat & shell tests', 'Digital certificates'],
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Planned maintenance programs to extend service life and reduce unplanned downtime.',
    icon: Activity,
    bullets: ['Lubrication & packing', 'Calibration & tuning', 'Asset condition reports'],
  },
  {
    title: 'Emergency Field Service',
    desc: 'Rapid mobilization for onsite repair, troubleshooting, and commissioning 24/7.',
    icon: Clock,
    bullets: ['24/7 dispatch', 'Rapid diagnosis', 'Safety-first procedures'],
  },
  {
    title: 'Actuator Service',
    desc: 'Electrical, pneumatic, and hydraulic actuator repair, calibration, and tuning.',
    icon: Settings,
    bullets: ['Electrical / pneumatic / hydraulic', 'Calibration & stroking', 'Positioner setup'],
  },
  {
    title: 'Instrumentation Support',
    desc: 'Positioners, limit switches, and instrumentation setup for precise control.',
    icon: ShieldCheck,
    bullets: ['Loop checks', 'I/O verification', 'Compliance-ready docs'],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(13,32,64,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(249,162,26,0.10),transparent_40%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0D2040]/5 text-[#0D2040] px-3 py-1 text-xs font-semibold">
            Capabilities
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#0D2040]">
            End-to-end industrial valve services
          </h2>
          <p className="mt-3 text-[#5A6675] md:text-lg">
            Built for uptime-critical operations with documented quality, safety, and traceability.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="group relative rounded-2xl bg-white/50 supports-[backdrop-filter]:bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_1px_0_rgba(255,255,255,0.6),0_20px_40px_-20px_rgba(13,32,64,0.35)] p-6 transition hover:shadow-[0_1px_0_rgba(255,255,255,0.6),0_30px_60px_-24px_rgba(13,32,64,0.45)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[#0D2040]/10 text-[#0D2040] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0D2040]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#5A6675]">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-[#5A6675]">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F9A21A]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[#0D2040]">
                      Request service →
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
