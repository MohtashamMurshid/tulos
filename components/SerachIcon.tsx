import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const SerachIcon = () => {
  return (
    <div className="cursor-pointer">
      <Link href="/search">
        <Search size={18} />
      </Link>
    </div>
  );
};

export default SerachIcon;
