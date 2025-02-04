"use client";

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
import Checkbox from "@/components/ui/checkbox";
import {
  Circle,
  Clock,
  Clock1,
  Download,
  Edit,
  Eye,
  Gavel,
  Search,
  Trash,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useRowSelection from "@/hooks/useRowSelection";
import { cn } from "@/lib/utils";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { orderData } from "@/components/data/orderData";
import { useMounted } from "@/hooks/use-mounted";
import PaymentMethodCell from "./particles/PaymentMethodCell";
import TableEmptyState from "@/components/ui/table-empty-state";

const SellerProductOrderList = () => {
  const mounted = useMounted();
  const {
    // selectedRows,
    toggleRowSelection,
    isRowSelected,
    isAllSelected,
    handleSelectAllChange,
    // selectedRowsCount,
  } = useRowSelection({
    totalRows: orderData.length,
  });
  return (
    <section>
      <div className="container">
        <div className="space-y-4 lg:space-y-6">
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
            <CardContent className="p-4">
              <Tabs defaultValue="all" className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <TabsList className="flex-wrap h-auto">
                    {["all", "Archived", "Publish", "Unpublish"].map(
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
                  <div className="space-y-4">
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
                            className={cn("*:border-r", {
                              "bg-muted/50": isRowSelected(index),
                            })}
                          >
                            <TableCell>
                              <div className="flex items-center gap-x-2">
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  className="size-6"
                                >
                                  <Trash size={16} />
                                </Button>
                                <Button
                                  variant="secondary"
                                  size="icon"
                                  className="size-6"
                                >
                                  <Edit size={16} />
                                </Button>
                                <Button
                                  variant="secondary"
                                  size="icon"
                                  className="size-6"
                                >
                                  <Eye size={16} />
                                </Button>
                                <Button
                                  variant="secondary"
                                  size="icon"
                                  className="size-6"
                                >
                                  <Download size={16} />
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Checkbox
                                checked={isRowSelected(index)}
                                onChange={() => toggleRowSelection(index)}
                              />
                            </TableCell>
                            <TableCell>{item.orderId}</TableCell>
                            <TableCell>{item.item}</TableCell>
                            <TableCell>
                              {item.status === "Ready for pickup" ? (
                                <Badge
                                  variant="outline"
                                  className="bg-green-400/25 text-green-500 py-1 px-1.5"
                                >
                                  <Clock className="w-3.5 h-3.5 mr-1" />
                                  {item.status}
                                </Badge>
                              ) : item.status === "Unfulfilled" ? (
                                <Badge
                                  variant="secondary"
                                  className="py-1 px-1.5"
                                >
                                  <Clock1 className="w-3.5 h-3.5 mr-1" />
                                  {item.status}
                                </Badge>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="bg-red-500/25 text-red-500 py-1 px-1.5"
                                >
                                  <XCircle className="w-3.5 h-3.5 mr-1" />
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
                                <Badge
                                  variant="outline"
                                  className="bg-yellow-400/25 text-yellow-500 py-1 px-1.5"
                                >
                                  <Circle className="w-2 h-2 fill-foreground stroke-foreground mr-1" />
                                  {item.paymentStatus}
                                </Badge>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="py-1 px-1.5"
                                >
                                  <Circle className="w-2 h-2 fill-foreground stroke-foreground mr-1" />
                                  {item.paymentStatus}
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                <TabsContent value="Archived">
                  <TableEmptyState />
                </TabsContent>
                <TabsContent value="Publish">
                  <TableEmptyState />
                </TabsContent>
                <TabsContent value="Unpublish">
                  <TableEmptyState />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SellerProductOrderList;
