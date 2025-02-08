import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ErrorMessageProps {
  error?: Error & { digest?: string };
  reset?: () => void;
}

export function ErrorMessage({ error, reset }: ErrorMessageProps) {
  const handleReset = () => {
    if (typeof reset === "function") {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <Card className="w-[420px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-red-600">
          Oops! Something went wrong
        </CardTitle>
        <CardDescription>
          We apologize for the inconvenience. An error has occurred.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error ? (
          <>
            <p className="mb-4 text-sm text-gray-600">
              Error details: {error.message || "An unexpected error occurred"}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500">Error ID: {error.digest}</p>
            )}
            {error.stack && (
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Technical details
                </summary>
                <pre className="mt-2 overflow-auto text-xs text-gray-400">
                  {error.stack}
                </pre>
              </details>
            )}
          </>
        ) : (
          <p className="mb-4 text-sm text-gray-600">
            An unexpected error occurred. Our team has been notified and is
            working on a fix.
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Go Home
        </Button>
        <Button onClick={handleReset}>Try Again</Button>
      </CardFooter>
    </Card>
  );
}
