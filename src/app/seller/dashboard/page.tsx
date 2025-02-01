import React from "react";
import { Metadata } from "next";
import SellerSalesReport from "@/components/seller/overview/SellerSalesReport";
import SellerOrderReport from "@/components/seller/overview/SellerOrderReport";
import SellerBenefitCards from "@/components/seller/overview/SellerBenefitCards";
import SellerReport from "@/components/seller/overview/SellerReport";

export const metadata: Metadata = {
  title: "Seller Dashboard - Mun Bangladesh",
  description:
    "Gain insights into your sales, orders, and earnings with the Seller Dashboard. Monitor performance, track reports, and optimize your business on Mun Bangladesh.",
};

const SellerDashboardOverviewPage = () => {
  return (
    <>
      <SellerSalesReport />
      <SellerOrderReport />
      <SellerBenefitCards />
      <SellerReport />
    </>
  );
};

export default SellerDashboardOverviewPage;
