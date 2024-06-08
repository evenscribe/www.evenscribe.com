import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";
import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import Mockup from "@/components/mockup";
import GetStarted from "@/components/get-started";
import QuickStart from "@/components/quick-start";
import Features from "@/components/features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Effortless Logging Infrastructure | Evenscribe",
  description:
    "Streamline your logging infrastructure with Evenscribe. Follow our easy setup steps, leverage advanced features, and gain insights effortlessly.",
  keywords: [
    "evenscribe",
    "logging infrastructure",
    "log management",
    "easy setup",
    "github sign in",
    "opentelemetry",
    "telemetry",
    "database integration",
    "log analysis",
    "observability",
    "ai",
    "rag ai",
    "log summaries",
    "customizable logging",
  ],
  openGraph: {
    url: "https://www.evensribe.com",
    type: "website",
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
    canonical: "https://evenscribe.com",
  },
};

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Tame your software logs</PageHeaderHeading>
        <PageHeaderDescription>
          Seamlessly collect, search, and make sense of your event data.
          User-friendly and intuitive yet powerful.
        </PageHeaderDescription>
        <PageActions>
          <Link href={siteConfig.links.tally} className={cn(buttonVariants())}>
            Be an early adopter
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4 fill-current" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>

      <Mockup />

      <Features />

      <QuickStart />

      <GetStarted />
    </div>
  );
}
