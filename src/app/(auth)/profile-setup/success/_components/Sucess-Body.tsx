"use client";

import { useSearchParams } from "next/navigation";

export const SuccessBody = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "";

  return (
    <div>
      {type === "professional" && (
        <p className="mt-[16px] text-center text-[16px] font-normal leading-[28px] text-[#1F2937]">
          Thank you for registering as a Professional on Vegan Collective! Our
          team will review your documents and profile to ensure alignment with
          our values. You will receive a notification once your account is
          verified and active.
        </p>
      )}

      {type === "organization" && (
        <p className="mt-[16px] text-center text-[16px] font-normal leading-[28px] text-[#1F2937]">
          Thank you for registering your organization with Vegan Collective! Our
          team will review your documents and profile to ensure alignment with
          our values. You will receive a notification once your account is
          verified and active.
        </p>
      )}
      {type === "merchant" && (
        <p className="mt-[16px] text-center text-[16px] font-normal leading-[28px] text-[#1F2937]">
          Thank you for registering as a Merchant on Vegan Collective! Our team
          will review your documents and profile to ensure alignment with our
          values. You will receive a notification once your account is verified
          and active.
        </p>
      )}
    </div>
  );
};
