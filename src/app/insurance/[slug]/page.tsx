// src/app/insurance/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getProductBySlug, insuranceProducts } from "@/data/insurance-products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insuranceProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };

  return {
    title: product.title,
    description: product.metaDescription,
    openGraph: {
      title: product.title,
      description: product.metaDescription,
      images: [product.heroImage],
    },
  };
}

export default async function InsuranceDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{product.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{product.metaDescription}</p>

          <ul className="mt-6 space-y-3">
            {product.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href={`/get-a-quote?type=${product.slug}`}
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3.5 rounded-lg transition"
            >
              Get a Free {product.title} Quote
            </Link>
          </div>
        </div>

        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.heroImage}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="mt-14 bg-white p-8 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Available Coverage Options</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {product.coverageTypes.map((type) => (
            <div key={type} className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800">
              {type}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}