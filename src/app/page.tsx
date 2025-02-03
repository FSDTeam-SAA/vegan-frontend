import HomeAboutSection from "@/components/home/about/about";
import CTA_section from "@/components/home/CTA/CTA_section";
import HeroSection from "@/components/home/hero-section/hero";
import TopOrganizationCard from "@/components/shared/cards/top-organization-card";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomeAboutSection />
      <CTA_section />

      <div className="min-h-screen w-full flex justify-center items-center">
        <TopOrganizationCard />
      </div>
    </div>
  );
}
