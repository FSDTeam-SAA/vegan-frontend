"use client";
import AnimatedTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import { useState } from "react";
import OrganizationEventContainer from "./tab/events/organization-event-container";
import OrganizationNewsContainer from "./tab/news/organization-news-container";
import VolunteerContainer from "./tab/volunteer/volunteer-container";

const lists = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "news",
    label: "News",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "volunteer",
    label: "Volunteer",
  },
] as VeganTab[];

const OrganizationTab = () => {
  const [activeTab, setActiveTab] = useState<
    "about" | "news" | "events" | "volunteer"
  >("about");
  return (
    <div className="container mt-[40px] md:mt-[56px]">
      <AnimatedTabs
        tabs={lists}
        onTabChange={(id) =>
          setActiveTab(id as "about" | "news" | "events" | "volunteer")
        }
        activeColor="#FFFFFF"
      />

      <div className="mt-[40px]">
        {activeTab === "about" && <></>}
        {activeTab === "news" && <OrganizationNewsContainer />}
        {activeTab === "events" && <OrganizationEventContainer />}
        {activeTab === "volunteer" && <VolunteerContainer />}
      </div>
    </div>
  );
};

export default OrganizationTab;
