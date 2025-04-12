// Packages
import dynamic from "next/dynamic";
import Image from "next/image";

// Local imports
const HeroSearch = dynamic(() => import("./heroSearch"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <div className="hero-section relative h-screen">
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/drdztqgcx/video/upload/v1744434704/alaska_t1zbcm.mp4"
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 h-full w-full object-cover"
      />

      {/* Overlay for visual effect */}
      <div className="bg-opacity absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 bg-center bg-no-repeat text-center backdrop:blur-md" />

      {/* hero content */}
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-black/60 backdrop:blur-sm">
        <div className="container flex max-w-[792px] flex-col items-center">
          <h1 className="hero-title text-center text-[40px] font-semibold leading-[50px] text-white md:mx-8 md:tracking-[-4px] lg:text-[64px]">
            The World&apos;s First All Vegan Marketplace
          </h1>
          <Image
            src={
              "https://res.cloudinary.com/dgnustmny/image/upload/v1738650639/hero-Vector_fuaygl.png"
            }
            alt=""
            width={500}
            height={500}
            className="h-auto w-[558px]"
          />
          <p className="my-10 text-center text-[22px] leading-[33px] text-white">
            Book vegan professionals, shop cruelty-free products, connect with
            charity organizations.
          </p>
          <HeroSearch />
        </div>
      </div>
    </div>
  );
}
