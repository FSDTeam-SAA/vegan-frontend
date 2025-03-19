import { TopProfessional } from "@/components/home/top-professional/top-professionals";
import { truncateText } from "@/lib/helper";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data?: TopProfessional;
}

const TopProfessionaCard = ({ data }: Props) => {
  const about = truncateText(data?.about ?? "", 91);
  return (
    <Link
      href={`/professionals/${data?.professionalID}`}
      className="flex max-w-[400px] items-center gap-x-[24px] rounded-[16px] bg-white p-[12px] md:p-[24px]"
    >
      <div className="relative h-[232px] w-[159px] rounded-[16px]">
        <Image
          src={
            data?.profilePhoto ??
            "https://as2.ftcdn.net/v2/jpg/02/24/86/95/1000_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
          }
          alt="profile"
          className="rounded-[16px] object-cover"
          fill
        />
      </div>
      <div className="space-y-[16px]">
        <h3 className="font-lexend text-[18px] leading-[22.5px] tracking-[-1px] text-[#1D3557]">
          {data?.businessName}
        </h3>
        <p className="max-w-[170px] font-inter text-[14px] leading-[21px] text-[#4B5563]">
          {about}
        </p>
        <p className="flex items-center gap-x-1 text-[12px] text-[#4B5563]">
          <MapPin className="h-4 w-4" /> {data?.address}
        </p>
        <div className="flex items-center gap-x-2">
          <Image
            src="https://i.postimg.cc/hG2DYyJZ/Vector.png"
            height={18}
            width={18}
            alt="star"
          />
          <p className="font-inter text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
            {data?.averageRating} ({data?.totalReviews})
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TopProfessionaCard;
