"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ProfileCard } from "./profile-details-card";
import { AboutTab } from "./tabs/about-tab";
import { ExperienceTab } from "./tabs/experience-tab";
import { FAQsTab } from "./tabs/faqs-tab";
import { ReviewsTab } from "./tabs/reviews-tab";
import { ServicesTab } from "./tabs/services-tab";
import { LiveStreamTab } from "./tabs/live-stream-tab";

export default function Page() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#f5f0eb] pt-[56px]">
      <main className="mx-auto px-4 py-8">
        <ProfileCard
          name="Dr Sarah Green"
          title="Vegan Nutritionist & Wellness Coach"
          location="New York, USA"
          rating={4.8}
          reviews={127}
          image="https://res.cloudinary.com/dgnustmny/image/upload/v1738670389/pexels-elly-fairytale-3822688_1_pn1lrl.png"
        />

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="container mt-9 px-0"
        >
          <TabsList className="no-scrollbar flex w-full justify-start gap-4 overflow-x-scroll rounded-none border-b- border-b-[#6B7280] bg-transparent text-[#6B7280] *:text-[16px] md:*:mx-[42px] md:*:my-[10px] md:*:text-[20px]">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="live-stream">Live Stream</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <AboutTab />
          </TabsContent>

          <TabsContent value="experience" className="mt-[55px]">
            <ExperienceTab />
          </TabsContent>

          <TabsContent value="services" className="mt-10">
            <ServicesTab />
          </TabsContent>

          <TabsContent value="live-stream" className="mt-10">
            <LiveStreamTab />
          </TabsContent>

          <TabsContent value="faqs" className="mt-10">
            <FAQsTab />
          </TabsContent>

          <TabsContent value="reviews" className="mt-10 max-w-[848px]">
            <ReviewsTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
