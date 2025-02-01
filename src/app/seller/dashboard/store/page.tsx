import { Metadata } from "next";
import React from "react";
import SellerStore from "@/components/seller/store/SellerStore";

export const metadata: Metadata = {
  title: "Seller Store - Mun Bangladesh",
  description:
    "Manage your seller store on Mun Bangladesh. Update products, track sales, and optimize your business efficiently.",
};

const SellerStorePage = () => {
  return (
    <>
      <SellerStore />
    </>
  );
};

export default SellerStorePage;
