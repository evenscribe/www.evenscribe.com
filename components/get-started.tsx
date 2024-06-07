import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import Balancer from "react-wrap-balancer";
export default function GetStarted() {
  return (
    <Card className="py-4 md:py-8 lg:py-12 w-fit md:mb-8 lg:mb-20 bg-primary-foreground border-none">
      <CardHeader className="text-center">
        <CardTitle className="md:text-3xl">Get Early Access</CardTitle>
        <CardDescription className="md:text-xl px-8 md:px-12 lg:px-16 ">
          <Balancer>
            Loved our logging infrastructure solution? Be among the first to
            experience its full potential. Reach out to us to secure your early
            access.
          </Balancer>
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex justify-center">
        <Button>Contact Us</Button>
      </CardContent>
    </Card>
  );
}
