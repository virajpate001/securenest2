// src/app/disclaimer/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important legal and insurance disclaimers for SafeDrive Insurance.",
};

export default function DisclaimerPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-8 text-slate-700 leading-relaxed">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Disclaimer</h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: November 2026</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">General Information Only</h2>
        <p>
          The content, guides, and coverage summaries published on SafeDrive Insurance are provided for general informational purposes only and do not constitute formal legal, financial, or underwriting advice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">Insurance Subject to Policy Wordings</h2>
        <p>
          Insurance is the subject matter of solicitation. Actual premiums, discounts, No Claim Bonus eligibility, add-on availability, and exclusions vary by insurer, vehicle make/model, registration zone, and inspection outcomes. Always review the official policy schedule and policy wordings before purchasing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">No Guarantee of Claim Approval</h2>
        <p>
          While our team provides end-to-end assistance with claim documentation and garage coordination, final claim approval and settlement amounts are decided solely by the issuing insurance company in accordance with policy terms and IRDAI regulations.
        </p>
      </section>
    </article>
  );
}