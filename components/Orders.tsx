import { ListOrdered } from "lucide-react";
import Link from "next/link";
import React from "react";

const Orders = () => {
  return (
    <div className="cursor-pointer">
      <Link href="/orders">
        <ListOrdered size={18} />
      </Link>
    </div>
  );
};

export default Orders;
