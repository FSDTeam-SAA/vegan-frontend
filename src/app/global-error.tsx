"use client";

import { useEffect } from "react";
import { ErrorMessage } from "@/components/shared/sections/ErrorMessage";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ErrorMessage error={error} reset={reset} />
    </div>
  );
}
