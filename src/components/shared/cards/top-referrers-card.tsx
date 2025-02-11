import Image from "next/image";

export default function TopReferrersCard() {
  return (
    <div className="w-full overflow-hidden rounded-[16px] bg-white p-[24px] shadow-none lg:max-w-[400px]">
      <div className="relative h-[199px]">
        <Image
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1739245185/refferer-card_lz1io7.png"
          fill
          alt="Profile photo"
          className="h-full w-full rounded-[12px] object-cover"
        />
      </div>
      <div className="px-0 pt-[24px]">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-[18px] font-normal text-[#1D3557]">
              Sarah David
            </h2>
            <p className="text-[16px] font-normal text-[#4B5563]">
              24 Referrals
            </p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[18px] font-semibold text-[#16A34A]">$2400</p>
            <p className="text-[16px] font-normal text-[#000000]">Earned</p>
          </div>
        </div>
      </div>
    </div>
  );
}
