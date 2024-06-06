import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function Announcement() {
  return (
    <Link
      href={siteConfig.links.x}
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <Icons.twitter className="h-3 w-3 fill-current" />
      <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span>Follow us on X</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
}
