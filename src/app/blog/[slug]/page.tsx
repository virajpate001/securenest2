// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all articles
      </Link>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
      </header>

      <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden my-8 border border-slate-200">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-2.5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {section.heading}
            </h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      {/* Inline Lead CTA */}
      <div className="mt-12 bg-blue-700 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold">Ready to compare vehicle insurance quotes?</h2>
          <p className="mt-1 text-sm text-blue-100">
            Get a personalized plan for your bike, car, or commercial vehicle in minutes.
          </p>
        </div>
        <Link
          href="/get-a-quote"
          className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-5 py-3 rounded-lg transition text-sm"
        >
          Get Free Quote
        </Link>
      </div>
    </article>
  );
}