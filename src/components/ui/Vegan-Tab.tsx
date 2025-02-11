import { cn } from "@/lib/utils";
import { LayoutGroup, motion } from "framer-motion";
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
}

const VeganTabs: FC<AnimatedTabsProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0]?.id,
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  return (
    <LayoutGroup>
      <div className="w-full">
        <nav className="inline-flex min-w-full space-x-1 border-b-2 border-[#9CA3AF]">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              animate
              className={cn(
                "relative text-nowrap px-4 py-2 text-[18px] font-medium",
                "",
                activeTab === tab.id
                  ? "border-b-0 border-primary text-[#1F2937]"
                  : "text-[#6B7280] hover:text-gray-700",
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-[-4px] left-0 h-[4px] w-full"
                  layoutId="underline"
                  style={{ backgroundColor: "#1F2937" }}
                />
              )}
              {tab.label}
            </motion.button>
          ))}
        </nav>
      </div>
    </LayoutGroup>
  );
};

export default VeganTabs;
