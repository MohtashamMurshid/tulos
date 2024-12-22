import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import PriceView from "./PriceView";
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group text-sm rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 ">
      <div
        className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 
      dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 
      overflow-hidden"
      >
        {product?.image && (
          <Link href={`/product`}>
            <Image
              src={urlFor(product?.image[1]).url()}
              alt="ProductImage"
              width={500}
              height={500}
              priority
              className="w-full h-72 object-cover overflow-hidden hover:scale-105 transition-transform duration-300"
            />
          </Link>
        )}
      </div>
      <div className="m-4">
        <h2 className="text-lg truncate overflow-hidden font-semibold">
          {product?.name}
        </h2>
        <p className="text-gray-400 mt-2">{product?.Intro}</p>
        <PriceView
          price={product?.price ?? 0}
          discount={product?.discount ?? 0}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default ProductCard;
