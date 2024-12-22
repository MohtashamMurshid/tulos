"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { HeaderData } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import SocailMedia from "./SocailMedia";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full shadow-xl dark:bg-black bg-slate-200 md:hidden  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="min-w-72 max-w-96 h-full p-10 border-r flex flex-col gap-6 "
      >
        <div className="flex justify-between items-center ">
          <Logo>Tulos</Logo>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <nav className="flex flex-col items-start capitalize font-semibold ">
          {HeaderData.map((item) => (
            <Link href={item.path} key={item.name} onClick={onClose}>
              <Button
                variant="link"
                className={`text-xl hover:underline transition-all  ${
                  pathname === item.path ? "underline" : "text-gray-500"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
        <SocailMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
