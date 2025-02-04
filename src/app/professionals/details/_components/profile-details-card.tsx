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
  image,
}: ProfileCardProps) {
  return (
    <Card className="container mx-auto min-h-[248px] px-0">
      <CardContent className="flex justify-between p-6">
        <div className="items-center gap-6 md:flex">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            className="rounded-lg object-cover md:min-h-[200px] md:min-w-[200px]"
            width={200}
            height={200}
          />
          <div className="">
            <h2 className="text-[20px] text-[#1D3557]">{name}</h2>
            <p className="leading-[19px] text-[#4B5563]">{title}</p>

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
