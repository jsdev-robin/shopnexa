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
import { Loader, Table2 } from "lucide-react";
import Typography from "@/components/ui/typography";
import Checkbox from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";

const PREDEFINED_WIDTHS = [40, 50, 60, 70, 80];

const SellerProductListSkeleton = () => {
  return (
    <Table
      className="h-[75vh] border border-border overflow-scroll scroll-smooth [&::-webkit-scrollbar]:size-3
    [&::-webkit-scrollbar-track]:bg-border
    [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-corner]:bg-border/50"
    >
      <TableHeader>
        <TableRow className="whitespace-nowrap *:border">
          <TableHead>
            <div className="flex items-center gap-x-2">
              <Table2 size={16} />
              Manage
            </div>
          </TableHead>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>Live</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stocks</TableHead>
          <TableHead>Sales/Day</TableHead>
          <TableHead>Sales/Month</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Available In</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <TableRow key={rowIndex} className="whitespace-nowrap *:border">
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
            {Array.from({ length: 10 }).map((_, cellIndex) => (
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

export default SellerProductListSkeleton;
