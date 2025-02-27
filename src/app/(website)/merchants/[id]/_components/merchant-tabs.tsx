"use client";
import { AboutCarousel } from "@/app/(website)/professionals/[id]/_components/tabs/AboutCarousel";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import dynamic from "next/dynamic";
import { useState } from "react";
import MerchantAbout from "./tabs/about/merchant-about";
import Merchantreviews from "./tabs/reviews/merchant-reviews";
const MerchantProducts = dynamic(
  () => import("./tabs/products/merchants-product"),
  {
    ssr: false,
  },
);

const tabs = [
  {
    id: "products",
    label: "Products",
  },
  {
    id: "about",
    label: "About Store",
  },
  {
    id: "reviews",
    label: "Reviews",
  },
] as VeganTab[];

interface Props {
  merchantId: string;
}

const MerchantsTabs = ({ merchantId }: Props) => {
  const [activeTab, setActiveTab] = useState("products");
  return (
    <div className="container">
      <VeganTabs
        defaultActiveTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        tabs={tabs}
      ></VeganTabs>

      <div className="mt-[40px]">
        {activeTab === "products" && (
          <>
            <MerchantProducts merchantId={merchantId} />
          </>
        )}
        {activeTab === "about" && (
          <>
            <MerchantAbout />
            <AboutCarousel />
          </>
        )}
        {activeTab === "reviews" && (
          <>
            <Merchantreviews />
          </>
        )}
      </div>
    </div>
  );
};

export default MerchantsTabs;
