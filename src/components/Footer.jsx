export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#0D2040] flex items-center justify-center text-white font-bold">G</div>
            <span className="font-semibold text-[#0D2040] tracking-tight">GVM Engineering</span>
          </div>
          <p className="mt-4 text-sm text-[#5A6675] max-w-md">
            Industrial valve repair, testing, maintenance, and emergency field services. Precision-driven reliability for critical operations.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#0D2040]">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#5A6675]">
            <li>Valve Repair & Overhaul</li>
            <li>Pressure & Leak Testing</li>
            <li>Preventive Maintenance</li>
            <li>Emergency Field Service</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#0D2040]">Contact</h4>
          <p className="mt-3 text-sm text-[#5A6675]">Email: service@gvmengineering.com</p>
          <p className="text-sm text-[#5A6675]">Phone: +1 (555) 012-3456</p>
          <p className="text-xs text-[#5A6675] mt-4">© {new Date().getFullYear()} GVM Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
