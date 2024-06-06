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
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
          <Link href="/docs" className={cn(buttonVariants())}>
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
      <Card>
        <CardContent>
          <Image
            alt="hero"
            src="/mockup-light.webp"
            width={3528}
            height={3274}
            className="h-auto w-[90vw] md:w-[70vw] block dark:hidden"
          />
          <Image
            alt="hero"
            src="/mockup-dark.webp"
            width={3528}
            height={3274}
            className="h-auto w-[90vw] md:w-[70vw] hidden dark:block"
          />
        </CardContent>
      </Card>
    </div>
  );
}
