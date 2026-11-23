// src/data/insurance-products.ts
export interface InsuranceProduct {
  slug: string;
  title: string;
  shortDesc: string;
  heroImage: string;
  metaDescription: string;
  features: string[];
  coverageTypes: string[];
}

export const insuranceProducts: InsuranceProduct[] = [
  {
    slug: "two-wheeler-insurance",
    title: "Two Wheeler Insurance",
    shortDesc: "Comprehensive and third-party protection for bikes and scooters.",
    heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Get instant two-wheeler insurance quotes with cashless garages and zero-depreciation add-ons.",
    features: ["Instant digital policy issuance", "Zero-depreciation & roadside assistance", "No Claim Bonus (NCB) up to 50%"],
    coverageTypes: ["Third-Party Liability", "Comprehensive Cover", "Own Damage Cover"],
  },
  {
    slug: "three-wheeler-insurance",
    title: "Three Wheeler Insurance",
    shortDesc: "Reliable coverage for auto-rickshaws and commercial three-wheelers.",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Affordable three-wheeler insurance covering passenger liability, theft, and accidental damage.",
    features: ["Passenger & driver personal accident cover", "Quick cashless claim settlement", "Protection against natural calamities"],
    coverageTypes: ["Passenger Carrying 3W", "Goods Carrying 3W", "Third-Party Mandatory"],
  },
  {
    slug: "four-wheeler-insurance",
    title: "Four Wheeler Insurance",
    shortDesc: "Complete car insurance with engine protection and return-to-invoice.",
    heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Compare and buy four-wheeler car insurance online with 24/7 roadside assistance.",
    features: ["Engine & gearbox protection", "Cashless repair across network garages", "24/7 towing & roadside support"],
    coverageTypes: ["Comprehensive Car Policy", "Zero-Dep Bumper-to-Bumper", "Third-Party Only"],
  },
  {
    slug: "commercial-vehicle-insurance",
    title: "Commercial Vehicle Insurance",
    shortDesc: "Tailored fleet and commercial transport insurance for business owners.",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Protect your commercial fleet with comprehensive commercial vehicle insurance.",
    features: ["Fleet discount options", "Legal liability for paid drivers & cleaners", "Minimal business downtime claims"],
    coverageTypes: ["Goods Carrying", "Passenger Carrying", "Miscellaneous Special Vehicles"],
  },
  {
    slug: "lmv-insurance",
    title: "LMV Insurance",
    shortDesc: "Light Motor Vehicle coverage for private and commercial utility vehicles.",
    heroImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Custom Light Motor Vehicle (LMV) insurance with fast online policy renewal.",
    features: ["Covers cabs, jeeps, and utility vans", "Personal accident cover included", "Flexible IDV customization"],
    coverageTypes: ["Private LMV", "Commercial LMV", "Third-Party Legal Liability"],
  },
  {
    slug: "lgv-insurance",
    title: "LGV Insurance",
    shortDesc: "Light Goods Vehicle insurance for pickup trucks and delivery vans.",
    heroImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Protect your pickup trucks and delivery vans with Light Goods Vehicle (LGV) insurance.",
    features: ["Covers accidental damage & transit risks", "IMT-23 add-on for lamps, tyres & bumpers", "Fast surveyor turnaround"],
    coverageTypes: ["Public Carrier LGV", "Private Carrier LGV"],
  },
  {
    slug: "lpv-insurance",
    title: "LPV Insurance",
    shortDesc: "Light Passenger Vehicle policies for taxis, cabs, and tourist vans.",
    heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Light Passenger Vehicle (LPV) insurance for commercial taxis and tour operators.",
    features: ["Mandatory passenger liability compliance", "24/7 highway breakdown support", "Hassle-free permit compliance"],
    coverageTypes: ["Metered Taxis", "Tourist Permit Cabs", "Employee Transport Vans"],
  },
  {
    slug: "hgv-insurance",
    title: "HGV Insurance",
    shortDesc: "Heavy Goods Vehicle protection for trucks, trailers, and tippers.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Heavy Goods Vehicle (HGV) insurance for multi-axle trucks, tippers, and heavy trailers.",
    features: ["High IDV coverage for heavy trucks", "Towing & recovery assistance", "Coverage for electrical & non-electrical accessories"],
    coverageTypes: ["Heavy Trucks", "Trailers & Tippers", "Tankers"],
  },
  {
    slug: "new-vehicle-insurance",
    title: "New Vehicle Insurance",
    shortDesc: "Save up to 40% compared to showroom quotes on brand-new vehicles.",
    heroImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Buy new vehicle insurance directly before delivery and save on showroom markups.",
    features: ["Return to Invoice (RTI) cover", "Long-term 3-year/5-year third-party bundles", "Instant cover note for RTO registration"],
    coverageTypes: ["New Car Bundle", "New Two-Wheeler Bundle", "New Commercial Registration"],
  },
  {
    slug: "vehicle-insurance-renewal",
    title: "Vehicle Insurance Renewal",
    shortDesc: "Renew expiring or lapsed policies in under 2 minutes with NCB protection.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    metaDescription: "Renew your vehicle insurance online without paperwork and retain your No Claim Bonus.",
    features: ["Zero paperwork renewal", "Video self-inspection for expired policies", "Transfer existing NCB seamlessly"],
    coverageTypes: ["On-Time Renewal", "Expired Policy Renewal", "Insurer Switch with NCB"],
  },
];

export function getProductBySlug(slug: string) {
  return insuranceProducts.find((p) => p.slug === slug);
}