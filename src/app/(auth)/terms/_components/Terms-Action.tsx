"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const TermsAction = () => {
  const [agreed, setAgreed] = useState(false);
  const searchParams = useSearchParams();

  let callback = searchParams.get("callback") ?? "/";

  // Append agree=true to the callback URL
  if (callback) {
    const url = new URL(callback, window.location.origin);
    url.searchParams.set("agree", "true");
    callback = url.pathname + url.search; // Keep relative path
  }

  return (
    <div>
      <div className="mb-8 flex items-start space-x-2">
        <Checkbox
          id="terms"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the 10 Promises of Vegan Professionals and the Vegan
          Collective Terms and Conditions.
        </label>
      </div>
      <Button
        className="w-full bg-[#1a2c4e] text-white hover:bg-[#2a3c5e]"
        disabled={!agreed}
        asChild
      >
        <Link className="w-full" href={callback}>
          Agree
        </Link>
      </Button>
    </div>
  );
};

export default TermsAction;
