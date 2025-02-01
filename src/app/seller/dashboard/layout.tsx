import React from "react";
import SellerDashboardHeader from "@/components/seller/layouts/SellerDashboardHeader";
import SellerDashboardNavbar from "@/components/seller/layouts/SellerDashboardNavbar";

interface SellerDashboardLayoutProps {
  children: React.ReactNode;
}

const SellerDashboardLayout: React.FC<SellerDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <SellerDashboardHeader />
      <SellerDashboardNavbar />
      <main className="py-4 space-y-4 lg:py-6 lg:space-y-6">{children}</main>
    </>
  );
};

export default SellerDashboardLayout;
