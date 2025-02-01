import React from "react";
import SellerAuthHeader from "@/components/seller/auth/particles/SellerAuthHeader";
import SellerAuthFooter from "@/components/seller/auth/particles/SellerAuthFooter";

interface SellerAuthLayoutProps {
  children: React.ReactNode;
}

const SellerAuthLayout: React.FC<SellerAuthLayoutProps> = ({ children }) => {
  return (
    <>
      <SellerAuthHeader />
      <main>{children}</main>
      <SellerAuthFooter />
    </>
  );
};

export default SellerAuthLayout;
