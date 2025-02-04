"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCard } from "./profile-details-card";
import { AboutTab } from "./tabs/about-tab";
import { ExperienceTab } from "./tabs/experience-tab";
import { ServicesTab } from "./tabs/services-tab";
import { LiveStreamTab } from "./tabs/live-stream-tab";
import { FAQsTab } from "./tabs/faqs-tab";
import { ReviewsTab } from "./tabs/reviews-tab";

export default function Page() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      <main className="mx-auto px-4 py-8">
        <ProfileCard
          name="Dr Sarah Green"
          title="Vegan Nutritionist & Wellness Coach"
          location="New York, USA"
          rating={4.8}
          reviews={127}
          image="https://i.ibb.co.com/yBhwqJWJ/pexels-los-muertos-crew-10041258.png"
        />

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="container mt-8"
        >
          <TabsList className="grid w-full grid-cols-2 border-b-[#6B7280] bg-transparent text-[20px] text-[#6B7280] md:grid-cols-6">
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

          <TabsContent value="experience" className="mt-6">
            <ExperienceTab />
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <ServicesTab />
          </TabsContent>

          <TabsContent value="live-stream" className="mt-6">
            <LiveStreamTab />
          </TabsContent>

          <TabsContent value="faqs" className="mt-6">
            <FAQsTab />
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <ReviewsTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
