import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#bc83e9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evenscribe.com"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Evenscribe - Tame your software logs",
  appleWebApp: {
    title: "Evenscribe - Tame your software logs",
    statusBarStyle: "default",
    capable: true,
  },

  keywords: [
    "Evenscribe",
    "software logs",
    "log management",
    "event data collection",
    "user-friendly logging",
    "intuitive log analysis",
    "database integration",
    "Clickhouse logging",
    "OpenTelemetry logs",
    "log interoperability",
    "AI log summaries",
    "log summaries with AI",
    "customizable logging",
    "logging system setup",
    "logging database configuration",
    "Evenscribe Write Node",
    "language-specific logging client",
    "Typescript logging",
    "JavaScript logging",
    "Go logging client",
    "Rust logging client",
    "log observatory",
    "log analysis interface",
    "early access logging solution",
    "logging infrastructure solution",
    "event log insights",
    "monitor logs",
    "advanced log analysis",
    "streamline workflow with logs",
    "secure logging solution",
    "seamless event data collection",
    "powerful log management tools",
    "flexible database integration",
    "OpenTelemetry compliance",
    "RAG AI log summaries",
    "quick log setup",
    "efficient log monitoring",
    "insightful log analysis",
    "customizable log capture",
    "simple logging configuration",
    "logging client installation",
    "server integration for logs",
    "clear log insights",
    "logging observatory interface",
    "early adopter logging solution",
    "GitHub integration for logging",
    "Twitter updates on Evenscribe",
    "Follow Evenscribe on X",
    "logging data visualization",
    "logging solution progress",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.evensribe.com",
    title: "Effortless Logging Infrastructure | Evenscribe",
    description:
      "Streamline your logging infrastructure with Evenscribe. Follow our easy setup steps, leverage advanced features, and gain insights effortlessly.",
    images: [
      {
        url: "https://www.evenscribe.com/cover.png",
        width: 1200,
        height: 630,
        alt: "evenscribe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effortless Logging Infrastructure | Evenscribe",
    description:
      "Streamline your logging infrastructure with Evenscribe. Follow our easy setup steps, leverage advanced features, and gain insights effortlessly.",
    creator: "@evenscribe",
    site: "@evenscribe",
    images: [
      {
        url: "https://www.evenscribe.com/cover.png",
        width: 1200,
        height: 630,
        alt: "evenscribe",
      },
    ],
  },
  alternates: {
    canonical: "https://www.evenscribe.com",
  },

  icons: [
    {
      url: "https://www.evenscribe.com/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "https://www.evenscribe.com/android-chrome-384x384.png",
      sizes: "384x384",
      type: "image/png",
    },
    {
      url: "https://www.evenscribe.com/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

const LDJSON = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Evenscribe",
  headline: "Effortless Logging Infrastructure",
  description:
    "Streamline your logging infrastructure with Evenscribe. Follow our easy setup steps, leverage advanced features, and gain insights effortlessly.",
  inLanguage: "en-US",
  isFamilyFriendly: "true",
  alternateName: "Evenscribe Logging Infrastructure",
  url: "https://www.evenscribe.com",
  logo: "https://www.evenscribe.com/hourglass.png",
  sameAs: [
    "https://www.x.com/evenscribe",
    "https://www.instagram.com/evenscribe",
    "https://www.github.com/evenscribe",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LDJSON) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
