import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LockOpenIcon,
  DatabaseZap,
  ShellIcon,
  WandSparkles,
} from "lucide-react";

export default function Features() {
  return (
    <Card className="pt-10 my-4 md:my-8 lg:my-40 border-none">
      <CardHeader className="text-center">
        <CardTitle className="md:text-3xl">
          What does Evenscribe offer?
        </CardTitle>
        <CardDescription className="md:text-xl">
          Streamline your workflow and unlock new possibilities with our
          cutting-edge features.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <LockOpenIcon
                  className="text-[#bc83e9]"
                  width={30}
                  height={30}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="md:text-2xl mb-2 font-bold">
                Bring your Own Database
              </div>
              <p className="md:text-s text-muted-foreground">
                Flexibility at its finest—integrate with your preferred
                database. Start with Clickhouse or experiment with other options
                to best fit your needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <DatabaseZap
                  className="text-[#bc83e9]"
                  width={30}
                  height={30}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="md:text-2xl mb-2 font-bold">
                OpenTelemetry Compliant Logs
              </div>
              <p className="md:text-s text-muted-foreground">
                Ensure seamless compatibility and interoperability with
                OpenTelemetry standards, making your logs consistent and easy to
                manage across different systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <WandSparkles
                  className="text-[#bc83e9]"
                  width={30}
                  height={30}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="md:text-2xl mb-2 font-bold">
                RAG AI for Log Summaries
              </div>
              <p className="md:text-s text-muted-foreground">
                Leverage advanced AI to generate concise and insightful
                summaries of your logs, helping you quickly understand key
                information and trends.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <ShellIcon className="text-[#bc83e9]" width={30} height={30} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="md:text-2xl mb-2 font-bold">
                Log What You Need To
              </div>
              <p className="md:text-s text-muted-foreground">
                Tailor your logging to capture exactly what you need. With
                customizable options, focus on the data that matters most to you
                and your application.
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
