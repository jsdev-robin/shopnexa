import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { discountData } from "@/components/data/discount";

const SellerDiscount = () => {
  return (
    <section>
      <div className="container">
        <div className="space-y-4 lg:space-y-6">
          <Card>
            <CardHeader className="border-b p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="text-xl">Order List</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Table className="h-[70vh] poem">
                  <TableHeader className="t-sticky">
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Redemption</TableHead>
                      <TableHead>Redemption</TableHead>
                      <TableHead>Redemption</TableHead>
                      <TableHead>Redemption</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {discountData.map((item, index) => (
                      <TableRow key={index} className="*:border-r ">
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell>{item.products}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.redemption}</TableCell>
                        <TableCell>{item.redemption}</TableCell>
                        <TableCell>{item.redemption}</TableCell>
                        <TableCell>{item.redemption}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SellerDiscount;
