// src/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "SafeDrive Insurance | Fast Vehicle & Commercial Insurance",
    template: "%s | SafeDrive Insurance",
  },
  description:
    "Instant quotes and hassle-free renewals for two-wheeler, four-wheeler, commercial, LMV, LGV, LPV, and HGV vehicle insurance.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SafeDrive Insurance",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-slate-50 text-slate-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}