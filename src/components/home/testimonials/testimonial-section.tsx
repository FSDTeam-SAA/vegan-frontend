"use client";
import { TestimonialCarousel } from "./testimonial-carousel";

export default function TestimonialSection() {
  return (
    <div className="relative mx-auto p-4 py-[80px] sm:container">
      <h2 className="mb-20 w-[191px] text-wrap text-2xl font-medium leading-10 text-[#1D3557] md:w-full md:text-[32px]">
        What They&apos;ve Said About Us
      </h2>
      <TestimonialCarousel />
    </div>
  );
}
