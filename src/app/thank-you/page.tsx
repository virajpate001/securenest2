// src/app/thank-you/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — Quote Request Received",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Quote Request Received!
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Thank you for reaching out. Our insurance advisor is reviewing your vehicle details and will contact you within <strong>15 minutes</strong> during business hours with the best available plans.
        </p>

        {/* Next Steps Box */}
        <div className="mt-8 bg-slate-50 rounded-xl p-5 text-left border border-slate-200 space-y-2.5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">What happens next?</p>
          <p>1. We compare premiums, IDV, and add-ons across leading insurers.</p>
          <p>2. You receive a clear comparison quote via phone or WhatsApp.</p>
          <p>3. Complete payment securely online and get your policy PDF instantly.</p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 rounded-lg transition"
          >
            <Phone className="w-4 h-4 text-blue-700" />
            Call Support Now
          </a>
        </div>
      </div>
    </section>
  );
}