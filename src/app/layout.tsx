import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://alazar-dev.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fc" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alazar Tilahun | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 5+ years of experience building scalable fintech systems. Specialized in Java/Spring Boot, Next.js/React, and payment integrations. Available for freelance.",
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
    "payment integration",
    "web developer Addis Ababa",
  ],
  authors: [{ name: "Alazar Tilahun", url: siteUrl }],
  creator: "Alazar Tilahun",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Alazar Tilahun | Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer building scalable fintech systems and web applications. Specialized in Java/Spring Boot, Next.js/React, and payment integrations.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Alazar Tilahun — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alazar Tilahun | Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer building scalable fintech systems. Specialized in Java/Spring Boot, Next.js/React, and payment integrations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="65DfB4GsIuHmF2mDqgtbs2VCsvsrzNTSpqwUC_hRJcU" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
