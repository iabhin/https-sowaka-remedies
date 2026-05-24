import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Great_Vibes } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sowaka-remedies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sowaka Remedies | Ayurvedic Wellness Products",
    template: "%s | Sowaka Remedies",
  },
  description:
    "Discover premium Ayurvedic remedies from Sowaka Remedies. Natural wellness products crafted with ancient wisdom for modern living. Order via WhatsApp.",
  keywords: [
    "Ayurveda",
    "Ayurvedic products",
    "natural wellness",
    "herbal remedies",
    "Sowaka Remedies",
    "holistic health",
  ],
  openGraph: {
    title: "Sowaka Remedies | Ayurvedic Wellness Products",
    description:
      "Premium Ayurvedic remedies for holistic well-being. The name of well-being.",
    url: siteUrl,
    siteName: "Sowaka Remedies",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Sowaka Remedies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sowaka Remedies | Ayurvedic Wellness Products",
    description: "Premium Ayurvedic remedies for holistic well-being.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream font-sans text-forest antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
