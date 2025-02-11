import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopProfessionaCard = () => {
  return (
    <Link
      href="/professionals/123"
      className="flex max-w-[400px] items-center gap-x-[24px] rounded-[16px] bg-white p-[12px] md:p-[24px]"
    >
      <div className="relative h-[232px] w-[159px] rounded-[16px]">
        <Image
          src="https://as2.ftcdn.net/v2/jpg/02/24/86/95/1000_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
          alt="profile"
          className="rounded-[16px] object-cover"
          fill
        />
      </div>
      <div className="space-y-[16px]">
        <h3 className="font-lexend text-[18px] leading-[22.5px] tracking-[-1px] text-[#1D3557]">
          Vegan Fitness Trainer
        </h3>
        <p className="max-w-[170px] font-inter text-[14px] leading-[21px] text-[#4B5563]">
          I am here our certified trainers are here to guide and support you on
          your fitness journey.
        </p>
        <p className="flex items-center gap-x-1 text-[#4B5563]">
          <MapPin /> Shefiled, USA
        </p>

        <h4 className="font-lexend text-[20px] font-medium leading-[25px] text-[#1D3557]">
          $100/hour
        </h4>
      </div>
    </Link>
  );
};

export default TopProfessionaCard;
