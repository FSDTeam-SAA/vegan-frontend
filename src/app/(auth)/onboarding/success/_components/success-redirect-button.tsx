"use client";
// Packages
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Local imports
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SuccessRedirectButton = () => {
  const [loading, setLoading] = useState<true | false>(false);
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  if (!role) {
    redirect("/");
  }

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Button
      className="relative mt-[40px] h-[48px] w-full max-w-[400px] rounded-[8px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90 disabled:opacity-60"
      asChild
      onClick={() => setLoading(true)}
      disabled={loading}
    >
      <Link href={`/`} className={cn(loading && "pointer-events-none")}>
        {loading ? "Wait a second..." : "Get Started"}
      </Link>
    </Button>
  );
};

export default SuccessRedirectButton;
