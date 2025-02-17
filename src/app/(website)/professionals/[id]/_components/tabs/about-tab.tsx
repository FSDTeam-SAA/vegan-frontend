import { Card, CardContent } from "@/components/ui/card";

import { AboutCarousel } from "./AboutCarousel";

export default function AboutTab() {
  return (
    <div className="max-w-[892px]">
      <Card className="mb-10 mt-[55px] border-none shadow-none">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-medium leading-[25px] text-[#1D3557] md:text-xl">
            About Me
          </h3>
          <p className="text-[16px] font-normal leading-[28px] text-[#374151] md:text-[18px] md:leading-[30px]">
            Dr. Sarah Green is a certified nutritionist specializing in
            plant-based nutrition with over 12 years of experience helping
            clients transition to and thrive on a vegan diet. She holds a Ph.D.
            in Nutritional Sciences from Cornell University and is certified in
            plant-based nutrition through the T. Colin Campbell Center for
            Nutrition Studies.
          </p>
        </CardContent>
      </Card>

      <AboutCarousel />
    </div>
  );
}
