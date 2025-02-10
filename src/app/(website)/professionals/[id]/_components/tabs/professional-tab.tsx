"use client";
import { VeganTab } from "@/components/ui/Vegan-Tab";
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
      {/* <AnimatedTabs
        tabs={lists}
        onTabChange={(id) =>
          setActiveTab(
            id as
              | "about"
              | "experience"
              | "services"
              | "live-stream"
              | "faqs"
              | "reviews",
          )
        }
      /> */}

      <nav className="flex space-x-1 border-b-2 border-white">
        {lists.map((tab) => (
          <button
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
            className={cn(
              "relative px-4 py-2 text-[18px] font-medium",
              "",
              activeTab === tab.id
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700",
            )}
          >
            {tab.label}
            {/* <span
                className={cn(
                  "ml-2 rounded-full p-1 px-2 text-xs text-gray-600",
                  activeTab === tab.id
                    ? "h-[32px] w-[32px] rounded-full bg-black text-white"
                    : "bg-gray-100",
                )}
              >
                {tab.count}
              </span> */}
          </button>
        ))}
      </nav>
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
