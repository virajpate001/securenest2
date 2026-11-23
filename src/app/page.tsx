// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { insuranceProducts } from "@/data/insurance-products";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-600/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              100% Digital &bull; Instant Policy Copy
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Smarter Vehicle Insurance for Every Road Ahead
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              From two-wheelers and family cars to heavy commercial fleets—compare plans, renew in minutes, and claim without stress.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-a-quote"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition"
              >
                Get Instant Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/insurance/vehicle-insurance-renewal"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-lg font-semibold transition"
              >
                Renew Policy
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cashless Garages</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 Claim Support</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Hidden Fees</span>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <Image
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
              alt="Modern vehicle driving on a highway"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Insurance Categories Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Choose Your Coverage</h2>
          <p className="mt-2 text-slate-600">Comprehensive plans tailored for personal and commercial vehicles.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/insurance/${product.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition flex flex-col"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={product.heroImage}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">{product.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 flex-grow">{product.shortDesc}</p>
                <span className="mt-4 text-sm font-semibold text-blue-700 inline-flex items-center gap-1">
                  Explore Plan <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}