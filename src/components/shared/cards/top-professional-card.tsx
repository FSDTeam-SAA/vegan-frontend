import { MapPin } from "lucide-react";
import Image from "next/image";

const TopProfessionaCard = () => {
  return (
    <div className="p-[12px] md:p-[24px] bg-white rounded-[16px] flex items-center gap-x-[24px] max-w-[400px]">
      <div className="relative w-[159px] h-[232px] rounded-[16px]">
        <Image
          src="https://as2.ftcdn.net/v2/jpg/02/24/86/95/1000_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
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
        <p className="flex items-center gap-x-1 text-[#4B5563]">
          <MapPin /> Shefiled, USA
        </p>

        <h4 className="text-[#1D3557] font-lexend text-[20px] leading-[25px] font-medium">
          $100/hour
        </h4>
      </div>
    </div>
  );
};

export default TopProfessionaCard;
