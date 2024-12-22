import { productType } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import { Repeat } from "lucide-react";
interface HomeTabBarProps {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: HomeTabBarProps) => {
  return (
    <div className="flex justify-between gap-2.5">
      <div className="flex justify-between gap-2.5">
        {productType.map((tab) => (
          <Button
            variant="ghost"
            key={tab.value}
            onClick={() => onTabSelect(tab.value)}
            className={`rounded-2xl p-2 ${
              selectedTab === tab.value
                ? "text-gray-800 dark:text-gray-100 font-bold outline rounded-2xl"
                : "text-gray-500"
            } px-4 py-2`}
          >
            {tab.title}
          </Button>
        ))}
      </div>
      <Button variant="ghost" className="rounded-2xl text-gray-500">
        <Repeat size={16} />
      </Button>
    </div>
  );
};

export default HomeTabBar;
