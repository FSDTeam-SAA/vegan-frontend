import React from "react";
import FeatureCard from "./feature-card";

export default function FeatureSection() {
  return (
    <div className="container mx-auto my-[80px]">
      <h1 className="hidden text-[32px] font-medium text-[#1D3557] md:block">
        Features
      </h1>
      <h1 className="block text-[24px] font-medium text-[#1D3557] md:hidden md:pb-[48px]">
        Some Of Our Key Features
      </h1>
      <div className="mx-auto -mt-[40px] items-center justify-between gap-4 md:mt-[48px] md:flex">
        <FeatureCard
          img={"https://i.postimg.cc/j5m5w1Bj/Icon.png"}
          title="Transparency"
          description="We’re committed to being open and honest. From clear communication to upfront policies, there are no surprises just trust."
        />
        <FeatureCard
          img={"https://i.postimg.cc/5tPj1y3L/donation.png"}
          title="Charity Donation"
          description="Every action makes a difference.  Giving back to the community—because every purchase contributes to a better and brighter future. "
        />
        <FeatureCard
          img={"https://i.postimg.cc/j2fjzXr4/Filter.png"}
          title="Profit-Sharing"
          description="Success is better when shared. Our profit-sharing model ensures that everyone benefits from our growth and our growth and purpose."
        />
      </div>
    </div>
  );
}
