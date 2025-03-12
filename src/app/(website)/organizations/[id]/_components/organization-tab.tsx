"use client";
import AnimatedTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import dynamic from "next/dynamic";
import { useState } from "react";
import OrganizationAbout from "./tab/about/organization-about";
import OrganizationNewsContainer from "./tab/news/organization-news-container";
const OrganizationEventContainer = dynamic(
  () => import("./tab/events/organization-event-container"),
  { ssr: false },
);

const OrganizationVolunteerEventContainer = dynamic(
  () => import("./tab/volunteer/volunteer-container"),
  {
    ssr: false,
  },
);

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

interface Props {
  organizationId: string;
}

const OrganizationTab = ({ organizationId }: Props) => {
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
      />

      <div className="mt-[40px]">
        {activeTab === "about" && (
          <>
            <OrganizationAbout organizationId={organizationId} />
          </>
        )}
        {activeTab === "news" && <OrganizationNewsContainer />}
        {activeTab === "events" && (
          <OrganizationEventContainer organizationId={organizationId} />
        )}
        {activeTab === "volunteer" && (
          <OrganizationVolunteerEventContainer
            organizationId={organizationId}
          />
        )}
      </div>
    </div>
  );
};

export default OrganizationTab;
