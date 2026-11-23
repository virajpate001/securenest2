// src/app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Vehicle Insurance Blog & Guides",
  description:
    "Practical guides on No Claim Bonus transfers, commercial vehicle insurance rules, new car insurance savings, and fast policy renewals.",
};

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-2xl mb-12">
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Knowledge Center
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Vehicle Insurance Guides &amp; Tips
        </h1>
        <p className="mt-3 text-slate-600">
          Straightforward articles to help you save on premiums, choose the right add-ons, and avoid claim rejections.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition flex flex-col"
          >
            <Link href={`/blog/${post.slug}`} className="relative h-48 w-full block overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </Link>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-blue-700 inline-flex items-center gap-1 hover:underline"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}