import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    title: "Some Highlight Statements",
    subtitle: "Describe Your Vegan Journey",
    content:
      "My vegan journey began as a commitment to a healthier lifestyle and a more sustainable planet. Over time, it evolved into a deeper understanding of animal welfare and the importance of mindful consumption. Today, I'm proud to support ethical, plant-based practices that align with my values, inspiring others to make compassionate choices",
  },
  {
    title: "Personal Growth",
    subtitle: "Share Your Experience",
    content:
      "Through veganism, I discovered not just a diet but a pathway to personal growth. Each meal became an opportunity to make a positive impact, and every choice reflected my commitment to compassion.",
  },
  {
    title: "Community Impact",
    subtitle: "Making a Difference",
    content:
      "Being part of the vegan community has shown me how individual choices can create collective change. Together, we're building a more sustainable and ethical future for all.",
  },
  {
    title: "Personal Growth",
    subtitle: "Share Your Experience",
    content:
      "Through veganism, I discovered not just a diet but a pathway to personal growth. Each meal became an opportunity to make a positive impact, and every choice reflected my commitment to compassion.",
  },
];

export function AboutCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrevious = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <div className="rounded-[8px] bg-white">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="p-6">
                  <div className="">
                    <h2 className="mb-6 font-lexend text-lg leading-[18px] text-[#1D3557] md:text-xl md:font-medium md:leading-[25px]">
                      {testimonial.title}
                    </h2>
                    <h3 className="mb-2 font-inter text-lg font-medium text-[#374151] md:text-xl md:leading-[30px]">
                      {testimonial.subtitle}
                    </h3>
                    <p className="font-inter md:text-lg text-[16px] italic leading-[30px] text-[#374151]">
                      {testimonial.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-2 flex items-center gap-4 pb-6 pl-6">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="rounded-full p-2 pl-0 transition-colors hover:bg-gray-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full bg-[#1D3557] transition-all duration-300",
                    current === index ? "w-8" : "h-2 w-2 opacity-50",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
