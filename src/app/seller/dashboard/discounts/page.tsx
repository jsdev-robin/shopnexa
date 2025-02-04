import React from "react";
import SellerDiscount from "@/components/seller/disocunts/SellerDiscount";
import { Metadata } from "next";
import PacmanLoader from "@/components/common/PacmanLoader";

export const metadata: Metadata = {
  title: "Seller Discounts - Mun Bangladesh",
  description:
    "Exclusive discounts for sellers on Mun Bangladesh. Save on fees, boost your sales, and maximize profits with our special seller discount programs.",
};

const SellerDisocuntPage = () => {
  return (
    <>
      <React.Suspense fallback={<PacmanLoader />}>
        <SellerDiscount />
      </React.Suspense>
    </>
  );
};

export default SellerDisocuntPage;
