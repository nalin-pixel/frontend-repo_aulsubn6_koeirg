export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-[#0D2040]/5 text-[#0D2040] px-3 py-1 text-xs font-semibold">Industrial Valve Specialists</span>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-[#0D2040]">
            Precision Valve Repair, Testing, and Emergency Field Service
          </h1>
          <p className="mt-4 text-[#5A6675] text-base md:text-lg max-w-xl">
            We keep your critical systems online with certified technicians, calibrated test equipment, and a quality process built for heavy industry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#0D2040] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition">Request a Quote</a>
            <a href="#services" className="inline-flex items-center rounded-full bg-[#F9A21A] text-[#0D2040] px-5 py-3 text-sm font-semibold shadow-sm hover:brightness-95 transition">Explore Services</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-100 p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#0D2040]">24/7</p>
              <p className="text-xs text-[#5A6675]">Emergency Dispatch</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#0D2040]">ISO</p>
              <p className="text-xs text-[#5A6675]">Quality Standards</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#0D2040]">NIST</p>
              <p className="text-xs text-[#5A6675]">Calibrated Equipment</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-80 md:h-[420px] bg-gray-100 rounded-3xl shadow-sm"></div>
        </div>
      </div>
    </section>
  )
}
