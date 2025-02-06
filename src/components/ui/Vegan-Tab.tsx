import { motion } from "framer-motion";
import type { FC } from "react";
import { useState } from "react";

export interface VeganTab {
  id: string;
  label: string;
}

interface AnimatedTabsProps {
  tabs: VeganTab[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  activeColor?: string;
}

const AnimatedTabs: FC<AnimatedTabsProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  activeColor = "bg-white",
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0]?.id,
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-[#1D3557]/60"
          } relative rounded-full px-3 py-1.5 text-[14px] font-medium text-[#1D3557] outline-sky-400 transition focus-visible:outline-2 md:text-[18px]`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className={`absolute inset-0 z-10 bg-[#1D3557] text-white mix-blend-overlay`}
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default AnimatedTabs;

// Usage Example:
// import AnimatedTabs from './AnimatedTabs';
// const tabsData = [
//   { id: "world", label: "World" },
//   { id: "ny", label: "N.Y." },
//   { id: "business", label: "Business" },
//   { id: "arts", label: "Arts" },
//   { id: "science", label: "Science" },
// ];
// <AnimatedTabs tabs={tabsData} onTabChange={(id) => console.log("Selected tab:", id)} activeColor="bg-blue-500" />
