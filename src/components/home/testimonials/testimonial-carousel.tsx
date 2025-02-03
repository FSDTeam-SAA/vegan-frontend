"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./testimonial-card";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import img from "../../../../Public/assets/testimonial.png";

const data = [
  {
    id: 1,
    img: "/assets/testimonial.png",
    name: "Maya Russo",
    ratings: 5,
    description:
      "“They didn’t just design a beautiful space—they really understood what I wanted and brought it to life. I love coming home now. I wanted something modern but cozy.",
  },
  {
    id: 2,
    img: "/assets/testimonial.png",
    name: "Maya Russo",
    ratings: 5,
    description:
      "“They didn’t just design a beautiful space—they really understood what I wanted and brought it to life. I love coming home now. I wanted something modern but cozy.",
  },
  {
    id: 3,
    img: "/assets/testimonial.png",
    name: "Maya Russo",
    ratings: 5,
    description:
      "“They didn’t just design a beautiful space—they really understood what I wanted and brought it to life. I love coming home now. I wanted something modern but cozy.",
  },
  {
    id: 4,
    img: "/assets/testimonial.png",
    name: "Maya Russo",
    ratings: 5,
    description:
      "“They didn’t just design a beautiful space—they really understood what I wanted and brought it to life. I love coming home now. I wanted something modern but cozy.",
  },
  {
    id: 5,
    img: "/assets/testimonial.png",
    name: "Maya Russo",
    ratings: 5,
    description:
      "“They didn’t just design a beautiful space—they really understood what I wanted and brought it to life. I love coming home now. I wanted something modern but cozy.",
  },
];

export function TestimonialCarousel({}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel className="w-full" plugins={[plugin.current]}>
      <CarouselContent className="-ml-1">
        {data.map((items) => (
          <CarouselItem
            key={items.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <TestimonialCard
              img={img}
              name={items.name}
              ratings={items.ratings}
              description={items.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -top-[6.2rem] right-12 flex justify-center">
        <CarouselPrevious className="h-10 w-10 border border-[#1D3557] bg-transparent" />
        <CarouselNext className="h-10 w-10 border border-[#1D3557] bg-transparent" />
      </div>
    </Carousel>
  );
}
