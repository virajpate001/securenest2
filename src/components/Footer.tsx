// src/components/Footer.tsx
import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

const personalInsuranceLinks = [
  { label: "Two Wheeler Insurance", href: "/insurance/two-wheeler-insurance" },
  { label: "Three Wheeler Insurance", href: "/insurance/three-wheeler-insurance" },
  { label: "Four Wheeler Insurance", href: "/insurance/four-wheeler-insurance" },
  { label: "New Vehicle Insurance", href: "/insurance/new-vehicle-insurance" },
  { label: "Vehicle Insurance Renewal", href: "/insurance/vehicle-insurance-renewal" },
];

const commercialInsuranceLinks = [
  { label: "Commercial Vehicle Insurance", href: "/insurance/commercial-vehicle-insurance" },
  { label: "LMV Insurance", href: "/insurance/lmv-insurance" },
  { label: "LGV Insurance", href: "/insurance/lgv-insurance" },
  { label: "LPV Insurance", href: "/insurance/lpv-insurance" },
  { label: "HGV Insurance", href: "/insurance/hgv-insurance" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Get a Free Quote", href: "/get-a-quote" },
  { label: "Contact Support", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-white">
              <ShieldCheck className="w-7 h-7 text-blue-500" />
              <span>SafeDrive</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fast, transparent vehicle and commercial insurance solutions. Compare plans, renew online in minutes, and get dedicated claim support.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400 pt-2">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:support@yourdomain.com" className="hover:text-white transition">
                  support@yourdomain.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Personal & Renewal Plans */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Personal &amp; Renewal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {personalInsuranceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Vehicle Plans */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Commercial Insurance
            </h3>
            <ul className="space-y-2.5 text-sm">
              {commercialInsuranceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Quick CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/get-a-quote"
              className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} SafeDrive Insurance. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}