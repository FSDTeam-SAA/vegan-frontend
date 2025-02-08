import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfessionalCard = () => {
  return (
    <div className="w-full rounded-[16px] bg-white p-[24px] lg:w-[400px]">
      <div className="relative h-[232px] w-full rounded-[12px]">
        <Image
          src="https://i.postimg.cc/qqPMLNtk/pexels-los-muertos-crew-10041258.png"
          alt="name"
          fill
          className="rounded-[12px]"
        />
      </div>
      <div className="mt-[24px] space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="flex w-full justify-between">
            <h4 className="font-lexend text-[18px] font-normal leading-[22.5px] text-[#1D3557]">
              Dr Sarah Green
            </h4>
            <div className="flex items-center gap-x-2">
              <Image
                src="https://i.postimg.cc/hG2DYyJZ/Vector.png"
                height={18}
                width={18}
                alt="star"
              />
              <p className="font-inter text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
                4.8 (127)
              </p>
            </div>
          </div>
          <p className="font-inter text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
            Vegan Nutritionist
          </p>
        </div>
        <p className="flex items-center gap-x-[6px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563]">
          <MapPin className="h-[16px] w-[13.5px] text-[#4B5563]" /> Newyork, USA
        </p>
        <h3 className="font-lexend text-[20px] font-normal leading-[25px] text-[#1D3557]">
          $100/<span>hour</span>
        </h3>
        <Link
          href={`/professionals/123`}
          className="flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#1D3557] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProfessionalCard;
