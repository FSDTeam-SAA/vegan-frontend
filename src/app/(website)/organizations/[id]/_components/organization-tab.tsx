"use client";
import AnimatedTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import dynamic from "next/dynamic";
import { useState } from "react";
import OrganizationAbout from "./tab/about/organization-about";
import OrganizationLiveSteam from "./tab/live-stream/organiization-live-steam";
import OrganizationNewsContainer from "./tab/news/organization-news-container";
import { OrganizationReviewContainer } from "./tab/organizatioin-review/organization-review-container";
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
  {
    id: "live-stream",
    label: "Live Stream",
  },
  {
    id: "reviews",
    label: "Reviews",
  },
] as VeganTab[];

interface Props {
  organizationId: string;
  loggedInUserId: string;
}

const OrganizationTab = ({ organizationId, loggedInUserId }: Props) => {
  const [activeTab, setActiveTab] = useState<
    "about" | "news" | "events" | "volunteer" | "live-stream" | "reviews"
  >("about");
  return (
    <div className="container mt-[40px] md:mt-[56px]">
      <AnimatedTabs
        tabs={lists}
        onTabChange={(id) =>
          setActiveTab(
            id as
              | "about"
              | "news"
              | "events"
              | "volunteer"
              | "live-stream"
              | "reviews",
          )
        }
      />

      <div className="mt-[40px]">
        {activeTab === "about" && (
          <>
            <OrganizationAbout organizationId={organizationId} />
          </>
        )}
        {activeTab === "news" && (
          <OrganizationNewsContainer
            organizationID={organizationId}
            loggedInUserId={loggedInUserId}
          />
        )}
        {activeTab === "events" && (
          <OrganizationEventContainer
            organizationId={organizationId}
            loggedInUserId={loggedInUserId}
          />
        )}
        {activeTab === "volunteer" && (
          <OrganizationVolunteerEventContainer
            organizationId={organizationId}
            loggedInUserId={loggedInUserId}
          />
        )}
        {activeTab === "live-stream" && (
          <OrganizationLiveSteam
            organizationId={organizationId}
            loggedinuserId={loggedInUserId}
          />
        )}

        {activeTab === "reviews" && (
          <OrganizationReviewContainer
            userId={organizationId}
            loggedinUserId={loggedInUserId}
          />
        )}
      </div>
    </div>
  );
};

export default OrganizationTab;
