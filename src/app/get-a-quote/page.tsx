// src/app/get-a-quote/page.tsx
import type { Metadata } from "next";
import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Vehicle Insurance Quote",
  description:
    "Request an instant, zero-obligation insurance quote for your two-wheeler, car, or commercial vehicle.",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function GetAQuotePage({ searchParams }: PageProps) {
  const { type } = await searchParams;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Value Props */}
        <div className="lg:col-span-5 space-y-6">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            Free &bull; Instant Comparison
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Get Your Custom Vehicle Insurance Quote
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Share your vehicle details once and let our specialists find the best IDV, add-ons, and No Claim Bonus discounts from top insurers.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-slate-900">Callback Within 15 Minutes</h2>
                <p className="text-sm text-slate-600">
                  Receive side-by-side quotes directly on WhatsApp or phone.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-slate-900">100% Transparent Pricing</h2>
                <p className="text-sm text-slate-600">
                  No hidden brokerage fees or inflated showroom markups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-slate-900">End-to-End Claim Assistance</h2>
                <p className="text-sm text-slate-600">
                  Dedicated support from policy issuance through cashless claim settlement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quote Form */}
        <div className="lg:col-span-7">
          <QuoteForm defaultType={type} />
        </div>
      </div>
    </section>
  );
}