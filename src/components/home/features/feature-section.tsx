import React from "react";
import FeatureCard from "./feature-card";

export default function FeatureSection() {
  return (
    <div className="container mx-auto my-[80px]">
      <h1 className="text-[32px] font-medium md:pb-[55px] text-[#1D3557]">
        Features
      </h1>
      <div className="md:flex justify-between items-center gap-4 mx-auto ">
        <FeatureCard
          img="/assets/search.svg"
          title="Transparency"
          description="We’re committed to being open and honest. From clear communication to upfront policies, there are no surprises just trust."
        />
        <FeatureCard
          img="/assets/donation_icon.svg"
          title="Charity Donation"
          description="Every action makes a difference.  Giving back to the community—because every purchase contributes to a better and brighter future. "
        />
        <FeatureCard
          img="/assets/profit_sharing.svg"
          title="Profit-Sharing"
          description="Success is better when shared. Our profit-sharing model ensures that everyone benefits from our growth and our growth and purpose."
        />
      </div>
    </div>
  );
}
