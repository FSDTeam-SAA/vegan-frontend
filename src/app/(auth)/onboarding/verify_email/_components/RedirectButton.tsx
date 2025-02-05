"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const RedirectButton = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  return (
    <Button
      className="relative mt-[40px] h-[48px] w-full rounded-[8px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90 disabled:opacity-60"
      asChild
    >
      <Link href={`/onboarding/login?role=${role}`}>Return To Login</Link>
    </Button>
  );
};

export default RedirectButton;
