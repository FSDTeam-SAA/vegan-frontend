"use client";
// Packages
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Local imports
import { Button } from "@/components/ui/button";

const SuccessRedirectButton = () => {
  const [loading, setLoading] = useState<true | false>(false);
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const router = useRouter();

  if (!role) {
    redirect("/");
  }

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const handleClick = () => {
    setLoading(true);
    router.refresh();

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <Button
      className="relative mt-[40px] h-[48px] w-full max-w-[400px] rounded-[8px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90 disabled:opacity-60"
      onClick={handleClick}
      disabled={loading}
    >
      Get Started
    </Button>
  );
};

export default SuccessRedirectButton;
