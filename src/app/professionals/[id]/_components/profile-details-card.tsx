import { MapPin, Star } from "lucide-react";
import { BiShoppingBag } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
}

export function ProfileCard({
  name,
  title,
  location,
  rating,
  reviews,
}: ProfileCardProps) {
  return (
    <Card className="container mx-auto min-h-[248px] w-full px-0 shadow-none">
      <CardContent className="flex w-full justify-between p-[16px] md:p-6">
        <div className="w-full items-center gap-6 md:flex">
          <div className="relative h-[200px] w-full rounded-[16px] md:w-[200px]">
            <Image
              src="https://res.cloudinary.com/dgnustmny/image/upload/v1738670389/pexels-elly-fairytale-3822688_1_pn1lrl.png"
              alt={name}
              className="rounded-[16px] object-cover"
              fill
            />
          </div>
          <div className="pt-[24px] md:pt-0">
            <h2 className="font-lexend text-[16px] font-normal leading-[20px] text-[#1D3557] md:text-[20px] md:leading-[25px]">
              {name}
            </h2>
            <p className="mt-[4px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563] md:text-[16px] md:leading-[19.36px]">
              {title}
            </p>

            <div className="*text-[#4B5563] flex flex-col justify-center gap-2 pt-6">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {location}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-muted-foreground">
                  {rating} ({reviews} Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="relative mt-[62px] hidden pr-0 *:text-[#1D3557] md:flex"
        >
          View Cart
          <BiShoppingBag className="h-[15.5px] w-[19.1px] text-white" />
          <span className="absolute -right-2 bottom-0 h-4 w-4 rounded-full bg-[#1D3557] text-[7.5px] font-light !text-white">
            2
          </span>
        </Button>
      </CardContent>
    </Card>
  );
}
