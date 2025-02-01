import React from "react";
import MainLogo from "@/components/common/MainLogo";

const SellerAuthHeader = () => {
  return (
    <header className="py-3 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between gap-x-4">
          <MainLogo />
        </div>
      </div>
    </header>
  );
};

export default SellerAuthHeader;
