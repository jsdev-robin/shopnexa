import React from "react";
import SellerProductList from "@/components/seller/product/SellerProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Products - Mun Bangladesh",
  description:
    "Browse through our diverse collection of handmade, vintage, and custom products. Discover unique gifts and treasures perfect for any occasion. Shop now at Mun Bangladesh.",
};

const SellerProductListPage = () => {
  return (
    <>
      <SellerProductList />
    </>
  );
};

export default SellerProductListPage;
