import { Metadata } from "next";
import React from "react";
import SellerStore from "@/components/seller/store/SellerStore";
import PacmanLoader from "@/components/common/PacmanLoader";

export const metadata: Metadata = {
  title: "Seller Store - Mun Bangladesh",
  description:
    "Manage your seller store on Mun Bangladesh. Update products, track sales, and optimize your business efficiently.",
};

const SellerStorePage = () => {
  return (
    <>
      <React.Suspense fallback={<PacmanLoader />}>
        <SellerStore />
      </React.Suspense>
    </>
  );
};

export default SellerStorePage;
