"use client";

import { cn } from "@/lib/utils";
import { AlertCircle, CreditCard, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription, AlertTitle } from "./alert";

type UserRole = "professional" | "merchant" | "organization";

interface CheckResponse {
  status: boolean;
  message: string;
  stripeAccountId: string;
}

interface StripeConnectionAlertProps {
  role: UserRole;
  className?: string;
  onDismiss?: () => void;
  isDismissable?: boolean;
  rediretTo: string;
  message: string;
  userId: string;
}

export function StripeConnectionAlert({
  className,
  onDismiss,
  isDismissable = true,
  rediretTo,
  message,
  userId,
}: StripeConnectionAlertProps) {
  const [dismissed, setDismissed] = useState(false);

  const { data, isLoading } = useQuery<CheckResponse>({
    queryKey: ["account-setup", userId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/checkAccountId/${userId}`,
      ).then((res) => res.json()),
  });

  const handleDismiss = () => {
    setDismissed(true);
    if (onDismiss) onDismiss();
  };

  if (isLoading) return null;

  if (data?.status) return;
  if (dismissed) return null;

  return (
    <Alert
      variant="destructive"
      className={cn(
        "border-amber-500 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200",
        "mb-6 flex items-center justify-between",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        <div>
          <AlertTitle className="text-amber-800 dark:text-amber-300">
            Your Stripe account is not connected
          </AlertTitle>
          <AlertDescription className="mt-1 text-amber-700 dark:text-amber-400">
            {message}
          </AlertDescription>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-amber-600 text-white hover:bg-amber-700"
        >
          <Link href={rediretTo} scroll>
            <CreditCard className="mr-2 h-4 w-4" />
            Connect Stripe
          </Link>
        </Button>
        {isDismissable && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="h-8 w-8 text-amber-700 hover:bg-amber-100 hover:text-amber-900 dark:text-amber-400 dark:hover:bg-amber-900/30 dark:hover:text-amber-300"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        )}
      </div>
    </Alert>
  );
}
