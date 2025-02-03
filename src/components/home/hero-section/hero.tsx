import MerchantSearch from "./MerchantSearch";

// test
export default function HeroSection() {
  return (
    <div className="relative h-screen bg-[url('/assets/hero-img.png')] bg-cover bg-no-repeat">
      <div className="bg-opacity absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 bg-[url('/assets/logo_white.png')] bg-center bg-no-repeat text-center backdrop:blur-md" />
      {/* hero content  */}
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-black/60 backdrop:blur-sm">
        <div className="max-w-[792px]">
          <h1 className="text-center text-[40px] font-semibold leading-[80px] tracking-[-4px] text-white md:mx-8 lg:text-[64px]">
            The World&apos;s First All Vegan Marketplace
          </h1>
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
