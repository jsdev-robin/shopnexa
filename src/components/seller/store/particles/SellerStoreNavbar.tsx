"use client";

import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SellerStoreNavbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-x-1 border-b w-full pb-2">
      <a
        href="/seller/dashboard/store"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          pathName === "/seller/dashboard/store" &&
            "relative bg-accent text-accent-foreground before:absolute before:w-full before:h-0.5 before:bg-muted-foreground before:-bottom-2"
        )}
      >
        Overview
      </a>
      <a
        href="/seller/dashboard/store/payouts"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          pathName === "/seller/dashboard/store/payouts" &&
            "relative bg-accent text-accent-foreground before:absolute before:w-full before:h-0.5 before:bg-muted-foreground before:-bottom-2"
        )}
      >
        Payouts
      </a>
    </div>
  );
};

export default SellerStoreNavbar;
