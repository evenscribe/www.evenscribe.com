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
  openGraph: {
    siteName: "Evenscribe - Tame your software logs",
    type: "website",
    locale: "en_US",
  },
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
};

const LDJSON = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Evenscribe",
  alternateName: "Evenscribe Observatory",
  url: "https://www.evenscribe.com",
  logo: "https://www.evenscribe.com/hourglass.png",
  sameAs: [
    "https://www.x.com/evenscribe",
    "https://www.instagram.com/evenscribe",
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
          <div className="block dark:hidden absolute inset-0 -z-100 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
          <div className="hidden dark:block absolute top-0 -z-100 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
