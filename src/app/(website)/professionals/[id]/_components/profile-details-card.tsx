import { MapPin, Star } from "lucide-react";

import Image from "next/image";
import ProfileCartButton from "./tabs/profile-cart-button";

// Mock data for a vendor profile
const vendorProfile = {
  name: "Dr Sarah Green",
  title: "Vegan Nutritionist & Wellness Coach",
  location: "New York, USA",
  rating: 4.8,
  reviews: 127,
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professionial%20detail-vD0HtZP25Z4ygrNjwxW74dhI3OxbpU.png",
  heroTitle: "Dr Sarah Green",
  heroDescription:
    "Empowering you to thrive on a plant-based diet. Expert nutrition guidance for optimal health and wellness.",
  heroImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professionial%20detail-vD0HtZP25Z4ygrNjwxW74dhI3OxbpU.png",
};
export function ProfileCard() {
  return (
    <div className="container mx-auto min-h-[248px] rounded-[20px] bg-white px-0 shadow-none">
      <div className="flex w-full flex-col justify-between p-[16px] md:flex-row">
        <div className="w-full items-center gap-6 md:flex">
          <div className="relative h-[200px] w-full rounded-[16px] md:w-[200px]">
            <Image
              src="https://res.cloudinary.com/dgnustmny/image/upload/v1738670389/pexels-elly-fairytale-3822688_1_pn1lrl.png"
              alt={vendorProfile.name}
              className="rounded-[16px] object-cover"
              fill
            />
          </div>
          <div className="pt-[24px] md:pt-0">
            <h2 className="font-lexend text-[16px] font-normal leading-[20px] text-[#1D3557] md:text-[20px] md:leading-[25px]">
              {vendorProfile.name}
            </h2>
            <p className="mt-[4px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563] md:text-[16px] md:leading-[19.36px]">
              {vendorProfile.title}
            </p>

            <div className="*text-[#4B5563] flex flex-col justify-center gap-2 pt-6">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {vendorProfile.location}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-muted-foreground">
                  {vendorProfile.rating} ({vendorProfile.reviews} Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <ProfileCartButton />
        </div>
      </div>
    </div>
  );
}
