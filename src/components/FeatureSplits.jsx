export default function FeatureSplits() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid gap-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-72 bg-gray-100 rounded-xl"></div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0D2040]">Certified Testing & Documentation</h3>
            <p className="mt-3 text-[#5A6675]">Hydrostatic and pneumatic testing with calibrated gauges and data logging. Receive digital reports and certificates for complete traceability.</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5A6675] list-disc list-inside">
              <li>Hydrostatic up to required pressure classes</li>
              <li>Seat leakage and shell testing</li>
              <li>NIST-traceable instruments</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0D2040]">Emergency Response, 24/7</h3>
            <p className="mt-3 text-[#5A6675]">When downtime is not an option, our field teams mobilize fast with the parts and tools to restore operation safely.</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5A6675] list-disc list-inside">
              <li>Rapid onsite deployment</li>
              <li>Troubleshooting and temporary fixes</li>
              <li>Root-cause analysis and follow-up repair</li>
            </ul>
          </div>
          <div className="w-full h-72 bg-gray-100 rounded-xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-72 bg-gray-100 rounded-xl"></div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0D2040]">Preventive Maintenance Programs</h3>
            <p className="mt-3 text-[#5A6675]">Planned valve inspections, lubrication, packing replacement, and calibration align with your outage schedules and safety protocols.</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5A6675] list-disc list-inside">
              <li>Asset condition reports</li>
              <li>Spare parts recommendations</li>
              <li>Compliance-ready documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
