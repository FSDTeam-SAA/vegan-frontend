import MerchantSearch from "./MerchantSearch";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className={
        "hero-section relative h-screen w-screen bg-[url('https://i.postimg.cc/MGJvtgGf/hero-img.png')] bg-cover bg-no-repeat"
      }
    >
      <div className="bg-opacity absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 bg-[url('https://i.postimg.cc/kXD65xZG/logo-white.png')] bg-center bg-no-repeat text-center backdrop:blur-md" />
      {/* hero content  */}
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-black/60 backdrop:blur-sm">
        <div className="container flex max-w-[792px] flex-col items-center">
          <h1 className="hero-title text-center text-[40px] font-semibold leading-[50px] text-white md:mx-8 md:tracking-[-4px] lg:text-[64px]">
            The World&apos;s First All Vegan Marketplace
          </h1>
          <Image
            src={"https://i.postimg.cc/LsjZp2WV/hero-Vector.png"}
            alt=""
            width={500}
            height={500}
            className="h-auto w-[558px]"
          />
          <p className="my-10 text-center text-[22px] leading-[33px] text-white">
            Book vegan professionals, shop cruelty-free products, connect with
            charity organizations.
          </p>
          <MerchantSearch />
        </div>
      </div>
    </div>
  );
}
