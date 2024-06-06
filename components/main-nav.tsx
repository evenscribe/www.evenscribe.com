"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/hourglass.png"
          alt="evenscribe logo"
          width={100}
          height={100}
          className="h-6 w-6"
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center space-x-2">
            <p>Documentations</p>
            <ExternalLinkIcon />
          </div>
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block",
          )}
        >
          <div className="flex items-center space-x-2">
            <p>Github</p>
            <ExternalLinkIcon />
          </div>
        </Link>
      </nav>
    </div>
  );
}
