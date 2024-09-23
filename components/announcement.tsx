import Link from "next/link";
import { ChevronRight } from "lucide-react"
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function Announcement() {
  return (
    <Link
      href={siteConfig.links.x}
      className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-transparent/10"
    >

      <span className="inline-block rounded-full px-3 py-1 bg-black text-white">
        <Icons.twitter className="h-3 w-3 fill-current" />
      </span>

      <p className="flex items-center">
        <span>Follow us on X</span>
        <ChevronRight className="ml-1 h-4 w-4" />
      </p>
    </Link>
  );
}
