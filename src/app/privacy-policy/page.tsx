// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how SafeDrive Insurance collects, uses, and protects your personal and vehicle information.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-8 text-slate-700 leading-relaxed">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: November 2026</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
        <p>
          When you request a vehicle insurance quote or contact our support team, we collect information you voluntarily submit, including your full name, mobile number, email address, vehicle registration number, and selected insurance category.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To calculate and share customized vehicle insurance quotes from partner insurers.</li>
          <li>To assist with policy issuance, renewals, No Claim Bonus transfers, and claim support.</li>
          <li>To contact you via phone, SMS, WhatsApp, or email regarding your quote request.</li>
          <li>To prevent spam, fraud, and unauthorized automated submissions.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Data Sharing &amp; Security</h2>
        <p>
          We do not sell your personal data to third-party marketers. Your vehicle and contact details are shared only with authorized insurance providers strictly for generating quotes and issuing policies. All data transmitted through our website is encrypted via HTTPS.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Your Rights &amp; Contact</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information at any time by emailing{" "}
          <a href="mailto:support@yourdomain.com" className="text-blue-700 hover:underline">
            support@yourdomain.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}