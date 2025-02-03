import HomeAboutSection from "@/components/home/about/about";
import CTA_section from "@/components/home/CTA/CTA_section";
import FeatureSection from "@/components/home/features/feature-section";
import HeroSection from "@/components/home/hero-section/hero";
import TestimonialSection from "@/components/home/testimonials/testimonial-section";
import TopMarchants from "@/components/home/top-marchants/top-marchants";
import TopOrganizations from "@/components/home/top-organizations/top-organizatins";
import TopProfessionals from "@/components/home/top-professional/top-professionals";
import MerchantCard from "@/components/shared/cards/merchant-card";

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
      <div className="container flex min-h-screen w-full items-center justify-center">
        <MerchantCard />
      </div>
    </div>
  );
}
