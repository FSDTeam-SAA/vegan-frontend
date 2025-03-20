"use client";
import { AboutCarousel } from "@/app/(website)/professionals/[id]/_components/tabs/AboutCarousel";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import dynamic from "next/dynamic";
import { useState } from "react";
import MerchantAbout from "./tabs/about/merchant-about";
import { MerchantReviewContainer } from "./tabs/reviews/merchant-review-container";
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
  loggedinUserId?: string;
}

const MerchantsTabs = ({ merchantId, loggedinUserId }: Props) => {
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
          <div className="space-y-5">
            <MerchantAbout merchatId={merchantId} />
            <AboutCarousel merchatId={merchantId} />
          </div>
        )}
        {activeTab === "reviews" && (
          <>
            <MerchantReviewContainer
              userId={merchantId}
              loggedinUserId={loggedinUserId}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MerchantsTabs;
