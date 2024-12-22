import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface NoProductsAvailibleProps {
  selectedTab: string;
  className?: string;
}

const NoProductsAvailible = ({
  selectedTab,
  className,
}: NoProductsAvailibleProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 dark:bg-gray-900/50 rounded-lg w-full mt-10",
        className
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <h2 className="font-2xl font-bold text-gray-800 dark:text-gray-100 ">
          No Product Availible
        </h2>
      </motion.div>
      <motion.p className="text-gray-600">
        No products are availible on <span>{selectedTab}</span>
      </motion.p>
      <motion.div
        className="flex items-center justify-center space-x-2 text-blue-600"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <Loader2 className="animate-spin" />{" "}
        <span>We are restocking shortly</span>
      </motion.div>
      <motion.p className="text-sm text-gray-600">
        Please check back later or explore our other categories.
      </motion.p>
    </div>
  );
};

export default NoProductsAvailible;
