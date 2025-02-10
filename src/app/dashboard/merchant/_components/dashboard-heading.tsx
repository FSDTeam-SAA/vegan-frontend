import React from "react";

export default function DashboardHeading({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <header className="md:mb-[56px]">
      <h1 className="font-inter text-xl font-semibold leading-[29px] text-[#1F2937] md:text-2xl md:leading-[34.8px]">
        {title}
      </h1>
      <h3 className="font-inter text-sm font-normal leading-[20.3px] text-[#475367] md:text-base md:leading-6">
        {subTitle}
      </h3>
    </header>
  );
}
