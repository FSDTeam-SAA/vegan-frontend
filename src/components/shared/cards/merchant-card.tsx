import { truncateText } from "@/lib/helper";
import { MerchantProfile } from "@/types/merchant";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data?: MerchantProfile;
}

const MerchantCard = ({ data }: Props) => {
  let text = data?.shortDescriptionOfStore ?? "";

  text = truncateText(text, 46);
  return (
    <div className="h-[488px] w-full rounded-[16px] bg-white p-[24px] lg:w-[390px]">
      <div className="relative h-[232px] w-full rounded-[12px]">
        <Image
          src={
            data?.profilePhoto || "https://i.postimg.cc/Gm5rJB66/image-fx-6.png"
          }
          alt={data?.fullName ?? ""}
          fill
          className="rounded-[12px]"
        />
      </div>
      <div className="mt-[23px] flex h-[185px] w-full flex-col justify-between">
        <div className="space-y-[8px]">
          <h3 className="font-lexend text-[18px] font-normal leading-[22.5px] text-[#1D3557]">
            {data?.fullName ?? ""}
          </h3>
          <p className="text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
            {text}
          </p>
        </div>
        <p className="flex items-center gap-x-[6px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563] md:text-[16px]">
          <MapPin className="h-[16.3px] w-[13.5px] text-[#4B5563] md:h-[20px] md:w-[20px]" />{" "}
          {data?.address}
        </p>
        <Link
          href={`/merchants/${data?._id}`}
          className="flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#1D3557] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MerchantCard;
