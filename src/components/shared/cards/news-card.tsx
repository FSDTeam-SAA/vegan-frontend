import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { truncateText } from "@/lib/helper";
import { News } from "@/types/organization";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface Props {
  data?: News;
}

const NewsCart = ({ data }: Props) => {
  const desc = truncateText(data?.shortDescription ?? "", 96);

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
            <span className="flex items-center gap-[4px] text-base font-normal leading-[19px] text-[#4B5563]">
              <Heart className="h-[16px] w-[16px] text-[#4B5563]" />{" "}
              {data?.likedBy.length}
            </span>
            <span className="flex items-center gap-[4px] text-base font-normal leading-[19px] text-[#4B5563]">
              {" "}
              <MessageCircle className="h-[16px] w-[16px] text-[#4B5563]" />{" "}
              {data?.comments.length}
            </span>
          </div>
          <div>
            <span className="flex items-center gap-[4px] text-lg font-medium leading-[21px] text-[#1D3557]">
              Read More{" "}
              <ArrowUpRight className="h-[24px] w-[24px] text-[#1D3557]" />
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsCart;
