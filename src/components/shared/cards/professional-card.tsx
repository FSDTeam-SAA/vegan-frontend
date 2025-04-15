// Packages
import { Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Local imports

import { cn } from "@/lib/utils";
import { ProfessionalProfile } from "@/types/professional";
import { useWishlistState } from "@/zustand/features/wishlist/useWishlistState";
import { memo } from "react";

interface Props {
  data?: ProfessionalProfile;
}

const ProfessionalCard = ({ data }: Props) => {
  const { addProfessional, professionals } = useWishlistState();

  const isAlreadySelected = professionals?.find(
    (item) => item._id === data?._id,
  );

  return (
    <div className="w-full rounded-[16px] bg-white p-[24px] lg:w-[400px]">
      <div className="relative h-[232px] w-full rounded-[12px]">
        <Image
          src={
            data?.profilePhoto ??
            "https://i.postimg.cc/qqPMLNtk/pexels-los-muertos-crew-10041258.png"
          }
          alt="name"
          fill
          className="rounded-[12px]"
        />
      </div>
      <div className="mt-[24px] space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="flex w-full justify-between">
            <h4 className="font-lexend text-[18px] font-normal leading-[22.5px] text-[#1D3557]">
              {data?.fullName}
            </h4>

            <div className="flex items-center gap-x-2">
              {(data?.totalReviews ?? 0) > 0 && (
                <>
                  <Image
                    src="https://i.postimg.cc/hG2DYyJZ/Vector.png"
                    height={18}
                    width={18}
                    alt="star"
                  />
                  <p className="font-inter text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
                    {data?.averageRating} ({data?.totalReviews})
                  </p>
                </>
              )}

              {data && (
                <button
                  className="flex items-center justify-center rounded-full p-2 shadow-none hover:bg-gray-100"
                  onClick={() => addProfessional(data)}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5 stroke-red-500",
                      isAlreadySelected && "fill-red-500",
                    )}
                  />
                </button>
              )}
            </div>
          </div>
          <p className="font-inter text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
            {data?.designation}
          </p>
        </div>
        <p className="flex items-center gap-x-[6px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563]">
          <MapPin className="h-[16px] w-[13.5px] text-[#4B5563]" />{" "}
          {data?.country}, {data?.state}
        </p>
        {/* <h3 className="font-lexend text-[20px] font-normal leading-[25px] text-[#1D3557]">
          $100/<span>hour</span>
        </h3> */}
        <Link
          href={`/professionals/${data?.userId ?? data?.userID}`}
          className="flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#1D3557] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default memo(ProfessionalCard);
