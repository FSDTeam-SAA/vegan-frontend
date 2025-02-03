import { MapPin } from "lucide-react";
import Image from "next/image";

const TopMarchantCard = () => {
  return (
    <div className="p-[12px] md:p-[24px] bg-white rounded-[16px] flex items-center gap-x-[24px] max-w-[400px]">
      <div className="relative w-[159px] h-[232px] rounded-[16px]">
        <Image
          src="https://i.postimg.cc/DzBm1ynN/Frame-1618873695.png"
          alt="profile"
          className="object-cover rounded-[16px]"
          fill
        />
      </div>
      <div className="space-y-[16px]">
        <h3 className="text-[#1D3557] text-[18px] tracking-[-1px] leading-[22.5px] font-lexend">
          Vegan Fitness Trainer
        </h3>
        <p className="text-[#4B5563] text-[14px] leading-[21px] font-inter max-w-[170px]">
          I am here our certified trainers are here to guide and support you on
          your fitness journey.
        </p>
        <p className="flex items-center gap-x-1 text-[#4B5563] font-normal text-[14px]">
          <MapPin /> Shefiled, USA
        </p>
      </div>
    </div>
  );
};

export default TopMarchantCard;
