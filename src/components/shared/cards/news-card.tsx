import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { truncateText } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { News } from "@/types/organization";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

interface Props {
  data?: News;
  setNewsDetails: Dispatch<SetStateAction<News | null>>;
  loggedinUserId: string;
}

const NewsCart = ({ data, setNewsDetails, loggedinUserId }: Props) => {
  const desc = truncateText(data?.shortDescription ?? "", 96);
  const likedUser = data?.likedBy ?? [];

  const queryClient = useQueryClient();

  const isLiked = likedUser.includes(loggedinUserId);

  const { mutate, isPending } = useMutation({
    mutationKey: ["giveLike"],
    mutationFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/commentManipulation/like`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            updateAndNewsID: data?._id,
            userID: loggedinUserId,
          }),
        },
      ).then((res) => res.json()),

    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });

  const doLike = () => {
    if (!data) {
      toast.warning("Something went wrong", {
        richColors: true,
      });

      return;
    }

    mutate();
  };

  return (
    <div>
      <Card>
        <CardHeader className="p-[24px]">
          <div className="relative h-[185px] w-full rounded-[12px]">
            <Image
              src={
                data?.image ??
                "https://res.cloudinary.com/dgnustmny/image/upload/v1738815951/pexels-ron-lach-9034660_1_1_kgtnea.png"
              }
              alt="New Community Garden Project Launches"
              fill
              className="rounded-[12px]"
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg font-normal leading-[27px] text-[#1D3557]">
            {data?.title}
          </CardTitle>
          <CardDescription className="pb-[12px] pt-[8px] text-base font-normal leading-[24px] text-[#374151]">
            {desc}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-[16px]">
            <button
              className="flex items-center gap-[4px] rounded-[8px] p-2 text-base font-normal leading-[19px] text-[#4B5563] hover:text-[#20252b] disabled:opacity-70"
              onClick={doLike}
              disabled={!data || !loggedinUserId || isPending}
            >
              <Heart
                className={cn(
                  "h-[16px] w-[16px] text-[#4B5563] transition duration-300 hover:scale-105",
                  isLiked ? "fill-[#1D3557]" : "",
                )}
              />{" "}
              {data?.likedBy.length}
            </button>
            <span className="flex items-center gap-[4px] text-base font-normal leading-[19px] text-[#4B5563]">
              <MessageCircle className="h-[16px] w-[16px] text-[#4B5563]" />
              {data?.comments.length}
            </span>
          </div>
          <button onClick={() => setNewsDetails(data!)}>
            <span className="flex items-center gap-[4px] text-lg font-medium leading-[21px] text-[#1D3557]">
              Read More{" "}
              <ArrowUpRight className="h-[24px] w-[24px] text-[#1D3557]" />
            </span>
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsCart;
