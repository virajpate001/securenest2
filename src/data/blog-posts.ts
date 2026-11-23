// src/data/blog-posts.ts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-transfer-no-claim-bonus",
    title: "How to Transfer Your No Claim Bonus (NCB) When Switching Insurers",
    excerpt:
      "Your No Claim Bonus belongs to you—not your vehicle or old insurer. Learn how to keep up to 50% off your own-damage premium.",
    category: "Renewal Tips",
    publishedAt: "2026-10-18",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "What is No Claim Bonus (NCB)?",
        body: "No Claim Bonus is a reward offered by insurers for every claim-free policy year. It starts at 20% after the first claim-free year and scales up to 50% after five consecutive claim-free years, applying directly to the Own Damage (OD) portion of your premium.",
      },
      {
        heading: "Switching Insurers Without Losing NCB",
        body: "When renewing with a new insurer, simply declare your previous NCB slab and upload your expiring policy copy. The new insurer verifies it with your previous provider and applies the discount immediately.",
      },
      {
        heading: "Transferring NCB to a Brand-New Vehicle",
        body: "If you sell your old vehicle, request an NCB Retention Letter from your current insurer using Form 29/30 and the delivery note. That certificate remains valid for 3 years and can be applied to your new car or two-wheeler.",
      },
    ],
  },
  {
    slug: "lmv-lgv-lpv-hgv-insurance-explained",
    title: "LMV, LGV, LPV & HGV Insurance Explained for Commercial Owners",
    excerpt:
      "Choosing the wrong commercial vehicle category can lead to claim rejection. Here is a quick breakdown of RTO classifications and coverage.",
    category: "Commercial",
    publishedAt: "2026-10-29",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Why Vehicle Classification Matters",
        body: "Commercial policies are underwritten strictly based on Gross Vehicle Weight (GVW) and usage type—goods carrying versus passenger carrying. Selecting the wrong class on your policy can void coverage during an accident.",
      },
      {
        heading: "LMV vs. LGV vs. LPV",
        body: "Light Motor Vehicles (LMV) cover standard utility vehicles under 7,500 kg GVW. Light Goods Vehicles (LGV) specifically insure pickup trucks and delivery vans carrying cargo, while Light Passenger Vehicles (LPV) cover commercial cabs, taxis, and tourist vans carrying paying passengers.",
      },
      {
        heading: "Heavy Goods Vehicles (HGV)",
        body: "Multi-axle trucks, trailers, tippers, and tankers exceeding 12,000 kg GVW fall under HGV insurance. Always consider adding IMT-23 (covering lamps, tyres, mudguards, and bumpers) and paid driver/cleaner liability to avoid out-of-pocket repair bills.",
      },
    ],
  },
  {
    slug: "save-money-on-new-vehicle-insurance",
    title: "Why You Should Compare New Vehicle Insurance Before Showroom Delivery",
    excerpt:
      "Dealers often quote bundled insurance at a 30–40% markup. Buying your own policy before registration is legal and saves thousands.",
    category: "New Vehicles",
    publishedAt: "2026-11-05",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "You Are Not Required to Buy From the Dealer",
        body: "Under Indian regulations, vehicle buyers are completely free to purchase insurance from any IRDAI-approved insurer. You only need to share the chassis number, engine number, and ex-showroom invoice value to generate a cover note for RTO registration.",
      },
      {
        heading: "Essential Add-Ons for Brand-New Vehicles",
        body: "When buying a new car or bike, prioritize Zero Depreciation (Bumper-to-Bumper), Return to Invoice (RTI), Engine Protection, and Roadside Assistance. Even with all four add-ons, independent quotes are typically much lower than showroom packages.",
      },
    ],
  },
  {
    slug: "renew-expired-vehicle-insurance-online",
    title: "How to Renew an Expired Vehicle Insurance Policy in Minutes",
    excerpt:
      "Missed your renewal date? Follow this step-by-step guide to complete a quick video self-inspection and restore full coverage.",
    category: "Guides",
    publishedAt: "2026-11-14",
    readTime: "3 min read",
    coverImage:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Act Within the 90-Day NCB Window",
        body: "If your comprehensive policy has lapsed, you have up to 90 days from the expiry date to renew without losing your accumulated No Claim Bonus. After 90 days, your NCB resets to 0%.",
      },
      {
        heading: "Fast Digital Inspection",
        body: "For expired comprehensive policies, insurers require a brief inspection to confirm there is no pre-existing damage. Most providers now offer a 2-minute smartphone video self-inspection link, allowing your policy PDF to be issued the same day.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}