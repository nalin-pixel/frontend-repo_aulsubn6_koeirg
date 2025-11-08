export default function CTABanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl border border-gray-100 p-8 md:p-12 overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2040]/5 to-transparent pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0D2040]">Need urgent support?</h3>
              <p className="mt-2 text-[#5A6675]">Our emergency field teams are on call 24/7 to get you back online safely.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#contact" className="inline-flex items-center rounded-full bg-[#F9A21A] text-[#0D2040] px-6 py-3 text-sm font-semibold shadow-sm hover:brightness-95 transition">Contact Dispatch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
