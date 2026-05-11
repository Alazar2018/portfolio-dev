import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: "Alazar Tilahun | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 4+ years of experience building scalable fintech systems. Specialized in Java/Spring Boot, Next.js/React, and payment integrations. Available for freelance.",
  keywords: [
    "Alazar Tilahun",
    "full-stack developer",
    "software engineer",
    "Spring Boot",
    "React",
    "Next.js",
    "Java",
    "fintech developer",
    "freelance developer Ethiopia",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Alazar Tilahun | Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer building scalable fintech systems and web applications. Available for freelance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
