"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronsUpDown, Gavel, X } from "lucide-react";
import Typography from "@/components/ui/typography";
import Checkbox from "@/components/ui/checkbox";

const SellerDiscountError = () => {
  return (
    <Table className="max-lg:scrollbar lg:poem">
      <TableHeader className="sticky-top">
        <TableRow className="*:border-overlay">
          <TableHead>
            <div className="flex items-center gap-x-2">
              <Gavel className="text-primary" />
              Manage
            </div>
          </TableHead>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>
            <div className="flex items-center gap-x-1">
              Name
              <ChevronsUpDown className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Redemption</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 30 }).map((_, rowIndex) => (
          <TableRow key={rowIndex} className="*:border-r">
            <TableCell>
              <div className="flex items-center gap-x-2">
                <X className="w-4 h-4 text-red-500" />
                <Typography variant="subtitle2" className="text-red-red">
                  Data fail to load
                </Typography>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SellerDiscountError;
