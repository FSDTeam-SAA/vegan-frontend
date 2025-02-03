import HeroSection from "@/components/home/hero-section/hero";
import HomeAboutSection from "@/components/home/about/about";
import CTA_section from "@/components/home/CTA/CTA_section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomeAboutSection />
      <CTA_section />
    </div>
  );
}
