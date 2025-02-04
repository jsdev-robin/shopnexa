import React from "react";
import { Metadata } from "next";
import SellerOrderDetails from "@/components/seller/order/SellerOrderDetails";
import PacmanLoader from "@/components/common/PacmanLoader";

export const metadata: Metadata = {
  title: "Seller Order Details - Mun Bangladesh",
  description:
    "Access detailed information about your orders. View order items, payment status, and delivery updates for seamless order management with Mun Bangladesh.",
};

const SellerOrderDetailsPage = () => {
  return (
    <>
      <React.Suspense fallback={<PacmanLoader />}>
        <SellerOrderDetails />
      </React.Suspense>
    </>
  );
};

export default SellerOrderDetailsPage;
