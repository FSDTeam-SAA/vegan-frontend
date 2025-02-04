import React from "react";
import ProfessionalsDetails from "./_components/ProfessionalsDetails";
import VeganHeader from "@/components/shared/sections/VeganHeader";

export default function page() {
  return (
    <div className="mt-[100px]">
      <VeganHeader
        img={
          "https://i.ibb.co.com/7JBkM5Mq/pexels-elly-fairytale-3822688-1.png"
        }
        heading={"Dr Sarah Green"}
        subheading={
          "A leading environmental organization dedicated to protecting and preserving our natural environment through community action, education, and sustainable practices."
        }
      />
      <ProfessionalsDetails />
    </div>
  );
}
