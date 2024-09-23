import type { Metadata, Viewport } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";


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

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
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
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "Effortless Logging Infrastructure | Evenscribe",
    description:
      "Streamline your logging infrastructure with Evenscribe. Follow our easy setup steps, leverage advanced features, and gain insights effortlessly.",
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
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
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
          GeistSans.variable, GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="relative">
            <div
              className="absolute inset-0 blur-xl h-[580px]"
              style={{
                background:
                  "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
              }}
            ></div>
            <div className="relative">
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
