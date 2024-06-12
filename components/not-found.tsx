import Link from "next/link";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-2">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Oops! Page Not Found
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="#"
      >
        Go Back Home
      </Link>
    </div>
  );
}
