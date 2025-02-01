import Typography from "@/components/ui/typography";
import Link from "next/link";
import React from "react";

const SellerAuthFooter = () => {
  return (
    <footer className="py-10 border-t-2 border-border">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="text-xs text-primary transition-all hover:underline"
          >
            Conditions of Use
          </Link>
          <Link
            href="/"
            className="text-xs text-primary transition-all hover:underline"
          >
            Privacy Notice
          </Link>
          <Link
            href="/"
            className="text-xs text-primary transition-all hover:underline"
          >
            Help
          </Link>
        </div>
        <Typography variant="caption" className="text-center mt-2">
          © 2025 Mun, Inc.
        </Typography>
      </div>
    </footer>
  );
};

export default SellerAuthFooter;
