import React from "react";
import SellerForgotPassword from "@/components/seller/auth/SellerForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - Mun Bangladesh",
  description:
    "Forgot your password? Reset your password to regain access to your seller account on Mun Bangladesh.",
};

const SellerForgotPasswordPage = () => {
  return (
    <>
      <SellerForgotPassword />
    </>
  );
};

export default SellerForgotPasswordPage;
