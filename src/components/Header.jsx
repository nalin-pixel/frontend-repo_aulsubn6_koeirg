import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Testing', href: '#testing' },
  { label: 'Emergency', href: '#emergency' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#0D2040] flex items-center justify-center text-white font-bold">G</div>
            <span className="font-semibold text-[#0D2040] tracking-tight">GVM Engineering</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#5A6675] hover:text-[#0D2040] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#0D2040] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition"
            >
              Request Service
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-[#0D2040]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#0D2040]/90 hover:text-[#0D2040]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0D2040] text-white px-4 py-2 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Request Service
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
