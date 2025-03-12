import { cn } from "@/lib/utils";
import { OrganizationProfile } from "@/types/organization";
import { useWishlistState } from "@/zustand/features/wishlist/useWishlistState";
import { Heart } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";

interface Props {
  data?: OrganizationProfile;
}

const OrganizationWishlistCard = ({ data }: Props) => {
  const { addOrganization } = useWishlistState();
  const router = useRouter();

  if (!data) return;
  return (
    <>
      <div
        onClick={() => router.push(`/organizations/${data?.userID}`)}
        className="rounded-lg bg-white p-4 transition-all duration-500 hover:scale-[101%]"
      >
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 flex-shrink-0 md:h-20 md:w-20">
            <Image
              width={100}
              height={100}
              src={data?.profilePhoto || "/placeholder.svg"}
              alt={data.organizationName}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Name</h3>
                <p className="text-sm text-gray-500">fdsfdsfdsf</p>
              </div>
              {data && (
                <button
                  className="rounded-full p-2 transition-colors hover:bg-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addOrganization(data);
                  }}
                >
                  <Heart
                    className={cn(
                      "h-7 w-7 transition-colors",
                      true ? "fill-red-500 stroke-red-500" : "stroke-gray-400",
                    )}
                  />
                </button>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-600">
              {data?.shortDescriptionOfOrganization}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationWishlistCard;
