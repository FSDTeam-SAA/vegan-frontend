"use client";
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
      "Fun fact: 50% of our profit on each merchandise you purchase goes to charities.",
  },
  {
    title: "Personal Growth",
    subtitle: "Share Your Experience",
    content:
      "Fun fact: 50% of our profit on each merchandise you purchase goes to charities.",
  },
  {
    title: "Community Impact",
    subtitle: "Making a Difference",
    content:
      "Fun fact: 50% of our profit on each merchandise you purchase goes to charities.",
  },
  {
    title: "Personal Growth",
    subtitle: "Share Your Experience",
    content:
      "Fun fact: 50% of our profit on each merchandise you purchase goes to charities.",
  },
];

export function StoreHeaderCarousel() {
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
    <div className="flex h-[785px] w-full items-center justify-center rounded-[8px] bg-black/70 p-6 opacity-80">
      <Carousel setApi={setApi} className="container px-0">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="">
                  <p className="max-w-[920px] font-lexend text-[36px] font-semibold text-white md:text-[48px] md:leading-[72px] md:tracking-[-4%] lg:text-[56px] lg:leading-[84px]">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-2 flex items-center gap-4 pb-6 pl-6">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="rounded-full bg-transparent p-2 pl-0 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full bg-white transition-all duration-300",
                    current === index ? "w-8" : "h-2 w-2 opacity-50",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="rounded-full bg-transparent p-2 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
