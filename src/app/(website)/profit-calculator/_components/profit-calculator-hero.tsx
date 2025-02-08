import Image from "next/image";

export default function ProfitCalculatorHero() {
  return (
    <div
      className={
        "hero-section relative h-screen bg-[url('https://res.cloudinary.com/dgnustmny/image/upload/v1738661878/image_fx__7_1_1_evzmyn.png')] bg-cover bg-no-repeat"
      }
    >
      <div className="bg-opacity absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 bg-[url('https://res.cloudinary.com/dgnustmny/image/upload/v1738649859/logo_white_zsmua3.png')] bg-center bg-no-repeat text-center backdrop:blur-md" />
      {/* hero content  */}
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-black/60 backdrop:blur-sm">
        <div className="container flex max-w-[792px] flex-col items-center">
          <h1 className="hero-title text-center text-[40px] font-semibold leading-[50px] text-white md:mx-8 md:tracking-[-4px] lg:text-[64px]">
            Turn Your Referrals Into Rewards
          </h1>
          <Image
            src={
              "https://res.cloudinary.com/dgnustmny/image/upload/v1738650639/hero-Vector_fuaygl.png"
            }
            alt=""
            width={400}
            height={500}
            className="h-[30px] w-[258px]"
          />
          <p className="my-10 text-center text-[22px] leading-[33px] text-white">
            Share, refer, and watch your profits grow. Let’s make earning simple
            and transparent.
          </p>
          <button className="z-50 flex h-[48px] w-fit items-center justify-center rounded-[8px] border-[2px] border-[#839DD1] bg-[#1D3557] px-[16px] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90">
            Start Earning Today
          </button>
        </div>
      </div>
    </div>
  );
}
