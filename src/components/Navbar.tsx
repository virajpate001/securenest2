// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700">
          <ShieldCheck className="w-7 h-7" />
          <span>SafeDrive</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/insurance/two-wheeler-insurance" className="hover:text-blue-700">Two Wheeler</Link>
          <Link href="/insurance/four-wheeler-insurance" className="hover:text-blue-700">Four Wheeler</Link>
          <Link href="/insurance/commercial-vehicle-insurance" className="hover:text-blue-700">Commercial</Link>
          <Link href="/insurance/vehicle-insurance-renewal" className="hover:text-blue-700">Renewal</Link>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <Link href="/about" className="hover:text-blue-700">About</Link>
          <Link
            href="/get-a-quote"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-slate-700"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <Link href="/insurance/two-wheeler-insurance" onClick={() => setIsOpen(false)} className="block py-1">Two Wheeler Insurance</Link>
          <Link href="/insurance/four-wheeler-insurance" onClick={() => setIsOpen(false)} className="block py-1">Four Wheeler Insurance</Link>
          <Link href="/insurance/commercial-vehicle-insurance" onClick={() => setIsOpen(false)} className="block py-1">Commercial Vehicle</Link>
          <Link href="/insurance/vehicle-insurance-renewal" onClick={() => setIsOpen(false)} className="block py-1">Policy Renewal</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-1">Contact</Link>
          <Link
            href="/get-a-quote"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-blue-700 text-white py-2.5 rounded-lg font-medium"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}