// src/components/QuoteForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, Lock } from "lucide-react";
import { insuranceProducts } from "@/data/insurance-products";

interface QuoteFormProps {
  defaultType?: string;
}

export default function QuoteForm({ defaultType }: QuoteFormProps) {
  const router = useRouter();

  const validDefault = insuranceProducts.some((p) => p.slug === defaultType)
    ? defaultType!
    : insuranceProducts[0].slug;

  const [formData, setFormData] = useState({
    insuranceType: validDefault,
    fullName: "",
    phone: "",
    vehicleNumber: "",
    website: "", // Honeypot field — must stay empty
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setServerError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicleNumber: formData.vehicleNumber.trim().toUpperCase(),
          phone: formData.phone.replace(/\D/g, ""),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details) {
          setFieldErrors(data.details);
        } else {
          setServerError(data.error || "Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }

      router.push("/thank-you");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"
    >
      {serverError && (
        <div className="flex items-center gap-2.5 p-3.5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Hidden Honeypot Field for Bot Protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      {/* Insurance Category */}
      <div>
        <label htmlFor="insuranceType" className="block text-sm font-semibold text-slate-800 mb-1.5">
          Vehicle Insurance Type
        </label>
        <select
          id="insuranceType"
          name="insuranceType"
          value={formData.insuranceType}
          onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition"
        >
          {insuranceProducts.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.title}
            </option>
          ))}
        </select>
        {fieldErrors.insuranceType && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.insuranceType[0]}</p>
        )}
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-slate-800 mb-1.5">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="e.g. Rahul Sharma"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition"
        />
        {fieldErrors.fullName && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName[0]}</p>
        )}
      </div>

      {/* Mobile Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-1.5">
          Mobile Number
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3.5 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-sm font-medium">
            +91
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            required
            placeholder="9876543210"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
            }
            className="w-full rounded-r-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition"
          />
        </div>
        {fieldErrors.phone && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.phone[0]}</p>
        )}
      </div>

      {/* Vehicle Registration Number */}
      <div>
        <label htmlFor="vehicleNumber" className="block text-sm font-semibold text-slate-800 mb-1.5">
          Vehicle Registration Number
        </label>
        <input
          id="vehicleNumber"
          name="vehicleNumber"
          type="text"
          required
          placeholder="e.g. MH01AB1234 (or NEW for new vehicle)"
          value={formData.vehicleNumber}
          onChange={(e) =>
            setFormData({ ...formData, vehicleNumber: e.target.value.toUpperCase() })
          }
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 text-sm uppercase focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition"
        />
        {fieldErrors.vehicleNumber && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.vehicleNumber[0]}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Generating Your Quote...
          </>
        ) : (
          "Get Free Quote Now"
        )}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
        <Lock className="w-3.5 h-3.5 text-slate-400" />
        Your details are encrypted and never shared with spammers.
      </p>
    </form>
  );
}