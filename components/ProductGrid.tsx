"use client";
import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import NoProductsAvailible from "./NoProductsAvailible";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0].value || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = `*[_type=="product" && variant==$variant] | order(name asc) `;
  const params = { variant: selectedTab.toLocaleLowerCase() };
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        console.log(response);
        setProducts(await response);
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedTab]);
  return (
    <div className="flex flex-col items-center mt-8">
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 w-full ">
              {products.map((products: Product) => (
                <div key={products._id}>
                  <ProductCard product={products} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              <NoProductsAvailible selectedTab={selectedTab} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
