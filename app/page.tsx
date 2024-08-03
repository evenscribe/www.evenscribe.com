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
  title: "Evenscribe | Intuitive Log Management",
  description:
    "Seamlessly collect, search, and make sense of your event data. User-friendly and intuitive yet powerful.",
};

export default function IndexPage() {
  return (
    <>
      <div className="block dark:hidden absolute inset-0 -z-100 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <div className="hidden dark:block absolute top-0 -z-100 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
      <div className="container relative">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>Tame your software logs</PageHeaderHeading>
          <PageHeaderDescription>
            Seamlessly collect, search, and make sense of your event data.
            User-friendly and intuitive yet powerful.
          </PageHeaderDescription>
          <PageActions>
            <Link
              href={siteConfig.links.product}
              className={cn(buttonVariants())}
            >
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
    </>
  );
}
