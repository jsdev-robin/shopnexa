import React from "react";
import SellerActivation from "@/components/seller/auth/SellerActivation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seller Account Activation - Mun Bangladesh",
  description:
    "Activate your seller account on Mun Bangladesh to start managing your store, listing products, and connecting with customers. Complete the activation process to join the Mun Bangladesh seller community and reach a wide audience with your unique offerings.",
};

const SellerActivationPage = () => {
  return (
    <>
      <SellerActivation />
    </>
  );
};

export default SellerActivationPage;
