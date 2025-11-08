import Header from './components/Header'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Header />
      <main>
        <Hero />

        {/* Subtle background section to showcase glass cards */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D2040]/5 via-white to-white pointer-events-none" />
          <div className="relative">
            <ServicesGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
