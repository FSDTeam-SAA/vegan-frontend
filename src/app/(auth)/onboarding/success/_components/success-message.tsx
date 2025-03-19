"use client";

import { useSearchParams } from "next/navigation";

const SuccessMessage = () => {
  const searchParams = useSearchParams();
  const accountType = (searchParams.get("role") ?? "user") as
    | "user"
    | "organization";

  const message = {
    user: "Welcome to Vegan Collective, the world’s trusted all-vegan platform! Discover services, products, and opportunities tailored to your values.",
    organization:
      "Congratulations! You are now a vendor on Vegan Collective, the world’s trusted all-vegan platform.",
    merchant:
      "Congratulations! You are now a vendor on Vegan Collective, the world’s trusted all-vegan platform.",
    professional:
      "Congratulations! You are now a vendor on Vegan Collective, the world’s trusted all-vegan platform.",
  };
  return (
    <div>
      <div className="mt-[16px] max-w-[678px] text-center">
        <h5 className="font-inter text-[24px] font-medium leading-[29.05px] text-[#1D3557] lg:text-[48px] lg:leading-[58.09px]">
          Welcome to Vegan Collective
        </h5>
        <p className="mt-[8px] font-inter text-[16px] font-normal text-[#374151] lg:text-[20px]">
          {message[accountType]}
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
