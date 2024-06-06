import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Mockup() {
  return (
    <Card className="hidden md:block my-8 md:my-12 md:mb-8 lg:my-24 lg:mb-20">
      <CardContent>
        <Image
          alt="hero"
          src="/mockup-light.webp"
          width={3528}
          height={3274}
          className="h-auto w-[80vw] md:w-[70vw] block dark:hidden"
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
  );
}
