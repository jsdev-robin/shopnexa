import React from "react";
import { Metadata } from "next";
import SellerProductCreate from "@/components/seller/product/SellerProductCreate";

export const metadata: Metadata = {
  title: "Create Product - Mun Bangladesh",
  description:
    "Easily add new products to your store on Mun Bangladesh. Upload images, set prices, and manage inventory to grow your business.",
};

const SellerProductCreatePage = () => {
  return (
    <>
      <SellerProductCreate />
    </>
  );
};

export default SellerProductCreatePage;
