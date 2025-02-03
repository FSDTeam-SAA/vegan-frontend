import HomeAboutSection from "@/components/home/about/about";
import CTA_section from "@/components/home/CTA/CTA_section";
import FeatureSection from "@/components/home/features/feature-section";
import HeroSection from "@/components/home/hero-section/hero";
import TestimonialSection from "@/components/home/testimonials/testimonial-section";
import TopMarchants from "@/components/home/top-marchants/top-marchants";
import TopOrganizations from "@/components/home/top-organizations/top-organizatins";
import TopProfessionals from "@/components/home/top-professional/top-professionals";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomeAboutSection />
      <TopProfessionals />
      <TopMarchants />
      <TopOrganizations />
      <FeatureSection />
      <TestimonialSection />
      <CTA_section />
    </div>
  );
}
