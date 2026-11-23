// src/app/api/quote/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Name is required").max(80),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  vehicleNumber: z.string().min(4, "Valid vehicle registration required").max(15),
  insuranceType: z.string().min(2),
  website: z.string().max(0).optional(), // Honeypot field: must remain empty
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // TODO: Send email via Resend / Nodemailer or save to database (Supabase/MongoDB)
    console.log("Verified Quote Lead:", parsed.data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}