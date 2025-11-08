import Header from './components/Header'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import FeatureSplits from './components/FeatureSplits'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <FeatureSplits />
        <CTABanner />

        {/* Placeholder sections for the additional pages requested (as anchors) */}
        <section id="testing" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2040]">Testing</h2>
            <p className="mt-3 text-[#5A6675] max-w-2xl">Emphasis on precision and certification: hydrostatic, pneumatic, seat leakage, shell testing with NIST-traceable equipment and digital certificates.</p>
            <div className="mt-8 w-full h-72 bg-gray-100 rounded-xl"></div>
          </div>
        </section>

        <section id="emergency" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2040]">Emergency Services</h2>
                <p className="mt-3 text-[#5A6675]">Rapid response, 24/7 availability, onsite troubleshooting, and temporary restoration to minimize downtime.</p>
                <ul className="mt-4 space-y-2 text-sm text-[#5A6675] list-disc list-inside">
                  <li>Immediate dispatch</li>
                  <li>Safety-first procedures</li>
                  <li>Post-incident reporting</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-[#0D2040] text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition">Call Now</a>
              </div>
              <div className="w-full h-72 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2040]">About GVM Engineering</h2>
              <p className="mt-3 text-[#5A6675]">Our team is built around precision, safety, and accountability. We operate with disciplined processes and modern equipment to support heavy industry facilities.</p>
              <p className="mt-3 text-[#5A6675]">From shop overhaul to onsite repair, we deliver documentation and quality you can trust.</p>
            </div>
            <div className="w-full h-72 bg-gray-100 rounded-xl"></div>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0D2040]">Contact</h2>
                <p className="mt-3 text-[#5A6675]">Tell us about your valve service needs. Our team will respond quickly.</p>
                <form className="mt-6 grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#0D2040]">Name</label>
                    <input className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D2040]/20" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#0D2040]">Email</label>
                    <input type="email" className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D2040]/20" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#0D2040]">Message</label>
                    <textarea rows="4" className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D2040]/20" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="inline-flex items-center rounded-full bg-[#F9A21A] text-[#0D2040] px-6 py-3 text-sm font-semibold shadow-sm hover:brightness-95 transition w-fit">Send Message</button>
                </form>
              </div>
              <div className="w-full h-96 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
