"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import Checkbox from "@/components/ui/checkbox";
import { orderData } from "@/components/data/orderData";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Search, Table2, Trash } from "lucide-react";
import PaymentMethodCell from "./particles/PaymentMethodCell";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useRowSelection from "@/hooks/useRowSelection";
import { useMounted } from "@/hooks/use-mounted";
import { Input } from "@/components/ui/input";

const SellerProductOrderList = () => {
  const mounted = useMounted();
  const {
    toggleRowSelection,
    isRowSelected,
    isAllSelected,
    handleSelectAllChange,
  } = useRowSelection({
    totalRows: orderData.length,
  });

  return (
    <section>
      <div className="container">
        <div className="grid gap-4 lg:gap-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/seller/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Card>
            <CardHeader className="border-b p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="text-xl">Order List</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <Tabs defaultValue="all">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <TabsList className="flex-wrap h-auto">
                    {["all", "Fulfilled", "Unfulfilled", "pickup"].map(
                      (item, index) => (
                        <TabsTrigger
                          key={index}
                          value={item}
                          className="capitalize"
                        >
                          {item}
                        </TabsTrigger>
                      )
                    )}
                  </TabsList>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search or type"
                      className="pl-8"
                    />
                  </div>
                </div>
                <TabsContent value="all">
                  <Table
                    className="h-[70vh] overflow-scroll scroll-smooth [&::-webkit-scrollbar]:size-3
    [&::-webkit-scrollbar-track]:bg-border
    [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-corner]:bg-border/50"
                  >
                    <TableHeader className="sticky top-0 bg-muted">
                      <TableRow className="whitespace-nowrap">
                        <TableHead>
                          <div className="flex items-center gap-x-2">
                            <Table2 className="w-4 h-4" />
                            Manage
                          </div>
                        </TableHead>
                        <TableHead>
                          <Checkbox
                            onChange={handleSelectAllChange}
                            checked={isAllSelected}
                          />
                        </TableHead>
                        <TableHead>Order</TableHead>
                        <TableHead>Purchased</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Payment method</TableHead>
                        <TableHead>Payment status</TableHead>
                        <TableHead>Quantity</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orderData.map((item, index) => (
                        <TableRow
                          key={index}
                          className={cn("whitespace-nowrap *:border", {
                            "bg-muted/50": isRowSelected(index),
                          })}
                        >
                          <TableCell>
                            <div className="flex items-center gap-x-2">
                              <Button
                                variant="destructive"
                                size="sm"
                                className="size-6"
                              >
                                <Trash className="w-4 h-4" />
                              </Button>
                              <Link
                                href={`/seller/dashboard/order/details/${
                                  item.orderId.split("#")[1]
                                }`}
                                className={cn(
                                  buttonVariants({
                                    variant: "secondary",
                                    size: "sm",
                                  }),
                                  "size-6"
                                )}
                              >
                                <Eye size={16} />
                              </Link>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Checkbox
                              role="checkbox"
                              checked={isRowSelected(index)}
                              onChange={() => toggleRowSelection(index)}
                            />
                          </TableCell>
                          <TableCell>{item.orderId}</TableCell>
                          <TableCell>{item.item}</TableCell>
                          <TableCell>
                            {item.status === "Ready for pickup" ? (
                              <Badge className="bg-green-500/20 text-green-500 p-1.5 hover:bg-green-500/20 hover:text-green-500">
                                <Clock className="w-4 h-4 mr-1.5" />
                                {item.status}
                              </Badge>
                            ) : item.status === "Unfulfilled" ? (
                              <Badge className="bg-red-500/20 text-red-500 p-1.5 hover:bg-red-500/20 hover:text-red-500">
                                <Clock className="w-4 h-4 mr-1.5" />
                                {item.status}
                              </Badge>
                            ) : (
                              <Badge
                                variant="secondary"
                                className="p-1.5 hover:bg-secondary"
                              >
                                <Clock className="w-4 h-4 mr-1.5" />
                                {item.status}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>{item.customer}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-x-2">
                              {mounted && (
                                <PaymentMethodCell paymentMethod="Credit Card" />
                              )}
                              {item.paymentMethod}
                            </div>
                          </TableCell>
                          <TableCell>
                            {item.paymentStatus === "Pending" ? (
                              <Badge className="bg-yellow-500/20 text-yellow-500 p-1.5 hover:bg-yellow-500/20 hover:text-yellow-500">
                                <Clock className="w-4 h-4 mr-1.5" />
                                {item.paymentStatus}
                              </Badge>
                            ) : (
                              <Badge
                                variant="secondary"
                                className="p-1.5 hover:bg-secondary"
                              >
                                <Clock className="w-4 h-4 mr-1.5" />
                                {item.paymentStatus}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>{item.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="Archived">ddf</TabsContent>
                <TabsContent value="Publish">dfdfd</TabsContent>
                <TabsContent value="Unpublish">dfdf</TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SellerProductOrderList;
