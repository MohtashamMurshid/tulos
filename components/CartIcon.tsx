import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart">
      <ShoppingBag size={18} />
    </Link>
  );
};

export default CartIcon;
