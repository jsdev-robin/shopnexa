import React from "react";
import { Metadata } from "next";
import SellerPurchaseOrders from "@/components/seller/order/SellerPurchaseOrders";
import PacmanLoader from "@/components/common/PacmanLoader";

export const metadata: Metadata = {
  title: "Seller Purchased Orders - Mun Bangladesh",
  description:
    "Manage and track your purchased orders with ease. Get insights into order details, payment history, and delivery status with Mun Bangladesh.",
};

const SellerPurchaseOrdersPage = () => {
  return (
    <>
      <React.Suspense fallback={<PacmanLoader />}>
        <SellerPurchaseOrders />
      </React.Suspense>
    </>
  );
};

export default SellerPurchaseOrdersPage;
