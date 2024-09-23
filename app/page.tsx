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
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Evenscribe | Intuitive Log Management",
  description:
    "Seamlessly collect, search, and make sense of your event data. User-friendly and intuitive yet powerful.",
};


export default function IndexPage() {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>Effortless Software Metrics Collection and Instant Insights</PageHeaderHeading>
          <PageHeaderDescription>
            Collect and decipher software metrics with ease using our scalable platform. Get instant visibility into your system's performance with real-time monitoring and actionable insights.
          </PageHeaderDescription>
          <PageActions>
            <Link
              href={siteConfig.links.product}
              className={cn(buttonVariants())}
            >
              <span>
                Be an early adopter
              </span>
              <ChevronRight />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "ghost" }), "hidden md:flex")}
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
    </>
  );
}
