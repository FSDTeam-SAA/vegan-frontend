"use client";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import { useState } from "react";
import { AboutTab } from "./about-tab";
import { ExperienceTab } from "./experience-tab";
import { FAQsTab } from "./faqs-tab";
import { LiveStreamTab } from "./live-stream-tab";
import { ReviewsTab } from "./reviews-tab";
import { ServicesTab } from "./services-tab";
const lists = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "live-stream",
    label: "Live Stream",
  },
  {
    id: "faqs",
    label: "FAQs",
  },
  {
    id: "reviews",
    label: "Reviews",
  },
] as VeganTab[];

const ProfessionalTab = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  return (
    <div className="container mt-[40px] md:mt-[56px]">
      <div className="no-scrollbar overflow-x-auto">
        <VeganTabs
          tabs={lists}
          defaultActiveTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
      </div>
      <div className="mt-[40px]">
        {activeTab === "about" && <AboutTab />}
        {activeTab === "experience" && <ExperienceTab />}
        {activeTab === "services" && <ServicesTab />}
        {activeTab === "live-stream" && <LiveStreamTab />}
        {activeTab === "faqs" && <FAQsTab />}
        {activeTab === "reviews" && <ReviewsTab />}
      </div>
    </div>
  );
};

export default ProfessionalTab;
