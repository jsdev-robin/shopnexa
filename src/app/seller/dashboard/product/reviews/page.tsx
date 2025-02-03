import React from "react";
import { Metadata } from "next";
import SellerReviews from "@/components/seller/reviews/SellerReviews";

export const metadata: Metadata = {
  title: "Seller Reviews - Mun Bangladesh",
  description:
    "Check and manage customer reviews on your products. Improve your ratings, respond to feedback, and build trust with buyers on Mun Bangladesh.",
};

const SellerReviewsPage = () => {
  return (
    <>
      <SellerReviews />
    </>
  );
};

export default SellerReviewsPage;
