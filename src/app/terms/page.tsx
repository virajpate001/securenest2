// src/app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of SafeDrive Insurance website and quote services.",
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-8 text-slate-700 leading-relaxed">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: November 2026</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
        <p>
          By accessing or using SafeDrive Insurance (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Accuracy of Submitted Information</h2>
        <p>
          Insurance quotes and policy terms depend directly on the accuracy of the details you provide, including vehicle registration number, previous policy expiry date, claim history, and No Claim Bonus (NCB) percentage. Providing inaccurate information may lead to premium recalculation or claim denial by the insurer.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Policy Issuance &amp; Underwriting</h2>
        <p>
          Final policy issuance, Insured Declared Value (IDV), coverage endorsements, and claim settlements are governed exclusively by the respective underwriting insurance company&apos;s policy wordings and applicable regulatory guidelines.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
        <p>
          While we strive to keep all information accurate and up to date, SafeDrive Insurance is not liable for indirect or consequential damages arising from temporary website downtime, third-party insurer underwriting decisions, or delays outside our control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of Mumbai, Maharashtra.
        </p>
      </section>
    </article>
  );
}