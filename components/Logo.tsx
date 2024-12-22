import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  children?: React.ReactNode;
}

const Logo = ({ className, children }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("text-2xl font-black tracking-wider uppercase", className)}
    >
      <h2>{children}</h2>
    </Link>
  );
};

export default Logo;
