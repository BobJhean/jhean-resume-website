import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jhean-resume-website.vercel.app";

export const metadata: Metadata = {
  title: "Jhean Lamprecht — The Solutionist",
  description:
    "Senior IT Manager & Digital Transformation Leader. 14+ years turning complex problems into elegant solutions. Embracing change, driving results.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Jhean Lamprecht — The Solutionist",
    description:
      "Senior IT Manager & Digital Transformation Leader. 14+ years turning impossible problems into elegant solutions. I don't fear change — I architect it.",
    url: siteUrl,
    siteName: "Jhean Lamprecht",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 628,
        alt: "Jhean Lamprecht — The Solutionist | Blue Thought Technologies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhean Lamprecht — The Solutionist",
    description:
      "Senior IT Manager & Digital Transformation Leader. 14+ years turning impossible problems into elegant solutions.",
    images: ["/og-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
