import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[560px] bg-[#0D2040]">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays for contrast and mood (don’t block Spline interaction) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0D2040]/60 via-[#0D2040]/40 to-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 text-xs font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F9A21A]" />
            Industrial Valve Specialists
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Precision Valve Repair, Testing, and Emergency Service
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl">
            Trusted by heavy industry for uptime-critical operations. Certified technicians, calibrated testing, and documentation you can audit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#F9A21A] text-[#0D2040] px-6 py-3 text-sm font-semibold shadow-sm hover:brightness-95 transition">
              Request a Quote
            </a>
            <a href="#deep-dive" className="inline-flex items-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-semibold border border-white/20 backdrop-blur-md hover:bg-white/15 transition">
              Explore Capabilities
            </a>
          </div>

          {/* Credibility glass chips */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: '24/7', v: 'Emergency' },
              { k: 'ISO', v: 'Standards' },
              { k: 'NIST', v: 'Calibrated' },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-white shadow-sm">
                <p className="text-2xl font-semibold">{item.k}</p>
                <p className="text-xs opacity-80">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
