import { TopOrganization } from "@/components/home/top-organizations/top-organizatins";
import { truncateText } from "@/lib/helper";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data?: TopOrganization;
}

const TopOrganizationCard = ({ data }: Props) => {
  const about = truncateText(data?.shortDescriptionOfOrganization ?? "", 91);
  return (
    <Link
      href={`organizations/123`}
      className="flex max-w-[400px] cursor-pointer items-center gap-x-[24px] rounded-[16px] bg-white p-[12px] md:p-[24px]"
    >
      <div className="relative h-[232px] w-[159px] rounded-[16px] bg-gray-100">
        <Image
          src="https://i.postimg.cc/DzBm1ynN/Frame-1618873695.png"
          alt="profile"
          className="rounded-[16px] object-cover"
          fill
        />
      </div>
      <div className="space-y-[16px]">
        <h3 className="font-lexend text-[18px] leading-[22.5px] tracking-[-1px] text-[#1D3557]">
          {data?.organizationName}
        </h3>
        <p className="max-w-[170px] font-inter text-[14px] leading-[21px] text-[#4B5563]">
          {about}
        </p>
        <p className="flex items-center gap-x-1 text-[14px] font-normal text-[#4B5563]">
          <MapPin /> {data?.address}
        </p>
      </div>
    </Link>
  );
};

export default TopOrganizationCard;
