"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import { useState } from "react";
import MerchantAbout from "./tabs/about/merchant-about";
import Merchantreviews from "./tabs/reviews/merchant-reviews";
import { AboutCarousel } from "@/app/(website)/professionals/[id]/_components/tabs/AboutCarousel";
const MerchantProducts = dynamic(
  () => import("./tabs/products/merchants-product"),
  {
    ssr: false,
  },
);

const MerchantsTabs = () => {
  const [activeTab, setActiveTab] = useState("products");
  return (
    <div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="container mt-8"
      >
        <TabsList className="grid w-full grid-cols-2 border-b-[#6B7280] bg-transparent text-[#6B7280] *:text-[20px] md:grid-cols-6">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="about">About Store</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="pt-[40px]">
          <MerchantProducts />
        </TabsContent>

        <TabsContent value="about" className="space-y-8 pt-[40px]">
          <MerchantAbout />
          <AboutCarousel />
        </TabsContent>

        <TabsContent value="reviews" className="pt-[40px]">
          <Merchantreviews />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MerchantsTabs;
