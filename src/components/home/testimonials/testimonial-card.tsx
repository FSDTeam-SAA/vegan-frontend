import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function TestimonialCard({
  img,
  name,
  ratings,
  description,
}: {
  img: string;
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
            <h2 className="text-[#111827] text-[18px] py-2">{name}</h2>
            <div>
              {Array.from({ length: ratings }, (_, i) => (
                <span key={i}>⭐️</span>
              ))}
            </div>
          </div>
          <p className="text-[18px] ">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
