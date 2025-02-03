import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function TestimonialCard({
  img,
  name,
  ratings,
  description,
}: {
  img: string | StaticImageData;
  name: string;
  ratings: number;
  description: string;
}) {
  return (
    <div className="p-1">
      <Card>
        <CardContent className="p-6">
          <div className="pb-6">
            <Image src={img} alt={name} width={56} height={56} />
            <h2 className="py-2 text-[18px] text-[#111827]">{name}</h2>
            <div className="flex gap-1 border-none">
              {Array.from({ length: ratings }, (_, i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-[18px]">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
