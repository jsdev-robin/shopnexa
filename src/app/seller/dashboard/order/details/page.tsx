import React from "react";
import { Metadata } from "next";
import SellerOrderDetails from "@/components/seller/order/SellerOrderDetails";

export const metadata: Metadata = {
  title: "Seller Order Details - Mun Bangladesh",
  description:
    "Access detailed information about your orders. View order items, payment status, and delivery updates for seamless order management with Mun Bangladesh.",
};

const SellerOrderDetailsPage = () => {
  return (
    <>
      <SellerOrderDetails />
    </>
  );
};

export default SellerOrderDetailsPage;
