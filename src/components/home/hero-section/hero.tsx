import React from "react";
import MerchantSearch from "./MerchantSearch";

export default function HeroSection() {
  return (
    <div className="h-screen  bg-[url('/assets/hero-img.png')] bg-no-repeat bg-cover relative">
      <div className="w-full h-full flex flex-col justify-center items-center bg-[url('/assets/logo_white.png')] bg-no-repeat bg-opacity text-center bg-center bg-black/40 backdrop:blur-md absolute z-10" />
      {/* hero content  */}
      <div className="absolute z-20  bg-black/60 backdrop:blur-sm w-full h-full flex flex-col justify-center items-center ">
        <div className="max-w-[792px]">
          <h1 className="lg:text-[64px] text-[40px] leading-[80px] font-semibold tracking-[-4px] text-white md:mx-8 text-center">
            The World&apos;s First All Vegan Marketplace
          </h1>
          <p className="text-[22px] leading-[33px]  text-white text-center  my-10">
            Book vegan professionals, shop cruelty-free products, connect with
            charity organizations.
          </p>
          <MerchantSearch />
        </div>
      </div>
    </div>
  );
}
