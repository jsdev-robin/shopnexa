"use client";

import React, { useState } from "react";
import MainLogo from "@/components/common/MainLogo";
import SellerCommandSearch from "./particles/SellerCommandSearch";
import SellerHeaderProfileDropdown from "./particles/SellerHeaderProfileDropdown";
import { Button } from "@/components/ui/button";
import { Ellipsis, Search } from "lucide-react";

const SellerDashboardHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-2 border-b border-border">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-4 items-center lg:grid-cols-3">
          <div className="justify-self-start">
            <div className="flex items-center gap-x-2">
              <MainLogo />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full lg:hidden"
              >
                <Ellipsis />
              </Button>
            </div>
          </div>
          <div className="justify-self-center w-full hidden lg:block">
            <SellerCommandSearch open={open} setOpen={setOpen} />
          </div>
          <div className="justify-self-end">
            <div className="flex items-center gap-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full lg:hidden"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Search />
              </Button>
              <SellerHeaderProfileDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SellerDashboardHeader;
