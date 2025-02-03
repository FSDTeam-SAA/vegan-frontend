import { StaticImageData } from "next/image";
import React from "react";

export default function VeganHeader({
  //   img,
  heading,
  subheading,
}: {
  img: string | StaticImageData;
  heading: string;
  subheading: string;
}) {
  return (
    <div
      className={`/assets/vegan-header.png min-w-screen flex min-h-[504px] flex-col items-center justify-center bg-cover`}
    >
      <h1 className="text-12 pb-2 font-medium text-white">{heading}</h1>
      <p>{subheading}</p>
    </div>
  );
}
