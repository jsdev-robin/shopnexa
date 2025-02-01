import React from "react";
import SellerSignup from "@/components/seller/auth/SellerSignup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seller Sign Up - Mun Bangladesh",
  description:
    "Create your seller account on Mun Bangladesh to start your journey as a vendor. Set up your store, list your handmade and unique products, and reach a wide audience today.",
};

const SellerSignupPage = () => {
  return (
    <>
      <SellerSignup />
    </>
  );
};

export default SellerSignupPage;
