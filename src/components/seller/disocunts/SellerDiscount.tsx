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
import { discountData } from "@/components/data/discount";
import Checkbox from "@/components/ui/checkbox";
import {
  ChevronsUpDown,
  CircleCheck,
  Download,
  Edit,
  Eye,
  FilePenLine,
  Table2,
  Trash,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useRowSelection from "@/hooks/useRowSelection";
import { cn } from "@/lib/utils";

const SellerDiscount = () => {
  const {
    // selectedRows,
    toggleRowSelection,
    isRowSelected,
    isAllSelected,
    handleSelectAllChange,
  } = useRowSelection({
    totalRows: discountData.length,
  });

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
                <Table className="poem">
                  <colgroup>
                    <col span={3} />
                    <col span={1} className="bg-muted/25" />
                  </colgroup>
                  <TableHeader className="sticky-top">
                    <TableRow>
                      <TableHead>
                        <div className="flex items-center gap-x-2">
                          <Table2 size={16} />
                          Manage
                        </div>
                      </TableHead>
                      <TableHead>
                        <Checkbox
                          onChange={handleSelectAllChange}
                          checked={isAllSelected}
                        />
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
                    {discountData.map((item, index) => (
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
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>
                          {item.status === "Draft" ? (
                            <Badge
                              variant="outline"
                              className="bg-yellow-400/25 text-yellow-500 py-1 px-1.5"
                            >
                              <FilePenLine className="w-3.5 h-3.5 mr-1" />
                              Draft
                            </Badge>
                          ) : item.status === "Active" ? (
                            <Badge
                              variant="outline"
                              className="bg-green-500/25 text-green-500 py-1 px-1.5"
                            >
                              <CircleCheck className="w-3.5 h-3.5 mr-1" />
                              Active
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-red-500/25 text-red-500 py-1 px-1.5"
                            >
                              <XCircle className="w-3.5 h-3.5 mr-1" />
                              Expired
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{item.products}</TableCell>
                        <TableCell>{item.amount}</TableCell>
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
