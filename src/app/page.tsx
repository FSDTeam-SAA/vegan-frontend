import HomeAboutSection from "@/components/home/about/about";
import CTA_section from "@/components/home/CTA/CTA_section";
import FeatureSection from "@/components/home/features/feature-section";
import HeroSection from "@/components/home/hero-section/hero";
import TestimonialSection from "@/components/home/testimonials/testimonial-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomeAboutSection />
      <CTA_section />
      <FeatureSection />
      <TestimonialSection />
    </div>
  );
}
