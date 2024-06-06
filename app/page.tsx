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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Mockup from "@/components/mockup";

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

      <Mockup />

      <div className="">
        <Card className="my-8 md:my-12 md:mb-8 lg:my-24 lg:mb-20 border-none">
          <CardHeader className="text-center">
            <CardTitle className="md:text-3xl">
              Evenscribe Quick Start
            </CardTitle>
            <CardDescription className="md:text-xl">
              Set up your logging system effortlessly in just four simple steps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grip-cols-1 ">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">1.</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="md:text-2xl font-bold">
                    Setup your Logging Database
                  </div>
                  <p className="md:text-s text-muted-foreground">
                    Configure your logging database with ease. Currently
                    optimized for Clickhouse, with plans to support additional
                    databases.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">2.</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="md:text-2xl font-bold">
                    Install Evenscribe Write Node
                  </div>
                  <p className="md:text-s text-muted-foreground">
                    Integrate the Evenscribe Write Node on your server to
                    facilitate seamless communication with your logging
                    database.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">3.</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="md:text-2xl font-bold">
                    Install Language-Specific Evenscribe Client
                  </div>
                  <p className="md:text-s text-muted-foreground">
                    Install the Evenscribe Client for your preferred
                    language—Typescript/JavaScript, Go, or Rust—and start
                    logging immediately.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">4.</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="md:text-2xl font-bold">
                    Observe and Analyze Logs at the Observatory
                  </div>
                  <p className="md:text-s text-muted-foreground">
                    Access and analyze your logs effortlessly through our
                    intuitive Observatory interface, providing clear insights
                    and monitoring.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
