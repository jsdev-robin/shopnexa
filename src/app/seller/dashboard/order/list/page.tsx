import React from "react";
import { Metadata } from "next";
import SellerProductOrderList from "@/components/seller/order/SellerProductOrderList";
import PacmanLoader from "@/components/common/PacmanLoader";

export const metadata: Metadata = {
  title: "Seller Order List - Mun Bangladesh",
  description:
    "View and manage your orders effortlessly. Stay updated on order statuses, track details, and ensure smooth transactions with Mun Bangladesh.",
};

const SellerProductOrderListPage = () => {
  return (
    <React.Suspense fallback={<PacmanLoader />}>
      <SellerProductOrderList />
    </React.Suspense>
  );
};

export default SellerProductOrderListPage;
