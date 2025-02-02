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
import { ChevronsUpDown, Gavel, Loader } from "lucide-react";
import Typography from "@/components/ui/typography";
import Checkbox from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";

const PREDEFINED_WIDTHS = [40, 50, 60, 70, 80];

const SellerDiscountSkeleton = () => {
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
                <Loader className="animate-spin w-4 h-4" />
                <Typography
                  variant="subtitle2"
                  className="text-muted-foreground"
                >
                  Loading...
                </Typography>
              </div>
            </TableCell>
            <TableCell>
              <Skeleton className="size-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-10 rounded-full" />
            </TableCell>
            {Array.from({ length: 5 }).map((_, cellIndex) => (
              <TableCell key={cellIndex}>
                <Skeleton
                  className="h-4"
                  style={{
                    width: `${
                      PREDEFINED_WIDTHS[
                        (rowIndex + cellIndex) % PREDEFINED_WIDTHS.length
                      ]
                    }px`,
                  }}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SellerDiscountSkeleton;
