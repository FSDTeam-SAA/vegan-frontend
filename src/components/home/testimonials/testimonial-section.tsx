import { TestimonialCarousel } from "./testimonial-carousel";

export default function TestimonialSection() {
  return (
    <div className="sm:container mx-auto py-[80px] relative p-4">
      <h2 className="md:text-[32px] md:w-full w-[191px] text-2xl text-wrap font-medium leading-10 mb-20 text-[#1D3557]">
        What They&apos;ve Said About Us
      </h2>
      <TestimonialCarousel />
    </div>
  );
}
