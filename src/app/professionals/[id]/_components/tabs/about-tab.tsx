import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const highlights = [
  {
    title: "Describe Your Vegan Journey",
    content:
      "My vegan journey began as a commitment to a healthier lifestyle and a more sustainable planet. Over time, it evolved into a deeper understanding of animal welfare and the importance of mindful consumption. Today, I'm proud to support ethical, plant-based practices that align with my values, inspiring others to make compassionate choices",
  },
  {
    title: "Professional Philosophy",
    content:
      "I believe in empowering individuals with knowledge and practical tools to make sustainable dietary choices. My approach combines scientific evidence with compassionate guidance, ensuring each client feels supported on their unique journey to plant-based wellness.",
  },
  {
    title: "Vision for the Future",
    content:
      "I envision a world where plant-based nutrition is accessible to everyone, contributing to better health outcomes and environmental sustainability. Through education and personalized support, I'm committed to making this vision a reality.",
  },
];
export function AboutTab() {
  return (
    <>
      <Card className="my-10 max-w-[892px] ">
        <CardContent className="p-6">
          <h3 className="mb-4 text-xl font-semibold leading-[25px] text-[#1D3557]">
            About Me
          </h3>
          <p className="text-[18px] font-normal leading-[30px] text-[#374151]">
            Dr. Sarah Green is a certified nutritionist specializing in
            plant-based nutrition with over 12 years of experience helping
            clients transition to and thrive on a vegan diet. She holds a Ph.D.
            in Nutritional Sciences from Cornell University and is certified in
            plant-based nutrition through the T. Colin Campbell Center for
            Nutrition Studies.
          </p>
        </CardContent>
      </Card>

      <Card className="max-w-[892px]">
        <CardContent className="p-6">
          <h2 className="mb-6 text-2xl font-bold">Some Highlight Statements</h2>
          <Carousel className="mx-auto w-full max-w-4xl">
            <CarouselContent>
              {highlights.map((highlight, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <h3 className="mb-4 text-xl font-semibold">
                      {highlight.title}
                    </h3>
                    <p className="text-lg italic text-muted-foreground">
                      &apos;{highlight.content}&apos;
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 py-4">
              <CarouselPrevious className="relative translate-y-0" />
              <CarouselNext className="relative translate-y-0" />
            </div>
          </Carousel>
        </CardContent>
      </Card>
    </>
  );
}
