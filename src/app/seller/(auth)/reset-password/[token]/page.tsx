import React from "react";
import SellerResetPassword from "@/components/seller/auth/SellerResetPassword";
import { Metadata } from "next";
import { Loader } from "lucide-react";

export const metadata: Metadata = {
  title: "Reset Password - Mun Bangladesh",
  description:
    "Reset your password to regain access to your seller account on Mun Bangladesh. Quickly get back to managing your store, listing products, and connecting with customers.",
};

const SellerResetPasswordPage = async ({
  params,
}: {
  params: Promise<{ token: string }>;
}) => {
  const token = (await params).token;

  return (
    <>
      <React.Suspense
        fallback={
          <div className="min-h-svh flex justify-center items-center">
            <Loader size={150} className="animate-spin fill-muted-foreground" />
          </div>
        }
      >
        <SellerResetPassword token={token} />
      </React.Suspense>
    </>
  );
};

export default SellerResetPasswordPage;
