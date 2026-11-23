// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Headphones, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how SafeDrive Insurance simplifies two-wheeler, car, and commercial vehicle insurance with transparent pricing and dedicated claim support.",
};

const highlights = [
  {
    icon: ShieldCheck,
    title: "Transparent Comparisons",
    desc: "Clear breakdowns of IDV, deductibles, and add-ons with zero hidden brokerage markups.",
  },
  {
    icon: Headphones,
    title: "Dedicated Claim Support",
    desc: "We stay with you after policy issuance—helping coordinate cashless garage repairs and documentation.",
  },
  {
    icon: Users,
    title: "Personal & Fleet Specialists",
    desc: "Dedicated advisors for everyday commuters as well as commercial LMV, LGV, LPV, and HGV fleet operators.",
  },
  {
    icon: Award,
    title: "Instant Digital Issuance",
    desc: "Paperless policy generation and fast renewal reminders so you never lose your No Claim Bonus.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              About SafeDrive Insurance
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Making Vehicle Insurance Simple, Honest, and Fast
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Vehicle insurance should protect your finances without burying you in fine print or inflated dealer quotes. SafeDrive Insurance helps individual vehicle owners and commercial transport businesses compare policies, lock in the right coverage, and settle claims smoothly.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you are insuring a brand-new scooter, renewing a family car, or managing a multi-truck HGV fleet, our team ensures you get accurate RTO classification, optimal IDV, and zero-stress renewals.
            </p>
            <div className="mt-8">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
              alt="Customer support advisor reviewing insurance plans"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Drivers &amp; Fleet Owners Trust Us
            </h2>
            <p className="mt-2 text-slate-600">
              Built around speed, clarity, and real human support when you need it most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Have Questions About Your Policy?
        </h2>
        <p className="mt-3 text-slate-600">
          Speak directly with our vehicle insurance specialists for unbiased guidance.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
          <Link
            href="/get-a-quote"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Compare Quotes
          </Link>
        </div>
      </section>
    </div>
  );
}