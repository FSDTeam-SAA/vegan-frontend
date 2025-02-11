"use client";
import { VeganTab } from "@/components/ui/Vegan-Tab";
import { LayoutGroup, motion } from "framer-motion";
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
  const [activeTab, setActiveTab] = useState<
    "about" | "experience" | "services" | "live-stream" | "faqs" | "reviews"
  >("about");
  function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="container mt-[40px] md:mt-[56px]">
      <div className="no-scrollbar overflow-x-auto">
        <LayoutGroup>
          <nav className="flex w-full space-x-1 border-b-2 border-[#9CA3AF]">
            {lists.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as
                      | "about"
                      | "experience"
                      | "services"
                      | "live-stream"
                      | "faqs"
                      | "reviews",
                  )
                }
                animate
                className={cn(
                  "relative text-nowrap px-4 py-2 text-[18px] font-medium",
                  "",
                  activeTab === tab.id
                    ? "border-b-0 border-primary text-[#1F2937]"
                    : "text-[#6B7280] hover:text-gray-700",
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 h-[4px] w-full"
                    layoutId="underline"
                    style={{ backgroundColor: "#1F2937" }}
                  />
                )}
                {tab.label}
              </motion.button>
            ))}
          </nav>
        </LayoutGroup>
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
