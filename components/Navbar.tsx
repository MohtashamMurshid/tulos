"use client";
import Link from "next/link";
import React from "react";
import { HeaderData } from "@/constants/index";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:inline-flex  w-1/3 items-center text-sm capitalize font-semibold ">
      {HeaderData.map((item) => (
        <Link href={item.path} key={item.name}>
          <Button
            variant="link"
            className={`${
              pathname === item.path ? "underline" : "text-gray-500"
            }`}
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
