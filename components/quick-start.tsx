import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function QuickStart() {
  return (
    <Card className="md:mb-8 lg:mb-20 border-none">
      <CardHeader className="text-center">
        <CardTitle className="md:text-3xl">
          Jump start with Evenscribe
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
                Configure your logging database with ease. Currently optimized
                for Clickhouse, with plans to support additional databases.
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
                Integrate the Evenscribe Write Node on your server to facilitate
                seamless communication with your logging database.
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
                language—Typescript/JavaScript, Go, or Rust—and start logging
                immediately.
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
                Access and analyze your logs effortlessly through our intuitive
                Observatory interface, providing clear insights and monitoring.
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
