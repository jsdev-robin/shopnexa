import React from "react";
import SellerSignin from "@/components/seller/auth/SellerSignin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seller Sign In - Mun Bangladesh",
  description:
    "Log in to your seller account on Mun Bangladesh to manage your store, list products, and connect with customers. Start selling unique, handmade, and vintage items to a wide audience.",
};

const SellerSigninPage = () => {
  return (
    <>
      <SellerSignin />
    </>
  );
};

export default SellerSigninPage;
